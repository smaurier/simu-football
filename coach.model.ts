type Coach = {
  id: string;
  name: string;
  age: number;
  nationality: string;
  avatarUrl?: string;

  // Compétences clés (/20)
  skills: {
    tacticalKnowledge: number;
    trainingIntensity: number;
    playerDevelopment: number;
    matchPreparation: number;
    gameManagement: number;
    scouting: number;
    mentalBoost: number; // capacité à remotiver une équipe
    injuryPrevention: number;
  };

  // Mental & comportement (/100)
  personality: {
    ambition: number;
    discipline: number;
    charisma: number;
    communication: number;
    emotionalControl: number;
    creativity: number;
    adaptability: number;
    conflictManagement: number;
    workEthic: number;
    trustworthiness: number;
  };

  // Philosophie de jeu
  philosophy: {
    formationPreference: string; // e.g. "4-2-3-1", "3-5-2"
    styleOfPlay:
      | "possession"
      | "counterAttack"
      | "pressing"
      | "defensive"
      | "directPlay";
    youthFocus: number; // 0–100 (focalisation sur la promotion de jeunes)
    starSystem: number; // 0–100 (tolérance pour gérer les egos stars)
    rotationPolicy: number; // 0–100 (plus c’est élevé, plus il fait tourner)
  };

  // Carrière et réputation
  career: {
    experiencePoints: number;
    level: number; // ex: 1 à 20
    currentClub: string;
    currentDivision: string;
    previousClubs: {
      name: string;
      from: string; // ISO date
      to: string;
      trophiesWon: number;
    }[];
    trophies: string[];
    reputation: number; // 0–100
    fanPopularity: number; // 0–100
    mediaHandling: number; // 0–100
  };

  // Relation avec l’équipe
  relationships: {
    squadMoraleImpact: number; // bonus/malus global selon humeur du coach
    favoritePlayers: string[]; // IDs
    dislikedPlayers: string[]; // IDs
    tacticalAffinityWith: Record<string, number>; // playerId -> 0–100
  };

  // Stress & progression
  condition: {
    burnoutRisk: number; // 0–100
    motivation: number; // 0–100
    recentForm: number; // sur les 5 derniers matchs
    boardTrust: number; // 0–100
  };

  // Formations, licences, progression
  development: {
    coachingLicense: "None" | "UEFA C" | "UEFA B" | "UEFA A" | "UEFA Pro";
    coursesInProgress: string[];
    unlockedTraits: string[]; // e.g. "Tactician", "Iron Leader"
  };

  // Événements narratifs possibles
  storyFlags: {
    pressConflict: boolean;
    majorVictorySpeech: boolean;
    lockerRoomCrisis: boolean;
    fansChantingHisName: boolean;
    disciplinaryIncident: boolean;
  };
};
