import Routes from 'routes';

import AppLayout from 'components/AppLayout';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Routes />
      </AppLayout>
    </>
  );
}
export default App;
