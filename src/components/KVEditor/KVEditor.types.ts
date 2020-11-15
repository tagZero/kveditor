import { ReactElement } from 'react';

export interface KVEditConfigType {
  validateKey?: RegExp;
  theme?: string;
  idField?: string;
  stretchLabels?: boolean;
}
export interface KVEditorPropsType {
  items?: KVItemType[];
  rawObject?: any;
  options?: KVEditConfigType;
  onChange?: (items: any) => void;
}
export interface KVEditorType {
  (props: KVEditorPropsType): ReactElement;
}
export interface KVItemType {
  key: string;
  value: any;
  options?: KVItemOptionsType;
}
export interface KVItemOptionsType {
  immutable?: boolean; // non editable
  fixed?: boolean; // non removable
  nested?: boolean; // may include key/value list
  defaultValue?: any; // default value
}
export interface ValueEffectType {
  calculated?: any;
  validator?: any;
  parser?: any;
}
