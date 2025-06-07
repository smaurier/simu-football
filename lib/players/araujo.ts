import { Player } from "../player.model";

const araujo: Player = {
  id: "player-001",
  name: "Ronald Araújo",
  age: 25,
  nationality: "Uruguay",
  position: ["DC"], // Défenseur central
  preferredFoot: "right",
  height: 188,
  weight: 79,
  avatarUrl: "https://example.com/avatars/araujo.jpg",
  clubId: 20, // Par exemple : FC Barcelona

  physical: {
    acceleration: 13,
    pace: 15,
    stamina: 14,
    strength: 17,
    balance: 13,
    agility: 12,
    jumping: 18,
    fitness: 15,
  },

  technical: {
    finishing: 5,
    passing: 13,
    tackling: 17,
    dribbling: 9,
    firstTouch: 11,
    longShots: 6,
    heading: 16,
    technique: 10,
    ballControl: 12,
    vision: 11,
    positioning: 15,
    crossing: 6,
    setPieces: 5,
    penalties: 7,
  },

  mental: {
    composure: 14,
    anticipation: 16,
    decisions: 13,
    determination: 16,
    flair: 6,
    leadership: 14,
    aggression: 15,
    concentration: 15,
    teamwork: 16,
    workRate: 17,
    offTheBall: 9,
    bravery: 17,
  },

  personality: {
    ego: 30,
    rageTrigger: 35,
    morale: 85,
    momentumBoost: 70,
    loyalty: 80,
    professionalism: 80,
    consistency: 75,
    adaptability: 65,
    fanFavorite: 80,
    coachAffinity: 85,
  },

  potential: 165,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 500000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 100_000_000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 32,
      goals: 2,
      assists: 1,
      yellowCards: 7,
      redCards: 1,
      avgRating: 7.3,
    },
  ],

  backgroundStory:
    "Né à Rivera en Uruguay, Araújo est un défenseur central robuste, formé à Boston River avant de s'imposer au Barça. Reconnu pour ses tacles autoritaires et son jeu aérien, il est devenu un pilier de la défense catalane.",
  personalityTraits: ["defensive rock", "leader in the making"],

  fatigue: 18,
  form: 79,
  morale: 85,
  trainingPerformance: 88,

  coachFeedback:
    "Solide, discipliné et fiable, il rassure toute la ligne défensive. Peut progresser dans la relance.",
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

export default araujo;
