import { Player } from "../player.model";
const kangInLee: Player = {
  id: "player-002",
  name: "Lee Kang-in",
  age: 23,
  nationality: "South Korea",
  position: ["AM", "MC"],
  preferredFoot: "left",
  height: 173,
  weight: 66,
  avatarUrl: "https://example.com/avatars/kanginlee.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 15,
    pace: 14,
    stamina: 12,
    strength: 9,
    balance: 13,
    agility: 16,
    jumping: 8,
    fitness: 12,
  },

  technical: {
    finishing: 11,
    passing: 16,
    tackling: 7,
    dribbling: 17,
    firstTouch: 15,
    longShots: 13,
    heading: 7,
    technique: 17,
    ballControl: 16,
    vision: 15,
    positioning: 13,
    crossing: 14,
    setPieces: 15,
    penalties: 10,
  },

  mental: {
    composure: 13,
    anticipation: 14,
    decisions: 13,
    determination: 16,
    flair: 18,
    leadership: 10,
    aggression: 7,
    concentration: 13,
    teamwork: 12,
    workRate: 11,
    offTheBall: 14,
    bravery: 12,
  },

  personality: {
    ego: 55,
    rageTrigger: 30,
    morale: 80,
    momentumBoost: 70,
    loyalty: 75,
    professionalism: 85,
    consistency: 70,
    adaptability: 90,
    fanFavorite: 60,
    coachAffinity: 78,
  },

  potential: 155,
  currentAbility: 140,
  isInjured: false,
  contract: {
    salary: 400000, // €/mois
    endDate: "2028-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 28,
      goals: 4,
      assists: 7,
      yellowCards: 3,
      redCards: 0,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Révélé très jeune au FC Valence, Lee Kang-in est l’un des grands espoirs du football asiatique. Il rejoint le PSG en 2023 après une saison remarquable à Majorque.",
  personalityTraits: ["visionary", "technical wizard", "adaptable"],

  fatigue: 15,
  form: 75,
  morale: 80,
  trainingPerformance: 85,

  coachFeedback:
    "Très utile entre les lignes, dangereux sur coup de pied arrêté. Encore perfectible sur la régularité.",
  coachTrustLevel: 82,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default kangInLee;
