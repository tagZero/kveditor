import { Reducer } from 'react';
import { KVAction, KVState } from '@base/types';

const KVReducer: Reducer<KVState, KVAction> = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const keys = state.items.map(({ key }) => key);
      return {
        ...state,
        items: [...state.items, action.item],
        keys: [...keys, action.item.key]
      };
    }
    case 'REMOVE': {
      const items = state.items.filter(({ key }) => key !== action.key);
      const keys = items.map(({ key }) => key);
      return {
        ...state,
        items,
        keys
      };
    }
    default: {
      return state;
    }
  }
};

export default KVReducer;
