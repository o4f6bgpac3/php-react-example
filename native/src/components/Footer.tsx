import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2026 ACME Corp. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: theme.colors.neutral,
    padding: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    color: theme.colors.neutralContent,
    fontSize: 14,
  },
});
