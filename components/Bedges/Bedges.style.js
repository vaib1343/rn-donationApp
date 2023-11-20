import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/font.utils';
import {horizontalScale, scaleFontSize} from '../../utils/scale.utils';

const bedgesStyles = StyleSheet.create({
  bedgeContainer: {
    backgroundColor: '#145855',
    borderRadius: 100,
    paddingVertical: 10,
  },
  bedgeTxt: {
    color: '#FFF',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(10),
    letterSpacing: horizontalScale(0.2),
    textAlign: 'center',
  },
});

export default bedgesStyles;
