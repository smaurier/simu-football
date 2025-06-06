import { Player } from "../player.model";
const ugarte: Player = {
  id: "player-002",
  name: "Manuel Ugarte",
  age: 23,
  nationality: "Uruguay",
  position: ["CDM"],
  preferredFoot: "right",
  height: 182,
  weight: 77,
  avatarUrl: "https://example.com/avatars/ugarte.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 14,
    pace: 13,
    stamina: 17,
    strength: 15,
    balance: 14,
    agility: 13,
    jumping: 12,
    fitness: 16,
  },

  technical: {
    finishing: 7,
    passing: 14,
    tackling: 18,
    dribbling: 11,
    firstTouch: 13,
    longShots: 8,
    heading: 11,
    technique: 13,
    ballControl: 14,
    vision: 12,
    positioning: 15,
    crossing: 7,
    setPieces: 6,
    penalties: 6,
  },

  mental: {
    composure: 13,
    anticipation: 15,
    decisions: 13,
    determination: 17,
    flair: 9,
    leadership: 12,
    aggression: 18,
    concentration: 14,
    teamwork: 17,
    workRate: 18,
    offTheBall: 11,
    bravery: 17,
  },

  personality: {
    ego: 25,
    rageTrigger: 50,
    morale: 78,
    momentumBoost: 60,
    loyalty: 85,
    professionalism: 80,
    consistency: 82,
    adaptability: 70,
    fanFavorite: 50,
    coachAffinity: 85,
  },

  potential: 160,
  currentAbility: 145,
  isInjured: false,
  contract: {
    salary: 550000,
    endDate: "2028-06-30",
    releaseClause: 60000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 32,
      goals: 1,
      assists: 2,
      yellowCards: 11,
      redCards: 1,
      avgRating: 6.9,
    },
  ],

  backgroundStory:
    "Débarqué du Sporting CP après une saison étincelante en Europe, Ugarte s’impose comme un récupérateur infatigable au PSG.",
  personalityTraits: ["hard-working", "aggressive", "low profile"],

  fatigue: 15,
  form: 72,
  morale: 78,
  trainingPerformance: 85,

  coachFeedback:
    "Travailleur acharné, précieux à la récupération mais trop impulsif par moments.",
  coachTrustLevel: 87,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: true,
  },
};

export default ugarte;
