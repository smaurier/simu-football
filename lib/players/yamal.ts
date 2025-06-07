import { Player } from "../player.model";

const yamal: Player = {
  id: "player-035",
  name: "Lamine Yamal",
  age: 16,
  nationality: "Spain",
  position: ["AMR", "AML"], // Ailier droit naturel, peut jouer à gauche
  preferredFoot: "left",
  height: 180,
  weight: 70,
  avatarUrl: "https://example.com/avatars/yamal.jpg",
  clubId: 1, // FC Barcelone

  physical: {
    acceleration: 17,
    pace: 16,
    stamina: 12,
    strength: 8,
    balance: 15,
    agility: 17,
    jumping: 7,
    fitness: 13,
  },

  technical: {
    finishing: 12,
    passing: 13,
    tackling: 6,
    dribbling: 17,
    firstTouch: 16,
    longShots: 11,
    heading: 7,
    technique: 18,
    ballControl: 17,
    vision: 14,
    positioning: 12,
    crossing: 14,
    setPieces: 10,
    penalties: 9,
  },

  mental: {
    composure: 13,
    anticipation: 14,
    decisions: 12,
    determination: 14,
    flair: 18,
    leadership: 7,
    aggression: 9,
    concentration: 12,
    teamwork: 11,
    workRate: 11,
    offTheBall: 14,
    bravery: 10,
  },

  personality: {
    ego: 50,
    rageTrigger: 15,
    morale: 80,
    momentumBoost: 65,
    loyalty: 80,
    professionalism: 75,
    consistency: 68,
    adaptability: 85,
    fanFavorite: 70,
    coachAffinity: 78,
  },

  potential: 180,
  currentAbility: 135,
  isInjured: false,
  contract: {
    salary: 100000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 1000000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 30,
      goals: 6,
      assists: 9,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.3,
    },
  ],

  backgroundStory:
    "Prodige de la Masia, Yamal est devenu l’un des plus jeunes titulaires de l’histoire du Barça. Sa créativité et sa sérénité en 1v1 impressionnent malgré son jeune âge.",
  personalityTraits: ["prodigy", "fearless dribbler"],

  fatigue: 22,
  form: 74,
  morale: 82,
  trainingPerformance: 86,

  coachFeedback:
    "Génie naturel balle au pied, encore perfectible dans la prise de décision sous pression.",
  coachTrustLevel: 77,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default yamal;
