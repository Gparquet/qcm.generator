import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { string, func, arrayOf, shape } from 'prop-types';

const propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  choices: arrayOf(shape({
    label: string.isRequired,
    value: string.isRequired,
  })).isRequired,
  onChange: func.isRequired,
};

const choiceComponent = (props) => {
  const {
    choices,
    onChange,
    label,
    name,
  } = props;

  return (
    <RadioGroup
      aria-label={label}
      name={name}
      value="Female"
      onChange={onChange}
    >
      {choices.map(currentChoice => (
        <FormControlLabel
          value={currentChoice.value}
          control={<Radio />}
          label={currentChoice.label}
        />
      ))
      }
    </RadioGroup>
  );
};

choiceComponent.propTypes = propTypes;

export default choiceComponent;
