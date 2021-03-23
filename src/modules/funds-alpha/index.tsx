import React, { Suspense, lazy } from 'react';
import { isMobile } from 'react-device-detect';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import AntdSpin from 'antd/lib/spin';

import Grid from 'components/custom/grid';
import Tabs from 'components/antd/tabs';
import Icon from 'components/custom/icon';

import { useWarning } from 'components/providers/warning-provider';
import { useWallet } from 'wallets/wallet';

import s from './s.module.scss';


const FundsAlphaView: React.FC = () => {
  const history = useHistory();
  const wallet = useWallet();
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

  return (
    <Grid flow="row">
      Hello
    </Grid>
  );
};

export default FundsAlphaView;
