import { Dispatch, Reducer, ReducerAction } from 'react';
import { KVAction, KVState } from '@base/src/hooks/KVReducer.types';
import { KVEditConfigType, KVItemType } from '@base/src/components/KVEditor/KVEditor.types';

export interface KVItemEditPropsType {
  dispatch: Dispatch<ReducerAction<Reducer<KVState, KVAction>>>;
  keys: string[];
  editorOptions: KVEditConfigType;
  item?: KVItemType;
}
export interface KVItemEditType {
  (props: KVItemEditPropsType): JSX.Element;
}
