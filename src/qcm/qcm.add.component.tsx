import React, {SFC, ChangeEvent, MouseEvent} from 'react';
import {TextField, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {QuestionType} from './question/question.type';
import QuestionComponentAdd from './question/question.component.add';

import './qcm.css';

type QcmComponentType = {
  id: string;
  name: string;
  version?: string;
  questions: QuestionType[];
  addNewQuestion: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  onClose: (event: MouseEvent<HTMLElement>) => void;
};

const QcmAddComponent: SFC<QcmComponentType> = props => {
  const {
    id,
    name,
    version,
    onChange,
    onClick,
    onClose,
    questions,
    addNewQuestion,
  } = props;
  return (
    <div className="qcm">
      <fieldset aria-hidden="true" className="fieldset">
        <legend className="fieldset_label">Question informations</legend>
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
      </fieldset>
      <fieldset className="fieldset fieldset--second">
        <legend className="fieldset_label">Questions list:</legend>
        <div id="questions">
          {questions.map(question => {
            const {
              label,
              objectChoice: {choices, type},
            } = question;
            return (
              <QuestionComponentAdd
                key={label}
                onChange={onChange}
                onClick={onClick}
                onClose={onClose}
                choices={choices}
                type={type}
                open={addNewQuestion}
              />
            );
          })}
        </div>
        <div id="btn-add" className="button">
          <div id="btnPart">
            <Fab
              name="addQuestion"
              color="primary"
              aria-label="add"
              onClick={onClick}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default QcmAddComponent;
