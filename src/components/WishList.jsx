import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

function WishList({ wishes, onWishChange }) {
  useEffect(() => {
    console.log(`Render WishList x${wishes.length}`);
  });

  return (
    <ul className="wish-list">
      {wishes.map(({ id, done, text }) => (
        <WishItem
          key={id}
          wishItem={{ id, done, text }}
          onDoneChange={(updatedWish) => {
            onWishChange(updatedWish);
          }}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  onWishChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishChange: () => {},
};

export default WishList;
