import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.js
const req = requireContext('../src/stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
