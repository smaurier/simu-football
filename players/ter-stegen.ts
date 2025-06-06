import { Player } from "../player.model";
const terStegen: Player = {
  id: "player-003",
  name: "Marc-André ter Stegen",
  age: 32,
  nationality: "Germany",
  position: ["GK"],
  preferredFoot: "right",
  height: 187,
  weight: 85,
  avatarUrl: "https://example.com/avatars/terstegen.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 9,
    pace: 8,
    stamina: 7,
    strength: 13,
    balance: 14,
    agility: 13,
    jumping: 14,
    fitness: 12,
  },

  technical: {
    finishing: 1,
    passing: 15,
    tackling: 5,
    dribbling: 7,
    firstTouch: 14,
    longShots: 2,
    heading: 3,
    technique: 13,
    ballControl: 15,
    vision: 14,
    positioning: 17, // pour un gardien, positionnement défensif
    crossing: 2,
    setPieces: 1,
    penalties: 1,
  },

  mental: {
    composure: 17,
    anticipation: 15,
    decisions: 16,
    determination: 13,
    flair: 5,
    leadership: 14,
    aggression: 8,
    concentration: 16,
    teamwork: 13,
    workRate: 11,
    offTheBall: 4,
    bravery: 15,
  },

  personality: {
    ego: 35,
    rageTrigger: 15,
    morale: 85,
    momentumBoost: 40,
    loyalty: 80,
    professionalism: 90,
    consistency: 92,
    adaptability: 75,
    fanFavorite: 88,
    coachAffinity: 90,
  },

  potential: 170,
  currentAbility: 160,
  isInjured: false,
  contract: {
    salary: 1000000, // €/mois
    endDate: "2028-06-30",
    releaseClause: 500000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 31,
      goals: 0,
      assists: 0,
      yellowCards: 1,
      redCards: 0,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Gardien allemand ultra fiable, Ter Stegen est un pilier du Barça depuis près d'une décennie, réputé pour ses relances au pied, sa régularité et son calme.",
  personalityTraits: ["calm", "perfectionist", "leader in silence"],

  fatigue: 12,
  form: 80,
  morale: 85,
  trainingPerformance: 88,

  coachFeedback:
    "Un exemple de fiabilité. Peut être trop prudent dans ses sorties aériennes.",
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

export default terStegen;
