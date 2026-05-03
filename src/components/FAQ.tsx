
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What distinguishes the Web Portal from the Mobile App?",
    answer: "The Mobile App is engineered for operational efficiency in the field (quick listing, chat, photo upload). The Web Portal is a command center for administrative tasks, bulk data management, and deep analytics, optimized for desktop use."
  },
  {
    question: "How does the logistics section work?",
    answer: "We connect you with vetted logistics partners who specialize in agricultural freight, cold chain, and bulk transport, ensuring your produce gets where it needs to go safely."
  },
  {
    question: "Do you charge transaction commissions?",
    answer: "Our model is transparent. We charge a flat fee based on the transaction type rather than hidden commissions, ensuring you keep more of your profit."
  },
  {
    question: "Is AgroLink suitable for small producers?",
    answer: "Absolutely. AgroLink is designed for producers of all sizes, from small craft artisans and local farms to large-scale industrial operations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section 
      id="faq"
      data-aos="fade-up"
      className="bg-surface py-16 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16 items-start">
        {/* Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center border border-outline-variant/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary-container mr-2"></span>
            <span className="text-sm font-medium tracking-widest uppercase">COMMON QUESTIONS</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-medium text-primary">Everything About Our<br />Sustainable Farming</h2>
        </div>
        
        {/* Questions */}
        <div className="w-full space-y-4">
          {faqData.map((faq, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              className={`rounded-lg p-6 shadow-sm border transition-all ${openIndex === i ? 'bg-primary text-white' : 'bg-white border-outline-variant/10'}`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-medium ${openIndex === i ? 'text-white' : 'text-primary'}`}>
                  {faq.question}
                </span>
                {openIndex === i ? <ChevronUp className="shrink-0 ml-4" /> : <ChevronDown className="shrink-0 ml-4" />}
              </div>
              {openIndex === i && (
                <p className="mt-4 pt-4 border-t border-white/20 text-sm italic">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl">
          <img src="/assets/img-ecosystems-agro-harvest.webp" alt="Sustainable Farming" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-white rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg">
            <span className="font-medium text-base md:text-lg">Still Have a Questions?</span>
            <a href="https://wa.me/61459771636" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
