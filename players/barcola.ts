import { Player } from "../player.model";

const barcola: Player = {
  id: "player-002",
  name: "Bradley Barcola",
  age: 21,
  nationality: "France",
  position: ["LW"], // ailier gauche
  preferredFoot: "right",
  height: 186,
  weight: 73,
  avatarUrl: "https://example.com/avatars/barcola.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 17,
    pace: 17,
    stamina: 13,
    strength: 11,
    balance: 13,
    agility: 16,
    jumping: 12,
    fitness: 14,
  },

  technical: {
    finishing: 12,
    passing: 13,
    tackling: 7,
    dribbling: 16,
    firstTouch: 14,
    longShots: 10,
    heading: 10,
    technique: 16,
    ballControl: 15,
    vision: 13,
    positioning: 12,
    crossing: 14,
    setPieces: 9,
    penalties: 10,
  },

  mental: {
    composure: 13,
    anticipation: 12,
    decisions: 11,
    determination: 14,
    flair: 17,
    leadership: 9,
    aggression: 9,
    concentration: 11,
    teamwork: 13,
    workRate: 12,
    offTheBall: 14,
    bravery: 12,
  },

  personality: {
    ego: 45,
    rageTrigger: 25,
    morale: 80,
    momentumBoost: 70,
    loyalty: 65,
    professionalism: 75,
    consistency: 68,
    adaptability: 72,
    fanFavorite: 60,
    coachAffinity: 75,
  },

  potential: 165,
  currentAbility: 137,
  isInjured: false,
  contract: {
    salary: 280000, // €/mois estimé
    endDate: "2028-06-30",
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 31,
      goals: 6,
      assists: 7,
      yellowCards: 2,
      redCards: 0,
      avgRating: 6.9,
    },
  ],

  backgroundStory:
    "Formé à Lyon, Barcola a impressionné par sa percussion et son aisance technique, avant de signer au PSG en 2023.",
  personalityTraits: ["déchire les défenses", "intuitif", "modeste"],

  fatigue: 18,
  form: 75,
  morale: 80,
  trainingPerformance: 82,

  coachFeedback:
    "Explosif sur son aile mais manque encore de constance dans le dernier geste.",
  coachTrustLevel: 78,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default barcola;
