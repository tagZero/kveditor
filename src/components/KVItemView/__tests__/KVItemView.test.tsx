import React from 'react';
import { render } from '@testing-library/react';
import { KVEditConfigType } from '../../KVEditor/KVEditor.types';
import KVItemView from '../KVItemView';

describe('KVItemView', () => {
  const validateKey = new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/);
  const dispatch = jest.fn();

  const tree = (options: KVEditConfigType = { theme: 'light', validateKey }) =>
    render(
      <KVItemView key="key" item={{ key: 'foo', value: 'bar' }} dispatch={dispatch} editorOptions={options} />
    );

  test('renders properly', () => {
    const { asFragment } = tree();
    expect(asFragment()).toMatchSnapshot();
  });
});
