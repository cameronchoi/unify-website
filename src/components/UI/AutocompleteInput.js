import React, { useState, useEffect } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import Fonts from '../../constants/fonts';

const AutocompleteInput = ({
  data,
  value,
  onChangeText,
  placeholder,
  style,
  ...props
}) => {
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    const filteredData = [];
    for (const name of data) {
      const text = value.toLowerCase();
      if (name.toLowerCase().startsWith(text)) {
        filteredData.push(name);
      }
      if (filteredData.length == 5) {
        break;
      }
    }
    setFilteredData(filteredData);
  }, [value]);

  const viewStyle = Platform.select({
    android: styles.androidView,
    ios: styles.iosView,
  });

  return (
    <View style={{ ...viewStyle, ...style }}>
      <Autocomplete
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        listStyle={styles.list}
        style={styles.input}
        data={filteredData}
        defaultValue={value}
        onChangeText={onChangeText}
        hideResults={data.includes(value) || value.length == 0}
        placeholder={placeholder}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={
              index != filteredData.length - 1 ? styles.item : styles.lastItem
            }
            onPress={() => onChangeText(item)}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iosView: {
    height: 30,
    width: '85%',
    zIndex: 1,
  },
  androidView: {
    position: 'absolute',
    width: '85%',
    zIndex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    borderColor: 'transparent',
  },
  input: {
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: Fonts.normal,
  },
  list: {
    borderWidth: 0,
  },
  item: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
  lastItem: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    padding: 5,
  },
  itemText: {
    fontSize: 16,
    fontFamily: Fonts.normal,
  },
});

export default AutocompleteInput;
