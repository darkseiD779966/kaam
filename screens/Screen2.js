import React from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/image.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>
        Find perfect & desired{'\n'}job match...
      </Text>
      <Text style={styles.text1}>
      we provide various categories{'\n'}and quick acess to the job{'\n'}you desire
      </Text>
      <View style={styles.navigationBar}>
        <View style={styles.navigationDot}></View>
        <View style={styles.navigationDotActive}></View>
        <View style={styles.navigationDot}></View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate('Screen3')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainerSkip}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Choose your role')}>
        <Text style={styles.buttonSkip}>Skip</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#737373',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 250,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    marginTop: 30,
    fontSize: 28,
    textAlign: 'center',
    color: '#516390',
  },
  text1: {
    marginTop: 30,
    fontSize: 15,
    textAlign: 'center',
    color: '#3A3A3A',
  },
  navigationBar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navigationDot: {
    width: 40,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    margin: 5,
  },
  navigationDotActive: {
    width: 40,
    height: 10,
    backgroundColor: '#E06C42',
    borderRadius: 5,
    margin: 5,
  },
  buttonContainer: {
    width: 145,
    height: 50,
    marginTop: 30,
    backgroundColor: '#E06C42',
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    borderRadius:5
  },
  buttonContainerSkip: {
    width: 100,
    height: 40,
    marginTop: 30,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  button: {
    flex: 1, // Allow the Pressable to expand to fill the container
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop:10,
  },
  buttonSkip: {
    fontSize: 20,
    textAlign: 'center',
    color: '#516390',
  },

});

export default Screen2;
