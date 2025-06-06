import { Player } from "../player.model";
const lucasHernandez: Player = {
  id: "player-002",
  name: "Lucas Hernandez",
  age: 28,
  nationality: "France",
  position: ["DC"],
  preferredFoot: "left",
  height: 184,
  weight: 79,
  avatarUrl: "https://example.com/avatars/lucas_hernandez.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 15,
    pace: 15,
    stamina: 16,
    strength: 15,
    balance: 14,
    agility: 13,
    jumping: 15,
    fitness: 13,
  },

  technical: {
    finishing: 5,
    passing: 13,
    tackling: 17,
    dribbling: 10,
    firstTouch: 12,
    longShots: 7,
    heading: 14,
    technique: 12,
    ballControl: 13,
    vision: 11,
    positioning: 15,
    crossing: 10,
    setPieces: 6,
    penalties: 7,
  },

  mental: {
    composure: 14,
    anticipation: 16,
    decisions: 15,
    determination: 17,
    flair: 8,
    leadership: 13,
    aggression: 16,
    concentration: 15,
    teamwork: 16,
    workRate: 17,
    offTheBall: 10,
    bravery: 18,
  },

  personality: {
    ego: 50,
    rageTrigger: 45,
    morale: 80,
    momentumBoost: 60,
    loyalty: 70,
    professionalism: 75,
    consistency: 85,
    adaptability: 70,
    fanFavorite: 60,
    coachAffinity: 75,
  },

  potential: 160,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 750000,
    endDate: "2027-06-30",
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 31,
      goals: 2,
      assists: 1,
      yellowCards: 5,
      redCards: 0,
      avgRating: 7.2,
    },
  ],

  backgroundStory:
    "Champion du monde 2018 avec la France, Lucas Hernandez est un défenseur polyvalent, formé à l’Atlético, passé par le Bayern avant de signer au PSG.",
  personalityTraits: ["versatile", "tough tackler", "leader at the back"],

  fatigue: 12,
  form: 75,
  morale: 80,
  trainingPerformance: 88,

  coachFeedback:
    "Un roc en défense. Apporte de la grinta et de l'équilibre sur le flanc gauche.",
  coachTrustLevel: 87,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default lucasHernandez;
