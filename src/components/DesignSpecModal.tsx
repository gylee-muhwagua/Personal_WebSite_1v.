import React from 'react';
import { X, Layers, Type, Palette, MousePointer, Smartphone, Check } from 'lucide-react';

interface DesignSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSpecModal: React.FC<DesignSpecModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#010102]/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[16px] border border-[#34343a] bg-[#0f1011] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#23252a] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#5e6ad2] text-white">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold text-[#f7f8f8]">
                참고 설계 시스템 요약표 (Design System Specification)
              </h2>
              <p className="font-mono text-xs text-[#8a8f98]">
                Linear Design Language Extraction for Chemical/Process Engineering Portfolio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-[6px] border border-[#23252a] p-1.5 text-[#8a8f98] hover:bg-[#141516] hover:text-[#f7f8f8]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          {/* 1. Spacing Scale */}
          <div className="rounded-[10px] border border-[#23252a] bg-[#141516] p-4">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="h-4 w-4 text-[#5e6ad2]" />
              <h3 className="text-sm font-semibold text-[#f7f8f8]">1. 간격 시스템 (Spacing Scale, 4px Base)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#23252a] text-[#8a8f98]">
                    <th className="pb-2">Token</th>
                    <th className="pb-2">Value</th>
                    <th className="pb-2">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#23252a]/60 text-[#d0d6e0]">
                  <tr><td className="py-2 text-[#5e6ad2]">spacing.xs</td><td>8px</td><td>컴팩트 버튼 수직 패딩, 인라인 태그 간격</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">spacing.sm</td><td>12px</td><td>아이콘-텍스트 간격, 작은 컨테이너 여백</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">spacing.md</td><td>16px</td><td>기본 컨테이너 내부 패딩 (최소 컨테이너 규격)</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">spacing.lg</td><td>24px</td><td>피처 카드 및 프로덕트 패널 내부 패딩</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">spacing.xl</td><td>32px</td><td>블록 간 구분 여백</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">spacing.section</td><td>48px ~ 96px</td><td>메이저 섹션 간 수직 호흡 공간</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Typography Scale */}
          <div className="rounded-[10px] border border-[#23252a] bg-[#141516] p-4">
            <div className="flex items-center gap-2 mb-3">
              <Type className="h-4 w-4 text-[#5e6ad2]" />
              <h3 className="text-sm font-semibold text-[#f7f8f8]">2. 타이포그래피 스케일 (Negative Display Tracking)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#23252a] text-[#8a8f98]">
                    <th className="pb-2">Level</th>
                    <th className="pb-2">Size / Weight</th>
                    <th className="pb-2">Tracking</th>
                    <th className="pb-2">Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#23252a]/60 text-[#d0d6e0]">
                  <tr><td className="py-2 text-[#5e6ad2]">Display Hero</td><td>54px ~ 62px / 700</td><td>-0.035em</td><td>메인 엔지니어 이름 및 핵심 직무 타이틀</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">Section Title</td><td>20px / 600</td><td>-0.02em</td><td>각 섹션 (SUMMARY, EXPERIENCE 등)</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">Card Heading</td><td>16px ~ 18px / 600</td><td>-0.01em</td><td>역할명, 학위명, 프로세스 스테이지</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">Body Text</td><td>14px ~ 16px / 400</td><td>-0.005em</td><td>경력 및 요약 본문 (줄간격 1.75)</td></tr>
                  <tr><td className="py-2 text-[#5e6ad2]">Mono / Telemetry</td><td>11px ~ 13px / 400-600</td><td>0</td><td>날짜, 수치, DOE 파라미터, 단위</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Color Palette */}
          <div className="rounded-[10px] border border-[#23252a] bg-[#141516] p-4">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="h-4 w-4 text-[#5e6ad2]" />
              <h3 className="text-sm font-semibold text-[#f7f8f8]">3. 색상 팔레트 (Near-Black & Single Lavender Accent)</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              <div className="p-2.5 rounded-[6px] bg-[#010102] border border-[#23252a]">
                <div className="h-4 w-4 rounded bg-[#010102] border border-[#3e3e44] mb-1.5" />
                <span className="text-[#8a8f98]">Canvas</span>
                <p className="text-[#f7f8f8]">#010102</p>
              </div>
              <div className="p-2.5 rounded-[6px] bg-[#0f1011] border border-[#23252a]">
                <div className="h-4 w-4 rounded bg-[#0f1011] border border-[#3e3e44] mb-1.5" />
                <span className="text-[#8a8f98]">Surface-1</span>
                <p className="text-[#f7f8f8]">#0f1011</p>
              </div>
              <div className="p-2.5 rounded-[6px] bg-[#141516] border border-[#23252a]">
                <div className="h-4 w-4 rounded bg-[#141516] border border-[#3e3e44] mb-1.5" />
                <span className="text-[#8a8f98]">Surface-2</span>
                <p className="text-[#f7f8f8]">#141516</p>
              </div>
              <div className="p-2.5 rounded-[6px] bg-[#5e6ad2]/20 border border-[#5e6ad2]">
                <div className="h-4 w-4 rounded bg-[#5e6ad2] mb-1.5" />
                <span className="text-[#8a8f98]">Primary Lavender</span>
                <p className="text-[#5e6ad2]">#5e6ad2</p>
              </div>
            </div>
          </div>

          {/* 4. Interaction & Motion */}
          <div className="rounded-[10px] border border-[#23252a] bg-[#141516] p-4">
            <div className="flex items-center gap-2 mb-3">
              <MousePointer className="h-4 w-4 text-[#5e6ad2]" />
              <h3 className="text-sm font-semibold text-[#f7f8f8]">4. 인터랙션 스펙 (Interactions & Micro-transitions)</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-[#d0d6e0] font-sans">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                <span><strong>카드 호버</strong>: 200ms cubic-bezier(0.16, 1, 0.3, 1) 보더 색상 #23252a → #34343a 및 서피스 단계 상승 (#0f1011 → #141516)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                <span><strong>버튼 인터랙션</strong>: Hover 시 #828fff 가속, Active 클릭 시 #5e69d1 즉각 반응</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                <span><strong>실시간 DOE 슬라이더</strong>: 60FPS 즉시 재계산 (혼합 RPM, 온도, 롤 갭)으로 두께·수율 수치 반응</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                <span><strong>원클릭 복사</strong>: 클립보드 복사 시 2초간 상태 피드백 (녹색 체크마크 전환)</span>
              </li>
            </ul>
          </div>

          {/* 5. Responsive Breakpoints */}
          <div className="rounded-[10px] border border-[#23252a] bg-[#141516] p-4">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="h-4 w-4 text-[#5e6ad2]" />
              <h3 className="text-sm font-semibold text-[#f7f8f8]">5. 반응형 브레이크포인트 (Breakpoints)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
              <div className="p-2.5 rounded-[6px] bg-[#0f1011] border border-[#23252a]">
                <span className="text-[#5e6ad2]">Desktop (≥1024px)</span>
                <p className="text-[#8a8f98] mt-1">최대 1152px 센터링, 4컬럼 연락처 그리드, 12컬럼 분할</p>
              </div>
              <div className="p-2.5 rounded-[6px] bg-[#0f1011] border border-[#23252a]">
                <span className="text-[#5e6ad2]">Tablet (768px ~ 1023px)</span>
                <p className="text-[#8a8f98] mt-1">2컬럼 그리드 전환, 스테이지 카드 2x2 정렬</p>
              </div>
              <div className="p-2.5 rounded-[6px] bg-[#0f1011] border border-[#23252a]">
                <span className="text-[#5e6ad2]">Mobile (&lt;768px)</span>
                <p className="text-[#8a8f98] mt-1">1컬럼 스택, 햄버거 메뉴, 터치 타깃 44px 보장</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end border-t border-[#23252a] pt-4">
          <button
            onClick={onClose}
            className="rounded-[8px] bg-[#5e6ad2] px-4 py-2 text-xs font-medium text-white hover:bg-[#828fff]"
          >
            확인 (Close Spec)
          </button>
        </div>
      </div>
    </div>
  );
};
