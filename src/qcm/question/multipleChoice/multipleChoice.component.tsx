import React, {SFC} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {MultipleChoice} from './multipleChoice.type';

type MultiChoiceComponentType = {
  choices: MultipleChoice[];
  onChange: (event: React.ChangeEvent<{}>, value: boolean) => void;
  label?: string;
};

const multipleChoiceComponent: SFC<MultiChoiceComponentType> = props => {
  const {choices, onChange, label} = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <FormGroup>
        {choices.map(currentChoice => (
          <FormControlLabel
            key={`formControlLabel_${currentChoice.value}`}
            control={
              <Checkbox
                checked={currentChoice.selected}
                onChange={onChange}
                value={currentChoice.value}
              />
            }
            label={currentChoice.label}
          />
        ))}
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
};

export default multipleChoiceComponent;
