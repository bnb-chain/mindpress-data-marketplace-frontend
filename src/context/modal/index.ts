import { StateModalVariantType } from '@totejs/uikit';
import React from 'react';
import { Item } from '../../utils/apis/types';

export const initialState: any = {
  openList: false,
  openListProcess: false,
  openBuy: false,
  buying: false,
  openDelist: false,
  openResult: false,
  listData: {},
  buyData: {},
  initInfo: {},
  delistData: {},
  result: {},
  initListStatus: 0,
  initListResult: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  callBack: () => {},
};

export const defaultState: any = JSON.parse(JSON.stringify(initialState));

export type BuyData = {
  id: number;
  name: string;
  groupName: string;
  ownerAddress: string;
  type: string;
  price: string;
};

export interface ModalState {
  modalState: {
    openList: boolean;
    openListProcess: boolean;
    openBuy: boolean;
    buying: boolean;
    listData: object;
    buyData: Item;
    initInfo: object;
    initListStatus: number;
    initListResult: object;
    openDelist: boolean;
    delistData: object;
    openResult: boolean;
    result: {
      variant: StateModalVariantType;
      description: string;
    };
    callBack: () => void;
  };
  modalDispatch: React.Dispatch<any>;
}

export const ModalContext = React.createContext<ModalState>(null as any);
ModalContext.displayName = 'ModalContext';

export const ModalReducer = (initialState: any, action: any) => {
  switch (action.type) {
    case 'OPEN_LIST':
      return {
        ...initialState,
        openList: true,
        initInfo: action.initInfo,
        callBack: action.callBack,
      };
    case 'CLOSE_LIST':
      return { ...initialState, openList: false };
    case 'OPEN_LIST_PROCESS':
      return {
        ...initialState,
        openListProcess: true,
        openList: false,
        listData: action.listData,
        callBack: action.callBack,
      };
    case 'CLOSE_LIST_PROCESS':
      return {
        ...initialState,
        openListProcess: false,
      };
    // case 'UPDATE_LIST_DATA':
    //   return { ...initialState, listData: action.listData };
    case 'UPDATE_LIST_STATUS':
      return {
        ...initialState,
        initListStatus: action.initListStatus,
        initListResult: action.initListResult,
        listData: action.listData || initialState.listData,
      };
    case 'OPEN_DELIST':
      // console.log('OPEN_DELIST', initialState, action.delistData);
      return {
        ...initialState,
        openDelist: true,
        delistData: action.delistData,
        callBack: action.callBack,
      };
    case 'CLOSE_DELIST':
      return {
        ...initialState,
        openDelist: false,
      };
    case 'OPEN_RESULT':
      return {
        ...initialState,
        openList: false,
        openListProcess: false,
        openListError: false,
        openBuy: false,
        buying: false,
        openDelist: false,
        openResult: true,
        result: action.result,
        callBack: action.callBack,
      };
    case 'CLOSE_RESULT':
      return {
        ...initialState,
        openResult: false,
      };
    case 'RESET':
      return defaultState;
    default:
      return initialState;
  }
};

export * from './Provider';
