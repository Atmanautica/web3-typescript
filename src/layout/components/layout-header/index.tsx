import '@animated-burgers/burger-squeeze/dist/styles.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Button from 'components/antd/button';
import Icon from 'components/custom/icon';
import { Text } from 'components/custom/typography';
import { useGeneral } from 'components/providers/general-provider';
import ConnectedWallet from 'wallets/components/connected-wallet';

import s from './s.module.scss';

const LayoutHeader: React.FC = () => {
  const { setNavOpen } = useGeneral();

  return (
    <div className={s.component}>
      <Button type="link" className={s.burger} onClick={() => setNavOpen(prevState => !prevState)}>
        <Icon name="burger" />
      </Button>
      <Text type="h3" weight="semibold" color="primary" className={s.title}>
        <Switch>
          <Route path="*">Bityield</Route>
        </Switch>
      </Text>
      <ConnectedWallet />
    </div>
  );
};

export default LayoutHeader;
