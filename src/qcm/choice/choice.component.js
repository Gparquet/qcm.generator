import { React } from 'react';
import { RadioInput } from '@axa-fr/react-toolkit-all'
import { string, arrayOf, shape} from 'prop-types';

const propTypes = {
  choices: arrayOf(shape({
    label: string.isRequired,
    value: string.isRequired,
  })),
};

const choiceComponent = props =>{
  const { choices } = props;

  return <RadioInput options={choices} />;
};

choiceComponent.propTypes = propTypes;

export default choiceComponent;
