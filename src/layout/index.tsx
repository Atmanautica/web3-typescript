import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AntdSpin from 'antd/lib/spin';

import WarningProvider from 'components/providers/warning-provider';
import LayoutFooter from 'layout/components/layout-footer';
import LayoutHeader from 'layout/components/layout-header';

import s from './s.module.scss';

import LayoutSideNav from 'layout/components/layout-side-nav';

const FundsAlphaView = lazy(() => import('modules/funds-alpha'));

const LayoutView: React.FC = () => {
  return (
    <div className={s.layout}>
      <LayoutSideNav />

      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <WarningProvider>
          <LayoutHeader />

          <main className={s.main}>
            <Suspense fallback={<AntdSpin className="pv-24 ph-64" />}>
              <Switch>
                <Route path="/funds/:vt(\w+)" component={FundsAlphaView} />
                <Route path="/funds" component={FundsAlphaView} />
                <Redirect from="/" to="/funds" />
              </Switch>
            </Suspense>
          </main>

          <LayoutFooter />
        </WarningProvider>
      </div>
    </div>
  );
};

export default LayoutView;
