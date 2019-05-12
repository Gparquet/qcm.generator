import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import QuestionComponent from './question.component';

storiesOf('Question Component', module)
  .addDecorator(withKnobs)
  .add('Choice for question', () => (
    <QuestionComponent />
  ));   