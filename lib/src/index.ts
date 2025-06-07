import { Player } from "../player.model";
import { simulateMatch } from "../utils/matchSimulator";
import { allPlayers } from "../../players/index"; // hypothèse : tu importes tous les joueurs dans un array

// Regrouper les joueurs par clubId
function groupPlayersByClub(players: Player[]) {
  return players.reduce<Record<number, Player[]>>((acc, player) => {
    if (!acc[player.clubId]) acc[player.clubId] = [];
    acc[player.clubId].push(player);
    return acc;
  }, {});
}

async function runSimulation() {
  const playersByClub = groupPlayersByClub(allPlayers);

  const barcaPlayers = playersByClub[20] || [];
  const psgPlayers = playersByClub[10] || [];

  // Simule le match Barça vs PSG
  const result = simulateMatch(barcaPlayers, psgPlayers);

  console.log(`Résultat : Barça ${result.homeGoals} - ${result.awayGoals} PSG`);
  console.log("Stats Barça :", result.homeStats);
  console.log("Stats PSG :", result.awayStats);
}

runSimulation();
