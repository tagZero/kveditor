import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { KVEditConfigType } from '../../KVEditor/KVEditor.types';
import KVItemEdit from '../KVItemEdit';

describe('KVItemEdit', () => {
  const validateKey = new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/);
  const dispatch = jest.fn();

  const tree = (options: KVEditConfigType = { theme: 'light', validateKey }) =>
    render(<KVItemEdit keys={['foo']} dispatch={dispatch} editorOptions={options} />);

  afterEach(() => jest.resetAllMocks());

  test('renders properly', () => {
    const { asFragment } = tree();
    expect(asFragment()).toMatchSnapshot();
  });

  test('submits key/value', () => {
    const { getByPlaceholderText, getByTitle } = tree();
    expect(dispatch).toHaveBeenCalledTimes(0);

    const inputKey = getByPlaceholderText('key');
    const inputValue = getByPlaceholderText('value');
    const submit = getByTitle('Add');
    fireEvent.change(inputKey, { target: { value: 'mykey' } });
    fireEvent.change(inputValue, { target: { value: 'myvalue' } });
    fireEvent.click(submit);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      item: {
        key: 'mykey',
        value: 'myvalue'
      },
      type: 'ADD'
    });
  });

  test('shows error', () => {
    const { getByPlaceholderText, getByTitle } = tree();
    const inputKey = getByPlaceholderText('key');
    const submit = getByTitle('Add');

    fireEvent.change(inputKey, { target: { value: 'mykey' } });
    fireEvent.click(submit);
    expect(dispatch).toHaveBeenCalledTimes(1);
    fireEvent.click(submit);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
