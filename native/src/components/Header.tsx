import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>ACME</Text>
      <View style={styles.nav}>
        <Text style={styles.navLink}>Products</Text>
        <Text style={styles.navLink}>Contact</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    color: theme.colors.primaryContent,
    fontSize: 20,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    gap: 16,
  },
  navLink: {
    color: theme.colors.primaryContent,
    fontSize: 14,
  },
});
