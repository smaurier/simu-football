import { Player } from "../player.model";

const goncaloRamos: Player = {
  id: "player-012",
  name: "Gonçalo Ramos",
  age: 23,
  nationality: "Portugal",
  position: ["AC"], // Avant-centre pur
  preferredFoot: "right",
  height: 185,
  weight: 79,
  avatarUrl: "https://example.com/avatars/goncalo_ramos.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 13,
    pace: 14,
    stamina: 14,
    strength: 15,
    balance: 13,
    agility: 12,
    jumping: 15,
    fitness: 14,
  },

  technical: {
    finishing: 16,
    passing: 11,
    tackling: 7,
    dribbling: 13,
    firstTouch: 14,
    longShots: 12,
    heading: 16,
    technique: 13,
    ballControl: 13,
    vision: 10,
    positioning: 15,
    crossing: 9,
    setPieces: 8,
    penalties: 14,
  },

  mental: {
    composure: 13,
    anticipation: 14,
    decisions: 13,
    determination: 15,
    flair: 11,
    leadership: 9,
    aggression: 14,
    concentration: 12,
    teamwork: 14,
    workRate: 15,
    offTheBall: 15,
    bravery: 15,
  },

  personality: {
    ego: 45,
    rageTrigger: 15,
    morale: 80,
    momentumBoost: 70,
    loyalty: 70,
    professionalism: 78,
    consistency: 75,
    adaptability: 72,
    fanFavorite: 60,
    coachAffinity: 80,
  },

  potential: 165,
  currentAbility: 145,
  isInjured: false,
  contract: {
    salary: 600000,
    endDate: "2028-06-30",
    releaseClause: 90000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 27,
      goals: 12,
      assists: 3,
      yellowCards: 2,
      redCards: 0,
      avgRating: 7.0,
    },
  ],

  backgroundStory:
    "Révélé à Benfica, Gonçalo Ramos s'est illustré à la Coupe du Monde 2022 avant de rejoindre le PSG. Attaquant travailleur, il combine puissance et efficacité dans la surface.",
  personalityTraits: ["hard-working", "poacher instinct"],

  fatigue: 22,
  form: 76,
  morale: 80,
  trainingPerformance: 85,

  coachFeedback:
    "Très bon dans la surface, utile en pressing. Doit encore progresser dans le jeu combiné.",
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

export default goncaloRamos;
