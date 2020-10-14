// Reducer
import { Dispatch, Reducer, ReducerAction } from 'react';

export interface KVItemType {
  key: string;
  value: any;
}
export interface KVState {
  items: KVItemType[];
  keys: string[];
}
export interface KVActionBase {
  type: string;
}
export interface KVActionAdd extends KVActionBase {
  item?: KVItemType;
}
export interface KVActionRemove extends KVActionBase {
  key?: string;
}
export interface KVAction extends KVActionAdd, KVActionRemove {}

// Components
export interface KVItemEditPropsType {
  dispatch: Dispatch<ReducerAction<Reducer<KVState, KVAction>>>;
  keys: string[];
  editorOptions: KVEditConfigType;
  item?: KVItemType;
}
export interface KVItemEditType {
  (props: KVItemEditPropsType): JSX.Element;
}
export interface KVItemViewPropsType {
  dispatch: Dispatch<ReducerAction<Reducer<KVState, KVAction>>>;
  item: KVItemType;
  editorOptions: KVEditConfigType;
  viewOptions: any;
}
export interface KVItemViewType {
  (props: KVItemViewPropsType): JSX.Element;
}
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
  (props: KVEditorPropsType): JSX.Element;
}
