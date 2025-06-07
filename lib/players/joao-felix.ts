import { Player } from "../player.model";

const joaoFelix: Player = {
  id: "player-017",
  name: "João Félix",
  age: 24,
  nationality: "Portugal",
  position: ["AC", "AM", "AML", "AMR"], // Polyvalent offensif
  preferredFoot: "right",
  height: 181,
  weight: 70,
  avatarUrl: "https://example.com/avatars/joao_felix.jpg",
  clubId: 11, // FC Barcelone prêt

  physical: {
    acceleration: 15,
    pace: 14,
    stamina: 12,
    strength: 9,
    balance: 14,
    agility: 16,
    jumping: 10,
    fitness: 12,
  },

  technical: {
    finishing: 15,
    passing: 16,
    tackling: 6,
    dribbling: 17,
    firstTouch: 16,
    longShots: 14,
    heading: 11,
    technique: 17,
    ballControl: 17,
    vision: 15,
    positioning: 14,
    crossing: 12,
    setPieces: 12,
    penalties: 11,
  },

  mental: {
    composure: 14,
    anticipation: 13,
    decisions: 13,
    determination: 10,
    flair: 18,
    leadership: 8,
    aggression: 7,
    concentration: 12,
    teamwork: 10,
    workRate: 9,
    offTheBall: 14,
    bravery: 9,
  },

  personality: {
    ego: 75,
    rageTrigger: 25,
    morale: 75,
    momentumBoost: 65,
    loyalty: 50,
    professionalism: 60,
    consistency: 68,
    adaptability: 70,
    fanFavorite: 80,
    coachAffinity: 65,
  },

  potential: 170,
  currentAbility: 145,
  isInjured: false,
  contract: {
    salary: 900000,
    endDate: "2026-06-30",
    releaseClause: 100000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelone",
      appearances: 29,
      goals: 8,
      assists: 7,
      yellowCards: 3,
      redCards: 0,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Annoncé comme un prodige à Benfica, João Félix a connu des hauts et des bas à l’Atlético Madrid. Il rebondit à Barcelone où sa créativité est mieux exploitée.",
  personalityTraits: ["flair player", "media attention magnet"],

  fatigue: 25,
  form: 74,
  morale: 75,
  trainingPerformance: 78,

  coachFeedback:
    "Talent pur, mais doit apprendre à mieux s’intégrer dans les systèmes exigeants.",
  coachTrustLevel: 75,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default joaoFelix;
