import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Tree from '.';

afterEach(cleanup);

it('indents the tree properly', () => {
  const { getByText } = render(<Tree />);
  const treeChildrenMap = { root: 6, ant: 0, bear: 3, cat: 0, dog: 1, elephant: 0, frog: 0 };

  Object.entries(treeChildrenMap, ([text, length]) => {
    expect(getByText(text).querySelectorAll('li').length).toBe(length);
  });
});
