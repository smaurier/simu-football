export type Club = {
  id: string;
  name: string;
  nickname?: string;
  city: string;
  country: string;
  foundedYear: number;
  colors: {
    primary: string;
    secondary?: string;
  };
  logoUrl?: string;
  stadium: {
    name: string;
    capacity: number;
    averageAttendance: number;
    pitchQuality: number; // 0–100
  };

  // Identité sportive
  identity: {
    reputation: number; // 0–100 (influence la capacité à recruter / se faire respecter)
    youthRating: number; // 0–100 (influence la qualité des regens)
    financialPower: number; // 0–100
    infrastructureLevel: number; // 0–100
    clubCulture: string[]; // ex: ["Promote Youngsters", "Attacking Play"]
    rivalries: string[]; // clubIds
  };

  // Équipe & encadrement
  squad: string[]; // playerIds
  coachId: string;
  assistantCoachId?: string;
  staff: {
    medicalTeam: number; // 0–100
    scoutingNetwork: number; // 0–100
    fitnessStaff: number; // 0–100
    moraleStaff: number; // 0–100
  };

  // Situation en championnat
  competition: {
    league: string;
    division: number; // ex: 1 = ligue 1
    currentPosition: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    recentForm: string[]; // e.g. ['W', 'D', 'L', 'W']
    isInEuropeanCompetition: boolean;
  };

  // Économie & gestion
  finances: {
    balance: number;
    weeklyWageBudget: number;
    weeklyWageUsed: number;
    incomePerWeek: number;
    sponsors: {
      name: string;
      amount: number;
    }[];
    ticketPrice: number;
    merchandising: number;
  };

  // Influence sociale
  popularity: {
    fanBaseSize: number; // nombre absolu
    fanLoyalty: number; // 0–100
    boardExpectations: string; // e.g. "Top 5", "Promote Youth", "Avoid Relegation"
    boardTrust: number; // 0–100
    mediaReputation: number; // 0–100
  };

  // Narratif & événements
  storyFlags: {
    financialTrouble?: boolean;
    takeoverRumor?: boolean;
    fanProtest?: boolean;
    historicWin?: boolean;
    academyGoldenGeneration?: boolean;
  };
};
