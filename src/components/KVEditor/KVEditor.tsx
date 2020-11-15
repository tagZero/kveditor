import React, { useEffect, useReducer } from 'react';
import { useTextWidth } from '@imagemarker/use-text-width';
import { KVEditConfigType, KVEditorType, KVItemType } from './KVEditor.types';
import KVReducer from '../../hooks/KVReducer';
import KVItemEdit from '../KVItemEdit/KVItemEdit';
import KVItemView from '../KVItemView/KVItemView';
import init from '../../hooks/reducerInit';
import './styles.scss';

const KVEditor: KVEditorType = ({ items, rawObject, options = {}, onChange }): React.ReactElement => {
  const defaults = {
    theme: 'light',
    validateKey: new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/),
    stretchLabels: true
  };
  const editorOptions: KVEditConfigType = { ...defaults, ...options };
  const [state, dispatch] = useReducer(KVReducer, { items, rawObject, editorOptions }, init);
  const labelWidth = useTextWidth({ text: state.keys, font: '600 14px "Source Sans Pro", sans-serif' });

  useEffect(() => {
    onChange && onChange(state.items);
  }, [onChange, state]);

  return (
    <div className={`kv-editor ${options.theme || ''}`}>
      {state.items.map((item: KVItemType) => (
        <KVItemView
          key={item.key}
          item={item}
          dispatch={dispatch}
          editorOptions={editorOptions}
          labelWidth={labelWidth}
        />
      ))}
      <KVItemEdit keys={state.keys} dispatch={dispatch} editorOptions={editorOptions} />
    </div>
  );
};

export default KVEditor;
