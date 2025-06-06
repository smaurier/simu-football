import { Player } from "../player.model";
const mbappe: Player = {
  id: "player-002",
  name: "Kylian Mbappé",
  age: 25,
  nationality: "France",
  position: ["ST"],
  preferredFoot: "right",
  height: 178,
  weight: 75,
  avatarUrl: "https://example.com/avatars/mbappe.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 20,
    pace: 20,
    stamina: 16,
    strength: 13,
    balance: 14,
    agility: 18,
    jumping: 14,
    fitness: 16,
  },

  technical: {
    finishing: 18,
    passing: 14,
    tackling: 7,
    dribbling: 19,
    firstTouch: 17,
    longShots: 14,
    heading: 13,
    technique: 18,
    ballControl: 17,
    vision: 15,
    positioning: 17,
    crossing: 13,
    setPieces: 10,
    penalties: 14,
  },

  mental: {
    composure: 17,
    anticipation: 17,
    decisions: 15,
    determination: 16,
    flair: 18,
    leadership: 13,
    aggression: 11,
    concentration: 14,
    teamwork: 12,
    workRate: 13,
    offTheBall: 19,
    bravery: 15,
  },

  personality: {
    ego: 90,
    rageTrigger: 25,
    morale: 92,
    momentumBoost: 90,
    loyalty: 60,
    professionalism: 78,
    consistency: 88,
    adaptability: 75,
    fanFavorite: 98,
    coachAffinity: 80,
  },

  potential: 195,
  currentAbility: 186,
  isInjured: false,
  contract: {
    salary: 2500000, // €/mois
    endDate: "2025-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 40,
      goals: 42,
      assists: 14,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.8,
    },
  ],

  backgroundStory:
    "Révélé à Monaco, Kylian Mbappé est devenu une superstar mondiale à seulement 19 ans. Champion du monde, leader offensif du PSG et de l’équipe de France.",
  personalityTraits: ["media-savvy", "match winner", "ambitious"],

  fatigue: 8,
  form: 92,
  morale: 93,
  trainingPerformance: 85,

  coachFeedback: "Toujours décisif. Son influence est totale en attaque.",
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

export default mbappe;
