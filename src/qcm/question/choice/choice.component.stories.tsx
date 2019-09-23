import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text} from '@storybook/addon-knobs';
import choicesFormatted from './mocks/choices_of_question_formatted';
import ChoiceComponent from './choice.component';
import choiceConstants from './choice.constants';

const props = {
  ...choiceConstants.fieldInformation,
  choices: choicesFormatted.choices,
  defaultChoice: '5f67c896-77b4-4b9b-bf19-fb2c8e274c68',
};

storiesOf('Choice Component', module)
  .addDecorator(withKnobs)
  .add('Choice for question', () => {
    const label = text('label', props.label);
    return (
      <ChoiceComponent
        choices={props.choices}
        key={props.id}
        label={label}
        name={props.name}
        onChange={action('onChange')}
        defaultValue={props.defaultChoice}
      />
    );
  });
