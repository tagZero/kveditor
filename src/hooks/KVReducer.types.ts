import { KVEditConfigType, KVItemType } from '../components/KVEditor/KVEditor.types';

export interface KVState {
  items: KVItemType[];
  keys: string[];
  options?: KVEditConfigType;
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
