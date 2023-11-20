import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scale.utils';
import {getFontFamily} from '../../utils/font.utils';

const buttonStyle = StyleSheet.create({
  btn: {
    backgroundColor: '#2979F2',
    paddingVertical: verticalScale(20),
    borderRadius: horizontalScale(100),
  },
  disabled: {
    opacity: 0.5,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    letterSpacing: 0.32,
  },
});

export default buttonStyle;
