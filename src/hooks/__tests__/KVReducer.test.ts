import KVReducer from '../KVReducer';
import { KVState } from '../KVReducer.types';

describe('KVReducer', () => {
  test('ADD works', () => {
    const initialState: KVState = { items: [], keys: [] };
    const item = { key: 'foo', value: 'bar' };
    const action = { type: 'ADD', item };

    const state = KVReducer(initialState, action);
    expect(state.items.includes(item)).toBe(true);
  });

  test('REMOVE works', () => {
    const item = { key: 'foo', value: 'bar' };
    const initialState: KVState = { items: [item], keys: [] };
    const action = { type: 'REMOVE', key: 'foo' };

    const state = KVReducer(initialState, action);
    expect(state.items.length).toBe(0);
  });

  test('UPDATE works', () => {
    const item = { key: 'foo', value: 'bar' };
    const initialState: KVState = { items: [item], keys: [] };
    const action = { type: 'UPDATE', item: { key: 'foo', value: 'baz' } };

    const state = KVReducer(initialState, action);
    expect(state.items[0]).toEqual({ key: 'foo', value: 'baz' });
    expect(state.items.length).toBe(1);
  });
});
