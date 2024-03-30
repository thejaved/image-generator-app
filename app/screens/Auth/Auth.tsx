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
            <AppInput placeholder="Email" />
            <AppInput
              placeholder="Password"
              containerStyle={styles.inputStyle}
            />
            <AppButton
              title="Login/Register"
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
  inputContainer: {
    padding: responsiveWidth(5),
  },
  inputStyle: {
    marginTop: responsiveWidth(5),
  },
  buttonStyle: {
    marginTop: responsiveWidth(5),
  },
});

export default Auth;
