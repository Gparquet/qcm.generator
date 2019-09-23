import {configure} from '@storybook/react';
import requireContext from 'require-context.macro';

const req = requireContext('../src', true, /\.stories\.tsx$/);

configure(() => req.keys().forEach(filename => req(filename)), module);
