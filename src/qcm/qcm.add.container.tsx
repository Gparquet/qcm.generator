import React, {useReducer, ChangeEvent, MouseEvent} from 'react';
import {reducer, initializeState} from './qcm.add.reducer';
import {
  HANDLE_CHANGE,
  HANDLE_CLICK,
  HANDLE_CLOSE_MODAL_ADD_QUESTION,
} from './qcm.constants';
import {QuestionType} from './question/question.type';
import QcmAddComponent from './qcm.add.component';

const QcmAddContainer = props => {
  const [state, dispatch] = useReducer(reducer, initializeState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch({type: HANDLE_CHANGE, event});

  const onClick = (event: MouseEvent<HTMLElement>) =>
    dispatch({type: HANDLE_CLICK, event});

  const onClose = (event: MouseEvent<HTMLElement>) =>
    dispatch({type: HANDLE_CLOSE_MODAL_ADD_QUESTION, event});

  const propsToInject = {
    ...state,
    questions: state.questions.map((question: QuestionType) => {
      return {
        ...question,
        classes: '',
        onClick,
        onChange,
      };
    }),
    onChange,
    onClick,
    onClose,
  };

  return <QcmAddComponent {...propsToInject} />;
};

export default QcmAddContainer;
