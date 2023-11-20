import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BackButtonStyle from './BackButton.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={[BackButtonStyle.backContainer]}
      onPress={() => onPress()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </TouchableOpacity>
  );
};

export default BackButton;
