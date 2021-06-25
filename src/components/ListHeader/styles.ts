import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '78%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 27,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 16,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
});
