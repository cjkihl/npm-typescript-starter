import * as React from 'react';
import { HelloWorld } from '../HelloWorld';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<HelloWorld />).toJSON();
  expect(tree).toMatchSnapshot();
});
