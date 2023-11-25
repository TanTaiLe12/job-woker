import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layout';
import config from './config';

// Redux toolkit
import { Provider } from 'react-redux';
import store from './store';

// Clear log build prod
import LogService from './services/log.service';

// import useMiddleware from './hooks/useMiddleware';

const logService = new LogService();
logService.clearWarnings(config.logConfig.log_warnings);
logService.clearConsoleLog(config.logConfig.log_consoles_env);

function AuthWrapper({ children, authenticationRequired }) {
  // const { checkAuthUser } = useMiddleware();
  // const navigate = useNavigate();

  // checkAuthUser();

  // useEffect(() => {
  //   if (authenticationRequired) {
  //     const accessToken = true;
  //     if (!accessToken) {
  //       alert('Please login to access!');
  //       navigate('/');
  //     }
  //   }
  // }, [navigate, authenticationRequired]);

  return children;
}

function Apps() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout =
              route.layout === null ? Fragment : !!route.layout ? route.layout : DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <AuthWrapper authenticationRequired={false}>
                    <Layout>
                      <Page />
                    </Layout>
                  </AuthWrapper>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Layout =
              route.layout === null ? Fragment : !!route.layout ? route.layout : DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <AuthWrapper authenticationRequired={false}>
                    <Layout>
                      <Page />
                    </Layout>
                  </AuthWrapper>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </Provider>
  );
}

export default Apps;
