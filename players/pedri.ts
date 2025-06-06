import { Player } from "../player.model";

const pedri: Player = {
  id: "player-012",
  name: "Pedri",
  age: 21,
  nationality: "Spain",
  position: ["CM", "CAM"],
  preferredFoot: "right",
  height: 174,
  weight: 60,
  avatarUrl: "https://example.com/avatars/pedri.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 14,
    pace: 13,
    stamina: 13,
    strength: 9,
    balance: 17,
    agility: 16,
    jumping: 9,
    fitness: 11,
  },

  technical: {
    finishing: 12,
    passing: 17,
    tackling: 11,
    dribbling: 17,
    firstTouch: 18,
    longShots: 12,
    heading: 8,
    technique: 18,
    ballControl: 18,
    vision: 17,
    positioning: 15,
    crossing: 12,
    setPieces: 11,
    penalties: 10,
  },

  mental: {
    composure: 16,
    anticipation: 15,
    decisions: 17,
    determination: 14,
    flair: 15,
    leadership: 11,
    aggression: 9,
    concentration: 16,
    teamwork: 17,
    workRate: 15,
    offTheBall: 14,
    bravery: 12,
  },

  personality: {
    ego: 30,
    rageTrigger: 5,
    morale: 78,
    momentumBoost: 82,
    loyalty: 85,
    professionalism: 88,
    consistency: 84,
    adaptability: 86,
    fanFavorite: 75,
    coachAffinity: 80,
  },

  potential: 185,
  currentAbility: 160,
  isInjured: false,
  contract: {
    salary: 300000,
    endDate: "2026-06-30",
    releaseClause: 1000000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 26,
      goals: 4,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.4,
    },
  ],

  backgroundStory:
    "Phénomène de précocité, Pedri est devenu un pilier du Barça et de la Roja dès ses 18 ans. Réputé pour son intelligence de jeu hors normes.",
  personalityTraits: ["discret", "perfectionniste", "très intuitif"],

  fatigue: 40,
  form: 78,
  morale: 78,
  trainingPerformance: 82,

  coachFeedback:
    "Quand il joue, le Barça respire mieux. Il sent les espaces, il fluidifie tout. Mais il faut le préserver.",
  coachTrustLevel: 84,
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
