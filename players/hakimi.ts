import { Player } from "../player.model";
const hakimi: Player = {
  id: "player-002",
  name: "Achraf Hakimi",
  age: 25,
  nationality: "Morocco",
  position: ["RB"],
  preferredFoot: "right",
  height: 181,
  weight: 73,
  avatarUrl: "https://example.com/avatars/hakimi.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 19,
    pace: 19,
    stamina: 17,
    strength: 13,
    balance: 14,
    agility: 17,
    jumping: 12,
    fitness: 15,
  },

  technical: {
    finishing: 10,
    passing: 14,
    tackling: 13,
    dribbling: 16,
    firstTouch: 14,
    longShots: 10,
    heading: 11,
    technique: 16,
    ballControl: 15,
    vision: 13,
    positioning: 14,
    crossing: 17,
    setPieces: 11,
    penalties: 9,
  },

  mental: {
    composure: 13,
    anticipation: 15,
    decisions: 14,
    determination: 15,
    flair: 13,
    leadership: 9,
    aggression: 12,
    concentration: 14,
    teamwork: 15,
    workRate: 17,
    offTheBall: 15,
    bravery: 12,
  },

  personality: {
    ego: 45,
    rageTrigger: 30,
    morale: 80,
    momentumBoost: 70,
    loyalty: 65,
    professionalism: 75,
    consistency: 80,
    adaptability: 85,
    fanFavorite: 85,
    coachAffinity: 75,
  },

  potential: 170,
  currentAbility: 158,
  isInjured: false,
  contract: {
    salary: 900000,
    endDate: "2026-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 30,
      goals: 4,
      assists: 7,
      yellowCards: 5,
      redCards: 1,
      avgRating: 7.3,
    },
  ],

  backgroundStory:
    "Formé au Real Madrid, révélé au Borussia Dortmund et à l’Inter, Hakimi est l’un des meilleurs latéraux offensifs du monde.",
  personalityTraits: ["adventurous", "attack-minded", "resilient"],

  fatigue: 20,
  form: 81,
  morale: 80,
  trainingPerformance: 88,

  coachFeedback:
    "A toujours un impact en phase offensive. Doit encore progresser défensivement contre les ailiers rapides.",
  coachTrustLevel: 88,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default hakimi;
