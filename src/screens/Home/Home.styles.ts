import { StyleSheet } from 'react-native';
import { spacing } from '../../theme';

export const homeStyles = StyleSheet.create({
  root: { flex: 1 },
  imageContainer: { width: '47%', height: 100 },
  image: { width: '100%', height: '100%' },
  columnWrapper: { justifyContent: 'space-evenly', paddingVertical: spacing.xs },
});
