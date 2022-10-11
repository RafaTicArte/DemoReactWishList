import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WishInput = ({ onNewWish }) => {
  const [newWishText, setNewWishText] = useState('');

  useEffect(() => {
    console.log('Render WishInput');
  });

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        placeholder="Enter your wish here"
        value={newWishText}
        onChange={(event) => {
          setNewWishText(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.key === 'Enter' && newWishText.length > 0) {
            console.log(`New Wish: ${newWishText}`);
            onNewWish({ done: false, text: newWishText });
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
};

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
