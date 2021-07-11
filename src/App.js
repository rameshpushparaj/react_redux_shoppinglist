import React from 'react';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import './style.css';

export default function App() {
  return (
    <Provider store={store}>
      <ShoppingList />
    </Provider>
  );
}
