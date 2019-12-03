import React, {SFC, MouseEvent} from 'react';
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import './button.css';

type ButtonComponentType = {
  name: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
};

const ButtonComponent: SFC<ButtonComponentType> = props => {
  const {onClick} = props;
  return (
    <>
      <div id={`btn-${name}`} className="button">
        <label id={`btn-label-${name}`} className="button__label">
          Add new question
        </label>
        <div id="btnPart">
          <Fab name="add" color="primary" aria-label="add" onClick={onClick}>
            <AddIcon />
          </Fab>
        </div>
      </div>
    </>
  );
};

export default ButtonComponent;
