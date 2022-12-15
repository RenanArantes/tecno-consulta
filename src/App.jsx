import React from 'react';
import { CompanyContextProvider } from './context/Company';

import GlobalStyle from './global/styles';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <CompanyContextProvider>
        <Routes />
      </CompanyContextProvider>
    </>
  );
}

export default App;
