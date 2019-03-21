import React from 'react';

import OugH1 from '../components/atoms/OugH1';

import { storiesOf } from '@storybook/react';

storiesOf('OugH1', module).add('with text', () => (
  <OugH1 value="Hello World" />
));
