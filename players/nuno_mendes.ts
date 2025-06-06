import { Player } from "../player.model";
const nunoMendes: Player = {
  id: "player-002",
  name: "Nuno Mendes",
  age: 22,
  nationality: "Portugal",
  position: ["DL"], // défenseur gauche
  preferredFoot: "left",
  height: 176,
  weight: 70,
  avatarUrl: "https://example.com/avatars/nuno-mendes.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 18,
    pace: 18,
    stamina: 15,
    strength: 12,
    balance: 14,
    agility: 17,
    jumping: 12,
    fitness: 13,
  },

  technical: {
    finishing: 8,
    passing: 13,
    tackling: 14,
    dribbling: 16,
    firstTouch: 13,
    longShots: 9,
    heading: 10,
    technique: 14,
    ballControl: 14,
    vision: 12,
    positioning: 13,
    crossing: 15,
    setPieces: 7,
    penalties: 6,
  },

  mental: {
    composure: 13,
    anticipation: 15,
    decisions: 13,
    determination: 14,
    flair: 12,
    leadership: 9,
    aggression: 11,
    concentration: 13,
    teamwork: 15,
    workRate: 15,
    offTheBall: 14,
    bravery: 13,
  },

  personality: {
    ego: 35,
    rageTrigger: 20,
    morale: 90,
    momentumBoost: 70,
    loyalty: 75,
    professionalism: 85,
    consistency: 80,
    adaptability: 80,
    fanFavorite: 70,
    coachAffinity: 85,
  },

  potential: 175,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 450000, // €/mois
    endDate: "2027-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 26,
      goals: 1,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Débarqué du Sporting CP, Nuno Mendes s’impose rapidement comme l’un des meilleurs latéraux offensifs d’Europe.",
  personalityTraits: ["professional", "quiet leader"],

  fatigue: 12,
  form: 82,
  morale: 90,
  trainingPerformance: 88,

  coachFeedback:
    "Latéral moderne très fiable. Apporte de la largeur et beaucoup de percussion.",
  coachTrustLevel: 88,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default nunoMendes;
