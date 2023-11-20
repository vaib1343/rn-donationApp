import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scale.utils';
import {getFontFamily} from '../../utils/font.utils';

const searchInputStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    borderRadius: horizontalScale(100),
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    color: '#686C7A',
  },
});

export default searchInputStyle;
