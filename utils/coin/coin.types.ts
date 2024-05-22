import { SuiClient } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import BigNumber from 'bignumber.js';

import { CoinsMap } from '@/hooks/use-get-all-coins/use-get-all-coins.types';

export interface CreateVectorParameterArgs {
  txb: TransactionBlock;
  coinsMap: CoinsMap;
  type: string;
  amount: string;
}

export interface GetCoinsArgs {
  suiClient: SuiClient;
  account: string;
  coinType: string;
  cursor?: string | null;
}

export interface GetSafeValueArgs {
  coinType: string;
  coinValue: string;
  decimals: number;
  balance: BigNumber;
}
