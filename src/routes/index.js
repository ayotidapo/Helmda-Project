import { Suspense, lazy } from 'react';

import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Homepage'));
const AboutUs = lazy(() => import('pages/AboutUs'));

const Routes = () => {
  return (
    <Suspense fallback={<>Waiting</>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route render={() => <h1>Page Not Found</h1>} />;
      </Switch>
    </Suspense>
  );
};
export default Routes;
