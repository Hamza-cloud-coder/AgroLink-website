
import { Mail, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer 
      data-aos="fade-up"
      className="bg-[#2D6A2F] text-white pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: Logo and Mail */}
        <div className="flex flex-col mb-12 border-b border-white/20 pb-8 gap-8">
          <div className="text-2xl font-bold flex items-center">
            <img src="/assets/agro limk logo png3.png" alt="AgroLink Logo" className="h-16 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Mail className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <p className="text-xs uppercase text-white/80">Mail us</p>
              <p className="text-xl font-semibold">info@agrolinkworld.com</p>
            </div>
          </div>
        </div>

        {/* Links and Services vertically */}
        <div className="flex flex-col gap-12 mb-16">
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-white/70">Links</h4>
            <ul className="space-y-4 text-white text-lg">
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/products">Our Services</Link></li>
              <li><Link to="/#why">Why AgroLink</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
              <li><a href="https://wa.me/61459771636">Start Now</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-white/70">Our Services</h4>
            <ul className="space-y-4 text-white text-lg">
              <li><a href="#">Food & Beverage Marketplace</a></li>
              <li><a href="#">Agri-Tech Hub</a></li>
              <li><a href="#">Logistics & Transport</a></li>
              <li><a href="#">The Magazine</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-2xl">Subscribe For Latest Information</h4>
            <p className="text-white/80 mb-6">FOLLOW US ON :</p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20"><Facebook className="w-8 h-8" /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20"><Instagram className="w-8 h-8" /></a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright and links */}
        <div className="flex flex-col pt-8 border-t border-white/20 text-white/80 text-base gap-8">
          <p>© 2026 AgroLink. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold w-fit">
            <ArrowUp className="w-5 h-5" /> Back To Top
          </button>
        </div>
      </div>
    </footer>
  );
}
