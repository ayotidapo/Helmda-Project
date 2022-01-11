import { Suspense, lazy } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Homepage'));
const AboutUs = lazy(() => import('pages/AboutUs'));

const Routes = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about-us" render={() => <AboutUs />} />
          <Route render={() => <h1>Page Not Found</h1>} />;
        </Switch>
      </Suspense>
    </Router>
  );
};
export default Routes;
