import React, { useState } from 'react';
import { KVItemViewType } from './KVItemView.types';
import './styles.scss';

const KVItemView: KVItemViewType = ({ item, dispatch, editorOptions, labelWidth }) => {
  const { key, value, options = {} } = item;
  const [currentValue, setCurrentValue] = useState(value || '');
  const [isEditing, setEditing] = useState(false);

  const onRemove = () => {
    dispatch({ type: 'REMOVE', key });
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentValue(event.currentTarget.value);
    setEditing(true);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({ type: 'UPDATE', item: { key, value: currentValue } });
    setEditing(false);
  };

  const labelWidthStyle = editorOptions.stretchLabels ? { width: `${labelWidth}px` } : {};

  if (key === editorOptions.idField) {
    return (
      <div className={`kv-item-view ${editorOptions.theme}`}>
        <div className="key-value key-id">
          <div className="key" style={labelWidthStyle}>
            {key}
          </div>
          <input className="value" name="value" type="text" value={currentValue} disabled={true} />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`kv-item-view ${editorOptions.theme}`}>
      <div className={`${options.immutable ? 'key-value key-disabled' : 'key-value'}`}>
        <div className="key" style={labelWidthStyle}>
          {key}
        </div>
        <input
          className="value"
          name="value"
          type="text"
          value={currentValue}
          onChange={onChange}
          disabled={options.immutable}
        />
      </div>
      {isEditing ? <input className="save" type="submit" value="" title="Save" /> : null}
      {!options.fixed && <input className="remove" type="button" onClick={onRemove} title="Remove" />}
    </form>
  );
};

export default KVItemView;
