import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Dot = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#5a7bef' : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#5a7bef' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        ...styles.dot,
        backgroundColor,
      }}
    />
  );
};

Dot.propTypes = {
  isLight: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
};

const styles = {
  dot: {
    width: 8,
    height: 8,
    borderRadius: 3,
    marginHorizontal: 3,
  },
};

export default Dot;
