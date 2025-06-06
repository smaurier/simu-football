import { Player } from "../player.model";
const donnarumma: Player = {
  id: "player-001",
  name: "Gianluigi Donnarumma",
  age: 25,
  nationality: "Italy",
  position: ["GK"],
  preferredFoot: "right",
  height: 196,
  weight: 90,
  avatarUrl: "https://example.com/avatars/donnarumma.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 9,
    pace: 8,
    stamina: 12,
    strength: 16,
    balance: 13,
    agility: 15,
    jumping: 17,
    fitness: 14,
  },

  technical: {
    finishing: 3,
    passing: 11,
    tackling: 5,
    dribbling: 6,
    firstTouch: 10,
    longShots: 2,
    heading: 4,
    technique: 11,
    ballControl: 10,
    vision: 12,
    positioning: 16,
    crossing: 4,
    setPieces: 6,
    penalties: 5,
  },

  mental: {
    composure: 16,
    anticipation: 15,
    decisions: 15,
    determination: 17,
    flair: 6,
    leadership: 14,
    aggression: 8,
    concentration: 16,
    teamwork: 13,
    workRate: 12,
    offTheBall: 5,
    bravery: 17,
  },

  personality: {
    ego: 40,
    rageTrigger: 20,
    morale: 85,
    momentumBoost: 65,
    loyalty: 70,
    professionalism: 80,
    consistency: 85,
    adaptability: 75,
    fanFavorite: 65,
    coachAffinity: 80,
  },

  potential: 185,
  currentAbility: 163,
  isInjured: false,
  contract: {
    salary: 1000000, // €/mois
    endDate: "2026-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 35,
      goals: 0,
      assists: 0,
      yellowCards: 1,
      redCards: 0,
      avgRating: 7.0,
    },
  ],

  backgroundStory:
    "Prodige formé à l’AC Milan, Donnarumma est devenu titulaire à 16 ans. Transféré au PSG après un Euro 2020 triomphal.",
  personalityTraits: ["big-game player", "calm under pressure"],

  fatigue: 10,
  form: 78,
  morale: 85,
  trainingPerformance: 90,

  coachFeedback:
    "Rassurant sur sa ligne, mais doit mieux relancer sous pression.",
  coachTrustLevel: 90,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default donnarumma;
