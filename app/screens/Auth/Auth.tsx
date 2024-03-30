import React from 'react';
import {StyleSheet, ImageBackground, View, ScrollView} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

// file import's
import {bg} from '../../assets/images';
import AuthController from './AuthController';
import {AppButton, AppInput, ScreenContainer} from '../../components';

class Auth extends AuthController {
  render() {
    return (
      <ScreenContainer backgroundColor="transparent" translucent>
        <ScrollView>
          <ImageBackground
            source={bg}
            style={styles.bgStyle}
            resizeMode="cover"
          />
          <View style={styles.inputContainer}>
            <AppInput
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={val => this.setState({email: val})}
              containerStyle={styles.input}
            />
            <AppInput
              placeholder="Password"
              secureTextEntry
              onChangeText={val => this.setState({password: val})}
              containerStyle={[styles.inputStyle, styles.input]}
            />
            <AppButton
              title="Login/Register"
              loading={this.state.isLogin}
              onPress={this.handleLogin}
              containerStyle={styles.buttonStyle}
            />
          </View>
        </ScrollView>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  bgStyle: {
    width: '100%',
    height: responsiveWidth(100),
  },
  input: {
    borderRadius: responsiveWidth(4),
  },
  inputContainer: {
    padding: responsiveWidth(5),
  },
  inputStyle: {
    marginTop: responsiveWidth(5),
  },
  buttonStyle: {
    marginTop: responsiveWidth(5),
    borderRadius: responsiveWidth(4),
  },
});

export default Auth;
