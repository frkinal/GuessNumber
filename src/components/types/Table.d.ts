export interface TableProps {
  data: Array<TableContent>;
}

export interface TableContent {
  game: number;
  score: number;
  guesses: number;
  time: number;
}
