import { Player } from "../player.model";
const marquinhos: Player = {
  id: "player-002",
  name: "Marquinhos",
  age: 30,
  nationality: "Brazil",
  position: ["CB"],
  preferredFoot: "right",
  height: 183,
  weight: 75,
  avatarUrl: "https://example.com/avatars/marquinhos.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 14,
    pace: 15,
    stamina: 16,
    strength: 14,
    balance: 15,
    agility: 14,
    jumping: 17,
    fitness: 15,
  },

  technical: {
    finishing: 6,
    passing: 15,
    tackling: 18,
    dribbling: 12,
    firstTouch: 13,
    longShots: 7,
    heading: 15,
    technique: 13,
    ballControl: 14,
    vision: 13,
    positioning: 17,
    crossing: 5,
    setPieces: 8,
    penalties: 7,
  },

  mental: {
    composure: 17,
    anticipation: 17,
    decisions: 16,
    determination: 17,
    flair: 8,
    leadership: 18,
    aggression: 13,
    concentration: 16,
    teamwork: 17,
    workRate: 16,
    offTheBall: 11,
    bravery: 16,
  },

  personality: {
    ego: 35,
    rageTrigger: 25,
    morale: 80,
    momentumBoost: 70,
    loyalty: 90,
    professionalism: 95,
    consistency: 90,
    adaptability: 80,
    fanFavorite: 85,
    coachAffinity: 95,
  },

  potential: 172,
  currentAbility: 162,
  isInjured: false,
  contract: {
    salary: 950000, // €/mois
    endDate: "2026-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 33,
      goals: 2,
      assists: 1,
      yellowCards: 4,
      redCards: 0,
      avgRating: 7.2,
    },
  ],

  backgroundStory:
    "Pilier défensif du PSG depuis son arrivée en 2013, Marquinhos est reconnu pour sa régularité, sa lecture du jeu et son professionnalisme exemplaire.",
  personalityTraits: ["leader", "team player", "consistent performer"],

  fatigue: 15,
  form: 82,
  morale: 80,
  trainingPerformance: 88,

  coachFeedback:
    "Toujours fiable. Leader vocal et calme, capable de gérer les matchs sous pression.",
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

export default marquinhos;
