
import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    { title: 'Rice', description: 'Premium quality white and brown rice, sourced directly from local farms.', image: '/assets/r.jpg' },
    { title: 'Maize', description: 'Freshly harvested yellow and white maize, suitable for various processing needs.', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop' },
    { title: 'Beans', description: 'High-protein beans selected for quality and nutrition, perfect for daily consumption.', image: '/assets/b.webp' },
    { title: 'Pigeon Peas', description: 'Nutritious pigeon peas, essential in traditional diets and culinary applications.', image: '/assets/p.jpg' },
  ];

  return (
    <section 
      data-aos="fade-up"
      className="bg-surface py-16 md:py-32 px-6 md:px-12"
      id="products"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center border border-outline-variant/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary-container mr-2"></span>
                <span className="text-sm font-medium tracking-widest uppercase">OUR PRODUCTS</span>
            </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-primary text-center max-w-2xl">Quality Fresh Produce, Delivered Right to You</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/10 flex flex-col space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md">
                    <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                </div>
                <h3 className="text-xl font-medium text-primary">{p.title}</h3>
                <p className="text-base text-on-surface-variant flex-grow">{p.description}</p>
                 <a href="https://wa.me/61459771636" className="inline-block bg-primary text-white text-center px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all">
                    Order via WhatsApp
                 </a>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/products" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all">
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
