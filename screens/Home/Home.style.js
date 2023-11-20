import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scale.utils';
import {getFontFamily} from '../../utils/font.utils';

const homeStyle = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#636776',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    letterSpacing: 0.32,
    marginBottom: 5,
  },
  profileImage: {
    height: verticalScale(50),
    width: horizontalScale(50),
  },
  searchBox: {
    marginTop: horizontalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  highlightedImageContainer: {
    marginTop: horizontalScale(10),
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categoryContainer: {
    marginLeft: horizontalScale(24),
    marginTop: verticalScale(5),
  },
  categoryItem: {
    marginTop: verticalScale(10),
    marginRight: horizontalScale(10),
  },
  donationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(24),
    flexWrap: 'wrap',
    rowGap: verticalScale(23),
    columnGap: horizontalScale(17),
    marginTop: verticalScale(10),
  },
});

export default homeStyle;
