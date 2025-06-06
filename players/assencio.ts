import { Player } from "../player.model";
const asensio: Player = {
  id: "player-002",
  name: "Marco Asensio",
  age: 28,
  nationality: "Spain",
  position: ["AMR"], // Ailier droit qui rentre sur son pied gauche
  preferredFoot: "left",
  height: 182,
  weight: 76,
  avatarUrl: "https://example.com/avatars/asensio.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 14,
    pace: 13,
    stamina: 12,
    strength: 11,
    balance: 14,
    agility: 15,
    jumping: 9,
    fitness: 13,
  },

  technical: {
    finishing: 14,
    passing: 15,
    tackling: 6,
    dribbling: 15,
    firstTouch: 16,
    longShots: 17,
    heading: 10,
    technique: 16,
    ballControl: 15,
    vision: 14,
    positioning: 13,
    crossing: 14,
    setPieces: 13,
    penalties: 12,
  },

  mental: {
    composure: 14,
    anticipation: 13,
    decisions: 14,
    determination: 11,
    flair: 17,
    leadership: 10,
    aggression: 8,
    concentration: 13,
    teamwork: 12,
    workRate: 10,
    offTheBall: 15,
    bravery: 10,
  },

  personality: {
    ego: 55,
    rageTrigger: 20,
    morale: 78,
    momentumBoost: 60,
    loyalty: 65,
    professionalism: 75,
    consistency: 70,
    adaptability: 70,
    fanFavorite: 55,
    coachAffinity: 75,
  },

  potential: 160,
  currentAbility: 145,
  isInjured: false,
  contract: {
    salary: 800000, // €/mois
    endDate: "2026-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 25,
      goals: 7,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
      avgRating: 6.9,
    },
  ],

  backgroundStory:
    "Formé à Majorque et révélé au Real Madrid, Asensio est connu pour sa qualité de frappe et sa patte gauche. Il rejoint le PSG pour se relancer après des saisons irrégulières.",
  personalityTraits: ["technical flair", "confidence-dependent"],

  fatigue: 20,
  form: 72,
  morale: 78,
  trainingPerformance: 82,

  coachFeedback:
    "Très bon dans les petits espaces, peut parfois disparaître des matchs.",
  coachTrustLevel: 80,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default asensio;
