import React, { useRef, useState } from 'react';
import { KVItemEditType } from '@base/types';
import './styles.scss';

const KVItemEdit: KVItemEditType = ({ dispatch, keys, editorOptions, item = { key: '', value: '' } }) => {
  const inputRef = useRef(null);
  const [kv, setKv] = useState(item);
  const [error, setError] = useState(null);

  const onKeyChange = (event: React.FormEvent<HTMLInputElement>) => {
    const key = event.currentTarget.value;
    setKv(({ value }) => ({ key, value }));
  };

  const onValueChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setKv(({ key }) => ({ key, value }));
  };

  const setKeyError = (error: string) => {
    setError(error);
    inputRef.current.focus();
    inputRef.current.select();
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isValidKey = editorOptions.validateKey.test(kv.key);

    if (kv.key === '') {
      setKeyError('Please provide key!');
      return;
    }

    if (!isValidKey) {
      setKeyError(`Key "${kv.key}" is invalid! First char should be a letter and the rest is alphanumeric.`);
      return;
    }

    const keyExists = keys.includes(kv.key);
    if (keyExists) {
      setKeyError(`Key "${kv.key}" is already exists! Please change it.`);
      return;
    }

    dispatch({ type: 'ADD', item: kv });
    setKv({ key: '', value: '' });
    setError(null);
    inputRef.current.focus();
  };

  return (
    <form className={`kv-item-edit ${editorOptions.theme}`} onSubmit={onSubmit}>
      <div className="row">
        <div className="input-key">
          <input
            autoFocus={true}
            ref={inputRef}
            name="key"
            type="text"
            value={kv.key}
            onChange={onKeyChange}
            placeholder="key"
          />
        </div>
        <div className="input-value">
          <input name="value" type="text" value={kv.value} onChange={onValueChange} placeholder="value" />
        </div>
        <input className="input-submit" type="submit" value="Add" />
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default KVItemEdit;
