import { Player } from "../player.model";

const andreasChristensen: Player = {
  id: "player-006",
  name: "Andreas Christensen",
  age: 28,
  nationality: "Denmark",
  position: ["CB"],
  preferredFoot: "right",
  height: 187,
  weight: 82,
  avatarUrl: "https://example.com/avatars/christensen.jpg",
  clubId: 20, // FC Barcelone

  physical: {
    acceleration: 13,
    pace: 13,
    stamina: 14,
    strength: 15,
    balance: 13,
    agility: 12,
    jumping: 16,
    fitness: 15,
  },

  technical: {
    finishing: 5,
    passing: 14,
    tackling: 16,
    dribbling: 9,
    firstTouch: 12,
    longShots: 7,
    heading: 14,
    technique: 11,
    ballControl: 12,
    vision: 13,
    positioning: 16,
    crossing: 5,
    setPieces: 6,
    penalties: 5,
  },

  mental: {
    composure: 15,
    anticipation: 14,
    decisions: 15,
    determination: 14,
    flair: 4,
    leadership: 13,
    aggression: 12,
    concentration: 15,
    teamwork: 15,
    workRate: 13,
    offTheBall: 8,
    bravery: 14,
  },

  personality: {
    ego: 20,
    rageTrigger: 10,
    morale: 82,
    momentumBoost: 55,
    loyalty: 85,
    professionalism: 90,
    consistency: 90,
    adaptability: 80,
    fanFavorite: 65,
    coachAffinity: 88,
  },

  potential: 155,
  currentAbility: 150,
  isInjured: false,
  contract: {
    salary: 400000, // €/mois
    endDate: "2026-06-30",
    releaseClause: 80000000,
  },

  seasonStats: [
    {
      year: 2024,
      team: "FC Barcelona",
      appearances: 30,
      goals: 1,
      assists: 1,
      yellowCards: 3,
      redCards: 0,
      avgRating: 7.0,
    },
  ],

  backgroundStory:
    "Formé à Chelsea, Christensen est un défenseur calme et intelligent. Depuis son arrivée au Barça, il s’est imposé par sa régularité et sa capacité à relancer proprement.",
  personalityTraits: ["calm", "tactically intelligent", "loyal"],

  fatigue: 20,
  form: 75,
  morale: 82,
  trainingPerformance: 85,

  coachFeedback:
    "Un joueur très fiable, rarement en difficulté. Pas un leader vocal, mais il rassure son équipe par sa sérénité.",
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

export default andreasChristensen;
