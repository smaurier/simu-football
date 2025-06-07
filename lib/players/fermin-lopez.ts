import { Player } from "../player.model";

const fermin: Player = {
  id: "player-010",
  name: "Fermín López",
  age: 21,
  nationality: "Spain",
  position: ["MOC", "MC"], // Milieu offensif ou central
  preferredFoot: "right",
  height: 176,
  weight: 68,
  avatarUrl: "https://example.com/avatars/fermin.jpg",
  clubId: 20, // FC Barcelona

  physical: {
    acceleration: 15,
    pace: 14,
    stamina: 14,
    strength: 11,
    balance: 15,
    agility: 16,
    jumping: 10,
    fitness: 14,
  },

  technical: {
    finishing: 13,
    passing: 14,
    tackling: 10,
    dribbling: 16,
    firstTouch: 15,
    longShots: 14,
    heading: 9,
    technique: 15,
    ballControl: 15,
    vision: 14,
    positioning: 13,
    crossing: 12,
    setPieces: 11,
    penalties: 10,
  },

  mental: {
    composure: 12,
    anticipation: 13,
    decisions: 13,
    determination: 15,
    flair: 15,
    leadership: 9,
    aggression: 11,
    concentration: 12,
    teamwork: 14,
    workRate: 14,
    offTheBall: 13,
    bravery: 13,
  },

  personality: {
    ego: 45,
    rageTrigger: 18,
    morale: 82,
    momentumBoost: 60,
    loyalty: 80,
    professionalism: 78,
    consistency: 70,
    adaptability: 72,
    fanFavorite: 60,
    coachAffinity: 82,
  },

  potential: 155,
  currentAbility: 138,
  isInjured: false,
  contract: {
    salary: 150000,
    endDate: "2027-06-30",
    releaseClause: 60000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 29,
      goals: 5,
      assists: 4,
      yellowCards: 4,
      redCards: 0,
      avgRating: 6.8,
    },
  ],

  backgroundStory:
    "Issu de la Masia, Fermín s’est imposé par sa fougue et sa qualité technique. Milieu travailleur, il a su profiter des blessures pour gagner du temps de jeu.",
  personalityTraits: ["high energy", "late bloomer"],

  fatigue: 20,
  form: 76,
  morale: 82,
  trainingPerformance: 85,

  coachFeedback: "Très mobile et appliqué. Encore irrégulier mais prometteur.",
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

export default fermin;
