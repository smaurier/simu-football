import { Player } from "../player.model";

const martinez: Player = {
  id: "player-023",
  name: "Íñigo Martínez",
  age: 33,
  nationality: "Spain",
  position: ["DC"], // Défenseur central gauche
  preferredFoot: "left",
  height: 182,
  weight: 77,
  avatarUrl: "https://example.com/avatars/inigo-martinez.jpg",
  clubId: 11, // FC Barcelone

  physical: {
    acceleration: 11,
    pace: 12,
    stamina: 13,
    strength: 15,
    balance: 14,
    agility: 11,
    jumping: 16,
    fitness: 13,
  },

  technical: {
    finishing: 5,
    passing: 14,
    tackling: 17,
    dribbling: 10,
    firstTouch: 12,
    longShots: 7,
    heading: 16,
    technique: 11,
    ballControl: 13,
    vision: 11,
    positioning: 15,
    crossing: 6,
    setPieces: 10,
    penalties: 9,
  },

  mental: {
    composure: 14,
    anticipation: 15,
    decisions: 13,
    determination: 16,
    flair: 7,
    leadership: 14,
    aggression: 16,
    concentration: 15,
    teamwork: 14,
    workRate: 13,
    offTheBall: 9,
    bravery: 17,
  },

  personality: {
    ego: 45,
    rageTrigger: 30,
    morale: 75,
    momentumBoost: 65,
    loyalty: 80,
    professionalism: 78,
    consistency: 75,
    adaptability: 70,
    fanFavorite: 60,
    coachAffinity: 78,
  },

  potential: 150,
  currentAbility: 140,
  isInjured: false,
  contract: {
    salary: 500000, // €/mois
    endDate: "2025-06-30",
    releaseClause: 60000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelone",
      appearances: 20,
      goals: 1,
      assists: 0,
      yellowCards: 5,
      redCards: 1,
      avgRating: 6.8,
    },
  ],

  backgroundStory:
    "Ancien pilier de la Real Sociedad puis de l'Athletic Bilbao, Íñigo rejoint le Barça pour apporter son expérience en défense centrale et un pied gauche fiable.",
  personalityTraits: ["experienced defender", "aggressive tackler"],

  fatigue: 22,
  form: 74,
  morale: 75,
  trainingPerformance: 80,

  coachFeedback:
    "Solide dans les duels et précieux dans la relance, mais sujet aux fautes tactiques.",
  coachTrustLevel: 75,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default martinez;
