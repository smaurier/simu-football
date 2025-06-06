import { Player } from "../player.model";
const ilkayGundogan: Player = {
  id: "player-011",
  name: "İlkay Gündoğan",
  age: 33,
  nationality: "Germany",
  position: ["CM", "CAM"],
  preferredFoot: "right",
  height: 180,
  weight: 80,
  avatarUrl: "https://example.com/avatars/ilkay_gundogan.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 12,
    pace: 11,
    stamina: 15,
    strength: 13,
    balance: 15,
    agility: 13,
    jumping: 9,
    fitness: 14,
  },

  technical: {
    finishing: 14,
    passing: 17,
    tackling: 11,
    dribbling: 14,
    firstTouch: 16,
    longShots: 13,
    heading: 10,
    technique: 16,
    ballControl: 16,
    vision: 17,
    positioning: 15,
    crossing: 11,
    setPieces: 14,
    penalties: 16,
  },

  mental: {
    composure: 17,
    anticipation: 15,
    decisions: 17,
    determination: 14,
    flair: 13,
    leadership: 16,
    aggression: 10,
    concentration: 16,
    teamwork: 17,
    workRate: 15,
    offTheBall: 14,
    bravery: 12,
  },

  personality: {
    ego: 20,
    rageTrigger: 8,
    morale: 82,
    momentumBoost: 70,
    loyalty: 75,
    professionalism: 90,
    consistency: 88,
    adaptability: 80,
    fanFavorite: 68,
    coachAffinity: 85,
  },

  potential: 170,
  currentAbility: 160,
  isInjured: false,
  contract: {
    salary: 700000,
    endDate: "2025-06-30",
    releaseClause: 300000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 30,
      goals: 5,
      assists: 7,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.3,
    },
  ],

  backgroundStory:
    "Ancien capitaine de Manchester City, Gündoğan a rejoint le Barça pour apporter son expérience et sa maîtrise du tempo au milieu. Il incarne l’intelligence tactique.",
  personalityTraits: ["leader", "intellectuel du jeu", "rassurant"],

  fatigue: 35,
  form: 80,
  morale: 82,
  trainingPerformance: 83,

  coachFeedback:
    "Un métronome. Toujours fiable, il équilibre l’équipe avec sa vision et ses déplacements intelligents.",
  coachTrustLevel: 88,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default ilkayGundogan;
