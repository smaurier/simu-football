import { Player } from "../player.model";
const raphinha: Player = {
  id: "player-016",
  name: "Raphinha",
  age: 27,
  nationality: "Brazil",
  position: ["RW", "LW"],
  preferredFoot: "right",
  height: 175,
  weight: 70,
  avatarUrl: "https://example.com/avatars/raphinha.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 18,
    pace: 18,
    stamina: 16,
    strength: 11,
    balance: 14,
    agility: 17,
    jumping: 12,
    fitness: 15,
  },

  technical: {
    finishing: 15,
    passing: 14,
    tackling: 7,
    dribbling: 18,
    firstTouch: 16,
    longShots: 13,
    heading: 9,
    technique: 17,
    ballControl: 17,
    vision: 13,
    positioning: 14,
    crossing: 16,
    setPieces: 11,
    penalties: 10,
  },

  mental: {
    composure: 14,
    anticipation: 15,
    decisions: 14,
    determination: 16,
    flair: 18,
    leadership: 9,
    aggression: 12,
    concentration: 14,
    teamwork: 14,
    workRate: 15,
    offTheBall: 16,
    bravery: 13,
  },

  personality: {
    ego: 50,
    rageTrigger: 25,
    morale: 80,
    momentumBoost: 75,
    loyalty: 60,
    professionalism: 78,
    consistency: 70,
    adaptability: 80,
    fanFavorite: 75,
    coachAffinity: 75,
  },

  potential: 170,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 600000,
    endDate: "2026-06-30",
    releaseClause: 120000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelone",
      appearances: 28,
      goals: 9,
      assists: 8,
      yellowCards: 3,
      redCards: 0,
      avgRating: 7.3,
    },
  ],

  backgroundStory:
    "Ailier explosif et technique, Raphinha s'est imposé comme une arme offensive majeure du Barça grâce à sa vitesse et sa créativité.",
  personalityTraits: ["explosive", "creative", "determined"],

  fatigue: 30,
  form: 80,
  morale: 82,
  trainingPerformance: 78,

  coachFeedback:
    "Un danger constant sur les ailes. Doit parfois améliorer sa discipline défensive, mais décisif en attaque.",
  coachTrustLevel: 83,
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
