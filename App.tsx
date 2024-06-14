import 'react-native-gesture-handler';
import React from 'react';
import {CustomCalendar} from '@visionlyft/rn-custom-calendar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AppNavigation} from './app/navigation';

function App(): React.JSX.Element {
  return (
    <>
      <AppNavigation />
    </>
  );
}

export default App;
