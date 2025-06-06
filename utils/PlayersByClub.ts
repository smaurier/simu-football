import type { Player } from "../player.model";

type PlayersByClub = Record<number, Player[]>;

function groupPlayersByClub(players: Player[]): PlayersByClub {
  return players.reduce((acc, player) => {
    if (!acc[player.clubId]) {
      acc[player.clubId] = [];
    }
    acc[player.clubId].push(player);
    return acc;
  }, {} as PlayersByClub);
}
