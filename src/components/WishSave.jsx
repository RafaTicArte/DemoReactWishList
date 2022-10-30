import React from 'react';
import PropTypes from 'prop-types';

function WishSave({ onWishesSave }) {
  return <input type="button" value="Save" onClick={onWishesSave} />;
}

WishSave.propTypes = {
  onWishesSave: PropTypes.func,
};

WishSave.defaultProps = {
  onWishesSave: () => {},
};

export default WishSave;
