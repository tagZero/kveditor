import React, { useState } from 'react';
import { KVItemViewType } from '@base/types';
import './styles.scss';

const KVItemView: KVItemViewType = ({ item, dispatch, editorOptions }) => {
  const { key, value } = item;
  const [currentValue, setCurrentValue] = useState(value);

  const onRemove = () => {
    dispatch({ type: 'REMOVE', key });
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({ type: 'UPDATE', item: { key, value: currentValue } });
  };

  return (
    <form onSubmit={onSubmit} className={`kv-item-view ${editorOptions.theme}`}>
      <div className="key-value">
        <div className="key">{key}</div>
        <input className="value" name="value" type="text" value={currentValue} onChange={onChange} />
      </div>
      {value !== currentValue ? <input className="save" type="submit" value="Save" /> : null}
      <input className="remove" type="button" value="Remove" onClick={onRemove} />
    </form>
  );
};

export default KVItemView;
