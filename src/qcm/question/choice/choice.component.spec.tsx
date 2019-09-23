import React from 'react';
import renderer from 'react-test-renderer';
import ChoiceComponent from './choice.component';
import choiceObject from './mocks/choices_of_question_formatted';
import choiceConstants from './choice.constants';

describe('Choice Component', () => {
  const props = {
    ...choiceConstants.fieldInformation,
    choices: choiceObject.choices,
    onChange: () => {},
  };
  test('renders correctly', () => {
    const tree = renderer.create(<ChoiceComponent {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
