
export default function Services() {
  const services = [
    { title: 'Food & Beverage Marketplace', text: 'Connecting local farmers directly to marketplaces and food processors.', stats: ['100+', 'Daily'] },
    { title: 'Logistics & Transport', text: 'Optimized transport solutions for fast agricultural produce delivery.', stats: ['20+', 'Fast'] },
    { title: 'Agri-Tech & Insights', text: 'Data-driven insights to improve crop yields and farm management.', stats: ['90%', 'Real-time'] },
  ];

  return (
    <section 
      data-aos="fade-up"
      className="bg-surface py-16 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary font-medium tracking-widest uppercase text-xs md:text-sm">● Featured Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary mt-4 max-w-2xl">Brand and digital work built for tech and corporate companies.</h2>
        </div>
        
        {/* Main Container Box */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-outline-variant/10 space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="grid grid-cols-1 gap-8 md:gap-12 items-center">
               <div className="space-y-4 md:space-y-6">
                 <h3 className="text-3xl md:text-4xl font-medium text-primary">{s.title}</h3>
                 <p className="text-base md:text-lg text-on-surface-variant">{s.text}</p>
                 <div className="flex gap-4 md:gap-8">
                   {s.stats.map(stat => <div key={stat} className="text-2xl md:text-3xl font-black text-primary">{stat}</div>)}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
