import {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface P {
  navigation?: any;
}

interface S {}

export default class SplashController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.props.navigation?.addListener('focus', () => {
      this.handleNavigation();
    });
    this.handleNavigation();
  }

  handleNavigation = async () => {
    let isLogin = await AsyncStorage.getItem('AUTHUSERID');
    setTimeout(() => {
      if (isLogin) {
        this.props.navigation?.navigate('Bottom Stack');
      } else {
        this.props.navigation?.navigate('Auth');
      }
    }, 1000);
  };
}
