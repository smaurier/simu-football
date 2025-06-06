import { Player } from "../player.model";

const cancelo: Player = {
  id: "player-007",
  name: "Iñigo Martínez",
  age: 33,
  nationality: "Spain",
  position: ["CB", "LB"],
  preferredFoot: "left",
  height: 182,
  weight: 77,
  avatarUrl: "https://example.com/avatars/inigo_martinez.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 12,
    pace: 12,
    stamina: 13,
    strength: 14,
    balance: 14,
    agility: 11,
    jumping: 15,
    fitness: 14,
  },

  technical: {
    finishing: 5,
    passing: 14,
    tackling: 15,
    dribbling: 8,
    firstTouch: 11,
    longShots: 10,
    heading: 14,
    technique: 11,
    ballControl: 11,
    vision: 12,
    positioning: 15,
    crossing: 6,
    setPieces: 9,
    penalties: 7,
  },

  mental: {
    composure: 14,
    anticipation: 15,
    decisions: 13,
    determination: 15,
    flair: 5,
    leadership: 14,
    aggression: 16,
    concentration: 14,
    teamwork: 13,
    workRate: 13,
    offTheBall: 7,
    bravery: 16,
  },

  personality: {
    ego: 35,
    rageTrigger: 40,
    morale: 75,
    momentumBoost: 60,
    loyalty: 80,
    professionalism: 85,
    consistency: 85,
    adaptability: 75,
    fanFavorite: 50,
    coachAffinity: 78,
  },

  potential: 150,
  currentAbility: 140,
  isInjured: false,
  contract: {
    salary: 300000, // €/mois
    endDate: "2025-06-30",
    releaseClause: 50000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 20,
      goals: 1,
      assists: 1,
      yellowCards: 5,
      redCards: 1,
      avgRating: 6.9,
    },
  ],

  backgroundStory:
    "Solide défenseur au style rugueux mais intelligent, Iñigo est arrivé au Barça avec l'expérience de la Liga. Il reste un atout dans la rotation défensive malgré une concurrence féroce.",
  personalityTraits: ["aggressive", "loyal", "veteran"],

  fatigue: 30,
  form: 70,
  morale: 75,
  trainingPerformance: 80,

  coachFeedback:
    "Solide dans les duels, bonne relance, parfois un peu trop nerveux dans les matchs à haute intensité.",
  coachTrustLevel: 72,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default cancelo;
