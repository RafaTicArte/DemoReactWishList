import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

/**
 * Callback to run when a wish changes.
 * @callback onWishChange - Callback to run when a wish changes.
 * @param {Object} updatedWish - Wish updated.
 * @param {String} updatedWish.id - Identifier of a wish.
 * @param {String} updatedWish.text - Text of a wish.
 * @param {Boolean} updatedWish.done - Done/Pending wish.
 */

/**
 * Render list of wishes.
 * @param {Object[]} wishes - Array of wishes.
 * @param {String} wishes[].id - Identifier of a wish.
 * @param {String} wishes[].text - Text of a wish.
 * @param {Boolean} wishes[].done - Done/Pending wish.
 * @param {onWishChange} callback - Callback to run when a wish changes.
 */
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
