import { Player } from "../player.model";
const vitinha: Player = {
  id: "player-002",
  name: "Vitinha",
  age: 24,
  nationality: "Portugal",
  position: ["MC"],
  preferredFoot: "right",
  height: 172,
  weight: 64,
  avatarUrl: "https://example.com/avatars/vitinha.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 16,
    pace: 14,
    stamina: 17,
    strength: 9,
    balance: 17,
    agility: 16,
    jumping: 9,
    fitness: 14,
  },

  technical: {
    finishing: 10,
    passing: 17,
    tackling: 13,
    dribbling: 16,
    firstTouch: 17,
    longShots: 14,
    heading: 7,
    technique: 17,
    ballControl: 16,
    vision: 17,
    positioning: 15,
    crossing: 12,
    setPieces: 13,
    penalties: 11,
  },

  mental: {
    composure: 16,
    anticipation: 15,
    decisions: 16,
    determination: 15,
    flair: 15,
    leadership: 10,
    aggression: 12,
    concentration: 14,
    teamwork: 17,
    workRate: 17,
    offTheBall: 14,
    bravery: 12,
  },

  personality: {
    ego: 30,
    rageTrigger: 10,
    morale: 90,
    momentumBoost: 70,
    loyalty: 75,
    professionalism: 85,
    consistency: 88,
    adaptability: 80,
    fanFavorite: 60,
    coachAffinity: 85,
  },

  potential: 170,
  currentAbility: 155,
  isInjured: false,
  contract: {
    salary: 550000, // €/mois
    endDate: "2027-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 36,
      goals: 5,
      assists: 6,
      yellowCards: 5,
      redCards: 0,
      avgRating: 7.2,
    },
  ],

  backgroundStory:
    "Formé à Porto, passé brièvement par Wolverhampton, Vitinha explose à Paris comme meneur de jeu moderne, technique et travailleur.",
  personalityTraits: ["perfectionist", "quiet leader", "press-resistant"],

  fatigue: 12,
  form: 82,
  morale: 90,
  trainingPerformance: 92,

  coachFeedback: "Élément clé de l’organisation, excellent entre les lignes.",
  coachTrustLevel: 92,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: false,
  },
};

export default vitinha;
