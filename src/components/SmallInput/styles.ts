import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    marginRight: 4,
    textAlign: 'center',
    borderWidth: 1,
    borderBottomColor: theme.colors.secondary50,
  },
});
