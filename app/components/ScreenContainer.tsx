import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
  StatusBarStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';

// file import's
import {colors} from '../config';

interface ScreenContainerProps extends StatusBarProps {
  children?: any;
  backgroundColor?: string;
  barStyle?: null | StatusBarStyle | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  barStyle,
  backgroundColor,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <>
      <StatusBar
        barStyle={barStyle ? barStyle : 'light-content'}
        backgroundColor={backgroundColor ? backgroundColor : colors.primary}
        {...props}
      />
      <SafeAreaView style={[styles.container, containerStyle]}>
        <View style={[styles.mainContainer, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
});
