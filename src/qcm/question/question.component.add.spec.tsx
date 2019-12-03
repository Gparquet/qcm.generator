import React from 'react';
import renderer from 'react-test-renderer';
import QuestionAdd from './question.component.add';

describe('Question add Component', () => {
  test('renders correctly question add component when open equal true', () => {
    const tree = renderer
      .create(
        <QuestionAdd
          onChange={() => {}}
          onClick={() => {}}
          choices={[
            {label: 'first choice', value: ''},
            {label: 'second choice', value: ''},
          ]}
          open={true}
          onClose={() => {}}
          type="single"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders correctly question add component when open equal false', () => {
    const tree = renderer
      .create(
        <QuestionAdd
          onChange={() => {}}
          onClick={() => {}}
          choices={[
            {label: 'first choice', value: ''},
            {label: 'second choice', value: ''},
          ]}
          open={false}
          onClose={() => {}}
          type="single"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
