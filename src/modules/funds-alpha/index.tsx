// import React, { Suspense, lazy } from 'react';
// import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
// import AntdSpin from 'antd/lib/spin';
// import Tabs from 'components/antd/tabs';
// import Icon from 'components/custom/icon';
// import { useWallet } from 'wallets/wallet';
// import s from './s.module.scss';

import React from 'react';
import { isMobile } from 'react-device-detect';

import Grid from 'components/custom/grid';
import { useWarning } from 'components/providers/warning-provider';

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

  return <Grid flow="row"> Hello moto </Grid>;
};

export default FundsAlphaView;
