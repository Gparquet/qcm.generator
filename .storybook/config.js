import { configure } from '@storybook/react';

function loadStories() {
  // require('../src/qcm/question/question.component.stories');
  require('../src/qcm/question/choice/choice.component.stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);