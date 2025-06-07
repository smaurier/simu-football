import { Player } from "../player.model";

const gavi: Player = {
  id: "player-011",
  name: "Gavi",
  age: 20,
  nationality: "Spain",
  position: ["MC", "MOC", "MG"], // Milieu central, offensif, ou gauche
  preferredFoot: "right",
  height: 173,
  weight: 70,
  avatarUrl: "https://example.com/avatars/gavi.jpg",
  clubId: 20, // FC Barcelona

  physical: {
    acceleration: 15,
    pace: 14,
    stamina: 17,
    strength: 12,
    balance: 17,
    agility: 16,
    jumping: 10,
    fitness: 15,
  },

  technical: {
    finishing: 10,
    passing: 15,
    tackling: 13,
    dribbling: 15,
    firstTouch: 14,
    longShots: 12,
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
    composure: 13,
    anticipation: 14,
    decisions: 13,
    determination: 17,
    flair: 13,
    leadership: 10,
    aggression: 17,
    concentration: 14,
    teamwork: 16,
    workRate: 17,
    offTheBall: 13,
    bravery: 16,
  },

  personality: {
    ego: 40,
    rageTrigger: 25,
    morale: 85,
    momentumBoost: 70,
    loyalty: 85,
    professionalism: 78,
    consistency: 82,
    adaptability: 75,
    fanFavorite: 75,
    coachAffinity: 88,
  },

  potential: 172,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 500000,
    endDate: "2026-06-30",
    releaseClause: 1000000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 18,
      goals: 2,
      assists: 4,
      yellowCards: 6,
      redCards: 0,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Issu de la Masia, Gavi s’est rapidement imposé comme un titulaire en Liga et en sélection. Sa combativité et son intelligence de jeu en font un joueur très apprécié.",
  personalityTraits: ["combative", "natural leader", "early bloomer"],

  fatigue: 18,
  form: 81,
  morale: 85,
  trainingPerformance: 88,

  coachFeedback:
    "Un jeune déjà mature, capable de mettre de l’impact tout en gardant la tête froide.",
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

export default gavi;
