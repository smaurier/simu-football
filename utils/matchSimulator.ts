import type { Player } from "../player.model";

// Type du résultat de match
export type MatchResult = {
  homeGoals: number;
  awayGoals: number;
  homeStats: {
    possession: number; // en %
    shots: number;
    shotsOnTarget: number;
  };
  awayStats: {
    possession: number;
    shots: number;
    shotsOnTarget: number;
  };
};

// Calcul simple de la force d'une équipe sur la base des joueurs
export function calculateTeamStrength(players: Player[]): number {
  const n = players.length;
  if (n === 0) return 0;

  const totalScore = players.reduce((sum, p) => {
    const technicalAvg =
      (p.technical.finishing +
        p.technical.passing +
        p.technical.dribbling +
        p.technical.technique) /
      4;
    const physicalAvg =
      (p.physical.pace + p.physical.stamina + p.physical.strength) / 3;
    const mentalAvg =
      (p.mental.composure + p.mental.decisions + p.mental.determination) / 3;

    return sum + (technicalAvg * 0.5 + physicalAvg * 0.3 + mentalAvg * 0.2);
  }, 0);

  return totalScore / n;
}

// Simule un match entre deux équipes, retourne le résultat simple + stats
export function simulateMatch(
  homePlayers: Player[],
  awayPlayers: Player[]
): MatchResult {
  const homeStrength = calculateTeamStrength(homePlayers);
  const awayStrength = calculateTeamStrength(awayPlayers);

  const totalStrength = homeStrength + awayStrength;
  const homePossession = (homeStrength / totalStrength) * 100;

  const baseShots = 10;
  const homeShots = Math.round(
    baseShots * (homeStrength / totalStrength) * 1.2
  );
  const awayShots = Math.round(
    baseShots * (awayStrength / totalStrength) * 1.2
  );

  const homeShotsOnTarget = Math.round(homeShots * 0.6);
  const awayShotsOnTarget = Math.round(awayShots * 0.6);

  const homeGoals = Math.min(
    homeShotsOnTarget,
    Math.floor(Math.random() * (homeShotsOnTarget + 1))
  );
  const awayGoals = Math.min(
    awayShotsOnTarget,
    Math.floor(Math.random() * (awayShotsOnTarget + 1))
  );

  return {
    homeGoals,
    awayGoals,
    homeStats: {
      possession: Math.round(homePossession),
      shots: homeShots,
      shotsOnTarget: homeShotsOnTarget,
    },
    awayStats: {
      possession: 100 - Math.round(homePossession),
      shots: awayShots,
      shotsOnTarget: awayShotsOnTarget,
    },
  };
}
