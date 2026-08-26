import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Copy, Check, ArrowDown, Sparkles, Activity, FileText, ChevronRight } from 'lucide-react';
import { contactData } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreDOE: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreDOE }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Background subtle technical grid */}
      <div className="pointer-events-none absolute inset-0 bg-linear-grid opacity-60" />
      
      {/* Top faint radial glow for soft technical atmosphere without aggressive gradient */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[380px] w-[600px] rounded-full bg-[#5e6ad2]/8 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Eyebrow Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#23252a] bg-[#0f1011] px-3 py-1 text-[12px] font-medium text-[#d0d6e0]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#27a644] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#27a644]" />
            </span>
            <span className="font-mono uppercase tracking-wider text-[#8a8f98]">Process Engineering</span>
            <span className="text-[#3e3e44]">•</span>
            <span className="text-[#f7f8f8]">차세대 건식 전극 공정 및 최적화</span>
          </div>

          {/* Display Heading */}
          <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-0.035em] text-[#f7f8f8] sm:text-[54px] lg:text-[62px]">
            이가영 <span className="text-[26px] font-medium text-[#8a8f98] sm:text-[38px]">({contactData.nameEn})</span>
            <span className="mt-2 block text-[26px] font-semibold text-[#d0d6e0] sm:text-[36px] lg:text-[42px] tracking-[-0.03em]">
              데이터 기반 건식 공정 & 전극 제조 엔지니어
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-[16px] leading-[1.65] text-[#8a8f98] sm:text-[18px]">
            무용매 건식 전극 제조(혼합·압밀·캘린더링) 공정 분석과 실험계획법(DOE) 기반 최적화로
            안정적인 전극 물성 확보 및 양산 수율 혁신을 주도합니다.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contactData.email}`}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#5e6ad2] px-4 py-2.5 text-[14px] font-medium text-white shadow-sm shadow-[#5e6ad2]/20 transition-all hover:bg-[#828fff] active:bg-[#5e69d1]"
              id="cta-email-link"
            >
              <Mail className="h-4 w-4" />
              <span>이메일 문의하기</span>
            </a>

            <button
              onClick={onExploreDOE}
              className="inline-flex items-center gap-2 rounded-[8px] border border-[#23252a] bg-[#0f1011] px-4 py-2.5 text-[14px] font-medium text-[#f7f8f8] transition-colors hover:border-[#34343a] hover:bg-[#141516]"
              id="cta-explore-doe"
            >
              <Activity className="h-4 w-4 text-[#5e6ad2]" />
              <span>건식 공정 시뮬레이터 보기</span>
              <ChevronRight className="h-4 w-4 text-[#8a8f98]" />
            </button>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4" id="contact-pills">
            {/* Phone */}
            <div
              onClick={() => copyToClipboard(contactData.phone, 'phone')}
              className="group flex cursor-pointer items-center justify-between rounded-[8px] border border-[#23252a] bg-[#0f1011] px-3.5 py-2.5 transition-all hover:border-[#34343a] hover:bg-[#141516]"
              title="클릭하여 전화번호 복사"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Phone className="h-3.5 w-3.5 flex-shrink-0 text-[#8a8f98] group-hover:text-[#5e6ad2]" />
                <span className="truncate font-mono text-[13px] text-[#d0d6e0]">{contactData.phone}</span>
              </div>
              <div className="ml-2 flex-shrink-0 text-[#62666d] group-hover:text-[#8a8f98]">
                {copiedItem === 'phone' ? <Check className="h-3.5 w-3.5 text-[#27a644]" /> : <Copy className="h-3.5 w-3.5 opacity-60" />}
              </div>
            </div>

            {/* Email */}
            <div
              onClick={() => copyToClipboard(contactData.email, 'email')}
              className="group flex cursor-pointer items-center justify-between rounded-[8px] border border-[#23252a] bg-[#0f1011] px-3.5 py-2.5 transition-all hover:border-[#34343a] hover:bg-[#141516]"
              title="클릭하여 이메일 복사"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="h-3.5 w-3.5 flex-shrink-0 text-[#8a8f98] group-hover:text-[#5e6ad2]" />
                <span className="truncate font-mono text-[13px] text-[#d0d6e0]">{contactData.email}</span>
              </div>
              <div className="ml-2 flex-shrink-0 text-[#62666d] group-hover:text-[#8a8f98]">
                {copiedItem === 'email' ? <Check className="h-3.5 w-3.5 text-[#27a644]" /> : <Copy className="h-3.5 w-3.5 opacity-60" />}
              </div>
            </div>

            {/* Website */}
            <a
              href={`https://${contactData.website}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-[8px] border border-[#23252a] bg-[#0f1011] px-3.5 py-2.5 transition-all hover:border-[#34343a] hover:bg-[#141516]"
              title="웹사이트 열기"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Globe className="h-3.5 w-3.5 flex-shrink-0 text-[#8a8f98] group-hover:text-[#5e6ad2]" />
                <span className="truncate font-mono text-[13px] text-[#d0d6e0]">{contactData.website}</span>
              </div>
              <div className="ml-2 flex-shrink-0 text-[#62666d] group-hover:text-[#8a8f98]">
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center justify-between rounded-[8px] border border-[#23252a] bg-[#0f1011] px-3.5 py-2.5">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-[#8a8f98]" />
                <span className="truncate font-mono text-[13px] text-[#d0d6e0]">{contactData.location}</span>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
