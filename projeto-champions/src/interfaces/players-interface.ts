export interface PlayerIntaface {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: StatisticsInterface;
}

interface StatisticsInterface {
  Overall: number;
  Pace: number;
  Shooting: number;
  Passing: number;
  Dribbling: number;
  Defending: number;
  Physical: number;
}

export interface InsertPlayerInterface {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
}
