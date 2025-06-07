import { Player } from "../player.model";

const mbappe: Player = {
  id: "player-024",
  name: "Kylian Mbappé",
  age: 26,
  nationality: "France",
  position: ["AML", "ST", "AMR"], // Polyvalent : ailier gauche, attaquant de pointe, ailier droit
  preferredFoot: "right",
  height: 178,
  weight: 73,
  avatarUrl: "https://example.com/avatars/mbappe.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 20,
    pace: 20,
    stamina: 15,
    strength: 14,
    balance: 15,
    agility: 19,
    jumping: 13,
    fitness: 17,
  },

  technical: {
    finishing: 19,
    passing: 14,
    tackling: 6,
    dribbling: 19,
    firstTouch: 18,
    longShots: 14,
    heading: 13,
    technique: 18,
    ballControl: 18,
    vision: 14,
    positioning: 17,
    crossing: 13,
    setPieces: 12,
    penalties: 15,
  },

  mental: {
    composure: 17,
    anticipation: 16,
    decisions: 15,
    determination: 14,
    flair: 19,
    leadership: 12,
    aggression: 10,
    concentration: 14,
    teamwork: 12,
    workRate: 13,
    offTheBall: 18,
    bravery: 13,
  },

  personality: {
    ego: 85,
    rageTrigger: 25,
    morale: 85,
    momentumBoost: 90,
    loyalty: 60,
    professionalism: 75,
    consistency: 85,
    adaptability: 75,
    fanFavorite: 95,
    coachAffinity: 80,
  },

  potential: 195,
  currentAbility: 185,
  isInjured: false,
  contract: {
    salary: 3200000, // €/mois
    endDate: "2025-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 32,
      goals: 29,
      assists: 11,
      yellowCards: 3,
      redCards: 0,
      avgRating: 8.1,
    },
  ],

  backgroundStory:
    "Champion du monde 2018 et star mondiale, Mbappé est le fer de lance du PSG et de l'équipe de France. Son explosivité et sa finition font de lui un cauchemar pour les défenseurs.",
  personalityTraits: ["game changer", "media icon"],

  fatigue: 18,
  form: 90,
  morale: 88,
  trainingPerformance: 87,

  coachFeedback:
    "Joueur clé qui peut faire basculer n'importe quel match. À gérer au niveau de l’ego et de l’exposition médiatique.",
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
