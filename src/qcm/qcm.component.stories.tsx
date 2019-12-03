import React from 'react';
import {storiesOf} from '@storybook/react';

import {withKnobs} from '@storybook/addon-knobs';
import QcmComponent from './qcm.component';
import QcmAddContainer from './qcm.add.container';

storiesOf('Qcm Component', module)
  .addDecorator(withKnobs)
  .add('Qcm component', () => {
    const props = {
      id: '',
      name: '',
      questions: [
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
      ],
      onChange: () => {},
    };

    return <QcmComponent {...props} />;
  })
  .add('Add new QCM', () => {
    return <QcmAddContainer />;
  });
