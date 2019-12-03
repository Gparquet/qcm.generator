import {ChangeEvent, MouseEvent} from 'react';
import {QuestionType} from './question/question.type';
import {
  HANDLE_CHANGE,
  HANDLE_CLICK,
  HANDLE_CLOSE_MODAL_ADD_QUESTION,
  fieldName,
} from './qcm.constants';

export const initializeState = {
  id: '',
  name: '',
  version: '',
  questions: [
    {
      title: '',
      label: '',
      objectChoice: {
        type: 'single',
        choices: [{label: '', value: ''}],
      },
    },
  ],
  addNewQuestion: false,
};

export interface State {
  id: string;
  name: string;
  questions: QuestionType[];
  addNewQuestion: boolean;
}

export interface Action {
  type: string;
  event?: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>;
}

const handleClick = (event: MouseEvent<HTMLElement>, state: State) => {
  const {
    currentTarget: {name},
  } = event;
  switch (name) {
    case fieldName.addQuestion: {
      return {
        ...state,
        addNewQuestion: true,
      };
    }
    case fieldName.addChoice: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

const handleChange = (event: ChangeEvent<HTMLInputElement>, state: State) => {
  const test = event;
  switch (event) {
    default:
      return state;
  }
};

export const reducer = (state: State, action: Action) => {
  const {type, event} = action;
  switch (type) {
    case HANDLE_CLICK:
      return handleClick(event, state);
    case HANDLE_CHANGE:
      return handleChange(event, state);
    case HANDLE_CLOSE_MODAL_ADD_QUESTION: {
      return {
        ...state,
        addNewQuestion: false,
      };
    }
    default:
      return state;
  }
};
