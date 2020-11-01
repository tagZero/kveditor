import React from 'react';
import { render } from '@testing-library/react';
import { KVEditConfigType } from '../KVEditor.types';
import KVEditor from '../KVEditor';

describe('KVEditor', () => {
  const validateKey = new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/);

  const tree = (options: KVEditConfigType = { theme: 'light', validateKey }) =>
    render(<KVEditor options={options} />);

  test('renders properly', () => {
    const { asFragment } = tree();
    expect(asFragment()).toMatchSnapshot();
  });
});
