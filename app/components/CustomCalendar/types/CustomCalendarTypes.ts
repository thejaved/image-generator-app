import {StyleProp, ViewStyle, TextStyle} from 'react-native';

export interface CustomCalendarProps {
  containerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  headerTextStyle?: StyleProp<TextStyle>;
  navButtonStyle?: StyleProp<TextStyle>;
  rowStyle?: StyleProp<ViewStyle>;
  selectedDateCellStyle?: StyleProp<ViewStyle>;
}

export interface CellStyle {
  cellStyle?: StyleProp<ViewStyle>;
  cellTextStyle?: StyleProp<TextStyle>;
}
