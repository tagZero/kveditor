import { Dispatch, Reducer, ReducerAction } from 'react';
import { KVEditConfigType, KVItemType } from '@base/src/components/KVEditor/KVEditor.types';
import { KVAction, KVState } from '@base/src/hooks/KVReducer.types';

export interface KVItemViewPropsType {
  dispatch: Dispatch<ReducerAction<Reducer<KVState, KVAction>>>;
  item: KVItemType;
  editorOptions: KVEditConfigType;
  viewOptions: any;
}
export interface KVItemViewType {
  (props: KVItemViewPropsType): JSX.Element;
}
