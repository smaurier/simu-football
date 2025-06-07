import { Player } from "../player.model";

const romeu: Player = {
  id: "player-029",
  name: "Oriol Romeu",
  age: 32,
  nationality: "Spain",
  position: ["DMC", "MC"], // Milieu défensif central
  preferredFoot: "right",
  height: 183,
  weight: 83,
  avatarUrl: "https://example.com/avatars/romeu.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 9,
    pace: 10,
    stamina: 15,
    strength: 16,
    balance: 14,
    agility: 10,
    jumping: 13,
    fitness: 14,
  },

  technical: {
    finishing: 6,
    passing: 14,
    tackling: 16,
    dribbling: 10,
    firstTouch: 13,
    longShots: 9,
    heading: 12,
    technique: 13,
    ballControl: 12,
    vision: 11,
    positioning: 14,
    crossing: 9,
    setPieces: 8,
    penalties: 7,
  },

  mental: {
    composure: 14,
    anticipation: 13,
    decisions: 13,
    determination: 16,
    flair: 8,
    leadership: 13,
    aggression: 15,
    concentration: 14,
    teamwork: 15,
    workRate: 15,
    offTheBall: 11,
    bravery: 16,
  },

  personality: {
    ego: 35,
    rageTrigger: 30,
    morale: 70,
    momentumBoost: 50,
    loyalty: 80,
    professionalism: 85,
    consistency: 75,
    adaptability: 70,
    fanFavorite: 45,
    coachAffinity: 85,
  },

  potential: 135,
  currentAbility: 132,
  isInjured: false,
  contract: {
    salary: 250000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 50000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 21,
      goals: 1,
      assists: 1,
      yellowCards: 6,
      redCards: 0,
      avgRating: 6.8,
    },
  ],

  backgroundStory:
    "Formé au Barça, Romeu a roulé sa bosse en Premier League avant de revenir en Catalogne pour apporter son expérience et sa robustesse au milieu. C’est un joueur fiable, discret mais précieux.",
  personalityTraits: ["hard-working", "defensive anchor"],

  fatigue: 24,
  form: 68,
  morale: 70,
  trainingPerformance: 78,

  coachFeedback:
    "Travailleur de l’ombre, solide défensivement. Utile contre les équipes agressives mais limité à la relance.",
  coachTrustLevel: 74,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default romeu;
