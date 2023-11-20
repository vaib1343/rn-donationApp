import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../assets/styles/globalStyles';
import Header from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import homeStyle from './Home.style';
import SearchInput from '../../components/SearchInput/SearchInput';
import {updateSelectedCategoryId} from '../../redux/reducers/categories.reducer';
import Tab from '../../components/Tab/Tab';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {updateDonationId} from '../../redux/reducers/donation.reducer';
import {Routes} from '../../navigaton/Routes';

const Home = ({navigation}) => {
  const PAGE_LIMIT = 4;
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);

  //redux
  const dispatch = useDispatch();
  const {firstName, lastName, profileImage} = useSelector(state => state.User);
  const {selectedCategoryId, categories} = useSelector(
    state => state.Categories,
  );
  const {items} = useSelector(state => state.Donation);

  const pagination = (item, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= item?.length) {
      return [];
    } else {
      return item?.slice(startIndex, endIndex);
    }
  };

  useEffect(() => {
    const response = pagination(categories, currentPage, PAGE_LIMIT);
    setCategoryList(preState => [...preState, ...response]);
  }, [categories, currentPage]);

  const filteredDonationList = items?.filter(donation =>
    donation?.categoryIds?.includes(selectedCategoryId),
  );

  const onDonationClick = (donationId, categoryInformation) => {
    dispatch(updateDonationId(donationId));
    navigation.navigate(Routes.singleDonationItem, {
      categories: categoryInformation,
    });
  };

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[homeStyle.header]}>
          <View>
            <Text style={[homeStyle.welcomeText]}>Hello,</Text>
            <Header title={firstName + ' ' + lastName + ' 👋'} />
          </View>
          <Image
            source={{uri: profileImage}}
            style={[homeStyle.profileImage]}
            resizeMode="contain"
          />
        </View>
        <View style={[homeStyle.searchBox]}>
          <SearchInput
            placeholder="Search"
            onChangeText={value => setSearch(value)}
            value={search}
          />
        </View>
        <View style={[homeStyle.highlightedImageContainer]}>
          <Pressable>
            <Image
              source={require('../../assets/images/highlighted_image.png')}
              resizeMode="contain"
              style={[homeStyle.highlightedImage]}
            />
          </Pressable>
        </View>
        <View style={homeStyle.categoryContainer}>
          <Header title={'Select Category'} type={2} />
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReached={() => {
              setCurrentPage(state => state + 1);
            }}
            onEndReachedThreshold={0.5}
            renderItem={({item}) => (
              <View key={item?.categoryId} style={homeStyle.categoryItem}>
                <Tab
                  title={item?.name}
                  isInactive={selectedCategoryId !== item?.categoryId}
                  onPress={() =>
                    dispatch(updateSelectedCategoryId(item?.categoryId))
                  }
                />
              </View>
            )}
          />
        </View>
        {filteredDonationList?.length ? (
          <View style={homeStyle.donationContainer}>
            {filteredDonationList?.map(donation => {
              const categoryInformation = categories?.filter(
                ele => ele?.categoryId === selectedCategoryId,
              );
              return (
                <SingleDonationItem
                  donationId={donation?.donationItemId}
                  key={donation.donationItemId}
                  donationTitle={donation?.name}
                  badgeTitle={categoryInformation?.[0].name}
                  price={parseInt(donation?.price, 10)}
                  uri={donation?.image}
                  onPress={donationId =>
                    onDonationClick(donationId, categoryInformation)
                  }
                />
              );
            })}
          </View>
        ) : (
          <Header title={'No items'} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
