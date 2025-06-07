import { Player } from "../player.model";

const lewandowski: Player = {
  id: "player-021",
  name: "Robert Lewandowski",
  age: 36,
  nationality: "Poland",
  position: ["AC"], // Avant-centre pur
  preferredFoot: "right",
  height: 185,
  weight: 80,
  avatarUrl: "https://example.com/avatars/lewandowski.jpg",
  clubId: 11, // FC Barcelone

  physical: {
    acceleration: 13,
    pace: 12,
    stamina: 14,
    strength: 16,
    balance: 15,
    agility: 12,
    jumping: 15,
    fitness: 14,
  },

  technical: {
    finishing: 18,
    passing: 14,
    tackling: 7,
    dribbling: 14,
    firstTouch: 16,
    longShots: 13,
    heading: 17,
    technique: 15,
    ballControl: 15,
    vision: 13,
    positioning: 18,
    crossing: 10,
    setPieces: 11,
    penalties: 18,
  },

  mental: {
    composure: 17,
    anticipation: 16,
    decisions: 15,
    determination: 17,
    flair: 12,
    leadership: 15,
    aggression: 13,
    concentration: 16,
    teamwork: 14,
    workRate: 13,
    offTheBall: 18,
    bravery: 15,
  },

  personality: {
    ego: 60,
    rageTrigger: 15,
    morale: 82,
    momentumBoost: 68,
    loyalty: 70,
    professionalism: 90,
    consistency: 85,
    adaptability: 65,
    fanFavorite: 85,
    coachAffinity: 85,
  },

  potential: 185,
  currentAbility: 165,
  isInjured: false,
  contract: {
    salary: 1500000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 200000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelone",
      appearances: 32,
      goals: 19,
      assists: 4,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.4,
    },
  ],

  backgroundStory:
    "Légende du Bayern Munich et de la sélection polonaise, Lewandowski rejoint le Barça pour relever un dernier défi. Son sens du but reste exceptionnel malgré l’âge.",
  personalityTraits: ["goal machine", "veteran leader"],

  fatigue: 18,
  form: 76,
  morale: 82,
  trainingPerformance: 88,

  coachFeedback:
    "Impeccable dans le rôle de buteur, meneur d’attaque modèle pour les jeunes.",
  coachTrustLevel: 90,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default lewandowski;
