import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scale.utils';
import {getFontFamily} from '../../utils/font.utils';

const tabStyle = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inActive: {
    backgroundColor: '#F3F5F9',
  },
  tabTxt: {
    color: 'white',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    letterSpacing: 0.32,
    lineHeight: scaleFontSize(17),
    textTransform: 'capitalize',
  },
  inActiveTxt: {
    color: '#79869F',
  },
});

export default tabStyle;
