import React from 'react';
import renderer from 'react-test-renderer';
import multipleChoiceFormatted from './mocks/multiple_choice_formatted';
import MultipleChoiceComponent from './multipleChoice.component';

describe('Choice Component', () => {
  const props = {
    id: 'multipleChoice',
    label: 'multiple choice',
    choices: multipleChoiceFormatted.choices,
    defaultChoice: '5f67c896-77b4-4b9b-bf19-fb2c8e274c68',
    onChange: () => {},
  };
  test('renders correctly', () => {
    const tree = renderer
      .create(<MultipleChoiceComponent {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
