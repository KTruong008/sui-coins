import 'react-loading-skeleton/dist/skeleton.css';

import { WalletProvider } from '@mysten/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

import { NetworkProvider } from '@/context/network';

import ThemeManager from '../theme-manager';

const queryClient = new QueryClient();

const Provider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeManager>
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <WalletProvider autoConnect zkSend={{ name: 'Sui Coins' }}>
          {children}
        </WalletProvider>
      </NetworkProvider>
    </QueryClientProvider>
  </ThemeManager>
);

export default Provider;
