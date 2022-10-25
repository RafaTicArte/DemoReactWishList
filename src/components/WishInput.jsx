import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function WishInput({ onNewWish }) {
  const wishInputText = useRef();

  useEffect(() => {
    console.log('Render WishInput');
  });

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        placeholder="Enter your wish here"
        ref={wishInputText}
        onKeyUp={(event) => {
          if (event.key === 'Enter' && wishInputText.current.value.length > 0) {
            console.log(`New Wish: ${wishInputText.current.value}`);
            onNewWish({ done: false, text: wishInputText.current.value });
            wishInputText.current.value = '';
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
