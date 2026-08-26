import React from 'react';
import { Star, Award, Globe2, CheckCircle2, Wrench, Languages, Sparkles } from 'lucide-react';
import { skillsList, languagesList } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const renderStars = (level: number, max: number = 5) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${
              i < level
                ? 'fill-[#5e6ad2] text-[#5e6ad2]'
                : 'fill-transparent text-[#3e3e44]'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-12 border-t border-[#23252a]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5e6ad2]">04. Competency</span>
            <span className="text-[#3e3e44]">•</span>
            <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#f7f8f8]">
              TECHNICAL SKILLS & LANGUAGES
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8a8f98]">Evaluated Proficiencies</span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Technical Skills (Left: 7 cols) */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-[#8a8f98] uppercase tracking-wider flex items-center gap-1.5">
                <Wrench className="h-3.5 w-3.5 text-[#5e6ad2]" />
                TECHNICAL SKILLS
              </span>
              <span className="font-mono text-[11px] text-[#62666d]">4.0 / 5.0 Average Proficiency</span>
            </div>

            {skillsList.map((skill, idx) => (
              <div
                key={idx}
                className="group rounded-[12px] border border-[#23252a] bg-[#0f1011] p-5 transition-all hover:border-[#34343a] hover:bg-[#141516]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-[#5e6ad2]" />
                    <h3 className="text-[16px] font-semibold text-[#f7f8f8]">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStars(skill.level, skill.maxLevel)}
                    <span className="font-mono text-xs font-semibold text-[#d0d6e0]">
                      ★★★★☆
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-[13.5px] leading-[1.65] text-[#8a8f98]">
                  {skill.description}
                </p>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-[4px] bg-[#141516] border border-[#23252a] px-2 py-0.5 font-mono text-[11px] text-[#d0d6e0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages (Right: 5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-[#8a8f98] uppercase tracking-wider flex items-center gap-1.5">
                <Languages className="h-3.5 w-3.5 text-[#5e6ad2]" />
                LANGUAGES
              </span>
              <span className="font-mono text-[11px] text-[#62666d]">3 Languages</span>
            </div>

            <div className="rounded-[12px] border border-[#23252a] bg-[#0f1011] p-5 space-y-4">
              {languagesList.map((lang, idx) => (
                <div
                  key={idx}
                  className="rounded-[8px] border border-[#23252a]/60 bg-[#141516] p-4 transition-all hover:border-[#34343a]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[15px] font-semibold text-[#f7f8f8]">
                        {lang.language}
                      </span>
                      <span className="ml-2 font-mono text-xs text-[#8a8f98]">
                        ({lang.nativeName})
                      </span>
                    </div>
                    <div>
                      {renderStars(lang.level, lang.maxLevel)}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-mono text-[12px] text-[#5e6ad2]">
                      {lang.proficiencyText}
                    </span>
                  </div>

                  {lang.note && (
                    <p className="mt-1.5 text-[12px] text-[#8a8f98]">
                      {lang.note}
                    </p>
                  )}
                </div>
              ))}

              <div className="rounded-[6px] border border-[#23252a] bg-[#010102]/60 p-3 text-center">
                <p className="font-mono text-[11px] text-[#62666d]">
                  국내외 산학협력 및 글로벌 전극 기술 교류 대응 가능
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
