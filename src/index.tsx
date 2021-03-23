import 'styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import EthWeb3Provider from 'components/providers/eth-web3-provider';
import GeneralContextProvider from 'components/providers/general-provider';
import ThemeProvider from 'components/providers/theme-provider';
import WindowStateProvider from 'components/providers/window-state';
import LayoutView from 'layout';
import Web3WalletProvider from 'wallets/wallet';

const App: React.FC = () => {
  return (
    <>
      <WindowStateProvider>
        <ThemeProvider>
          <EthWeb3Provider>
            <Web3WalletProvider>
              <GeneralContextProvider>
                <Router>
                  <LayoutView />
                </Router>
              </GeneralContextProvider>
            </Web3WalletProvider>
          </EthWeb3Provider>
        </ThemeProvider>
      </WindowStateProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
