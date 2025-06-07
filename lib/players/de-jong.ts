import { Player } from "../player.model";

const dejong: Player = {
  id: "player-007",
  name: "Frenkie de Jong",
  age: 27,
  nationality: "Netherlands",
  position: ["MC", "MDC"], // Milieu central ou défensif, très porté sur la relance
  preferredFoot: "right",
  height: 180,
  weight: 74,
  avatarUrl: "https://example.com/avatars/dejong.jpg",
  clubId: 20, // FC Barcelona

  physical: {
    acceleration: 14,
    pace: 14,
    stamina: 16,
    strength: 12,
    balance: 17,
    agility: 15,
    jumping: 10,
    fitness: 14,
  },

  technical: {
    finishing: 7,
    passing: 17,
    tackling: 13,
    dribbling: 16,
    firstTouch: 17,
    longShots: 10,
    heading: 9,
    technique: 17,
    ballControl: 18,
    vision: 17,
    positioning: 15,
    crossing: 11,
    setPieces: 9,
    penalties: 8,
  },

  mental: {
    composure: 16,
    anticipation: 15,
    decisions: 16,
    determination: 13,
    flair: 14,
    leadership: 10,
    aggression: 9,
    concentration: 15,
    teamwork: 17,
    workRate: 15,
    offTheBall: 14,
    bravery: 12,
  },

  personality: {
    ego: 40,
    rageTrigger: 15,
    morale: 85,
    momentumBoost: 70,
    loyalty: 80,
    professionalism: 85,
    consistency: 85,
    adaptability: 80,
    fanFavorite: 75,
    coachAffinity: 85,
  },

  potential: 170,
  currentAbility: 158,
  isInjured: false,
  contract: {
    salary: 900000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 400000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 28,
      goals: 2,
      assists: 4,
      yellowCards: 3,
      redCards: 0,
      avgRating: 7.3,
    },
  ],

  backgroundStory:
    "Révélé à l'Ajax avec un style de jeu basé sur la mobilité et la vision, Frenkie de Jong s'impose comme le métronome du Barça. Excellent dans les transitions, il incarne le football total néerlandais.",
  personalityTraits: ["composed playmaker", "reluctant leader"],

  fatigue: 18,
  form: 80,
  morale: 85,
  trainingPerformance: 88,

  coachFeedback:
    "Toujours disponible pour le ballon, rassure l'équipe par sa fiabilité technique et sa capacité à contrôler le rythme.",
  coachTrustLevel: 90,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default dejong;
