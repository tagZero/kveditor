import React from 'react';
import { render } from '@testing-library/react';
import { KVEditConfigType } from '@base/src/components/KVEditor/KVEditor.types';
import KVReducer from '../../../hooks/KVReducer';
import KVEditor from '../KVEditor';

jest.mock('../../../hooks/KVReducer');
const KVReducerMock = KVReducer as jest.Mock;

describe('KVEditor', () => {
  const validateKey = new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/);

  const tree = (
    options: KVEditConfigType = { theme: 'light', validateKey, typeNotation: 'string', nested: false }
  ) => render(<KVEditor options={options} />);

  test('renders properly', () => {
    const { asFragment } = tree();
    expect(asFragment()).toMatchSnapshot();
  });
});
