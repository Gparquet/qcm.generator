import React from 'react';
import renderer from 'react-test-renderer';
import QcmComponent from './qcm.component';

describe('Qcm Component', () => {
  test('renders correctly QCM component', () => {
    const tree = renderer
      .create(
        <QcmComponent
          id="qcm"
          name="qcm"
          questions={[
            {
              classes: '',
              title: '',
              label: '',
              objectChoice: {
                type: 'simpleChoice',
                choices: [
                  {label: 'first choice', value: ''},
                  {label: 'second choice', value: ''},
                ],
              },
              onChange: () => {},
              onClick: () => {},
            },
          ]}
          onChange={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
