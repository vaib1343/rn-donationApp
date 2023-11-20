import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import singleDonationStyle from './SingleDonationItem.style';
import {useSelector} from 'react-redux';
import globalStyles from '../../assets/styles/globalStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Bedges from '../../components/Bedges/Bedges';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const SingleDonationItem = ({navigation, route}) => {
  const {selectedDonationInformation} = useSelector(state => state.Donation);
  const categories = route?.params?.categories;
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[singleDonationStyle.backContainer]}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={[singleDonationStyle.imageContainer]}>
          <Image
            source={{uri: selectedDonationInformation?.image}}
            resizeMode="cover"
            style={[singleDonationStyle.image]}
          />
        </View>
        <View style={[singleDonationStyle.detailContainer]}>
          <Bedges numberOfLines={1} title={categories?.[0].name} />
          <View>
            <View style={[singleDonationStyle.title]}>
              <Header title={selectedDonationInformation?.name} type={1} />
            </View>
            <Text style={[singleDonationStyle.description]}>
              {selectedDonationInformation?.description}
              {selectedDonationInformation?.description}
              {selectedDonationInformation?.description}
              {selectedDonationInformation?.description}
              {selectedDonationInformation?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={[singleDonationStyle.btnContainer]}>
        <Button title="Donate" />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
