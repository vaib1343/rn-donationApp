import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.style';

const Header = ({title, type = 1, color}) => {
  return (
    <View>
      <Text
        style={[
          headerStyle[`title${type}`],
          color && {
            color,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

Header.default = {
  title: 'Hello world',
  type: 1,
};

Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  color: PropTypes.string,
};
export default Header;
