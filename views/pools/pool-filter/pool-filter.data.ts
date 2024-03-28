import { IPXRoundedSVG } from '@/svg';

import { FilterItemProps, FilterTypeEnum } from '../pools.types';

export const ALGORITHM_TYPE: Array<FilterItemProps> = [
  {
    type: FilterTypeEnum.ALGORITHM,
    description: 'Stable',
  },
  {
    type: FilterTypeEnum.ALGORITHM,
    description: 'Volatile',
  },
];

export const POOL_TYPE = [
  {
    type: FilterTypeEnum.POOL_TYPE,
    description: 'CLAMM',
  },
  {
    type: FilterTypeEnum.POOL_TYPE,
    description: 'AMM',
  },
];

export const COIN_TYPE = [
  {
    type: FilterTypeEnum.COIN_TYPE,
    description: 'Coin type 1',
  },
  {
    type: FilterTypeEnum.COIN_TYPE,
    description: 'Coin type 2',
  },
];

export const FILTERS_DATA = [
  {
    Icon: IPXRoundedSVG,
    label: 'Algorithm',
    data: ALGORITHM_TYPE,
    type: FilterTypeEnum.ALGORITHM,
  },
  {
    Icon: IPXRoundedSVG,
    label: 'Pool Type',
    data: POOL_TYPE,
    type: FilterTypeEnum.POOL_TYPE,
  },
  {
    Icon: IPXRoundedSVG,
    label: 'Coin Type',
    data: COIN_TYPE,
    type: FilterTypeEnum.COIN_TYPE,
  },
];
