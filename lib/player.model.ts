export type Player = {
  // Identité
  id: string;
  name: string;
  age: number;
  nationality: string;
  position: string[]; // ex: "ST", "MC", "GK"
  preferredFoot: "left" | "right" | "both";
  height: number; // en cm
  weight: number; // en kg
  avatarUrl?: string;
  clubId: number; // PSG 10 / Barca 20

  // Caractéristiques physiques (/20)
  physical: {
    acceleration: number;
    pace: number;
    stamina: number;
    strength: number;
    balance: number;
    agility: number;
    jumping: number;
    fitness: number; // condition naturelle
  };

  // Caractéristiques techniques (/20)
  technical: {
    finishing: number;
    passing: number;
    tackling: number;
    dribbling: number;
    firstTouch: number;
    longShots: number;
    heading: number;
    technique: number;
    ballControl: number;
    vision: number;
    positioning: number;
    crossing: number;
    setPieces: number;
    penalties: number;
  };

  // Caractéristiques mentales (/20)
  mental: {
    composure: number;
    anticipation: number;
    decisions: number;
    determination: number;
    flair: number;
    leadership: number;
    aggression: number;
    concentration: number;
    teamwork: number;
    workRate: number;
    offTheBall: number;
    bravery: number;
  };

  // Variables émotionnelles / dynamiques
  personality: {
    ego: number; // 0–100
    rageTrigger: number; // 0–100
    morale: number; // 0–100
    momentumBoost: number; // 0–100
    loyalty: number; // 0–100
    professionalism: number; // 0–100
    consistency: number; // 0–100
    adaptability: number; // 0–100
    fanFavorite: number; // 0–100
    coachAffinity: number; // 0–100
  };

  // Métadonnées
  potential: number; // 0–200 (PA)
  currentAbility: number; // 0–200 (CA)
  isInjured: boolean;
  injuryDetails?: {
    type: string;
    remainingWeeks: number;
  };
  contract: {
    salary: number; // en € / mois
    endDate: string; // ISO date
    releaseClause?: number;
  };

  // Historique de performance
  seasonStats: {
    year: number;
    team: string;
    appearances: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    avgRating: number;
  }[];

  // Storyline
  backgroundStory?: string;
  personalityTraits?: string[]; // ex: ['superstitious', 'big-game player', 'loner']

  // État dynamique
  fatigue: number; // 0–100
  form: number; // 0–100
  morale: number; // 0–100
  trainingPerformance: number; // 0–100

  // Lien avec le coach
  coachFeedback?: string;
  coachTrustLevel: number; // 0–100
  wantsToLeave: boolean;

  // Événements déclencheurs
  dynamicFlags: {
    inContractDispute: boolean;
    homesick: boolean;
    wantsMorePlayTime: boolean;
    feelsUnloved: boolean;
    fanCriticized: boolean;
  };
};
