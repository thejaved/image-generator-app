import 'react-native-gesture-handler';
import React from 'react';
import {AppNavigation} from './app/navigation';
import {CustomCalendar} from '@visionlyft/rn-custom-calendar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function App(): React.JSX.Element {
  return (
    <>
      {/* <AppNavigation /> */}
      {/* <CustomCalendar
        // other props
        containerStyle={{backgroundColor: 'lightgrey', borderRadius: 10}}
        headerStyle={{backgroundColor: 'skyblue', padding: 10}}
        headerTextStyle={{color: 'white', fontSize: 20}}
        navButtonStyle={{color: 'white', fontSize: 16}}
        cellTextStyle={{color: 'black', fontSize: 14}}
        cellStyle={{backgroundColor: 'lightblue', borderRadius: 5}}
        prevIcon={<FontAwesome name="arrow-left" size={24} color="black" />}
        nextIcon={<FontAwesome name="arrow-right" size={24} color="black" />}
        selectedDateCellStyle={{backgroundColor: 'green'}}
      /> */}
      <CustomCalendar
        onSubmit={date => console.log(date)}
        containerStyle={{backgroundColor: 'lightgrey', borderRadius: 10}}
        headerStyle={{backgroundColor: '#EEF7FF', padding: 10}}
        headerTextStyle={{color: 'black', fontSize: 20}}
        navButtonStyle={{color: 'white', fontSize: 16}}
        cellTextStyle={{color: 'black', fontSize: 14}}
        cellStyle={{backgroundColor: '#EEF7FF', borderRadius: 5}}
        prevIcon={<FontAwesome name="arrow-left" size={24} color="black" />}
        nextIcon={<FontAwesome name="arrow-right" size={24} color="black" />}
        selectedDateCellStyle={{backgroundColor: '#FC4100'}}
      />
    </>
  );
}

export default App;
