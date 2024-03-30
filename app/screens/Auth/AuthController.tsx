import {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

interface P {
  navigation?: any;
}

interface S {
  email: string;
  password: string;
  isLogin: boolean;
}

export default class AuthController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLogin: false,
    };
  }

  // Function to handle user login
  handleLogin = async () => {
    const {email, password} = this.state;

    // Check for empty email or password
    if (email === '' || password === '') {
      return Alert.alert('Please fill in both email and password.');
    }

    try {
      // Attempt to create a new user
      this.setState({isLogin: true});
      let user = await auth().createUserWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('AUTHUSERID', user.user.uid);
      this.setState({isLogin: false});
      this.props.navigation?.navigate('Splash');
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          // User already exists, attempt to log in
          try {
            let user = await auth().signInWithEmailAndPassword(email, password);
            await AsyncStorage.setItem('AUTHUSERID', user.user.uid);
            this.setState({isLogin: false});
            this.props.navigation?.navigate('Splash');
          } catch (innerError: any) {
            // Handle login error
            this.setState({isLogin: false});
            console.log('Error logging in:', innerError.message);
            Alert.alert(
              'Something Wrong!!',
              'Invalid email or password. Please try again.',
            );
          }
          break;

        case 'auth/invalid-email':
          // Invalid email format
          Alert.alert('Something Wrong!!', 'Invalid email address.');
          this.setState({isLogin: false});
          break;

        case 'auth/weak-password':
          // Weak password
          Alert.alert(
            'Something Wrong!!',
            'Password should be at least 6 characters.',
          );
          this.setState({isLogin: false});
          break;

        default:
          // Other errors
          console.log('Error:', error.message);
          Alert.alert('An error occurred. Please try again later.');
          this.setState({isLogin: false});
      }
    }
  };
}
