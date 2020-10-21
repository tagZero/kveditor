import { ReactElement } from 'react';

export interface KVEditConfigType {
  typeNotation?: string;
  nested?: boolean;
  validateKey?: RegExp;
  theme?: string;
}
export interface KVEditorPropsType {
  items?: KVItemType[];
  options?: KVEditConfigType;
  onChange?: (state: any) => void;
}
export interface KVEditorType {
  (props: KVEditorPropsType): ReactElement;
}
export interface KVItemType {
  key: string;
  value: any;
}
