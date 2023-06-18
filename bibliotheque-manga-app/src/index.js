import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// REDUX 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'
import { getCarouselDernierAjoutCards, getCarouselNouveauteCards, getCarouselPepiteCards } from './actions/cartecarousel.action';

// CONFIGURATION STORE REDUX 
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
//
// DISPATCH ACCUEIL 
store.dispatch(getCarouselNouveauteCards());
store.dispatch(getCarouselDernierAjoutCards());
store.dispatch(getCarouselPepiteCards());
//





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
);



