import {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface P {
  navigation?: any;
}

interface S {}

export default class AuthController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }

  handleLogin = async () => {
    await AsyncStorage.setItem('LOGINID', '78979');
    this.props.navigation?.navigate('Splash');
  };
}
