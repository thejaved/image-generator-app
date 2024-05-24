import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface CustomCalendarStyles {
  container: ViewStyle;
  header: ViewStyle;
  headerText: TextStyle;
  navButton: TextStyle;
  row: ViewStyle;
  cell: ViewStyle;
  cellText: TextStyle;
}

export const styles = StyleSheet.create<CustomCalendarStyles>({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navButton: {
    fontSize: 16,
    color: '#FF5F00',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  cellText: {
    fontSize: 14,
  },
});
