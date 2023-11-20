import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  } else {
    return 350;
  }
};

export const horizontalScale = size => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  } else {
    return 680;
  }
};

export const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFont = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

export const scaleFontSize = size =>
  Math.round(width / guidelineBaseFont()) * size;
