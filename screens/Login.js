import React, { useState } from 'react';
import { StyleSheet,ScrollView, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Login = ({ navigation }) => {
  const [language, setLanguage] = useState('english');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  // Simulate OTP verification
  const simulateOTPVerification = async (phoneNumber) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful OTP verification
        const isVerified = Math.random() < 0.5; // Randomly simulate success or failure

        if (isVerified) {
          resolve({ success: true });
        } else {
          reject({ success: false, error: "Invalid OTP" });
        }
      }, 3000); // Simulate a 3-second delay for the OTP verification
    });
  };

  const handleLogin = async () => {
    try {
      const result = await simulateOTPVerification(phoneNumber);

      if (result.success) {
        // OTP verification succeeded, navigate to the next screen
        navigation.navigate('Choose your Language');
      } else {
        // OTP verification failed, handle the error
        alert(result.error);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error(error);
      alert('An error occurred during OTP verification.');
    }
  };
  const handlePickerValueChange = (itemValue) => {
    setLanguage(itemValue);
    if (itemValue === 'other') {
      // Navigate to another page when "Other" is selected
      navigation.navigate('Choose your Language'); // Make sure 'OtherPage' is a valid screen name in your navigation stack
    }
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoStyle}>LOGO</Text>
      </View>
      <View>
        <Text style={styles.text}>Language</Text>
        <View style={{ borderWidth: 1, borderColor: '#000000',height:50,opacity:0.6,borderRadius:5,marginTop:2}}>
        <Picker
          selectedValue={language}
          onValueChange={handlePickerValueChange}
          style={styles.dropdown}
        >
          <Picker.Item label="Select your language" value="language" />
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Other" value="hi" />
        </Picker>
      </View>
        {/* Phone Number Input */}
        <Text style={styles.text1}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        {/* Password Input */}
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.password}
          placeholder="Enter your Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row',alignItems:'center'}}>
  <View style={{ borderBottomWidth: 1, borderColor: '#000000', flex: 1, marginHorizontal: 5 }} />
  <Text style={{fontSize:20 }}>OR</Text>
  <View style={{ borderBottomWidth: 1, borderColor: '#000000', flex: 1, marginHorizontal: 5 }} />
</View>
      <View style={styles.buttonContainer}>
        <View>
        <TouchableOpacity style={styles.button} >
          <Image source={require('../assets/linkedin.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Continue with LinkedIn</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.button} >
          <Image source={require('../assets/google.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonNext} >
        <TouchableOpacity
         
          style={styles.buttonPress}
        >
          <Text style={styles.buttonText1}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center',
  },
  dropdown: {
    width: 350,
    height: 50,
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000000'
  },
  input: {
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingLeft: 10,
    marginTop: 5,
    borderRadius: 5,
    fontSize: 18
  },
  password: {
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingLeft: 10,
    marginTop: 1,
    borderRadius: 5,
    fontSize: 18
  },
  text: {
    color: '#516390',
    display: 'flex',
    // flexDirection: 'flex-end',
    fontSize: 20,
  },
  text1: {
    color: '#516390',
    display: 'flex',
    // flexDirection: 'flex-end',
    fontSize: 20,
    marginTop:10
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F5F5F5",
  },
  logoStyle: {
    color: "#516390",
    fontSize: 15,
    // fontWeight: 700
  },
  buttonContainer: {
    display:'flex',
    flexDirection: 'column', // Display buttons in a row
    width: 300,
    margin:15
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    margin:10,
    borderWidth:1,
    borderColor:'black'
  },
  buttonImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  buttonNext:{
      width: 300,
      height: 50,
      marginTop: 10,
      backgroundColor: '#E06C42',
      alignItems: 'center', // Center the text horizontally
      justifyContent: 'center', // Center the text vertically
      borderRadius:5
  },
  buttonPress: {
    flex: 1, // Allow the Pressable to expand to fill the container
  },
  buttonText1: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop:10,
  },
});

export default Login;
