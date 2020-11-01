import { KVEditConfigType, KVItemType } from '..';
import { nanoid } from 'nanoid';

const init = ({
  items: defaultItems,
  rawObject,
  editorOptions
}: {
  items?: KVItemType[];
  rawObject?: any;
  editorOptions: KVEditConfigType;
}) => {
  let items = defaultItems || [];
  let keys: Array<string> = [];

  if (items) {
    keys = items.map(({ key }) => key);
  } else if (rawObject) {
    keys = Object.keys(rawObject);
    items = keys.map((key) => ({ key, value: rawObject[key] }));
  }

  if (editorOptions.idField) {
    if (!keys.includes(editorOptions.idField)) {
      const value = nanoid();
      return {
        items: [{ key: editorOptions.idField, value }, ...items],
        keys: [...keys, editorOptions.idField]
      };
    }
  }
  return { items, keys };
};

export default init;
