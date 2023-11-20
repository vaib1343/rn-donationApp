import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale.utils';

const singleDonationStyle = StyleSheet.create({
  image: {
    height: verticalScale(180),
    width: horizontalScale(130),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: 13,
    left: 10,
  },
  detailContainer: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default singleDonationStyle;
