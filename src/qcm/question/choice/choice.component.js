import React from 'react';
import { string, arrayOf, shape } from 'prop-types';

const propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  id: string.isRequired,
  choices: arrayOf(shape({
    label: string.isRequired,
    value: string.isRequired,
  })).isRequired,
};

const choiceComponent = (props) => {
  const {
    choices: options,
    onChange,
    label,
    id,
    name,
  } = props;
  return <RadioInput id={id} label={label} name={name} options={options} onChange={onChange} />;
};

choiceComponent.propTypes = propTypes;

export default choiceComponent;
