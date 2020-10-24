import React, { useEffect, useReducer } from 'react';
import { KVEditConfigType, KVEditorType, KVItemType } from './KVEditor.types';
import KVReducer from '../../hooks/KVReducer';
import KVItemEdit from '../KVItemEdit/KVItemEdit';
import KVItemView from '../KVItemView/KVItemView';
import './styles.scss';

const KVEditor: KVEditorType = ({ items = [], options = {}, onChange }): React.ReactElement => {
  const defaults = {
    theme: 'light',
    validateKey: new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/),
    typeNotation: 'string',
    nested: false
  };
  const editorOptions: KVEditConfigType = { ...defaults, ...options };
  const initialState = { items: items, keys: items.map(({ key }) => key) };
  const [state, dispatch] = useReducer(KVReducer, initialState);

  useEffect(() => {
    onChange && onChange(state.items);
  }, [onChange, state]);

  return (
    <div className={`kv-editor ${options.theme || ''}`}>
      {state.items.map((item: KVItemType) => (
        <KVItemView key={item.key} item={item} dispatch={dispatch} editorOptions={editorOptions} />
      ))}
      <KVItemEdit keys={state.keys} dispatch={dispatch} editorOptions={editorOptions} />
    </div>
  );
};

export default KVEditor;
