import React from 'react';
import renderer from 'react-test-renderer';
import QuestionComponent from './question.component';
import choiceOfQuestion from './choice/mocks/choices_of_question_formatted';

describe('Question Component', () => {
  test('renders correctly question component with singleChoice select component', () => {
    const tree = renderer
      .create(
        <QuestionComponent
          title="Title of question"
          label="Label of question"
          objectChoice={choiceOfQuestion}
          onChange={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
