import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

function WishItem({ wishItem, onDoneChange }) {
  const [done, setDone] = useState(wishItem.done);
  const { text } = wishItem;
  const { i } = wishItem;

  useEffect(() => {
    console.log(`Render WishItem: ${text}`);
  });

  return (
    <li
      className={ClassNames('wish-list__item', {
        'wish-list__item--done': done,
      })}
    >
      <input
        id={`wish${i}`}
        type="checkbox"
        defaultChecked={done}
        onChange={(e) => {
          setDone(e.target.checked);
          const newDone = e.target.checked;
          onDoneChange({ done: newDone, text, i });
        }}
      />
      <label htmlFor={`wish${i}`}>{text}</label>
    </li>
  );
}

WishItem.propTypes = {
  wishItem: PropTypes.shape({
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    i: PropTypes.number.isRequired,
  }),
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  wishItem: [],
  onDoneChange: () => {},
};

export default WishItem;
