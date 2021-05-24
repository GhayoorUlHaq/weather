import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text, FlatList} from 'react-native';
import {styles} from './styles';
import CityListItem from '../../components/CityListItem';
import {useDispatch} from 'react-redux';
import {getCities} from '../../redux/actions';
import {colors} from '../../utils';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = () => {
    setLoading(true);
    const cbSuccess = response => {
      setError('');
      setLoading(false);
      setCities(response);
    };
    const cbFailure = error => {
      setLoading(false);
      setError(error);
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
