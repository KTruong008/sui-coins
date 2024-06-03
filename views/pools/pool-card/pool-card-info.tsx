import { Box, Typography } from '@interest-protocol/ui-kit';
import { pathOr } from 'ramda';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { TokenIcon } from '@/components';
import { useNetwork } from '@/context/network';
import { getSymbolByType, isSui } from '@/utils';

import { PoolCardTokenInfoProps } from './pool-card.types';

const PoolCardInfo: FC<PoolCardTokenInfoProps> = ({
  coinTypes,
  coinMetadata,
}) => {
  const network = useNetwork();

  return (
    <Box
      my="xl"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        mb="m"
        gap="m"
        display="flex"
        height="2.5rem"
        justifyContent="center"
        alignItems="center"
        alignSelf="stretch"
      >
        {coinTypes.map((type) => (
          <TokenIcon
            withBg
            key={v4()}
            type={type}
            network={network}
            symbol={isSui(type) ? 'MOVE' : getSymbolByType(type)}
          />
        ))}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          gap="xs"
          size="small"
          variant="body"
          display="flex"
          fontSize="1rem"
          fontWeight="700"
          color="onSurface"
          textAlign="center"
          lineHeight="1.7rem"
        >
          {coinTypes.flatMap((type, index) => [
            index ? <>{' • '}</> : '',
            pathOr('', [type, 'symbol'], coinMetadata).replace(
              'SUI',
              'MOVE'
            ) || <Skeleton height="%" width="4rem" />,
          ])}
        </Typography>
      </Box>
    </Box>
  );
};

export default PoolCardInfo;
