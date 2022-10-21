import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

function WishList({ wishes, onWishesChange }) {
  useEffect(() => {
    console.log(`Render WishList x${wishes.length}`);
  });

  return (
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <WishItem
          key={text}
          wishItem={{ done, text, i }}
          onDoneChange={(updatedItem) => {
            const updatedWishes = [...wishes];
            updatedWishes[i].done = updatedItem.done;
            onWishesChange(updatedWishes);
          }}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
