import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// REDUX 
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './reducers';


// CONFIGURATION STORE REDUX 
const store = configureStore({

  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
