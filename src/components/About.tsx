
export default function About() {
  const services = [
    { title: 'Food & Beverage Marketplace', text: 'Market everything from raw commodities to premium artisanal products with AgroLink, the perfect solution for brands seeking new distribution channels', image: '/assets/mar.jpg' },
    { title: 'Logistics & Transport', text: 'Solve your shipping challenges with AgroLink. Access reliable freight partners specialized in cold-chain and bulk cargo.', image: '/assets/log.jpg' },
    { title: 'Agri-Tech & Insights', text: 'Buy and sell machinery with confidence inside AgroLink. Access detailed technical specifications and direct contact with dealers of new and used equipment.', image: '/assets/agri.jpg' },
  ];

  return (
    <section 
      id="about"
      data-aos="fade-up"
      className="bg-surface py-16 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center">
          <div className="inline-flex items-center border border-outline-variant/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary-container mr-2"></span>
            <span className="text-sm font-medium tracking-widest uppercase">OUR SERVICES</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-primary text-center max-w-2xl">Sustainable Solutions for Modern Agriculture</h2>
        </div>
        
        {/* Main Wrapper */}
        <div className="grid grid-cols-1 gap-8 md:gap-16">
          {services.map((s, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-outline-variant/10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
               <div data-aos="fade-up" className="space-y-4 md:space-y-6">
                 <h3 className="text-xl md:text-2xl font-medium text-primary">{s.title}</h3>
                 <p className="text-base md:text-lg text-on-surface-variant">{s.text}</p>
               </div>
               <div className="rounded-3xl shadow-xl overflow-hidden -mx-6 lg:mx-0">
                 <img src={s.image} alt={s.title} className="w-full h-auto object-cover" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
