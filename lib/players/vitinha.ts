import { Player } from "../player.model";

const vitinha: Player = {
  id: "player-034",
  name: "Vitinha",
  age: 24,
  nationality: "Portugal",
  position: ["MC", "AMC"], // Milieu axial ou offensif
  preferredFoot: "right",
  height: 172,
  weight: 64,
  avatarUrl: "https://example.com/avatars/vitinha.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 15,
    pace: 14,
    stamina: 15,
    strength: 9,
    balance: 17,
    agility: 16,
    jumping: 7,
    fitness: 14,
  },

  technical: {
    finishing: 10,
    passing: 16,
    tackling: 11,
    dribbling: 15,
    firstTouch: 15,
    longShots: 13,
    heading: 8,
    technique: 17,
    ballControl: 16,
    vision: 15,
    positioning: 13,
    crossing: 12,
    setPieces: 11,
    penalties: 9,
  },

  mental: {
    composure: 14,
    anticipation: 13,
    decisions: 14,
    determination: 13,
    flair: 16,
    leadership: 9,
    aggression: 11,
    concentration: 13,
    teamwork: 14,
    workRate: 14,
    offTheBall: 13,
    bravery: 10,
  },

  personality: {
    ego: 45,
    rageTrigger: 15,
    morale: 75,
    momentumBoost: 60,
    loyalty: 70,
    professionalism: 80,
    consistency: 78,
    adaptability: 80,
    fanFavorite: 60,
    coachAffinity: 82,
  },

  potential: 160,
  currentAbility: 145,
  isInjured: false,
  contract: {
    salary: 450000, // €/mois
    endDate: "2027-06-30",
    releaseClause: 90000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 33,
      goals: 4,
      assists: 7,
      yellowCards: 3,
      redCards: 0,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Issu du FC Porto, Vitinha s’est imposé au PSG par son intelligence de jeu et sa capacité à combiner rapidement. Il est apprécié pour son style élégant et sa vision du jeu.",
  personalityTraits: ["creative passer", "tempo dictator"],

  fatigue: 18,
  form: 76,
  morale: 79,
  trainingPerformance: 84,

  coachFeedback:
    "Très fluide dans les transitions, bon pressing. Doit encore gagner en impact physique.",
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

export default vitinha;
