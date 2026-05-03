
import { Eye, Users, RefreshCw } from 'lucide-react';

export default function Platform() {
  return (
    <section 
      id="why"
      data-aos="fade-up"
      className="bg-white py-16 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center border border-outline-variant/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary-container mr-2"></span>
            <span className="text-sm font-medium tracking-widest uppercase">Why AgroLink</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary">A Partner You can Rely on</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="rounded-lg overflow-hidden aspect-video shadow-2xl">
              <img className="w-full h-full object-cover" 
                src="/assets/i.jpg"
                alt="Agricultural Platform"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-12" data-aos="fade-left">
            <div className="space-y-4 md:space-y-8" data-aos="fade-up">
              <Users className="w-10 h-10 text-primary mx-auto lg:mx-0 mb-4" />
              <h4 className="text-lg md:text-2xl font-medium text-primary">Bridging Farmers and Buyers</h4>
              <p className="text-base md:text-lg text-on-surface-variant">We connect Tanzanian farmers and local suppliers directly to a wide network of domestic and international buyers.</p>
            </div>
            <div className="space-y-4 md:space-y-8 pt-8 md:pt-12 border-t border-gray-200" data-aos="fade-up">
              <RefreshCw className="w-10 h-10 text-primary mx-auto lg:mx-0 mb-4" />
              <h4 className="text-lg md:text-2xl font-medium text-primary">Streamlined Agricultural Trade</h4>
              <p className="text-base md:text-lg text-on-surface-variant">We simplify the supply chain by integrating our digital marketplace with end-to-end logistics coordination.</p>
            </div>
            <div className="space-y-4 md:space-y-8 pt-8 md:pt-12 border-t border-gray-200" data-aos="fade-up">
              <Eye className="w-10 h-10 text-primary mx-auto lg:mx-0 mb-4" />
              <h4 className="text-lg md:text-2xl font-medium text-primary">Scaling for the Future</h4>
              <p className="text-base md:text-lg text-on-surface-variant">We are rapidly expanding our digital platform and supplier networks to facilitate cross-border exports.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
