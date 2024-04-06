import { useCurrentAccount, useCurrentWallet } from '@mysten/dapp-kit';
import { values } from 'ramda';
import { createContext, FC } from 'react';

import { useGetAllCoins } from '@/hooks/use-get-all-coins';
import { CoinsMap } from '@/hooks/use-get-all-coins/use-get-all-coins.types';
import { noop } from '@/utils';

import { Web3ManagerProps, Web3ManagerState } from './web3-manager.types';

const CONTEXT_DEFAULT_STATE = {
  account: null,
  walletAccount: null,
  coins: [],
  coinsMap: {},
  connected: false,
  error: false,
  mutate: noop,
  isFetchingCoinBalances: false,
};

export const Web3ManagerContext = createContext<Web3ManagerState>(
  CONTEXT_DEFAULT_STATE
);

const Web3Manager: FC<Web3ManagerProps> = ({ children }) => {
  const { Provider } = Web3ManagerContext;
  const currentAccount = useCurrentAccount();
  const { isConnected } = useCurrentWallet();

  const { data, error, mutate, isLoading } = useGetAllCoins();

  return (
    <Provider
      value={{
        mutate,
        connected: isConnected,
        coinsMap: data ?? ({} as CoinsMap),
        walletAccount: currentAccount || null,
        error: !!error,
        coins: values(data ?? ({} as CoinsMap)),
        account: currentAccount?.address || null,
        isFetchingCoinBalances: isLoading,
      }}
    >
      {children}
    </Provider>
  );
};

export default Web3Manager;
