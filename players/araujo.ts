import { Player } from "../player.model";

const ronaldAraujo: Player = {
  id: "player-005",
  name: "Ronald Araújo",
  age: 25,
  nationality: "Uruguay",
  position: ["CB", "RB"],
  preferredFoot: "right",
  height: 188,
  weight: 91,
  avatarUrl: "https://example.com/avatars/araujo.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 14,
    pace: 15,
    stamina: 13,
    strength: 18,
    balance: 14,
    agility: 12,
    jumping: 18,
    fitness: 16,
  },

  technical: {
    finishing: 6,
    passing: 12,
    tackling: 17,
    dribbling: 8,
    firstTouch: 11,
    longShots: 7,
    heading: 17,
    technique: 10,
    ballControl: 11,
    vision: 10,
    positioning: 15,
    crossing: 6,
    setPieces: 7,
    penalties: 6,
  },

  mental: {
    composure: 14,
    anticipation: 15,
    decisions: 14,
    determination: 16,
    flair: 5,
    leadership: 14,
    aggression: 15,
    concentration: 15,
    teamwork: 14,
    workRate: 16,
    offTheBall: 9,
    bravery: 18,
  },

  personality: {
    ego: 25,
    rageTrigger: 30,
    morale: 85,
    momentumBoost: 50,
    loyalty: 80,
    professionalism: 90,
    consistency: 85,
    adaptability: 75,
    fanFavorite: 70,
    coachAffinity: 85,
  },

  potential: 165,
  currentAbility: 155,
  isInjured: false,
  contract: {
    salary: 500000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 100000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 32,
      goals: 2,
      assists: 1,
      yellowCards: 6,
      redCards: 1,
      avgRating: 7.2,
    },
  ],

  backgroundStory:
    "Défenseur central ultra-athlétique, Araújo s'est imposé comme un cadre défensif du Barça, grâce à son engagement physique et sa mentalité irréprochable.",
  personalityTraits: ["warrior", "big-game player", "loyal"],

  fatigue: 12,
  form: 78,
  morale: 85,
  trainingPerformance: 88,

  coachFeedback:
    "Un des piliers de la défense. Son physique impressionne, mais il progresse aussi tactiquement. A tendance à se précipiter parfois.",
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

export default ronaldAraujo;
