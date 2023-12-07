import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState(1);
  const contentTranslateX = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(contentTranslateX, {
      toValue: -300, // Change the value based on your screen width
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      contentTranslateX.setValue(0);
    });
  }, [currentScreen]);

  const screens = [
    {
      imageSource: require('../assets/gif1.gif'),
      mainText: "Let's find your dream job\nwith us...",
      subText: 'Finding your dream job is now\nmuch easier and faster like\nnever before',
    },
    {
      imageSource: require('../assets/gif2.gif'),
      mainText: 'Find the perfect & desired\njob match...',
      subText: 'We provide various categories\nand quick access to the job\nyou desire',
    },
    {
      imageSource: require('../assets/gif3.gif'),
      mainText: 'Hire skilled & talented\nstaff quickly...',
      subText: "Let's hire skilled talented and\nperfect candidate quickly\nwith us",
    },
  ];

  const slideAnimationStyle = {
    transform: [{ translateX: contentTranslateX }],
  };

  const navigateToNextScreen = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigation.navigate('Choose your role');
    }
  };

  const navigateBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Animated.View style={[styles.contentContainer, slideAnimationStyle]}>
          <View style={styles.imageContainer}>
            <Image source={screens[currentScreen - 1].imageSource} style={styles.image} />
          </View>
          <View >
            <Text style={styles.text}>{screens[currentScreen - 1].mainText}</Text>
            <Text style={styles.text1}>{screens[currentScreen - 1].subText}</Text>
          </View>
        </Animated.View>
      </View>
      <View style={styles.navigationBar}>
        {screens.map((_, index) => (
          <View
            key={index}
            style={
              index === currentScreen - 1
                ? styles.navigationDotActive
                : styles.navigationDot
            }
          ></View>
        ))}
      </View>
      <View >
        <View style={styles.buttonContainer}>
          <Pressable onPress={navigateToNextScreen} style={styles.button}>
            <Text style={styles.buttonText}>
              {currentScreen < screens.length ? 'Next' : 'Next'}
            </Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainerSkip}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('JobPage')}
          >
            <Text style={styles.buttonSkip}>Skip</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
  },
  imageContainer: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 250,
  },
  image: {
    width: 350,
    height: 350,
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
    // width: 100,
    // height: 40,
    marginTop: 30,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  button: {
    flex: 1,
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

export default Screen1;
