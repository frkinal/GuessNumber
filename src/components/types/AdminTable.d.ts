import {TableContent} from '@navigators/types';
export interface AdminTableProps {
  data: Array<AdminTableContent>;
}
export interface AdminTableContent {
  game: TableContent;
  username: string;
}
