import {View, Text, Pressable} from 'react-native';
import React from 'react';
import singleDonationStyle from './SingleDonationItem.style';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import Bedges from '../Bedges/Bedges';
import Header from '../Header/Header';

const SingleDonationItem = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
  onPress,
  donationId,
}) => {
  return (
    <Pressable onPress={() => onPress(donationId)}>
      <View>
        <View style={singleDonationStyle.badge}>
          <Bedges title={badgeTitle} />
        </View>
        <Image
          source={{uri}}
          style={[singleDonationStyle.image]}
          resizeMode="cover"
        />
      </View>
      <View style={singleDonationStyle.detailContainer}>
        {donationTitle?.length > 15 ? (
          <Header
            title={`${donationTitle?.slice(0, 15)}...`}
            type={3}
            color={'#0A043C'}
          />
        ) : (
          <Header title={donationTitle} type={3} color={'#0A043C'} />
        )}

        <View style={singleDonationStyle.price}>
          <Header title={`$${price.toFixed(2)}`} type={3} color={'#156CF7'} />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
