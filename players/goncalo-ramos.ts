import { Player } from "../player.model";

const gonzaloRamos: Player = {
  id: "player-002",
  name: "Gonçalo Ramos",
  age: 23,
  nationality: "Portugal",
  position: ["ST"],
  preferredFoot: "right",
  height: 185,
  weight: 79,
  avatarUrl: "https://example.com/avatars/gonzalo_ramos.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 14,
    pace: 15,
    stamina: 15,
    strength: 13,
    balance: 12,
    agility: 13,
    jumping: 14,
    fitness: 14,
  },

  technical: {
    finishing: 16,
    passing: 11,
    tackling: 6,
    dribbling: 13,
    firstTouch: 14,
    longShots: 12,
    heading: 15,
    technique: 14,
    ballControl: 13,
    vision: 12,
    positioning: 16,
    crossing: 8,
    setPieces: 9,
    penalties: 14,
  },

  mental: {
    composure: 14,
    anticipation: 15,
    decisions: 13,
    determination: 15,
    flair: 11,
    leadership: 10,
    aggression: 12,
    concentration: 13,
    teamwork: 12,
    workRate: 14,
    offTheBall: 15,
    bravery: 13,
  },

  personality: {
    ego: 45,
    rageTrigger: 25,
    morale: 80,
    momentumBoost: 60,
    loyalty: 65,
    professionalism: 75,
    consistency: 78,
    adaptability: 70,
    fanFavorite: 55,
    coachAffinity: 70,
  },

  potential: 165,
  currentAbility: 147,
  isInjured: false,
  contract: {
    salary: 550000,
    endDate: "2028-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 32,
      goals: 13,
      assists: 4,
      yellowCards: 2,
      redCards: 0,
      avgRating: 6.9,
    },
  ],

  backgroundStory:
    "Formé au Benfica Lisbonne, révélé lors de la Coupe du Monde 2022 avec un triplé face à la Suisse. Transféré au PSG en 2023.",
  personalityTraits: ["finisher", "hard-working", "future leader"],

  fatigue: 15,
  form: 72,
  morale: 80,
  trainingPerformance: 85,

  coachFeedback:
    "Bon sens du but, doit encore mieux s’intégrer au jeu collectif.",
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

export default gonzaloRamos;
