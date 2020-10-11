import React from 'react';
import { KVItemViewType } from '@base/types';
import './styles.scss';

const KVItemView: KVItemViewType = ({ item, dispatch, editorOptions }) => {
  const { key, value } = item;

  const onClick = () => {
    dispatch({ type: 'REMOVE', key });
  };

  return (
    <div className="kv-item-view">
      <div className="key-value">
        <div className="key">{key}</div>
        {value}
      </div>
      <input className="submit" type="button" value="Remove" onClick={onClick} />
    </div>
  );
};

export default KVItemView;
