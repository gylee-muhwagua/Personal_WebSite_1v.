import React from 'react';
import { Mail, Phone, Globe, MapPin, ArrowUpRight, Cpu } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#23252a] bg-[#010102] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-[#23252a]/60">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#5e6ad2] text-white">
                <span className="font-mono text-[10px] font-bold">GL</span>
              </div>
              <span className="text-[15px] font-semibold text-[#f7f8f8]">
                {contactData.name} ({contactData.nameEn})
              </span>
            </div>
            <p className="mt-1 font-mono text-xs text-[#8a8f98]">
              Dry Electrode & Battery Process Development Engineer
            </p>
          </div>

          {/* Quick Contact Line */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8a8f98]">
            <a href={`mailto:${contactData.email}`} className="hover:text-[#f7f8f8] flex items-center gap-1">
              <Mail className="h-3 w-3 text-[#5e6ad2]" />
              <span>{contactData.email}</span>
            </a>
            <span className="text-[#3e3e44]">•</span>
            <span className="flex items-center gap-1 text-[#d0d6e0]">
              <Phone className="h-3 w-3 text-[#5e6ad2]" />
              <span>{contactData.phone}</span>
            </span>
            <span className="text-[#3e3e44]">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-[#5e6ad2]" />
              <span>{contactData.location}</span>
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#62666d]">
          <p>© {new Date().getFullYear()} Gayoung Lee. Designed with Precision & Process Engineering Rigor.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 font-mono hover:text-[#f7f8f8] transition-colors"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
