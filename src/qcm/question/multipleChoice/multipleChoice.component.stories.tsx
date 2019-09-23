import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text} from '@storybook/addon-knobs';
import multipleChoiceFormatted from './mocks/multiple_choice_formatted';
import MultipleChoiceComponent from './multipleChoice.component';

const props = {
  id: 'multipleChoice',
  label: 'multiple choice',
  choices: multipleChoiceFormatted,
  defaultChoice: '5f67c896-77b4-4b9b-bf19-fb2c8e274c68',
};

storiesOf('Multiple Choice Component', module)
  .addDecorator(withKnobs)
  .add('Multiple choice for question', () => {
    const label = text('label', props.label);
    return (
      <MultipleChoiceComponent
        choices={props.choices}
        key={props.id}
        label={label}
        onChange={action('onChange')}
        defaultValueSelected={props.defaultChoice}
      />
    );
  });
