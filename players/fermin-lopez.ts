import { Player } from "../player.model";

const ferminLopez: Player = {
  id: "player-015",
  name: "Fermín López",
  age: 20,
  nationality: "Spain",
  position: ["CM", "CAM"],
  preferredFoot: "right",
  height: 178,
  weight: 70,
  avatarUrl: "https://example.com/avatars/fermin_lopez.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 15,
    pace: 14,
    stamina: 15,
    strength: 12,
    balance: 15,
    agility: 15,
    jumping: 10,
    fitness: 14,
  },

  technical: {
    finishing: 11,
    passing: 16,
    tackling: 12,
    dribbling: 15,
    firstTouch: 16,
    longShots: 13,
    heading: 9,
    technique: 16,
    ballControl: 16,
    vision: 15,
    positioning: 14,
    crossing: 12,
    setPieces: 10,
    penalties: 9,
  },

  mental: {
    composure: 14,
    anticipation: 15,
    decisions: 14,
    determination: 15,
    flair: 14,
    leadership: 11,
    aggression: 10,
    concentration: 15,
    teamwork: 15,
    workRate: 15,
    offTheBall: 14,
    bravery: 13,
  },

  personality: {
    ego: 35,
    rageTrigger: 15,
    morale: 80,
    momentumBoost: 75,
    loyalty: 80,
    professionalism: 85,
    consistency: 80,
    adaptability: 85,
    fanFavorite: 65,
    coachAffinity: 80,
  },

  potential: 170,
  currentAbility: 140,
  isInjured: false,
  contract: {
    salary: 100000,
    endDate: "2028-06-30",
    releaseClause: 60000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 20,
      goals: 3,
      assists: 4,
      yellowCards: 3,
      redCards: 0,
      avgRating: 7.0,
    },
  ],

  backgroundStory:
    "Jeune milieu technique et complet, Fermín est une des pépites prometteuses issues de la Masia, réputé pour sa vision du jeu et son calme sous pression.",
  personalityTraits: ["intelligent", "calm", "ambitious"],

  fatigue: 20,
  form: 75,
  morale: 80,
  trainingPerformance: 78,

  coachFeedback:
    "Très prometteur. Son intelligence et sa technique pourraient en faire un futur titulaire dans l’équipe.",
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

export default ferminLopez;
