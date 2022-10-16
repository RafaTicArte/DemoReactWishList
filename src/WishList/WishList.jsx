import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import WishItem from '../WishItem/WishItem';

function WishList({ appWishes, onWishesChange }) {
  const [wishes, setWishes] = useState(appWishes);

  useEffect(() => {
    console.log(`Render WishList x${appWishes.length}`);
    setWishes(appWishes);
  }, [appWishes]);

  return (
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <WishItem
          key={text}
          wishItem={{ done, text, i }}
          onDoneChange={(updatedItem) => {
            const updatedWishes = [...wishes];
            updatedWishes[i].done = updatedItem.done;
            setWishes([...updatedWishes]);
            onWishesChange(updatedWishes);
          }}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  appWishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  appWishes: [],
  onWishesChange: () => {},
};

export default WishList;
