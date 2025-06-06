import { Player } from "../player.model";
const julesKounde: Player = {
  id: "player-005",
  name: "Jules Koundé",
  age: 25,
  nationality: "France",
  position: ["DC", "DR"], // Peut aussi jouer DR
  preferredFoot: "right",
  height: 180,
  weight: 75,
  avatarUrl: "https://example.com/avatars/kounde.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 17,
    pace: 17,
    stamina: 16,
    strength: 14,
    balance: 14,
    agility: 16,
    jumping: 16,
    fitness: 15,
  },

  technical: {
    finishing: 5,
    passing: 14,
    tackling: 16,
    dribbling: 13,
    firstTouch: 13,
    longShots: 6,
    heading: 14,
    technique: 13,
    ballControl: 14,
    vision: 11,
    positioning: 14,
    crossing: 10,
    setPieces: 5,
    penalties: 4,
  },

  mental: {
    composure: 13,
    anticipation: 15,
    decisions: 13,
    determination: 14,
    flair: 6,
    leadership: 9,
    aggression: 15,
    concentration: 12,
    teamwork: 14,
    workRate: 15,
    offTheBall: 10,
    bravery: 13,
  },

  personality: {
    ego: 50,
    rageTrigger: 40,
    morale: 80,
    momentumBoost: 60,
    loyalty: 65,
    professionalism: 75,
    consistency: 70,
    adaptability: 70,
    fanFavorite: 60,
    coachAffinity: 65,
  },

  potential: 165,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 700000,
    endDate: "2027-06-30",
    releaseClause: 100000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 32,
      goals: 1,
      assists: 3,
      yellowCards: 5,
      redCards: 0,
      avgRating: 7.0,
    },
  ],

  backgroundStory:
    "Ancien espoir de Bordeaux, confirmé à Séville puis transféré au Barça. Capable d'évoluer axial ou latéral droit selon les besoins de l'équipe.",
  personalityTraits: ["versatile", "aggressive", "focused"],

  fatigue: 15,
  form: 75,
  morale: 80,
  trainingPerformance: 78,

  coachFeedback:
    "Polyvalent et physique, parfois trop impulsif. Gagne en sérénité avec l’expérience.",
  coachTrustLevel: 80,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default julesKounde;
