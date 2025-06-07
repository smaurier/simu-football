import { Player } from "../player.model";

const pedri: Player = {
  id: "player-027",
  name: "Pedri",
  age: 22,
  nationality: "Spain",
  position: ["MC", "AMC"], // Milieu central et offensif
  preferredFoot: "right",
  height: 174,
  weight: 60,
  avatarUrl: "https://example.com/avatars/pedri.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 14,
    pace: 13,
    stamina: 16,
    strength: 9,
    balance: 17,
    agility: 16,
    jumping: 8,
    fitness: 14,
  },

  technical: {
    finishing: 11,
    passing: 18,
    tackling: 11,
    dribbling: 17,
    firstTouch: 18,
    longShots: 12,
    heading: 7,
    technique: 18,
    ballControl: 18,
    vision: 18,
    positioning: 15,
    crossing: 10,
    setPieces: 12,
    penalties: 10,
  },

  mental: {
    composure: 17,
    anticipation: 16,
    decisions: 18,
    determination: 15,
    flair: 14,
    leadership: 10,
    aggression: 9,
    concentration: 17,
    teamwork: 18,
    workRate: 17,
    offTheBall: 15,
    bravery: 12,
  },

  personality: {
    ego: 25,
    rageTrigger: 10,
    morale: 82,
    momentumBoost: 70,
    loyalty: 85,
    professionalism: 88,
    consistency: 90,
    adaptability: 75,
    fanFavorite: 80,
    coachAffinity: 90,
  },

  potential: 185,
  currentAbility: 165,
  isInjured: false,
  contract: {
    salary: 850000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 1000000000, // clause élevée type Barça
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 28,
      goals: 5,
      assists: 8,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.4,
    },
  ],

  backgroundStory:
    "Joueur prodige formé à Las Palmas, Pedri est devenu en quelques saisons le cœur du jeu du Barça et un cadre de la Roja, malgré son jeune âge. Sa vision du jeu et sa maturité impressionnent.",
  personalityTraits: ["metronome", "low-ego"],

  fatigue: 15,
  form: 84,
  morale: 85,
  trainingPerformance: 88,

  coachFeedback:
    "Milieu créatif exceptionnel, fiable dans toutes les phases de jeu. À protéger des blessures à répétition.",
  coachTrustLevel: 92,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default pedri;
