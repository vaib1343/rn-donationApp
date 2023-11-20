import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale.utils';

const BackButtonStyle = StyleSheet.create({
  backContainer: {
    height: horizontalScale(44),
    width: horizontalScale(44),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#eee',
  },
});

export default BackButtonStyle;
