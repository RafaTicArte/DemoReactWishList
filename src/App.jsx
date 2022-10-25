import React, { useState, useEffect } from 'react';
import { v4 as Uuid } from 'uuid';
import WishInput from './components/WishInput';
import WishList from './components/WishList';
import './App.css';
import logo from './logo.svg';

const initialWishes = [
  { id: Uuid(), done: false, text: 'Travel to the moon' },
  { id: Uuid(), done: true, text: 'Make an intro course to React' },
  { id: Uuid(), done: true, text: 'Pay the gym' },
  { id: Uuid(), done: false, text: 'Go to the gym' },
];

function onWishChange() {
  
}

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
        wishes={appWishes}
        onWishChange={(updatedWish) => {
          const updatedAppWishes = appWishes.map((wish) => {
            if (wish.id === updatedWish.id) {
              return { ...wish, done: updatedWish.done };
            }
            return wish;
          });
          setAppWishes(updatedAppWishes);
        }}
      />
    </div>
  );
}

export default App;
