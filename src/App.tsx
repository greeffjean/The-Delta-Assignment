import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Router />
    </div>
    </Provider>
  );
}

export default App;
