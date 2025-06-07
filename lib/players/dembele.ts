import { Player } from "../player.model";

const dembele: Player = {
  id: "player-008",
  name: "Ousmane Dembélé",
  age: 27,
  nationality: "France",
  position: ["RW"], // Ailier droit
  preferredFoot: "both",
  height: 178,
  weight: 67,
  avatarUrl: "https://example.com/avatars/dembele.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 20,
    pace: 19,
    stamina: 15,
    strength: 10,
    balance: 13,
    agility: 18,
    jumping: 11,
    fitness: 14,
  },

  technical: {
    finishing: 13,
    passing: 14,
    tackling: 7,
    dribbling: 19,
    firstTouch: 15,
    longShots: 12,
    heading: 8,
    technique: 18,
    ballControl: 17,
    vision: 14,
    positioning: 13,
    crossing: 16,
    setPieces: 10,
    penalties: 11,
  },

  mental: {
    composure: 12,
    anticipation: 13,
    decisions: 11,
    determination: 14,
    flair: 19,
    leadership: 8,
    aggression: 7,
    concentration: 11,
    teamwork: 12,
    workRate: 13,
    offTheBall: 16,
    bravery: 10,
  },

  personality: {
    ego: 70,
    rageTrigger: 30,
    morale: 82,
    momentumBoost: 75,
    loyalty: 60,
    professionalism: 55,
    consistency: 50,
    adaptability: 80,
    fanFavorite: 75,
    coachAffinity: 60,
  },

  potential: 170,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 800000, // €/mois
    endDate: "2028-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 28,
      goals: 6,
      assists: 9,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.2,
    },
  ],

  backgroundStory:
    "Passé par Rennes, Dortmund, Barcelone, Dembélé est l’un des joueurs les plus imprévisibles d’Europe, aussi génial qu’irrégulier.",
  personalityTraits: ["mercurial", "two-footed", "injury-prone"],

  fatigue: 20,
  form: 76,
  morale: 82,
  trainingPerformance: 70,

  coachFeedback:
    "Peut déséquilibrer n’importe quelle défense, mais manque parfois d’impact sur la durée.",
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

export default dembele;
