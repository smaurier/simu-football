import { Player } from "../player.model";

const koloMuani: Player = {
  id: "player-019",
  name: "Randal Kolo Muani",
  age: 25,
  nationality: "France",
  position: ["ST"],
  preferredFoot: "right",
  height: 187,
  weight: 73,
  avatarUrl: "https://example.com/avatars/kolo_muani.jpg",
  clubId: 10, // PSG

  physical: {
    acceleration: 17,
    pace: 17,
    stamina: 14,
    strength: 12,
    balance: 13,
    agility: 16,
    jumping: 13,
    fitness: 13,
  },

  technical: {
    finishing: 14,
    passing: 12,
    tackling: 6,
    dribbling: 16,
    firstTouch: 14,
    longShots: 10,
    heading: 13,
    technique: 15,
    ballControl: 14,
    vision: 12,
    positioning: 15,
    crossing: 11,
    setPieces: 5,
    penalties: 7,
  },

  mental: {
    composure: 14,
    anticipation: 13,
    decisions: 12,
    determination: 13,
    flair: 15,
    leadership: 9,
    aggression: 11,
    concentration: 12,
    teamwork: 14,
    workRate: 15,
    offTheBall: 15,
    bravery: 13,
  },

  personality: {
    ego: 45,
    rageTrigger: 25,
    morale: 75,
    momentumBoost: 70,
    loyalty: 65,
    professionalism: 75,
    consistency: 70,
    adaptability: 60,
    fanFavorite: 55,
    coachAffinity: 75,
  },

  potential: 160,
  currentAbility: 148,
  isInjured: false,
  contract: {
    salary: 700000, // €/mois
    endDate: "2028-06-30",
    releaseClause: undefined,
  },

  seasonStats: [
    {
      year: 2024,
      team: "PSG",
      appearances: 32,
      goals: 11,
      assists: 6,
      yellowCards: 3,
      redCards: 0,
      avgRating: 6.8,
    },
  ],

  backgroundStory:
    "Révélé à Nantes, confirmé à Francfort, Kolo Muani est un attaquant polyvalent au style explosif et imprévisible. Son transfert record au PSG en a fait un joueur scruté.",
  personalityTraits: ["versatile", "big-game player", "streaky"],

  fatigue: 20,
  form: 70,
  morale: 75,
  trainingPerformance: 80,

  coachFeedback:
    "Très utile dans les appels en profondeur, mais manque parfois de lucidité dans le dernier geste.",
  coachTrustLevel: 82,
  wantsToLeave: false,

  dynamicFlags: {
    inContractDispute: false,
    homesick: false,
    wantsMorePlayTime: false,
    feelsUnloved: false,
    fanCriticized: true,
  },
};

export default koloMuani;
