"use client";

import { useRef, useState } from "react";
import { Player } from "@/lib/player.model";
import { allPlayers } from "@/lib/players";
import { TACTICS, TacticName, Slot } from "@/lib/tactics/tactics";

// 7 slots remplaçants à droite
const BENCH_SLOTS = Array.from({ length: 7 }, (_, i) => ({
  id: `BENCH${i + 1}`,
  label: `Remp. ${i + 1}`,
  x: 102,
  y: 10 + i * 12,
}));

export default function LineupFM() {
  const [tactic, setTactic] = useState<TacticName>("4-3-3");
  const [mainSlots, setMainSlots] = useState<Slot[]>(
    TACTICS["4-3-3"].map((s) => ({ ...s }))
  );
  const [benchSlots, setBenchSlots] = useState<Slot[]>(
    BENCH_SLOTS.map((s) => ({ ...s }))
  );
  const [available, setAvailable] = useState<Player[]>(
    allPlayers.filter((p) => p.clubId === 10)
  );
  const [dragging, setDragging] = useState<null | {
    player: Player;
    from: "available" | "main" | "bench";
    slotId?: string;
  }>(null);

  // === Édition des slots (postes)
  const [editMode, setEditMode] = useState(false);
  const [draggingSlot, setDraggingSlot] = useState<null | {
    type: "main" | "bench";
    idx: number;
    offsetX: number;
    offsetY: number;
  }>(null);

  const fieldRef = useRef<HTMLDivElement>(null);

  // === HANDLERS ===
  function handleChangeTactic(name: TacticName) {
    setTactic(name);
    // On réassigne les slots (en gardant les joueurs si possible)
    setMainSlots((oldSlots) => {
      const oldByLabel = Object.fromEntries(
        oldSlots.map((s) => [s.label, s.player])
      );
      return TACTICS[name].map((s) => ({
        ...s,
        player: oldByLabel[s.label],
      }));
    });
  }

  function onDragStart(player: Player, from: "available" | "main" | "bench", slotId?: string) {
    setDragging({ player, from, slotId });
  }

  function onDropOnMainSlot(slotIdx: number) {
    if (!dragging) return;
    setMainSlots((prev) =>
      prev.map((slot, i) =>
        i === slotIdx
          ? { ...slot, player: dragging.player }
          : slot.player?.id === dragging.player.id
            ? { ...slot, player: undefined }
            : slot
      )
    );
    setBenchSlots((prev) =>
      prev.map((slot) =>
        slot.player?.id === dragging.player.id ? { ...slot, player: undefined } : slot
      )
    );
    setAvailable((prev) => prev.filter((p) => p.id !== dragging.player.id));
    setDragging(null);
  }

  function onDropOnBenchSlot(benchIdx: number) {
    if (!dragging) return;
    setBenchSlots((prev) =>
      prev.map((slot, i) =>
        i === benchIdx
          ? { ...slot, player: dragging.player }
          : slot.player?.id === dragging.player.id
            ? { ...slot, player: undefined }
            : slot
      )
    );
    setMainSlots((prev) =>
      prev.map((slot) =>
        slot.player?.id === dragging.player.id ? { ...slot, player: undefined } : slot
      )
    );
    setAvailable((prev) => prev.filter((p) => p.id !== dragging.player.id));
    setDragging(null);
  }

  function onDropInAvailable() {
    if (!dragging) return;
    setAvailable((prev) =>
      prev.some((p) => p.id === dragging.player.id) ? prev : [...prev, dragging.player]
    );
    setMainSlots((prev) =>
      prev.map((slot) =>
        slot.player?.id === dragging.player.id ? { ...slot, player: undefined } : slot
      )
    );
    setBenchSlots((prev) =>
      prev.map((slot) =>
        slot.player?.id === dragging.player.id ? { ...slot, player: undefined } : slot
      )
    );
    setDragging(null);
  }

  // === DRAG & DROP DES SLOTS (mode édition tactique) ===
  function onSlotMouseDown(
    type: "main" | "bench",
    idx: number,
    e: React.MouseEvent
  ) {
    if (!editMode) return;
    const slotList = type === "main" ? mainSlots : benchSlots;
    const slot = slotList[idx];
    const field = fieldRef.current;
    if (!field) return;
    const rect = field.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    setDraggingSlot({
      type,
      idx,
      offsetX: mouseX - slot.x,
      offsetY: mouseY - slot.y,
    });
  }

  function onFieldMouseMove(e: React.MouseEvent) {
    if (!draggingSlot) return;
    const field = fieldRef.current;
    if (!field) return;
    const rect = field.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100 - draggingSlot.offsetX;
    let y = ((e.clientY - rect.top) / rect.height) * 100 - draggingSlot.offsetY;
    // Clamp
    x = Math.max(0, Math.min(x, 100));
    y = Math.max(0, Math.min(y, 100));
    if (draggingSlot.type === "main") {
      setMainSlots((prev) =>
        prev.map((slot, i) =>
          i === draggingSlot.idx ? { ...slot, x, y } : slot
        )
      );
    } else {
      setBenchSlots((prev) =>
        prev.map((slot, i) =>
          i === draggingSlot.idx ? { ...slot, x, y } : slot
        )
      );
    }
  }

  function onFieldMouseUp() {
    if (draggingSlot) setDraggingSlot(null);
  }

  // Liste des joueurs affectés (pour éviter la duplication)
  const assignedIds = [
    ...mainSlots,
    ...benchSlots,
  ]
    .map((s) => s.player?.id)
    .filter(Boolean);

  // === FATIGUE COLORS ===
  function fatigueColor(val: number) {
    if (val >= 75) return "#43a047"; // green
    if (val >= 40) return "#fbc02d"; // yellow
    return "#e53935"; // red
  }

  // === RENDER ===

  return (
    <div style={{ display: "flex", gap: 32, padding: 20, minHeight: "100vh" }}>
      {/* JOUEURS DISPONIBLES */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDropInAvailable}
        style={{ minWidth: 170 }}
      >
        <h3>Joueurs PSG</h3>
        {available
          .filter((p) => !assignedIds.includes(p.id))
          .map((player) => (
            <div
              key={player.id}
              draggable
              onDragStart={() => onDragStart(player, "available")}
              style={{
                border: "1px solid #ccc",
                background: "#fff",
                padding: 8,
                marginBottom: 8,
                cursor: "grab",
                width: 160,
                borderRadius: 6,
                opacity:
                  dragging && dragging.player.id === player.id ? 0.4 : 1,
                transition: "opacity 0.2s",
              }}
            >
              <strong>{player.name}</strong>
              <div style={{ fontSize: "0.75rem", color: "#666" }}>
                AC: {player.technical.finishing} | VIT: {player.physical.pace} | MTL: {player.mental.composure}
              </div>
              <div style={{ marginTop: 4 }}>
                <span>Fatigue&nbsp;</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 44,
                    height: 8,
                    background: "#eee",
                    borderRadius: 4,
                    verticalAlign: "middle",
                    marginRight: 5,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      height: 8,
                      width: `${player.fatigue ?? 0}%`,
                      background: fatigueColor(player.fatigue ?? 0),
                      borderRadius: 4,
                    }}
                  />
                </span>
                <span
                  style={{
                    color: fatigueColor(player.fatigue ?? 0),
                    fontWeight: 600,
                  }}
                >
                  {player.fatigue ?? 0}%
                </span>
              </div>
            </div>
          ))}
      </div>
      {/* TERRAIN + SELECTEUR */}
      <div>
        {/* Selecteur de tactique + Mode édition */}
        <div style={{ marginBottom: 20, display: "flex", gap: 32 }}>
          <label>
            <strong>Tactique&nbsp;:</strong>&nbsp;
            <select
              value={tactic}
              onChange={e => handleChangeTactic(e.target.value as TacticName)}
            >
              {Object.keys(TACTICS).map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              checked={editMode}
              onChange={(e) => setEditMode(e.target.checked)}
              style={{ marginRight: 6 }}
            />
            <strong>Éditer la tactique</strong>
          </label>
        </div>
        {/* Terrain */}
        <div
          ref={fieldRef}
          style={{
            width: 600,
            height: 800,
            background: "#4caf50",
            position: "relative",
            border: "3px solid #222",
            borderRadius: 12,
            userSelect: "none",
            overflow: "visible",
          }}
          onMouseMove={onFieldMouseMove}
          onMouseUp={onFieldMouseUp}
        >
          {/* Slots principaux */}
          {mainSlots.map((slot, idx) => (
            <div
              key={slot.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDropOnMainSlot(idx)}
              onMouseDown={(e) => onSlotMouseDown("main", idx, e)}
              style={{
                position: "absolute",
                left: `calc(${slot.x}% - 40px)`,
                top: `calc(${slot.y}% - 40px)`,
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: slot.player
                  ? "2px solid #1976d2"
                  : "2px dashed #1976d2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: slot.player
                  ? "#fff"
                  : dragging
                    ? "#e3f2fd"
                    : "rgba(255,255,255,0.2)",
                fontWeight: "bold",
                fontSize: "0.8rem",
                color: "#222",
                boxShadow: slot.player ? "0 2px 8px #0002" : undefined,
                cursor: editMode
                  ? "move"
                  : dragging
                    ? "copy"
                    : "pointer",
                zIndex: editMode ? 999 : 2,
                transition: "background 0.2s, box-shadow 0.2s, z-index 0s",
                textAlign: "center",
                borderWidth: draggingSlot?.type === "main" && draggingSlot?.idx === idx ? 4 : undefined,
                borderColor: draggingSlot?.type === "main" && draggingSlot?.idx === idx ? "#ffa726" : undefined,
              }}
            >
              {slot.player ? (
                <div
                  draggable={!editMode}
                  onDragStart={() => !editMode && onDragStart(slot.player!, "main", slot.id)}
                  style={{
                    opacity:
                      dragging &&
                        dragging.player.id === slot.player.id &&
                        dragging.from === "main" &&
                        dragging.slotId === slot.id
                        ? 0.4
                        : 1,
                    cursor: editMode ? "default" : "grab",
                    width: "100%",
                  }}
                >
                  <div>
                    <strong>{slot.player.name}</strong>
                  </div>
                  <div style={{ fontSize: "0.7em" }}>#{slot.player.id}</div>
                  <div style={{ fontSize: "0.7em", color: "#1976d2" }}>{slot.label}</div>
                  <div style={{ marginTop: 4 }}>
                    <span>Fatigue&nbsp;</span>
                    <span
                      style={{
                        display: "inline-block",
                        width: 44,
                        height: 8,
                        background: "#eee",
                        borderRadius: 4,
                        verticalAlign: "middle",
                        marginRight: 5,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          height: 8,
                          width: `${slot.player.fatigue ?? 0}%`,
                          background: fatigueColor(slot.player.fatigue ?? 0),
                          borderRadius: 4,
                        }}
                      />
                    </span>
                    <span
                      style={{
                        color: fatigueColor(slot.player.fatigue ?? 0),
                        fontWeight: 600,
                      }}
                    >
                      {slot.player.fatigue ?? 0}%
                    </span>
                  </div>
                </div>
              ) : (
                <span style={{ color: "#1976d2", opacity: 0.7 }}>
                  {slot.label}
                </span>
              )}
            </div>
          ))}
          {/* Grille FM */}
          {[1, 2].map((i) => (
            <div
              key={"h" + i}
              style={{
                position: "absolute",
                left: 0,
                top: `${(i * 100) / 3}%`,
                width: "100%",
                height: 1,
                background: "#fff7",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          ))}
          {[1, 2].map((i) => (
            <div
              key={"v" + i}
              style={{
                position: "absolute",
                top: 0,
                left: `${(i * 100) / 3}%`,
                width: 1,
                height: "100%",
                background: "#fff7",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          ))}
          {/* Slots remplaçants à droite */}
          {benchSlots.map((slot, idx) => (
            <div
              key={slot.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDropOnBenchSlot(idx)}
              onMouseDown={(e) => onSlotMouseDown("bench", idx, e)}
              style={{
                position: "absolute",
                left: `calc(${slot.x}% - 40px)`,
                top: `calc(${slot.y}% - 40px)`,
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: slot.player
                  ? "2px solid #FF9800"
                  : "2px dashed #FF9800",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: slot.player
                  ? "#fff8e1"
                  : dragging
                    ? "#ffe0b2"
                    : "rgba(255,255,255,0.12)",
                fontWeight: "bold",
                fontSize: "0.75rem",
                color: "#B26A00",
                boxShadow: slot.player ? "0 2px 8px #0002" : undefined,
                cursor: editMode
                  ? "move"
                  : dragging
                    ? "copy"
                    : "pointer",
                zIndex: editMode ? 999 : 2,
                transition: "background 0.2s, box-shadow 0.2s, z-index 0s",
                textAlign: "center",
                borderWidth: draggingSlot?.type === "bench" && draggingSlot?.idx === idx ? 4 : undefined,
                borderColor: draggingSlot?.type === "bench" && draggingSlot?.idx === idx ? "#ffa726" : undefined,
              }}
            >
              {slot.player ? (
                <div
                  draggable={!editMode}
                  onDragStart={() => !editMode && onDragStart(slot.player!, "bench", slot.id)}
                  style={{
                    opacity:
                      dragging &&
                        dragging.player.id === slot.player.id &&
                        dragging.from === "bench" &&
                        dragging.slotId === slot.id
                        ? 0.4
                        : 1,
                    cursor: editMode ? "default" : "grab",
                    width: "100%",
                  }}
                >
                  <div>
                    <strong>{slot.player.name}</strong>
                  </div>
                  <div style={{ fontSize: "0.7em" }}>#{slot.player.id}</div>
                  <div style={{ fontSize: "0.7em", color: "#B26A00" }}>{slot.label}</div>
                  <div style={{ marginTop: 4 }}>
                    <span>Fatigue&nbsp;</span>
                    <span
                      style={{
                        display: "inline-block",
                        width: 44,
                        height: 8,
                        background: "#eee",
                        borderRadius: 4,
                        verticalAlign: "middle",
                        marginRight: 5,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          height: 8,
                          width: `${slot.player.fatigue ?? 0}%`,
                          background: fatigueColor(slot.player.fatigue ?? 0),
                          borderRadius: 4,
                        }}
                      />
                    </span>
                    <span
                      style={{
                        color: fatigueColor(slot.player.fatigue ?? 0),
                        fontWeight: 600,
                      }}
                    >
                      {slot.player.fatigue ?? 0}%
                    </span>
                  </div>
                </div>
              ) : (
                <span style={{ color: "#B26A00", opacity: 0.7 }}>
                  {slot.label}
                </span>
              )}
            </div>
          ))}
          {/* Drag & Drop des slots (édition) */}
          {editMode && draggingSlot && (
            <div
              style={{
                position: "absolute",
                left: `calc(${draggingSlot.type === "main"
                  ? mainSlots[draggingSlot.idx].x
                  : benchSlots[draggingSlot.idx].x
                  }% - 40px)`,
                top: `calc(${draggingSlot.type === "main"
                  ? mainSlots[draggingSlot.idx].y
                  : benchSlots[draggingSlot.idx].y
                  }% - 40px)`,
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: "3px solid #ffa726",
                background: "#ffe082aa",
                pointerEvents: "none",
                zIndex: 1000,
                boxShadow: "0 4px 18px #0002",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffa726",
                fontSize: "1.1em",
                fontWeight: "bold",
                textAlign: "center",
                transition: "left 0.05s, top 0.05s",
              }}
            >
              {draggingSlot.type === "main"
                ? mainSlots[draggingSlot.idx].label
                : benchSlots[draggingSlot.idx].label}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
