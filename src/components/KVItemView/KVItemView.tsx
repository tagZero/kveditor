import React, { useState } from 'react';
import { KVItemViewType } from './KVItemView.types';
import './styles.scss';

const KVItemView: KVItemViewType = ({ item, dispatch, editorOptions }) => {
  const { key, value } = item;
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

  return (
    <form onSubmit={onSubmit} className={`kv-item-view ${editorOptions.theme}`}>
      <div className="key-value">
        <div className="key">{key}</div>
        <input className="value" name="value" type="text" value={currentValue} onChange={onChange} />
      </div>
      {isEditing ? <input className="save" type="submit" value="" title="Save" /> : null}
      <input className="remove" type="button" onClick={onRemove} title="Remove" />
    </form>
  );
};

export default KVItemView;
