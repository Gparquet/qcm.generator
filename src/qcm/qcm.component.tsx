import React, {SFC, ChangeEvent} from 'react';
import {TextField} from '@material-ui/core';
import {QuestionComponentType} from './question/question.type';
import QuestionComponent from './question/question.component';

import './qcm.css';

type QcmComponentType = {
  id: string;
  name: string;
  version?: string;
  questions: QuestionComponentType[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const QcmComponent: SFC<QcmComponentType> = props => {
  const {id, name, version, onChange, questions} = props;
  return (
    <div className="question">
      <TextField
        id="qcm-id"
        className="question__input"
        label="Id"
        value={id}
        onChange={onChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="qcm-name"
        className="question__input"
        label="Name"
        value={name}
        onChange={onChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="qcm-version"
        className="question__input"
        label="Version"
        value={version}
        onChange={onChange}
        margin="normal"
        variant="outlined"
      />
      {questions.map(currentQuestion => {
        return <QuestionComponent {...currentQuestion} />;
      })}
    </div>
  );
};

export default QcmComponent;
