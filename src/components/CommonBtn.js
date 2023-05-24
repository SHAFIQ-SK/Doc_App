import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CommonBtn = ({w, h, txt, onclick, status}) => {
  return (
    <TouchableOpacity
      onPress={() => onclick()}
      style={{
        alignSelf: 'center',
        marginTop: 7,
        marginBottom: 10,
      }}>
      {status ? (
        <LinearGradient
          colors={['#4c669f', '#3b5998']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff'}}>{txt}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#8e8e8e', '#8e8e8e']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            opacity: 0.5,
          }}>
          <Text style={{color: '#fff', padding: 10}}>{txt}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default CommonBtn;
