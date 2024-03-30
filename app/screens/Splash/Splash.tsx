import React from 'react';
import {View, StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

// file import's
import {colors} from '../../config';
import {ActivityIndicator} from 'react-native';
import {ScreenContainer} from '../../components';
import SplashController from './SplashController';

class Splash extends SplashController {
  render() {
    return (
      <ScreenContainer
        backgroundColor={colors.bgColor}
        style={styles.containerStyle}>
        <View style={styles.logoContainer}>
          <ActivityIndicator color={colors.white} size="large" />
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
