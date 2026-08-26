import React from 'react';
import { Layers, Target, Users2, Sparkles, Cpu, GitCommit } from 'lucide-react';
import { summaryText } from '../data/portfolioData';

export const SummarySection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: '데이터 기반 문제 해결 & DOE',
      desc: '공정 변수를 체계적으로 분석하여 재현성 높은 제조 조건 및 최적의 공정 윈도우를 도출합니다.',
      tag: 'Methodology'
    },
    {
      icon: Target,
      title: '구조적 원인 분석 & 수율 개선',
      desc: '실험 결과를 단순 기록에 그치지 않고 불량 및 편차의 근본 원인을 규명해 구체적인 개선안으로 전환합니다.',
      tag: 'Philosophy'
    },
    {
      icon: Users2,
      title: '다직무 협업 & 양산 공정 안정화',
      desc: '연구 개발팀과 양산 생산팀 간 측정 데이터를 표준화하고 원활한 협업 체계를 구축합니다.',
      tag: 'Collaboration'
    }
  ];

  return (
    <section id="summary" className="py-12 border-t border-[#23252a]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5e6ad2]">01. Profile</span>
            <span className="text-[#3e3e44]">•</span>
            <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#f7f8f8]">SUMMARY</h2>
          </div>
          <span className="font-mono text-xs text-[#8a8f98]">Core Engineering Philosophy</span>
        </div>

        {/* Linear Charcoal Feature Card for Summary */}
        <div className="rounded-[12px] border border-[#23252a] bg-[#0f1011] p-6 sm:p-8 transition-all hover:border-[#34343a]">
          <div className="flex flex-col gap-6">
            {/* Primary Korean Summary Text */}
            <div className="relative">
              <p className="text-[16px] leading-[1.8] text-[#d0d6e0] sm:text-[17px]">
                {summaryText}
              </p>
            </div>

            {/* Linear Divider */}
            <div className="h-[1px] w-full bg-[#23252a]" />

            {/* 3 Engineering Pillars */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="group rounded-[8px] border border-[#23252a]/60 bg-[#141516] p-4 transition-all hover:border-[#34343a]"
                >
                  <div className="mb-2.5 flex items-center justify-between">
                    <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#191a1b] text-[#5e6ad2] border border-[#23252a]">
                      <p.icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono text-[11px] text-[#8a8f98]">{p.tag}</span>
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#f7f8f8] mb-1.5 tracking-[-0.01em]">
                    {p.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-[#8a8f98]">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
