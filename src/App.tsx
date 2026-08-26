/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { SummarySection } from './components/SummarySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProcessShowcase } from './components/ProcessShowcase';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { DesignSpecModal } from './components/DesignSpecModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isSpecOpen, setIsSpecOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['summary', 'experience', 'process', 'skills', 'education'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreDOE = () => {
    const el = document.getElementById('process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#010102] text-[#f7f8f8]">
      {/* Sticky Navigation */}
      <TopNav
        onOpenSpec={() => setIsSpecOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onExploreDOE={handleExploreDOE} />
        <SummarySection />
        <ExperienceSection />
        <ProcessShowcase />
        <SkillsSection />
        <EducationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Design Spec Sheet Modal */}
      <DesignSpecModal
        isOpen={isSpecOpen}
        onClose={() => setIsSpecOpen(false)}
      />
    </div>
  );
}

