import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const BookAppointmt = () => {
  return (
    <View style={styles.container}>
      <Header title={'BookAppointmt'} icon={require('../images/back.png')} />
      <Image source={require('../images/doctor.png')} style={styles.docImg} />
      <Text style={styles.name}>Doctor Jack</Text>
      <Text style={styles.spl}>Skin doctor</Text>
    </View>
  );
};

export default BookAppointmt;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  docImg: {width: 100, height: 100, marginTop: 50, alignSelf: 'center'},
  name: {fontSize: 20, fontWeight: '700', alignSelf: 'center', marginTop: 10},
  spl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
});
