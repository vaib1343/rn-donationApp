import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale.utils';
import {getFontFamily} from '../../utils/font.utils';

const singleDonationStyle = StyleSheet.create({
  backContainer: {
    marginTop: verticalScale(12),
    marginHorizontal: horizontalScale(22),
  },
  imageContainer: {
    marginTop: verticalScale(12),
    marginHorizontal: horizontalScale(22),
  },
  image: {
    width: '100%',
    height: horizontalScale(240),
    borderRadius: horizontalScale(5),
  },
  detailContainer: {
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(22),
  },
  title: {
    marginTop: verticalScale(12),
  },
  description: {
    marginTop: verticalScale(7),
    marginBottom: verticalScale(12),
    color: '#000',
    fontFamily: getFontFamily('Inter', '400'),
    lineHeight: horizontalScale(17),
    letterSpacing: 0.2,
  },
  btnContainer: {
    marginHorizontal: horizontalScale(22),
    marginBottom: verticalScale(10),
  },
});

export default singleDonationStyle;
