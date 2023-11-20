import {Text, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import tabStyle from './Tab.style';

const Tab = ({title, isInactive, ...rest}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef();
  const horizontalPadding = 33;

  const style = {
    width: horizontalPadding * 2 + width,
  };

  return (
    <TouchableOpacity
      style={[tabStyle.tab, isInactive && tabStyle?.inActive, style]}
      {...rest}>
      <Text
        ref={textRef}
        onTextLayout={event => setWidth(event?.nativeEvent?.lines?.[0]?.width)}
        style={[tabStyle.tabTxt, isInactive && tabStyle.inActiveTxt]}
        numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  isInactive: PropTypes.bool,
};

export default Tab;
