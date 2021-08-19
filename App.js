import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.conatiner}>
      <Image source={require('./assets/base.png')} style={styles.baseImg} />
      <TouchableOpacity style={styles.overlayImgs}>
        <Image
          source={require('./assets/firstLayer.png')}
          style={styles.overlayImgs}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.overlayImgs}>
        <Image
          source={require('./assets/secondLayer.png')}
          style={styles.overlayImgs}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.overlayImgs}>
        <Image
          source={require('./assets/thirdLayer.png')}
          style={styles.overlayImgs}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  baseImg: {
    width: '100%',
    height: '100%',
  },

  overlayImgs: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
