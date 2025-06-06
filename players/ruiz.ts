import { Player } from "../player.model";

const fabianRuiz: Player = {
  id: "player-002",
  name: "Fabián Ruiz",
  age: 28,
  nationality: "Spain",
  position: ["MC"],
  preferredFoot: "left",
  height: 189,
  weight: 76,
  avatarUrl: "https://example.com/avatars/fabian_ruiz.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 11,
    pace: 12,
    stamina: 16,
    strength: 13,
    balance: 14,
    agility: 13,
    jumping: 12,
    fitness: 15,
  },

  technical: {
    finishing: 11,
    passing: 17,
    tackling: 13,
    dribbling: 14,
    firstTouch: 16,
    longShots: 17,
    heading: 10,
    technique: 17,
    ballControl: 16,
    vision: 17,
    positioning: 15,
    crossing: 12,
    setPieces: 13,
    penalties: 12,
  },

  mental: {
    composure: 16,
    anticipation: 15,
    decisions: 16,
    determination: 14,
    flair: 13,
    leadership: 11,
    aggression: 10,
    concentration: 15,
    teamwork: 16,
    workRate: 15,
    offTheBall: 14,
    bravery: 13,
  },

  personality: {
    ego: 30,
    rageTrigger: 15,
    morale: 82,
    momentumBoost: 60,
    loyalty: 75,
    professionalism: 85,
    consistency: 80,
    adaptability: 70,
    fanFavorite: 50,
    coachAffinity: 75,
  },

  potential: 165,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 550000, // €/mois (estimation)
    endDate: "2027-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 30,
      goals: 4,
      assists: 6,
      yellowCards: 3,
      redCards: 0,
      avgRating: 6.9,
    },
  ],

  backgroundStory:
    "Formé au Betis, puis star à Naples, il rejoint le PSG en 2022. Milieu élégant, gaucher technique, précieux à la construction.",
  personalityTraits: ["intelligent", "team player"],

  fatigue: 15,
  form: 75,
  morale: 82,
  trainingPerformance: 85,

  coachFeedback:
    "Très bon dans la gestion du tempo et le jeu court-long. Doit accélérer plus dans les zones décisives.",
  coachTrustLevel: 85,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default fabianRuiz;
