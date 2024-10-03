import {TableContent} from '@navigators/types';
export interface UserItemProps {
  contents: UserItemContents;
}
export interface UserItemContents {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  game: TableContent;
  balance: number;
}
