import { Player } from "../player.model";
const inakiPena: Player = {
  id: "player-004",
  name: "Iñaki Peña",
  age: 25,
  nationality: "Spain",
  position: ["GK"],
  preferredFoot: "right",
  height: 184,
  weight: 78,
  avatarUrl: "https://example.com/avatars/inaki_pena.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 9,
    pace: 8,
    stamina: 8,
    strength: 11,
    balance: 13,
    agility: 14,
    jumping: 13,
    fitness: 12,
  },

  technical: {
    finishing: 1,
    passing: 12,
    tackling: 5,
    dribbling: 6,
    firstTouch: 12,
    longShots: 2,
    heading: 2,
    technique: 11,
    ballControl: 11,
    vision: 10,
    positioning: 14,
    crossing: 2,
    setPieces: 1,
    penalties: 1,
  },

  mental: {
    composure: 13,
    anticipation: 13,
    decisions: 12,
    determination: 12,
    flair: 4,
    leadership: 9,
    aggression: 7,
    concentration: 13,
    teamwork: 11,
    workRate: 10,
    offTheBall: 3,
    bravery: 12,
  },

  personality: {
    ego: 25,
    rageTrigger: 10,
    morale: 70,
    momentumBoost: 30,
    loyalty: 75,
    professionalism: 80,
    consistency: 70,
    adaptability: 65,
    fanFavorite: 40,
    coachAffinity: 80,
  },

  potential: 135,
  currentAbility: 122,
  isInjured: false,
  contract: {
    salary: 150000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 60000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 10,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      avgRating: 6.7,
    },
  ],

  backgroundStory:
    "Formé à La Masia, Iñaki Peña est devenu la doublure officielle de Ter Stegen après des prêts. Fiable dans les matchs de coupe, mais encore perfectible.",
  personalityTraits: ["hard-working", "team-player"],

  fatigue: 10,
  form: 65,
  morale: 70,
  trainingPerformance: 80,

  coachFeedback:
    "Gardien sérieux et appliqué. Bonne relance au pied mais encore timide dans ses interventions.",
  coachTrustLevel: 75,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: true,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default inakiPena;
