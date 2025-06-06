import { Player } from "../player.model";
const skriniar: Player = {
  id: "player-002",
  name: "Milan Škriniar",
  age: 29,
  nationality: "Slovakia",
  position: ["CB"],
  preferredFoot: "right",
  height: 188,
  weight: 80,
  avatarUrl: "https://example.com/avatars/skriniar.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 10,
    pace: 11,
    stamina: 14,
    strength: 16,
    balance: 15,
    agility: 12,
    jumping: 16,
    fitness: 15,
  },

  technical: {
    finishing: 4,
    passing: 13,
    tackling: 17,
    dribbling: 9,
    firstTouch: 12,
    longShots: 6,
    heading: 15,
    technique: 12,
    ballControl: 12,
    vision: 11,
    positioning: 15,
    crossing: 5,
    setPieces: 6,
    penalties: 5,
  },

  mental: {
    composure: 14,
    anticipation: 15,
    decisions: 14,
    determination: 16,
    flair: 6,
    leadership: 15,
    aggression: 15,
    concentration: 16,
    teamwork: 14,
    workRate: 14,
    offTheBall: 8,
    bravery: 17,
  },

  personality: {
    ego: 30,
    rageTrigger: 25,
    morale: 80,
    momentumBoost: 60,
    loyalty: 75,
    professionalism: 85,
    consistency: 88,
    adaptability: 65,
    fanFavorite: 70,
    coachAffinity: 85,
  },

  potential: 170,
  currentAbility: 158,
  isInjured: false,
  contract: {
    salary: 750000, // €/mois
    endDate: "2028-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 32,
      goals: 2,
      assists: 1,
      yellowCards: 6,
      redCards: 1,
      avgRating: 6.9,
    },
  ],

  backgroundStory:
    "Formé en Slovaquie, Škriniar s’est imposé à l’Inter Milan comme l’un des meilleurs défenseurs de Serie A avant de rejoindre le PSG.",
  personalityTraits: ["leader", "calm defender"],

  fatigue: 12,
  form: 76,
  morale: 80,
  trainingPerformance: 88,

  coachFeedback:
    "Solide défensivement, manque parfois de vitesse sur les transitions rapides.",
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

export default skriniar;
