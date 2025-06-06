import { Player } from "../player.model";

const oriolRomeu: Player = {
  id: "player-014",
  name: "Oriol Romeu",
  age: 33,
  nationality: "Spain",
  position: ["CDM", "CM"],
  preferredFoot: "right",
  height: 182,
  weight: 79,
  avatarUrl: "https://example.com/avatars/oriol_romeu.jpg",
  clubId: 20, // FC Barcelone (prêt ou historique)

  physical: {
    acceleration: 10,
    pace: 11,
    stamina: 15,
    strength: 14,
    balance: 14,
    agility: 12,
    jumping: 13,
    fitness: 14,
  },

  technical: {
    finishing: 6,
    passing: 14,
    tackling: 16,
    dribbling: 10,
    firstTouch: 13,
    longShots: 8,
    heading: 12,
    technique: 12,
    ballControl: 13,
    vision: 13,
    positioning: 15,
    crossing: 7,
    setPieces: 6,
    penalties: 5,
  },

  mental: {
    composure: 15,
    anticipation: 16,
    decisions: 16,
    determination: 15,
    flair: 7,
    leadership: 13,
    aggression: 14,
    concentration: 15,
    teamwork: 16,
    workRate: 16,
    offTheBall: 14,
    bravery: 14,
  },

  personality: {
    ego: 30,
    rageTrigger: 15,
    morale: 80,
    momentumBoost: 55,
    loyalty: 85,
    professionalism: 90,
    consistency: 85,
    adaptability: 75,
    fanFavorite: 60,
    coachAffinity: 80,
  },

  potential: 140,
  currentAbility: 135,
  isInjured: false,
  contract: {
    salary: 200000,
    endDate: "2025-06-30",
    releaseClause: 40000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 24,
      goals: 1,
      assists: 1,
      yellowCards: 5,
      redCards: 0,
      avgRating: 6.8,
    },
  ],

  backgroundStory:
    "Milieu défensif expérimenté, Romeu apporte de la stabilité et de la discipline au milieu barcelonais. Bon en couverture, il lit bien le jeu.",
  personalityTraits: ["disciplined", "team player", "veteran"],

  fatigue: 25,
  form: 74,
  morale: 80,
  trainingPerformance: 75,

  coachFeedback:
    "Un joueur sûr défensivement, fiable dans les tâches ingrates mais manque parfois de vitesse.",
  coachTrustLevel: 82,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default oriolRomeu;
