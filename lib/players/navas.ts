import { Player } from "../player.model";

const navas: Player = {
  id: "player-025",
  name: "Keylor Navas",
  age: 37,
  nationality: "Costa Rica",
  position: ["GK"],
  preferredFoot: "right",
  height: 185,
  weight: 80,
  avatarUrl: "https://example.com/avatars/navas.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 10,
    pace: 9,
    stamina: 11,
    strength: 13,
    balance: 14,
    agility: 17,
    jumping: 16,
    fitness: 13,
  },

  technical: {
    finishing: 2,
    passing: 10,
    tackling: 5,
    dribbling: 7,
    firstTouch: 11,
    longShots: 1,
    heading: 4,
    technique: 10,
    ballControl: 11,
    vision: 12,
    positioning: 17,
    crossing: 3,
    setPieces: 5,
    penalties: 4,
  },

  mental: {
    composure: 18,
    anticipation: 17,
    decisions: 16,
    determination: 18,
    flair: 6,
    leadership: 12,
    aggression: 6,
    concentration: 16,
    teamwork: 14,
    workRate: 13,
    offTheBall: 4,
    bravery: 17,
  },

  personality: {
    ego: 20,
    rageTrigger: 10,
    morale: 80,
    momentumBoost: 75,
    loyalty: 90,
    professionalism: 85,
    consistency: 90,
    adaptability: 80,
    fanFavorite: 70,
    coachAffinity: 85,
  },

  potential: 165,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 800000, // €/mois
    endDate: "2024-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 5,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      avgRating: 6.8,
    },
  ],

  backgroundStory:
    "Héros du Real Madrid lors de trois Ligues des Champions, Navas s’est imposé par ses réflexes et son mental hors du commun. Pilier du Costa Rica.",
  personalityTraits: ["model professional", "clutch player", "quiet leader"],

  fatigue: 20,
  form: 75,
  morale: 80,
  trainingPerformance: 85,

  coachFeedback:
    "Excellent gardien d’expérience, un vrai leader discret dans le vestiaire.",
  coachTrustLevel: 85,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: true,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default navas;
