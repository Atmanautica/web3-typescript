import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import AntdSpin from 'antd/lib/spin';
import Tabs from 'components/antd/tabs';
import Icon from 'components/custom/icon';
import { useWallet } from 'wallets/wallet';
import { isMobile } from 'react-device-detect';
import Grid from 'components/custom/grid';
import { Text } from 'components/custom/typography'
import { useWarning } from 'components/providers/warning-provider';
import GasFeeList from 'components/custom/gas-fee-list';

import s from './s.module.scss';
import TokenAmount from 'components/custom/token-amount';
import StatusDot from 'components/custom/status-dot';
import StatusTag from 'components/custom/status-tag';
import Badge from 'components/custom/badge';
import Select from 'components/antd/select';

const FundsAlphaView: React.FC = () => {
  // const history = useHistory();
  // const wallet = useWallet();
  const warning = useWarning();

  React.useEffect(() => {
    let warningDestructor: () => void;

    if (isMobile) {
      warningDestructor = warning.addWarn({
        text: 'Transactions can only be made from the desktop version using Metamask',
        closable: true,
        storageIdentity: 'bb_desktop_metamask_tx_warn',
      });
    } else {
      warningDestructor = warning.addWarn({
        text: 'Do not send funds directly to the contract!',
        closable: true,
        storageIdentity: 'bb_send_funds_warn',
      });
    }

    return () => {
      warningDestructor?.();
    };
  }, [isMobile]);

  return <Grid
  flow="row"
  padding={24}
  justify="center"
  align="center"
  rowsTemplate="1fr 3fr 1fr"
  colsTemplate="1fr 3fr 1fr">
    <StatusDot color="green"/>
    <Text tag="h1" type="h1" color="red" weight="bold">
      Alpha Funds
    </Text>
    <Select options={[]} label="List all" />
    <AntdSpin />
    <AntdSpin />
    <GasFeeList />
    <AntdSpin />
    <TokenAmount tokenIcon="bond-circle-token" slider />
    <AntdSpin />
  </Grid>;
};

export default FundsAlphaView;
