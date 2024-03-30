import React, {Component} from 'react';
import {colors} from '../config';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IconProps} from 'react-native-vector-icons/Icon';
import fonts from '../config/fonts';

interface AppInputProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  IconComponent?: React.ComponentType<IconProps>;
  IconName?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  placeholder,
  containerStyle,
  IconComponent,
  IconName = 'arrowup',
  ...props
}) => {
  return (
    <View style={[styles.inputContianer, containerStyle]}>
      {IconComponent && (
        <IconComponent
          name={IconName}
          size={responsiveFontSize(2.5)}
          color={colors.white}
          style={styles.iconStyle}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        {...props}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputContianer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(6),
    backgroundColor: colors.bgSecond,
  },
  input: {
    width: '100%',
    height: '100%',
    color: colors.black,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    fontFamily: fonts.regular,
  },
  iconStyle: {
    paddingRight: responsiveWidth(1),
    paddingLeft: responsiveWidth(3),
  },
});
