import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

import {WP, HP, fontSize} from '../../utils';
const Details = ({navigation, route}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: route.params.data?.coord?.lat,
          longitude: route.params.data?.coord?.lon,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        <MapView.Marker
          coordinate={{
            latitude: route.params.data?.coord?.lat,
            longitude: route.params.data?.coord?.lon,
          }}
          title={'title'}
          description={'description'}
        />
      </MapView>
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.cityName}>{route.params.data?.name}</Text>
          <Text style={styles.text}>{route.params.data?.weather[0]?.main}</Text>
          <Text style={styles.text}>
            Humidity: {route.params.data?.main?.humidity}
          </Text>
          <Text style={styles.text}>
            Wind Speed: {route.params.data?.wind?.speed}
          </Text>
          <Text style={styles.text}>
            Max Temp: {route.params.data?.main?.temp_max}
          </Text>
          <Text style={styles.text}>
            Min Temp: {route.params.data?.main?.temp_min}
          </Text>
        </View>

        <View>
          <Text style={styles.temperature}>25°c</Text>
          <Image
            style={styles.image}
            source={{
              uri: `http://openweathermap.org/img/wn/${route.params.data?.weather[0]?.icon}@2x.png`,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: HP(60),
    width: WP(100),
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WP(100),
    paddingHorizontal: WP(5),
    paddingVertical: WP(5),
  },
  temperature: {
    fontSize: fontSize.h5,
  },
  cityName: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
});

export default Details;
