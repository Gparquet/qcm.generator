import React, {SFC} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

type ChoiceComponentType = {
  choices: {label: string; value: string}[];
  onChange: (event: React.ChangeEvent<{}>, value: string) => void;
  label?: string;
  name?: string;
  defaultValue?: string;
};

const ChoiceComponent: SFC<ChoiceComponentType> = props => {
  const {choices, onChange, label, name, defaultValue} = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={name}
        value={defaultValue}
        onChange={onChange}
      >
        {choices.map(currentChoice => {
          const {label, value} = currentChoice;
          return (
            <FormControlLabel
              key={`singleChoice_${label}_${value}`}
              value={value}
              control={<Radio />}
              label={label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default ChoiceComponent;
