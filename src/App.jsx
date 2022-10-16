import React, { useState, useEffect } from 'react';
import WishInput from './WishInput/WishInput';
import WishList from './WishList/WishList';
import './App.css';
import logo from './logo.svg';

const initialWishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },
];

function App() {
  const [appWishes, setAppWishes] = useState(initialWishes);

  useEffect(() => {
    console.log(`Render App: x${appWishes.length} wishes`);
  });

  return (
    <div className="app">
      <h1>My wishlist</h1>
      <div className="header-img">
        <img src={logo} alt="logo" width="50" />
      </div>
      <WishInput
        onNewWish={(newWish) => {
          setAppWishes([...appWishes, newWish]);
        }}
      />
      <WishList
        appWishes={appWishes}
        onWishesChange={(updateWishes) => {
          setAppWishes(updateWishes);
        }}
      />
    </div>
  );
}

export default App;
