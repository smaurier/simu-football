import { Player } from "../player.model";

const lamineYamal: Player = {
  id: "player-019",
  name: "Lamine Yamal",
  age: 17,
  nationality: "Spain",
  position: ["RW", "LW", "AM"],
  preferredFoot: "right",
  height: 170,
  weight: 64,
  avatarUrl: "https://example.com/avatars/lamine_yamal.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 19,
    pace: 20,
    stamina: 16,
    strength: 10,
    balance: 15,
    agility: 18,
    jumping: 10,
    fitness: 14,
  },

  technical: {
    finishing: 12,
    passing: 13,
    tackling: 8,
    dribbling: 18,
    firstTouch: 17,
    longShots: 10,
    heading: 6,
    technique: 17,
    ballControl: 18,
    vision: 14,
    positioning: 12,
    crossing: 15,
    setPieces: 10,
    penalties: 9,
  },

  mental: {
    composure: 14,
    anticipation: 15,
    decisions: 13,
    determination: 16,
    flair: 16,
    leadership: 9,
    aggression: 10,
    concentration: 14,
    teamwork: 14,
    workRate: 15,
    offTheBall: 15,
    bravery: 15,
  },

  personality: {
    ego: 35,
    rageTrigger: 20,
    morale: 80,
    momentumBoost: 85,
    loyalty: 90,
    professionalism: 70,
    consistency: 70,
    adaptability: 90,
    fanFavorite: 60,
    coachAffinity: 75,
  },

  potential: 190,
  currentAbility: 125,
  isInjured: false,
  contract: {
    salary: 80000,
    endDate: "2030-06-30",
    releaseClause: 500000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelone",
      appearances: 10,
      goals: 1,
      assists: 3,
      yellowCards: 0,
      redCards: 0,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Jeune ailier explosif et prometteur formé au centre de formation du Barça, Lamine Yamal impressionne par sa technique et sa vitesse fulgurante.",
  personalityTraits: ["explosive", "talented", "eager"],

  fatigue: 30,
  form: 75,
  morale: 80,
  trainingPerformance: 78,

  coachFeedback:
    "Talent brut à polir, Lamine montre des signes d'un futur grand joueur s’il continue sa progression.",
  coachTrustLevel: 70,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: true,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default lamineYamal;
