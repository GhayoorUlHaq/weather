import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text, FlatList} from 'react-native';
import {styles} from './styles';
import CityListItem from '../../components/CityListItem';
import {useDispatch} from 'react-redux';
import {getCities, getCurrentWeather} from '../../redux/actions';
import {colors, generatePush} from '../../utils';
import GetLocation from 'react-native-get-location';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    handleRequest();
  }, []);

  const getCurrentLocationWeather = () => {
    const cbSuccess = response => {
      console.log('current weather success', response?.main?.temp);
      let message = 'Current Temperature: ' + response?.main?.temp + '°c';
      generatePush('WeatherApp', message);
    };
    const cbFailure = error => {
      console.log('current weather error', error);
    };

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location?.latitude, location?.longitude);
        dispatch(
          getCurrentWeather(
            {lat: location?.latitude, lon: location?.longitude},
            cbSuccess,
            cbFailure,
          ),
        );
      })
      .catch(error => {
        const {code, message} = error;
        console.log(code, message);
      });
  };

  const handleRequest = () => {
    setLoading(true);
    const cbSuccess = response => {
      setError('');
      setLoading(false);
      setCities(response);
      getCurrentLocationWeather();
    };
    const cbFailure = error => {
      setLoading(false);
      setError(error);
      getCurrentLocationWeather();
    };

    dispatch(getCities(cbSuccess, cbFailure));
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator color={colors.primary} size={'small'} />
        </View>
      );
    } else if (error) {
      return (
        <View style={styles.centerContainer}>
          <Text>{error}</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={cities}
          renderItem={({item}) => (
            <CityListItem navigation={navigation} data={item} />
          )}
          keyExtractor={item => item.id}
        />
      );
    }
  };
  return <View style={styles.container}>{renderContent()}</View>;
};

export default Home;
