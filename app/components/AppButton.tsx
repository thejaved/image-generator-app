import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../config';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import fonts from '../config/fonts';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelColor?: string;
  loading?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  containerStyle,
  labelColor = colors.white,
  loading = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, containerStyle]}
      {...props}>
      {loading && <ActivityIndicator size="small" color={colors.white} />}
      {!loading && (
        <Text style={[styles.labelTitleStyle, {color: labelColor}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(6),
    backgroundColor: colors.primary,
  },
  labelTitleStyle: {
    fontFamily: fonts.regular,
  },
});
