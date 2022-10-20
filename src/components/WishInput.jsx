import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function WishInput({ onNewWish }) {
  let newWishText = '';

  useEffect(() => {
    console.log('Render WishInput');
  });

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        placeholder="Enter your wish here"
        onChange={(event) => {
          newWishText = event.target.value;
        }}
        onKeyUp={(event) => {
          if (event.key === 'Enter' && newWishText.length > 0) {
            console.log(`New Wish: ${newWishText}`);
            onNewWish({ done: false, text: newWishText });
            newWishText = '';
          }
        }}
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
