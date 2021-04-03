export interface Poll extends PollForm {
  id: number,
  results: number[],
  voted: boolean;
}

export interface PollForm {
  question: string,
  options: string[],
  image: string;
}

export interface Voter {
  id: string;
  voted: number[];
}
