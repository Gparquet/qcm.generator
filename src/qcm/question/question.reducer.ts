import {MouseEvent, ChangeEvent} from 'react';
import {QuestionType} from './question.type';

interface State {
  type: string;
  question: QuestionType;
}

interface Action {
  type: string;
  event?: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>;
}

export const initializeState = {
  type: '',
  title: '',
  label: '',
  choices: [],
};

export const reducer = (state: State, action: Action) => {
  const {type, event} = action;
};
