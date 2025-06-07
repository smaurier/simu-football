import { Player } from "../player.model";

const zaireEmery: Player = {
  id: "player-036",
  name: "Warren Zaïre-Emery",
  age: 18,
  nationality: "France",
  position: ["MC"],
  preferredFoot: "right",
  height: 178,
  weight: 75,
  avatarUrl: "https://example.com/avatars/zaire-emery.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 15,
    pace: 14,
    stamina: 16,
    strength: 13,
    balance: 15,
    agility: 15,
    jumping: 12,
    fitness: 16,
  },

  technical: {
    finishing: 10,
    passing: 16,
    tackling: 14,
    dribbling: 14,
    firstTouch: 15,
    longShots: 13,
    heading: 10,
    technique: 16,
    ballControl: 16,
    vision: 15,
    positioning: 14,
    crossing: 9,
    setPieces: 10,
    penalties: 10,
  },

  mental: {
    composure: 16,
    anticipation: 15,
    decisions: 15,
    determination: 17,
    flair: 12,
    leadership: 13,
    aggression: 11,
    concentration: 15,
    teamwork: 17,
    workRate: 18,
    offTheBall: 13,
    bravery: 14,
  },

  personality: {
    ego: 35,
    rageTrigger: 20,
    morale: 90,
    momentumBoost: 75,
    loyalty: 85,
    professionalism: 90,
    consistency: 88,
    adaptability: 85,
    fanFavorite: 70,
    coachAffinity: 95,
  },

  potential: 185,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 250000, // €/mois
    endDate: "2027-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 40,
      goals: 5,
      assists: 7,
      yellowCards: 4,
      redCards: 0,
      avgRating: 7.3,
    },
  ],

  backgroundStory:
    "Formé au PSG, Zaïre-Emery devient titulaire à 17 ans. Leadership naturel, déjà international A avec la France.",
  personalityTraits: ["future captain", "intelligent midfielder", "box-to-box"],

  fatigue: 15,
  form: 82,
  morale: 90,
  trainingPerformance: 95,

  coachFeedback:
    "Très mature pour son âge. Leader discret et moteur au pressing.",
  coachTrustLevel: 95,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default zaireEmery;
