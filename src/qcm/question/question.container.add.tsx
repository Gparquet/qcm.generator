import React, {useReducer, ChangeEvent} from 'react';
import QuestionComponentAdd from './question.component.add';
import {reducer, initializeState} from './question.reducer';

import {HANDLE_CHANGE} from './question.constants';

const QuestionAddContainer = props => {
  const {onClick} = props;
  const [state, dispatch] = useReducer(reducer, initializeState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch({type: HANDLE_CHANGE, event});

  const propsToInject = {
    onChange,
    onClick,
    ...state,
  };

  return <QuestionComponentAdd {...propsToInject} />;
};
