import Router from './routes';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

function App() {

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    store.dispatch({ type: 'LOGOUT' });
  }
  // store.dispatch(loadUser());

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;