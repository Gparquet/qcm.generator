import React from 'react';
import renderer from 'react-test-renderer';
import QuestionComponent from './question.component';

describe('Question Component', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <QuestionComponent
          title="Title of question"
          label="Label of question"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
