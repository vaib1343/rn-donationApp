import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import bedgesStyles from './Bedges.style';

const Bedges = ({title, numberOfLines, ...rest}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const horizontalPadding = 10;

  const style = {
    width: horizontalPadding * 2 + width,
  };

  return (
    <View style={[bedgesStyles.bedgeContainer, style]}>
      <Text
        ref={textRef}
        style={bedgesStyles.bedgeTxt}
        onTextLayout={event => setWidth(event?.nativeEvent?.lines?.[0]?.width)}
        numberOfLines={numberOfLines ? numberOfLines : null}
        {...rest}>
        {title}
      </Text>
    </View>
  );
};

Bedges.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Bedges;
