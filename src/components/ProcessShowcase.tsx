import React, { useState } from 'react';
import { Sliders, Cpu, Activity, CheckCircle2, RefreshCw, BarChart2, Layers, ArrowRight, Zap, Info } from 'lucide-react';
import { processStages } from '../data/portfolioData';

export const ProcessShowcase: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('stage-1');
  const [mixingRpm, setMixingRpm] = useState<number>(3200);
  const [calenderTemp, setCalenderTemp] = useState<number>(135);
  const [rollGap, setRollGap] = useState<number>(110);

  const selectedStage = processStages.find((s) => s.id === selectedStageId) || processStages[0];

  // Dynamic DOE simulation calculations
  const calculateOutputs = () => {
    // Normalized deviations
    const rpmFactor = (mixingRpm - 3000) / 1000;
    const tempFactor = (calenderTemp - 130) / 20;
    const gapFactor = (rollGap - 110) / 20;

    const thickness = (110 + gapFactor * 8 - tempFactor * 1.5).toFixed(1);
    const thicknessStd = Math.max(0.4, (0.8 - rpmFactor * 0.2 + Math.abs(tempFactor) * 0.1)).toFixed(2);
    const peelStrength = Math.min(26.0, Math.max(12.0, (18.5 + tempFactor * 2.8 + rpmFactor * 1.2))).toFixed(1);
    const yieldRate = Math.min(99.6, Math.max(85.0, (94.8 + rpmFactor * 2.1 + (1 - Math.abs(tempFactor)) * 1.5 - Math.abs(gapFactor) * 2))).toFixed(1);
    const fibrilIndex = Math.min(99, Math.round(88 + rpmFactor * 7));

    return { thickness, thicknessStd, peelStrength, yieldRate, fibrilIndex };
  };

  const simOutputs = calculateOutputs();

  const resetDOE = () => {
    setMixingRpm(3200);
    setCalenderTemp(135);
    setRollGap(110);
  };

  return (
    <section id="process" className="py-12 border-t border-[#23252a]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5e6ad2]">03. Technical Architecture</span>
            <span className="text-[#3e3e44]">•</span>
            <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#f7f8f8]">
              DRY ELECTRODE PROCESS & DOE
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8a8f98]">
            Interactive Technical Telemetry & DOE Engine
          </span>
        </div>

        {/* Product UI Screenshot Card Container (Linear rounded-xl #0f1011) */}
        <div className="overflow-hidden rounded-[16px] border border-[#23252a] bg-[#0f1011] shadow-2xl">
          {/* Top Window Bar (Simulated Linear App Header) */}
          <div className="flex h-11 items-center justify-between border-b border-[#23252a] bg-[#141516] px-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#3e3e44]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#3e3e44]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#3e3e44]" />
              </div>
              <span className="ml-2 font-mono text-[12px] text-[#8a8f98]">
                dry-electrode-control-v2.8 // DOE Matrix View
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-[4px] bg-[#191a1b] border border-[#23252a] px-2 py-0.5 font-mono text-[11px] text-[#27a644]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#27a644]" />
                SYSTEM OPTIMIZED
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6 lg:p-8 space-y-6">
            {/* Stage Selector Tabs */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {processStages.map((stage) => {
                const isActive = stage.id === selectedStageId;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedStageId(stage.id)}
                    className={`flex flex-col items-start rounded-[8px] border p-3 text-left transition-all ${
                      isActive
                        ? 'border-[#5e6ad2] bg-[#18191a] text-[#f7f8f8] shadow-sm'
                        : 'border-[#23252a] bg-[#141516] text-[#8a8f98] hover:border-[#34343a] hover:text-[#d0d6e0]'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-mono text-[11px] text-[#5e6ad2]">
                        {stage.id.toUpperCase()}
                      </span>
                      <span className="rounded-[4px] bg-[#0f1011] px-1.5 py-0.5 font-mono text-[10px] text-[#8a8f98]">
                        {stage.status}
                      </span>
                    </div>
                    <span className="mt-1 text-[13px] font-semibold text-[#f7f8f8] line-clamp-1">
                      {stage.title}
                    </span>
                    <span className="font-mono text-[11px] text-[#62666d] line-clamp-1">
                      {stage.titleEn}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Stage Detail Panel */}
            <div className="rounded-[10px] border border-[#23252a] bg-[#141516] p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#f7f8f8]">
                    {selectedStage.title} ({selectedStage.titleEn})
                  </h3>
                  <p className="mt-1 text-[13px] text-[#8a8f98]">
                    {selectedStage.description}
                  </p>
                </div>
              </div>

              {/* Parameter Tiles */}
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {selectedStage.keyParameters.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-[6px] border border-[#23252a] bg-[#0f1011] p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#8a8f98]">{p.name}</span>
                      <span className="font-mono text-[11px] text-[#5e6ad2]">{p.unit}</span>
                    </div>
                    <div className="mt-1 font-mono text-[17px] font-semibold text-[#f7f8f8]">
                      {p.value}
                    </div>
                    <span className="mt-1 font-sans text-[11px] text-[#62666d]">
                      영향: {p.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive DOE Parameter Tuning Console */}
            <div className="rounded-[12px] border border-[#23252a] bg-[#010102]/80 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#23252a] pb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="h-4 w-4 text-[#5e6ad2]" />
                  <span className="text-[15px] font-semibold text-[#f7f8f8]">
                    실시간 실험계획법(DOE) 다변량 상관관계 시뮬레이터
                  </span>
                </div>
                <button
                  onClick={resetDOE}
                  className="flex items-center gap-1.5 font-mono text-xs text-[#8a8f98] hover:text-[#f7f8f8]"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>초기화 (Reset)</span>
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                {/* Input Controls (Left: 6 cols) */}
                <div className="space-y-5 lg:col-span-6">
                  {/* Mixing RPM */}
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#d0d6e0]">고전단 혼합 속도 (Mixing Speed)</span>
                      <span className="font-semibold text-[#5e6ad2]">{mixingRpm} RPM</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="4500"
                      step="50"
                      value={mixingRpm}
                      onChange={(e) => setMixingRpm(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[#23252a] accent-[#5e6ad2]"
                    />
                    <div className="mt-1 flex justify-between font-mono text-[10px] text-[#62666d]">
                      <span>2,000 RPM (저전단)</span>
                      <span>3,200 RPM (기준)</span>
                      <span>4,500 RPM (과섬유화 주의)</span>
                    </div>
                  </div>

                  {/* Calendering Temp */}
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#d0d6e0]">롤 캘린더링 온도 (Roll Temp)</span>
                      <span className="font-semibold text-[#5e6ad2]">{calenderTemp} °C</span>
                    </div>
                    <input
                      type="range"
                      min="90"
                      max="160"
                      step="1"
                      value={calenderTemp}
                      onChange={(e) => setCalenderTemp(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[#23252a] accent-[#5e6ad2]"
                    />
                    <div className="mt-1 flex justify-between font-mono text-[10px] text-[#62666d]">
                      <span>90°C (미소성)</span>
                      <span>135°C (최적)</span>
                      <span>160°C (열화 리스크)</span>
                    </div>
                  </div>

                  {/* Roll Gap */}
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#d0d6e0]">최종 롤 갭 세팅 (Roll Gap Target)</span>
                      <span className="font-semibold text-[#5e6ad2]">{rollGap} μm</span>
                    </div>
                    <input
                      type="range"
                      min="90"
                      max="140"
                      step="1"
                      value={rollGap}
                      onChange={(e) => setRollGap(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[#23252a] accent-[#5e6ad2]"
                    />
                    <div className="mt-1 flex justify-between font-mono text-[10px] text-[#62666d]">
                      <span>90 μm (고압밀)</span>
                      <span>110 μm (목표)</span>
                      <span>140 μm (저밀도)</span>
                    </div>
                  </div>
                </div>

                {/* Output Telemetry Dashboard (Right: 6 cols) */}
                <div className="grid grid-cols-2 gap-3 lg:col-span-6">
                  {/* Yield */}
                  <div className="flex flex-col justify-between rounded-[8px] border border-[#23252a] bg-[#141516] p-4">
                    <span className="font-mono text-[11px] text-[#8a8f98]">예측 공정 수율 (Yield)</span>
                    <div className="my-2 flex items-baseline gap-1.5">
                      <span className="font-mono text-[26px] font-bold text-[#f7f8f8]">
                        {simOutputs.yieldRate}%
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#27a644]">
                      + 수율 최적화 범위 내
                    </span>
                  </div>

                  {/* Thickness */}
                  <div className="flex flex-col justify-between rounded-[8px] border border-[#23252a] bg-[#141516] p-4">
                    <span className="font-mono text-[11px] text-[#8a8f98]">전극 두께 / 편차</span>
                    <div className="my-2 flex items-baseline gap-1.5">
                      <span className="font-mono text-[26px] font-bold text-[#f7f8f8]">
                        {simOutputs.thickness}
                      </span>
                      <span className="font-mono text-xs text-[#8a8f98]">μm (±{simOutputs.thicknessStd})</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#5e6ad2]">
                      목표 110μm 정밀 공차 관리
                    </span>
                  </div>

                  {/* Peel Strength */}
                  <div className="flex flex-col justify-between rounded-[8px] border border-[#23252a] bg-[#141516] p-4">
                    <span className="font-mono text-[11px] text-[#8a8f98]">전극 박리강도 (Peel)</span>
                    <div className="my-2 flex items-baseline gap-1.5">
                      <span className="font-mono text-[26px] font-bold text-[#f7f8f8]">
                        {simOutputs.peelStrength}
                      </span>
                      <span className="font-mono text-xs text-[#8a8f98]">N/m</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#8a8f98]">
                      집전체-합제 계면 접착력
                    </span>
                  </div>

                  {/* Fibrillation Index */}
                  <div className="flex flex-col justify-between rounded-[8px] border border-[#23252a] bg-[#141516] p-4">
                    <span className="font-mono text-[11px] text-[#8a8f98]">PTFE 섬유화 균일 지수</span>
                    <div className="my-2 flex items-baseline gap-1.5">
                      <span className="font-mono text-[26px] font-bold text-[#f7f8f8]">
                        {simOutputs.fibrilIndex}
                      </span>
                      <span className="font-mono text-xs text-[#8a8f98]">/ 100</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#8a8f98]">
                      3D 네트워크 구조 안정성
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
