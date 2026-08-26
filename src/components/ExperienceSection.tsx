import React, { useState } from 'react';
import { Briefcase, Calendar, Building2, Tag, ChevronDown, ChevronUp, CheckCircle2, TrendingUp } from 'lucide-react';
import { experienceList } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  // Extract all unique tags
  const allTags = ['ALL', '건식 전극 제조', '실험계획법 (DOE)', '소재 물성 평가', '생산 데이터 분석'];

  const filteredExperiences = selectedTag === 'ALL'
    ? experienceList
    : experienceList.filter((item) => item.tags.includes(selectedTag));

  const toggleDetails = (id: string) => {
    setActiveCompany(activeCompany === id ? null : id);
  };

  return (
    <section id="experience" className="py-12 border-t border-[#23252a]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Tabs */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5e6ad2]">02. Career</span>
            <span className="text-[#3e3e44]">•</span>
            <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#f7f8f8]">EXPERIENCE</h2>
          </div>

          {/* Linear Pill Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-[#23252a] bg-[#0f1011] p-1">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-[#1e2024] text-[#f7f8f8] shadow-sm'
                    : 'text-[#8a8f98] hover:text-[#d0d6e0]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-4">
          {filteredExperiences.map((exp, index) => {
            const isExpanded = activeCompany === exp.id || true; // default show for rich reading

            return (
              <div
                key={exp.id}
                className="group relative rounded-[12px] border border-[#23252a] bg-[#0f1011] p-6 transition-all hover:border-[#34343a] hover:bg-[#141516]"
              >
                {/* Header Row: Company, Role, Period */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-[#f7f8f8]">
                        {exp.role}
                      </h3>
                      <span className="rounded-full bg-[#18191a] border border-[#23252a] px-2.5 py-0.5 font-mono text-[11px] text-[#5e6ad2]">
                        {exp.company}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-[13px] text-[#8a8f98]">
                      <Building2 className="h-3.5 w-3.5 text-[#62666d]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-[6px] bg-[#141516] border border-[#23252a] px-2.5 py-1 font-mono text-[12px] text-[#8a8f98]">
                    <Calendar className="h-3 w-3 text-[#5e6ad2]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Primary Description */}
                <p className="mt-4 text-[15px] leading-[1.75] text-[#d0d6e0]">
                  {exp.summary}
                </p>

                {/* Key Metrics / Highlights */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {exp.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex flex-col rounded-[6px] border border-[#23252a]/70 bg-[#010102]/60 px-3 py-2"
                      >
                        <span className="font-mono text-[11px] text-[#8a8f98]">{m.label}</span>
                        <span className="font-mono text-[15px] font-semibold text-[#f7f8f8]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievements List */}
                {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                  <div className="mt-4 space-y-1.5 border-t border-[#23252a]/60 pt-3.5">
                    {exp.keyAchievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-[13px] text-[#8a8f98]">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#5e6ad2] flex-shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skill Tags */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {exp.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-[4px] bg-[#191a1b] border border-[#23252a] px-2 py-0.5 text-[11px] font-medium text-[#8a8f98]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
