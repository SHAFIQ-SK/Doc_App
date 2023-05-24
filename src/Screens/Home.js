import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CommonBtn from '../components/CommonBtn';
const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header
          title={'Doctor App'}
          icon={require('../images/phonendoscope.png')}
        />
        <Image source={require('../images/banner.jpg')} style={styles.banner} />
        <Text style={styles.heading}>Select Category</Text>
        <View style={{marginTop: 10, alignItems: 'center'}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1]}
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.linearGradient}>
                    <Text style={styles.catname}>{'Category' + index}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Top Rated Doctors</Text>
        <View style={{marginTop: 10}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1]}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={styles.docItem}>
                  <Image
                    source={require('../images/doctor.png')}
                    style={styles.docImg}
                  />
                  <Text style={styles.docName}>Doctor {index}</Text>
                  <Text style={styles.docspl}>Skin specialist</Text>
                  <Text
                    style={[
                      styles.status,
                      {
                        color: index / 2 == 0 ? 'green' : 'red',
                        opacity: index / 2 == 0 ? 1 : 0.5,
                      },
                    ]}>
                    {index / 2 == 0 ? 'Available' : 'Busy'}
                  </Text>
                  <CommonBtn
                    w={'100%'}
                    h={40}
                    status={index / 2 == 0 ? true : false}
                    txt={'Book Appointment'}
                    onclick={() => {
                      if (index / 2 == 0) {
                        navigation.navigate('BookAppointmt');
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',

    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catname: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    marginLeft: 10,
    marginTop: 20,
    // alignSelf: 'center',
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docspl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
