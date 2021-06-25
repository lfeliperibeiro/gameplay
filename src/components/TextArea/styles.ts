import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    marginRight: 4,
    borderWidth: 1,
    borderBottomColor: theme.colors.secondary50,
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlignVertical: 'center',
  },
});
