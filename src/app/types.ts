export interface Poll {
  id: number,
  question: string,
  results: number[],
  options: string[],
  image: string;
  voted: boolean;
}

export interface Voter {
  id: string;
  voted: number[];
}
