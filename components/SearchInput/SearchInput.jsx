import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import searchInputStyle from './SearchInput.style';
import {scaleFontSize} from '../../utils/scale.utils';

const SearchInput = props => {
  const ref = useRef(null);
  const handleFocus = () => {
    ref.current?.focus();
  };

  return (
    <Pressable style={searchInputStyle.container} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}
      />
      <TextInput ref={ref} style={searchInputStyle.searchInput} {...props} />
    </Pressable>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
