import { View, Text, Pressable, StyleSheet } from 'react-native';
import { theme } from '../../theme';

interface ProductCardProps {
  name: string;
  price: number;
}

export function ProductCard({ name, price }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imagePlaceholderText}>{name[0]}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.base100,
    borderRadius: theme.radius.box,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: theme.colors.base200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 48,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  body: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.baseContent,
    marginBottom: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    borderRadius: theme.radius.button,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.primaryContent,
    fontSize: 14,
    fontWeight: '600',
  },
});
