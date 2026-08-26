import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Copy, Check, Sliders, Menu, X, ArrowUpRight } from 'lucide-react';
import { contactData } from '../data/portfolioData';

interface TopNavProps {
  onOpenSpec: () => void;
  activeSection: string;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenSpec, activeSection }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'process', label: 'Process & DOE' },
    { id: 'skills', label: 'Skills & Languages' },
    { id: 'education', label: 'Education' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#23252a] bg-[#010102]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
            id="brand-logo-link"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#5e6ad2] text-white shadow-sm shadow-[#5e6ad2]/30">
              <span className="font-mono text-xs font-bold tracking-tight">GL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[14px] font-semibold tracking-[-0.02em] text-[#f7f8f8]">
                이가영
              </span>
            </div>
          </a>
          <span className="hidden text-xs text-[#3e3e44] sm:inline">/</span>
          <span className="hidden font-mono text-xs text-[#8a8f98] md:inline">
            Process Development
          </span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden items-center gap-1 md:flex" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`rounded-[6px] px-3 py-1.5 text-[13px] font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-[#141516] text-[#f7f8f8]'
                  : 'text-[#8a8f98] hover:bg-[#0f1011] hover:text-[#d0d6e0]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSpec}
            className="flex items-center gap-1.5 rounded-[8px] border border-[#23252a] bg-[#0f1011] px-2.5 py-1.5 text-[13px] font-medium text-[#d0d6e0] transition-colors hover:border-[#34343a] hover:bg-[#141516] hover:text-[#f7f8f8]"
            title="Design System Spec Sheet"
            id="btn-design-spec"
          >
            <Sliders className="h-3.5 w-3.5 text-[#5e6ad2]" />
            <span className="hidden sm:inline">Design Spec</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 rounded-[8px] bg-[#5e6ad2] px-3 py-1.5 text-[13px] font-medium text-white transition-all hover:bg-[#828fff] active:bg-[#5e69d1]"
            id="btn-contact-primary"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-white" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Mail className="h-3.5 w-3.5" />
                <span>Contact</span>
              </>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#23252a] text-[#8a8f98] md:hidden hover:text-[#f7f8f8]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#23252a] bg-[#0f1011] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center justify-between rounded-[6px] px-3 py-2 text-left text-sm font-medium text-[#d0d6e0] hover:bg-[#141516] hover:text-[#f7f8f8]"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#62666d]" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
