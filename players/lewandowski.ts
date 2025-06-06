import { Player } from "../player.model";
const robertLewandowski: Player = {
  id: "player-018",
  name: "Robert Lewandowski",
  age: 36,
  nationality: "Poland",
  position: ["ST"],
  preferredFoot: "right",
  height: 185,
  weight: 81,
  avatarUrl: "https://example.com/avatars/lewandowski.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 14,
    pace: 13,
    stamina: 14,
    strength: 17,
    balance: 15,
    agility: 13,
    jumping: 17,
    fitness: 14,
  },

  technical: {
    finishing: 20,
    passing: 14,
    tackling: 8,
    dribbling: 13,
    firstTouch: 18,
    longShots: 16,
    heading: 18,
    technique: 16,
    ballControl: 17,
    vision: 14,
    positioning: 19,
    crossing: 10,
    setPieces: 12,
    penalties: 18,
  },

  mental: {
    composure: 19,
    anticipation: 18,
    decisions: 18,
    determination: 19,
    flair: 14,
    leadership: 17,
    aggression: 15,
    concentration: 18,
    teamwork: 16,
    workRate: 16,
    offTheBall: 18,
    bravery: 17,
  },

  personality: {
    ego: 40,
    rageTrigger: 10,
    morale: 85,
    momentumBoost: 80,
    loyalty: 75,
    professionalism: 95,
    consistency: 90,
    adaptability: 80,
    fanFavorite: 85,
    coachAffinity: 90,
  },

  potential: 185,
  currentAbility: 178,
  isInjured: false,
  contract: {
    salary: 1200000,
    endDate: "2026-06-30",
    releaseClause: 80000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelone",
      appearances: 33,
      goals: 28,
      assists: 7,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.8,
    },
  ],

  backgroundStory:
    "L’un des meilleurs attaquants de sa génération, Lewandowski est reconnu pour son instinct de buteur exceptionnel, sa constance et son leadership sur le terrain.",
  personalityTraits: ["clinical finisher", "leader", "professional"],

  fatigue: 20,
  form: 85,
  morale: 88,
  trainingPerformance: 87,

  coachFeedback:
    "Une machine à buts. Son expérience et sa précision en font un attaquant redoutable, malgré son âge.",
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

export default robertLewandowski;
