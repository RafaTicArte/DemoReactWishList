import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

function WishItem({ wishItem, onDoneChange }) {
  useEffect(() => {
    console.log(`Render WishItem: ${wishItem.text}`);
  });

  return (
    <li
      className={ClassNames('wish-list__item', {
        'wish-list__item--done': wishItem.done,
      })}
    >
      <input
        id={`wishItem-${wishItem.id}`}
        type="checkbox"
        defaultChecked={wishItem.done}
        onChange={(event) => {
          onDoneChange({
            id: wishItem.id,
            done: event.target.checked,
            text: wishItem.text,
          });
        }}
      />
      <label htmlFor={`wishItem-${wishItem.id}`}>{wishItem.text}</label>
    </li>
  );
}

WishItem.propTypes = {
  wishItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }),
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  wishItem: { id: '', done: false, text: '' },
  onDoneChange: () => {},
};

export default WishItem;
