import { View, Text, Pressable, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export function Hero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.title}>Welcome to ACME</Text>
      <Text style={styles.subtitle}>
        Your one-stop shop for widgets, gadgets, and gizmos.
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>View Products</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: theme.colors.base200,
    padding: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.baseContent,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.baseContent,
    textAlign: 'center',
    marginBottom: 24,
    opacity: 0.8,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: theme.radius.button,
  },
  buttonText: {
    color: theme.colors.primaryContent,
    fontSize: 16,
    fontWeight: '600',
  },
});
