import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// file import's
import {colors} from '../../config';
import fonts from '../../config/fonts';
import HomeController from './HomeController';
import {Categories, ScreenContainer} from '../../components';
import {icon1, icon2, icon3, icon4} from '../../assets/images';

class Home extends HomeController {
  render() {
    return (
      <ScreenContainer
        backgroundColor={colors.bgColor}
        containerStyle={styles.containerStyle}>
        <View style={styles.locationStyle}>
          <Entypo
            name="location-pin"
            color={colors.white}
            size={responsiveFontSize(3)}
          />
          <Text style={styles.textStyleLocation}>Delhi, Dilshard Garden</Text>
          <AntDesign
            name="down"
            color={colors.white}
            size={responsiveFontSize(2)}
            style={styles.arrowDownStyle}
          />
        </View>
        <TouchableOpacity style={styles.openInput}>
          <AntDesign
            name="search1"
            color={colors.white}
            size={responsiveFontSize(2.5)}
          />
          <Text style={styles.textStyle}>
            Search for Cars, Mobiles, Phones, and Beyond...
          </Text>
        </TouchableOpacity>
        <View style={styles.sliderContainer}>
          <View style={styles.demoSlider}></View>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.headText}>Discover Categories</Text>
          <TouchableOpacity>
            <Text style={styles.textViewStyle}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categorieStyle}>
          <Categories lableCataegries="Cars" Icon={icon1} />
          <Categories lableCataegries="Property" Icon={icon2} />
          <Categories lableCataegries="Laptops" Icon={icon3} />
          <Categories lableCataegries="Mobiles" Icon={icon4} />
        </View>
        <Text style={styles.freshRecommeTextStyle}>Freshly Recommended</Text>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: responsiveWidth(3),
  },
  locationStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveWidth(4),
  },
  textStyleLocation: {
    color: colors.white,
    fontFamily: fonts.regular,
    marginLeft: responsiveWidth(1),
    fontSize: responsiveFontSize(2),
  },
  arrowDownStyle: {
    marginLeft: responsiveWidth(2),
  },
  openInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(6),
    backgroundColor: colors.bgSecond,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
  },
  textStyle: {
    color: colors.white,
    fontFamily: fonts.regular,
    marginLeft: responsiveWidth(2),
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveWidth(3),
  },
  headText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: responsiveFontSize(2),
  },
  textViewStyle: {
    color: colors.primary,
    fontFamily: fonts.bold,
  },
  categorieStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderContainer: {
    paddingVertical: responsiveWidth(5),
  },
  demoSlider: {
    width: '100%',
    height: responsiveHeight(20),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
  },
  freshRecommeTextStyle: {
    color: colors.white,
    fontFamily: fonts.regular,
    marginTop: responsiveWidth(10),
    marginBottom: responsiveWidth(2),
    fontSize: responsiveFontSize(2.5),
  },
});

export default Home;
