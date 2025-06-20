export interface Exercise {
  id: number;
  name: string;
  exerciseValue: string;
  series: number;
}

export interface TechnicalSheet {
  id: number;
  name: string;
  exercises: Exercise[];
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  technicalSheets: TechnicalSheet[];
}