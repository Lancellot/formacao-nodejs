import {
  PlayerIntaface,
  InsertPlayerInterface,
} from "../interfaces/players-interface";

const database: PlayerIntaface[] = [
  {
    id: 1,
    name: "David Beckham",
    club: "Retired",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 85,
      Pace: 76,
      Shooting: 82,
      Passing: 90,
      Dribbling: 84,
      Defending: 70,
      Physical: 72,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 82,
      Shooting: 91,
      Passing: 78,
      Dribbling: 84,
      Defending: 34,
      Physical: 77,
    },
  },
  {
    id: 3,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 80,
      Shooting: 90,
      Passing: 91,
      Dribbling: 94,
      Defending: 38,
      Physical: 64,
    },
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 97,
      Shooting: 89,
      Passing: 80,
      Dribbling: 92,
      Defending: 36,
      Physical: 76,
    },
  },
  {
    id: 5,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 74,
      Shooting: 86,
      Passing: 93,
      Dribbling: 87,
      Defending: 64,
      Physical: 78,
    },
  },
  {
    id: 6,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 89,
      Shooting: 94,
      Passing: 65,
      Dribbling: 80,
      Defending: 45,
      Physical: 88,
    },
  },
  {
    id: 7,
    name: "Neymar Jr",
    club: "Al Hilal",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 87,
      Pace: 85,
      Shooting: 83,
      Passing: 86,
      Dribbling: 92,
      Defending: 37,
      Physical: 58,
    },
  },
  {
    id: 8,
    name: "Luka Modrić",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 66,
      Shooting: 76,
      Passing: 89,
      Dribbling: 88,
      Defending: 72,
      Physical: 64,
    },
  },
  {
    id: 9,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 89,
      Pace: 78,
      Shooting: 60,
      Passing: 71,
      Dribbling: 72,
      Defending: 91,
      Physical: 86,
    },
  },
  {
    id: 10,
    name: "Thibaut Courtois",
    club: "Real Madrid",
    nationality: "Belgium",
    position: "Goalkeeper",
    statistics: {
      Overall: 90,
      Pace: 45,
      Shooting: 20,
      Passing: 58,
      Dribbling: 42,
      Defending: 15,
      Physical: 70,
    },
  },
  {
    id: 11,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 75,
      Shooting: 92,
      Passing: 78,
      Dribbling: 85,
      Defending: 45,
      Physical: 82,
    },
  },
  {
    id: 12,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 86,
      Pace: 79,
      Shooting: 78,
      Passing: 83,
      Dribbling: 85,
      Defending: 76,
      Physical: 81,
    },
  },
  {
    id: 13,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 91,
      Shooting: 87,
      Passing: 81,
      Dribbling: 88,
      Defending: 45,
      Physical: 76,
    },
  },
  {
    id: 14,
    name: "Casemiro",
    club: "Manchester United",
    nationality: "Brazil",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 63,
      Shooting: 73,
      Passing: 77,
      Dribbling: 72,
      Defending: 88,
      Physical: 86,
    },
  },
  {
    id: 15,
    name: "Rúben Dias",
    club: "Manchester City",
    nationality: "Portugal",
    position: "Defender",
    statistics: {
      Overall: 88,
      Pace: 74,
      Shooting: 51,
      Passing: 72,
      Dribbling: 68,
      Defending: 90,
      Physical: 84,
    },
  },
  {
    id: 16,
    name: "Sadio Mané",
    club: "Al Nassr",
    nationality: "Senegal",
    position: "Forward",
    statistics: {
      Overall: 86,
      Pace: 88,
      Shooting: 82,
      Passing: 78,
      Dribbling: 85,
      Defending: 45,
      Physical: 75,
    },
  },
  {
    id: 17,
    name: "João Cancelo",
    club: "Barcelona",
    nationality: "Portugal",
    position: "Defender",
    statistics: {
      Overall: 85,
      Pace: 85,
      Shooting: 68,
      Passing: 82,
      Dribbling: 84,
      Defending: 77,
      Physical: 72,
    },
  },
  {
    id: 18,
    name: "Marc-André ter Stegen",
    club: "Barcelona",
    nationality: "Germany",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 48,
      Shooting: 15,
      Passing: 70,
      Dribbling: 55,
      Defending: 18,
      Physical: 68,
    },
  },
];

export const findAllPlayer = async (): Promise<PlayerIntaface[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerIntaface | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (
  dataPlayer: PlayerIntaface
): Promise<PlayerIntaface> => {
  database.push(dataPlayer);
  return dataPlayer;
};

export const deletePlayer = async (id: number): Promise<PlayerIntaface[]> => {
  const index = database.findIndex((p) => p.id === id);

  if (index !== -1) {
    database.splice(index, 1);
  }
  return database;
};

export const patchPlayer = async (id: number): Promise<PlayerIntaface> => {
  const index = database.findIndex((p) => p.id === id);

  if (index !== -1) {
    database[index].name = "Teste Funcionou ";
  }
  return database[index];
};
