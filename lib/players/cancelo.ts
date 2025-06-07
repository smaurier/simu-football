import { Player } from "../player.model";

const cancelo: Player = {
  id: "player-005",
  name: "João Cancelo",
  age: 30,
  nationality: "Portugal",
  position: ["DD", "DG", "WB"], // Latéral droit, peut jouer à gauche, rôle offensif
  preferredFoot: "right",
  height: 182,
  weight: 74,
  avatarUrl: "https://example.com/avatars/cancelo.jpg",
  clubId: 20, // FC Barcelona (prêt)

  physical: {
    acceleration: 16,
    pace: 16,
    stamina: 15,
    strength: 11,
    balance: 13,
    agility: 16,
    jumping: 10,
    fitness: 14,
  },

  technical: {
    finishing: 7,
    passing: 15,
    tackling: 13,
    dribbling: 17,
    firstTouch: 15,
    longShots: 11,
    heading: 8,
    technique: 16,
    ballControl: 16,
    vision: 14,
    positioning: 13,
    crossing: 17,
    setPieces: 10,
    penalties: 9,
  },

  mental: {
    composure: 13,
    anticipation: 13,
    decisions: 12,
    determination: 14,
    flair: 16,
    leadership: 8,
    aggression: 11,
    concentration: 12,
    teamwork: 13,
    workRate: 14,
    offTheBall: 15,
    bravery: 11,
  },

  personality: {
    ego: 65,
    rageTrigger: 25,
    morale: 80,
    momentumBoost: 65,
    loyalty: 50,
    professionalism: 60,
    consistency: 68,
    adaptability: 60,
    fanFavorite: 70,
    coachAffinity: 70,
  },

  potential: 165,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 700000, // €/mois
    endDate: "2025-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 30,
      goals: 3,
      assists: 6,
      yellowCards: 5,
      redCards: 1,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Ancien joueur de Benfica, Cancelo s'est imposé en Europe grâce à sa polyvalence, sa qualité de centre et sa technique balle au pied. Passé par la Juventus, Manchester City et le Bayern, il arrive à Barcelone pour se relancer en Liga.",
  personalityTraits: ["creative fullback", "attacking mindset"],

  fatigue: 22,
  form: 75,
  morale: 80,
  trainingPerformance: 84,

  coachFeedback:
    "Joueur ultra-technique et imprévisible, mais peut parfois oublier ses responsabilités défensives.",
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

export default cancelo;
