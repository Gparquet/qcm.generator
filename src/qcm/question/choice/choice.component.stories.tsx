import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text} from '@storybook/addon-knobs';
import choicesFormatted from './mocks/choices_of_question_formatted';
import ChoiceComponent from './choice.component';
import choiceConstants from './choice.constants';

const props = {
  ...choiceConstants.fieldInformation,
  choices: choicesFormatted,
};

storiesOf('Choice Component', module)
  .addDecorator(withKnobs)
  .add('Choice for question', () => (
    <ChoiceComponent
      choices={props.choices}
      key={props.id}
      label={props.label}
      name={props.name}
      onChange={action('onChange')}
      //value={text('value', '', '')}
    />
  ));
