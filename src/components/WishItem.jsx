import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

function WishItem({ wishItem, onDoneChange }) {
  const [done, setDone] = useState(wishItem.done);

  useEffect(() => {
    console.log(`Render WishItem: ${wishItem.text}`);
  });

  return (
    <li
      className={ClassNames('wish-list__item', {
        'wish-list__item--done': done,
      })}
    >
      <input
        id={`wish${wishItem.i}`}
        type="checkbox"
        defaultChecked={done}
        onChange={(event) => {
          setDone(event.target.checked);
          const newDone = event.target.checked;
          onDoneChange({ done: newDone, text: wishItem.text, i: wishItem.i });
        }}
      />
      <label htmlFor={`wish${wishItem.i}`}>{wishItem.text}</label>
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
  wishItem: { done: false, text: '' },
  onDoneChange: () => {},
};

export default WishItem;
