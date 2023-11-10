import React, { useState, useEffect } from 'react';
import WishInput from './components/WishInput';
import WishList from './components/WishList';
import WishSave from './components/WishSave';
import './App.css';
import logo from './assets/logo.svg';

/**
 * Renden main application.
 */
function App() {
  console.log('Loading wishes...');
  let initialWishes = JSON.parse(localStorage.getItem('WISHES'));
  if (!initialWishes) {
    initialWishes = [
      { id: crypto.randomUUID(), done: false, text: 'Travel to the moon' },
      { id: crypto.randomUUID(), done: true, text: 'Make an intro course to React' },
      { id: crypto.randomUUID(), done: true, text: 'Pay the gym' },
      { id: crypto.randomUUID(), done: false, text: 'Go to the gym' },
    ];
  }
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
          const updatedAppWishes = [...appWishes];
          const modifyWish = updatedAppWishes.find(
            (wish) => wish.id === updatedWish.id,
          );
          modifyWish.done = updatedWish.done;
          setAppWishes(updatedAppWishes);
        }}
      />
      <WishSave
        onWishesSave={() => {
          console.log('Saving wishes...');
          localStorage.setItem('WISHES', JSON.stringify(appWishes));
        }}
      />
    </div>
  );
}

export default App;
