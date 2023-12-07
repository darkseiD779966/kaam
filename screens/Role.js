import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';

const Role = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       // 'DM-Sans': require('../path-to-your-font/DMSans-Regular.ttf'),
  //       // Add other font styles if needed
  //     });
  //     setFontLoaded(true);
  //   };

  //   loadFonts();
  // }, []);
  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
    // Add your logic for button press here
  };

  return (
    <View style={styles.container}>
      <Text >
        Choose whether you are looking for a job or you want to hire someone
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            selectedButton === 'lookingForJob' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('lookingForJob')}
        >
          {selectedButton === 'lookingForJob' && (
            <Icon name="check-square" size={20} color="black" style={styles.checkIcon} />
          )}
          <Image source={require('../assets/LookingForJob.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>
            Looking for a Job?
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            selectedButton === 'hiring' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('hiring')}
        >
          {selectedButton === 'hiring' && (
            <Icon name="check-square" size={20} color="black" style={styles.checkIcon} />
          )}
          <Image source={require('../assets/HumanResources.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>
          Are you a recruiter?
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer1}>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text  style={styles.getStartedButtonText}>Get Started</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    height:200
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#516390',
    borderRadius: 10,
    alignItems: 'center',
    margin:5
  },
  selectedButton: {
    backgroundColor: '#E8EEFF',
  },
  buttonImage: {
    width: 80,
    height: 80,
    marginTop:"20%"
  },
  buttonText: {
    margin: 10,
    fontSize: 16,
  },
  checkIcon: {
    position: 'absolute',
    top: 5,
    right: 5,

  },
  buttonContainer1: {
    width: 280,
    height: 50,
    marginTop: "70%", // Adjust the vertical spacing as needed
    backgroundColor: '#E06C42',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Role;
