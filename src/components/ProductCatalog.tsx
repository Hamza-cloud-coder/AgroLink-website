
import { Link } from 'react-router-dom';

const products = [
  { title: 'Rice', description: 'Premium quality white and brown rice, sourced directly from local farms.', image: '/assets/r.jpg' },
  { title: 'Maize', description: 'Freshly harvested yellow and white maize, suitable for various processing needs.', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop' },
  { title: 'Beans', description: 'High-protein beans selected for quality and nutrition, perfect for daily consumption.', image: '/assets/b.webp' },
  { title: 'Pigeon Peas', description: 'Nutritious pigeon peas, essential in traditional diets and culinary applications.', image: '/assets/p.jpg' },
];

export default function ProductCatalog() {
  return (
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
  );
}
