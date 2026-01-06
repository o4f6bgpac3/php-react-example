import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const products = [
  { name: 'Widget', price: 29 },
  { name: 'Gadget', price: 49 },
  { name: 'Gizmo', price: 99 },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Header />
      <Hero />

      {/* Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} name={product.name} price={product.price} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
