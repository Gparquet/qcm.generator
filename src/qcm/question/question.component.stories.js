import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import QuestionComponent from './question.component';

storiesOf('Question Component', module)
  .addDecorator(withKnobs)
  .add('Question label, choices and responses', () => (
    <QuestionComponent title="This is a sheet of paper." label="Paper can be used to build surface or other elements for your application." />
  ));
