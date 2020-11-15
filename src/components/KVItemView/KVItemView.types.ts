import { Dispatch, Reducer, ReducerAction } from 'react';
import { KVEditConfigType, KVItemType } from '../KVEditor/KVEditor.types';
import { KVAction, KVState } from '../../hooks/KVReducer.types';

export interface KVItemViewPropsType {
  dispatch: Dispatch<ReducerAction<Reducer<KVState, KVAction>>>;
  item: KVItemType;
  editorOptions: KVEditConfigType;
  labelWidth?: number;
}
export interface KVItemViewType {
  (props: KVItemViewPropsType): JSX.Element;
}
