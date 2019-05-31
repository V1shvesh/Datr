import React from 'react';
import { render } from 'react-native-testing-library';
import Button from '../src/components/Button';


// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const { getByType } = render(<Button title="Hey!" />);
  const text = getByType('Text');
  expect(text.props.children).toEqual('Hey!');
});
