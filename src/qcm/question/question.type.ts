import {MouseEvent} from 'react';
import {Choice} from './choice/choice.type';
import {MultipleChoice} from './multipleChoice/multipleChoice.type';

export default interface Question {
  id: string;
  label: string;
  choices: Choice[];
}

export interface QuestionType {
  title: string;
  label: string;
  objectChoice:
    | {type: string; choices: Choice[]}
    | {type: string; choices: MultipleChoice[]};
}

export interface QuestionComponentType extends QuestionType {
  classes: any;
  onChange: (event: React.ChangeEvent<{}>, value: boolean | string) => void;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}
