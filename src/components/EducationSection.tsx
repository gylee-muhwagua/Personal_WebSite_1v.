import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-12 border-t border-[#23252a]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5e6ad2]">05. Academic</span>
            <span className="text-[#3e3e44]">•</span>
            <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#f7f8f8]">EDUCATION</h2>
          </div>
          <span className="font-mono text-xs text-[#8a8f98]">Academic Credentials</span>
        </div>

        {/* Education 2-Column Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="group relative rounded-[12px] border border-[#23252a] bg-[#0f1011] p-6 transition-all hover:border-[#34343a] hover:bg-[#141516]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#23252a] bg-[#141516] text-[#5e6ad2]">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#f7f8f8]">
                      {edu.institution}
                    </h3>
                    <p className="text-[13px] text-[#8a8f98]">
                      {edu.department}
                    </p>
                  </div>
                </div>

                {edu.statusText && (
                  <span className="rounded-full bg-[#18191a] border border-[#23252a] px-2.5 py-0.5 font-mono text-[11px] text-[#5e6ad2]">
                    {edu.statusText}
                  </span>
                )}
              </div>

              <div className="mt-4 rounded-[6px] border border-[#23252a]/60 bg-[#010102]/60 p-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#d0d6e0] font-medium">{edu.degree}</span>
                  <span className="text-[#5e6ad2]">({edu.degreeKr})</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-[#8a8f98]">
                  <Calendar className="h-3 w-3 text-[#62666d]" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {edu.details && edu.details.length > 0 && (
                <div className="mt-4 space-y-1.5 border-t border-[#23252a]/60 pt-3">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[12.5px] text-[#8a8f98]">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-[#5e6ad2] flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
