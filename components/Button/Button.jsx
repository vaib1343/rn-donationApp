import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import buttonStyle from './Button.style';

const Button = ({title, disabled, ...rest}) => {
  return (
    <TouchableOpacity
      style={[buttonStyle.btn, disabled && buttonStyle?.disabled]}
      disabled={disabled}
      {...rest}>
      <Text style={buttonStyle.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
