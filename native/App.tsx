import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { Header } from './src/components/Header';
import { Hero } from './src/components/Hero';
import { ProductCard } from './src/components/ProductCard';
import { ContactForm } from './src/components/ContactForm';
import { Footer } from './src/components/Footer';
import { theme } from './theme';

const products = [
  { name: 'Widget', price: 29 },
  { name: 'Gadget', price: 49 },
  { name: 'Gizmo', price: 99 },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <ScrollView style={styles.content}>
        <Hero />

        {/* Products Section */}
        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Our Products</Text>
            <View style={styles.productGrid}>
              {products.map((product) => (
                <ProductCard key={product.name} name={product.name} price={product.price} />
              ))}
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={[styles.section, styles.sectionAlt]}>
          <View style={styles.sectionContentNarrow}>
            <Text style={styles.sectionTitle}>Get in Touch</Text>
            <ContactForm />
          </View>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base100,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingVertical: 64,
    paddingHorizontal: 16,
  },
  sectionAlt: {
    backgroundColor: theme.colors.base200,
  },
  sectionContent: {
    maxWidth: 1152,
    alignSelf: 'center',
    width: '100%',
  },
  sectionContentNarrow: {
    maxWidth: 448,
    alignSelf: 'center',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.baseContent,
    textAlign: 'center',
    marginBottom: 32,
  },
  productGrid: {
    gap: 24,
  },
});
