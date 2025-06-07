import { Player } from "../player.model";

const raphinha: Player = {
  id: "player-028",
  name: "Raphinha",
  age: 28,
  nationality: "Brazil",
  position: ["AMR", "AML"], // Ailier droit naturel, peut dépanner à gauche
  preferredFoot: "left",
  height: 176,
  weight: 68,
  avatarUrl: "https://example.com/avatars/raphinha.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 17,
    pace: 16,
    stamina: 14,
    strength: 10,
    balance: 13,
    agility: 17,
    jumping: 9,
    fitness: 14,
  },

  technical: {
    finishing: 13,
    passing: 14,
    tackling: 7,
    dribbling: 17,
    firstTouch: 15,
    longShots: 14,
    heading: 8,
    technique: 17,
    ballControl: 16,
    vision: 13,
    positioning: 13,
    crossing: 16,
    setPieces: 15,
    penalties: 11,
  },

  mental: {
    composure: 13,
    anticipation: 13,
    decisions: 12,
    determination: 14,
    flair: 16,
    leadership: 9,
    aggression: 11,
    concentration: 13,
    teamwork: 12,
    workRate: 13,
    offTheBall: 15,
    bravery: 10,
  },

  personality: {
    ego: 65,
    rageTrigger: 25,
    morale: 76,
    momentumBoost: 65,
    loyalty: 60,
    professionalism: 70,
    consistency: 68,
    adaptability: 65,
    fanFavorite: 75,
    coachAffinity: 70,
  },

  potential: 160,
  currentAbility: 148,
  isInjured: false,
  contract: {
    salary: 600000, // €/mois
    endDate: "2027-06-30",
    releaseClause: 100000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 27,
      goals: 6,
      assists: 7,
      yellowCards: 3,
      redCards: 0,
      avgRating: 7.0,
    },
  ],

  backgroundStory:
    "Révélé à Leeds United avant de rejoindre Barcelone, Raphinha séduit par son explosivité, sa qualité de dribble et ses centres précis. Il est un atout offensif redoutable lorsqu’il est en confiance.",
  personalityTraits: ["explosive winger", "emotionally driven"],

  fatigue: 18,
  form: 79,
  morale: 76,
  trainingPerformance: 81,

  coachFeedback:
    "Déséquilibre les défenses par sa percussion, mais peut être inconstant dans ses prises de décision.",
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

export default raphinha;
