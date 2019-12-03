import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import QuestionComponent from './question.component';
import QuestionAddComponent from './question.component.add';
import choiceOfQuestion from './choice/mocks/choices_of_question_formatted';
import multipleChoiceData from './multipleChoice/mocks/multiple_choice_formatted';
import {action} from '@storybook/addon-actions';

storiesOf('Question Component', module)
  .addDecorator(withKnobs)
  .add('Question simple choice', () => (
    <QuestionComponent
      title="This is a sheet of paper."
      label="Paper can be used to build surface or other elements for your application."
      objectChoice={choiceOfQuestion}
      onChange={() => {}}
    />
  ))
  .add('Question multiple choice', () => (
    <QuestionComponent
      title="This is a sheet of paper."
      label="Paper can be used to build surface or other elements for your application."
      objectChoice={multipleChoiceData}
      onChange={() => {}}
    />
  ))
  .add('Add new question', () => {
    const props = {
      onChange: action('onChange'),
      onClick: action('onClick'),
      onClose: action('onClose'),
      open: false,
      type: 'single',
    };
    return <QuestionAddComponent {...props} />;
  });
