import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, fontSize, HP, WP} from '../utils';

const CityListItem = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('details', {
          data,
        })
      }
      style={styles.container}>
      <View>
        <Text style={styles.cityName}>{data?.name}</Text>
        <Text style={styles.condition}>{data?.weather[0]?.main}</Text>
      </View>
      <Text style={styles.temperature}>{data?.main?.temp}°c</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WP(100),
    paddingHorizontal: WP(5),
    paddingVertical: HP(2),
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  temperature: {
    fontSize: fontSize.h5,
  },
  unit: {
    fontSize: fontSize.h3,
  },
  cityName: {
    fontSize: fontSize.small,
  },
  condition: {
    fontSize: fontSize.xxtiny,
    marginTop: WP(2),
  },
});

export default CityListItem;
