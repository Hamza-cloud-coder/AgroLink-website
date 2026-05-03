import ProductCatalog from '../components/ProductCatalog.tsx';

export default function ProductsPage() {
  return (
    <>
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        {/* Blurred background */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Our Full Product Range</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Discover our premium quality agricultural produce, sourced directly from local farms. We are committed to delivering verified, high-quality products to our partners.</p>
        </div>
      </section>
      <section className="bg-surface py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ProductCatalog />
        </div>
      </section>
    </>
  );
}
