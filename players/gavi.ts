import { Player } from "../player.model";

const gavi: Player = {
  id: "player-013",
  name: "Gavi",
  age: 19,
  nationality: "Spain",
  position: ["CM", "CAM"],
  preferredFoot: "right",
  height: 173,
  weight: 67,
  avatarUrl: "https://example.com/avatars/gavi.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 16,
    pace: 15,
    stamina: 17,
    strength: 11,
    balance: 16,
    agility: 17,
    jumping: 10,
    fitness: 12,
  },

  technical: {
    finishing: 10,
    passing: 16,
    tackling: 15,
    dribbling: 16,
    firstTouch: 17,
    longShots: 12,
    heading: 7,
    technique: 17,
    ballControl: 17,
    vision: 16,
    positioning: 14,
    crossing: 11,
    setPieces: 9,
    penalties: 8,
  },

  mental: {
    composure: 15,
    anticipation: 16,
    decisions: 15,
    determination: 18,
    flair: 14,
    leadership: 13,
    aggression: 14,
    concentration: 15,
    teamwork: 16,
    workRate: 17,
    offTheBall: 13,
    bravery: 16,
  },

  personality: {
    ego: 35,
    rageTrigger: 25,
    morale: 85,
    momentumBoost: 80,
    loyalty: 85,
    professionalism: 88,
    consistency: 82,
    adaptability: 85,
    fanFavorite: 65,
    coachAffinity: 80,
  },

  potential: 185,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 250000,
    endDate: "2027-06-30",
    releaseClause: 700000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 30,
      goals: 3,
      assists: 5,
      yellowCards: 4,
      redCards: 0,
      avgRating: 7.1,
    },
  ],

  backgroundStory:
    "Prodige du centre de formation, Gavi impressionne par son énergie et son intelligence de jeu, s'imposant rapidement comme un titulaire incontournable.",
  personalityTraits: ["energetic", "fighter", "team player"],

  fatigue: 35,
  form: 76,
  morale: 82,
  trainingPerformance: 80,

  coachFeedback:
    "Un moteur infatigable au milieu, avec une maturité étonnante pour son âge. Très prometteur.",
  coachTrustLevel: 85,
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
