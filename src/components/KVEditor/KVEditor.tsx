import React, { useEffect, useReducer } from 'react';
import { KVEditorType, KVItemType } from '@base/types';
import KVReducer from '../../hooks/KVReducer';
import KVItemEdit from '../KVItemEdit/KVItemEdit';
import KVItemView from '../KVItemView/KVItemView';
import './styles.scss';

const validateKey = new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/);

const KVEditor: KVEditorType = ({
  options = { theme: 'light', validateKey, typeNotation: 'string', nested: false }
}) => {
  const [state, dispatch] = useReducer(KVReducer, { items: [], keys: [] });

  useEffect(() => {
    const items = state.items.reduce(
      (acc: Record<string, unknown>, { key, value }) => ({ ...acc, [key]: value }),
      {}
    );
    console.log(items);
  }, [state]);

  return (
    <div className={`kv-editor ${options.theme}`}>
      {state.items.map((item: KVItemType) => (
        <KVItemView
          key={item.key}
          item={item}
          dispatch={dispatch}
          editorOptions={options}
          viewOptions={null}
        />
      ))}
      <KVItemEdit keys={state.keys} dispatch={dispatch} editorOptions={options} />
    </div>
  );
};

export default KVEditor;
