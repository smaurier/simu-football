import { Player } from "../player.model";
const dejoong: Player = {
  id: "player-009",
  name: "Alejandro Baldé",
  age: 21,
  nationality: "Spain",
  position: ["LB", "LWB"],
  preferredFoot: "left",
  height: 175,
  weight: 69,
  avatarUrl: "https://example.com/avatars/alejandro_balde.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 18,
    pace: 18,
    stamina: 16,
    strength: 11,
    balance: 15,
    agility: 17,
    jumping: 12,
    fitness: 16,
  },

  technical: {
    finishing: 6,
    passing: 12,
    tackling: 13,
    dribbling: 15,
    firstTouch: 13,
    longShots: 7,
    heading: 8,
    technique: 14,
    ballControl: 13,
    vision: 10,
    positioning: 12,
    crossing: 15,
    setPieces: 7,
    penalties: 6,
  },

  mental: {
    composure: 12,
    anticipation: 13,
    decisions: 11,
    determination: 14,
    flair: 13,
    leadership: 7,
    aggression: 9,
    concentration: 11,
    teamwork: 13,
    workRate: 14,
    offTheBall: 13,
    bravery: 12,
  },

  personality: {
    ego: 45,
    rageTrigger: 25,
    morale: 78,
    momentumBoost: 70,
    loyalty: 80,
    professionalism: 72,
    consistency: 68,
    adaptability: 75,
    fanFavorite: 70,
    coachAffinity: 78,
  },

  potential: 165,
  currentAbility: 138,
  isInjured: false,
  contract: {
    salary: 150000,
    endDate: "2028-06-30",
    releaseClause: 500000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 25,
      goals: 1,
      assists: 3,
      yellowCards: 2,
      redCards: 0,
      avgRating: 6.9,
    },
  ],

  backgroundStory:
    "Formé à La Masia, Baldé est rapidement devenu le latéral gauche titulaire du Barça. Sa vitesse et sa percussion en font une menace constante dans son couloir.",
  personalityTraits: ["formé au club", "explosif", "travailleur"],

  fatigue: 40,
  form: 74,
  morale: 78,
  trainingPerformance: 76,

  coachFeedback:
    "Excellent en transition offensive, Baldé doit encore progresser dans la gestion défensive et les centres sous pression.",
  coachTrustLevel: 80,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default dejoong;
