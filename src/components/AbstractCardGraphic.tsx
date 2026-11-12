import type { AbstractGraphicType } from "@/data/siteData";

export function SignalsAndGroovesVisual() {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
      {/* 외곽 발광 효과 */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-teal-400/10 to-sky-500/20 blur-2xl"
        aria-hidden="true"
      />

      {/* 회전하는 LP 동심원 + 반도체 웨이퍼 다이 그리드 SVG */}
      <svg
        viewBox="0 0 320 320"
        className="h-full w-full drop-shadow-[0_0_25px_rgba(34,211,238,0.16)]"
        aria-label="Signals & Grooves: 반도체 웨이퍼와 LP 레코드 동심원 그래픽"
      >
        <defs>
          <radialGradient id="discBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f1f38" />
            <stop offset="55%" stopColor="#081121" />
            <stop offset="100%" stopColor="#040812" />
          </radialGradient>
          <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.85" />
          </linearGradient>
          <pattern
            id="waferGrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="0.6"
              strokeOpacity="0.22"
            />
          </pattern>
          <clipPath id="leftHalfWafer">
            <rect x="0" y="0" width="160" height="320" />
          </clipPath>
        </defs>

        {/* 베이스 디스크 (LP & Wafer) */}
        <circle
          cx="160"
          cy="160"
          r="146"
          fill="url(#discBg)"
          stroke="url(#cyanGlow)"
          strokeWidth="1.5"
        />

        {/* 좌측 절반: 반도체 웨이퍼 다이(Die) 패턴 */}
        <g clipPath="url(#leftHalfWafer)">
          <circle cx="160" cy="160" r="140" fill="url(#waferGrid)" />
          {/* 웨이퍼 하이라이트 다이 셀 */}
          <rect
            x="80"
            y="100"
            width="20"
            height="20"
            fill="#22d3ee"
            fillOpacity="0.18"
          />
          <rect
            x="100"
            y="140"
            width="20"
            height="20"
            fill="#14b8a6"
            fillOpacity="0.25"
          />
          <rect
            x="60"
            y="160"
            width="20"
            height="20"
            fill="#38bdf8"
            fillOpacity="0.15"
          />
          <rect
            x="120"
            y="200"
            width="20"
            height="20"
            fill="#22d3ee"
            fillOpacity="0.2"
          />
        </g>

        {/* 전체 동심원 트랙 (LP Grooves & Wafer Rings) */}
        {[134, 120, 106, 92, 78, 64].map((r, idx) => (
          <circle
            key={r}
            cx="160"
            cy="160"
            r={r}
            fill="none"
            stroke={idx % 2 === 0 ? "#22d3ee" : "#14b8a6"}
            strokeOpacity={0.14 + idx * 0.04}
            strokeWidth={idx % 2 === 0 ? "1" : "0.75"}
            strokeDasharray={idx % 2 === 0 ? "6 4" : "80 12 20 12"}
          />
        ))}

        {/* 회로 트레이스 (Signals) */}
        <g stroke="#22d3ee" strokeWidth="1.4" fill="none" opacity="0.75">
          <path d="M 46 160 L 92 160 L 108 144 L 126 144" />
          <circle cx="46" cy="160" r="3" fill="#22d3ee" />
          <path d="M 160 28 L 160 66 L 145 81" />
          <circle cx="160" cy="28" r="3" fill="#14b8a6" />
          <path d="M 272 160 L 228 160 L 212 176 L 194 176" />
          <circle cx="272" cy="160" r="3" fill="#22d3ee" />
        </g>

        {/* 오실로스코프 사인파 / 오디오 파형 링 */}
        <path
          d="M 56 225 Q 72 208, 88 225 T 120 225 T 152 225 T 184 225 T 216 225 T 248 225"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />

        {/* LP 턴테이블 톤암(Tonearm) & AFM 캔틸레버 모티프 */}
        <g>
          <circle
            cx="266"
            cy="58"
            r="14"
            fill="#0b172a"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
          <circle cx="266" cy="58" r="5" fill="#22d3ee" />
          <path
            d="M 266 58 L 236 138 L 196 162"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="196" cy="162" r="4" fill="#fbbf24" />
        </g>

        {/* 중앙 라벨 (Vinyl Center Label + Silicon Core) */}
        <circle
          cx="160"
          cy="160"
          r="44"
          fill="#0b162c"
          stroke="#22d3ee"
          strokeWidth="1.8"
        />
        <circle
          cx="160"
          cy="160"
          r="32"
          fill="none"
          stroke="#14b8a6"
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle
          cx="160"
          cy="160"
          r="8"
          fill="#030712"
          stroke="#22d3ee"
          strokeWidth="2"
        />

        {/* 하단 웨이퍼 노치(Flat/Notch) */}
        <path
          d="M 154 306 L 160 299 L 166 306"
          fill="#040812"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
      </svg>

      {/* 플로팅 캡션 태그 */}
      <div className="
        absolute -top-2 left-2 rounded-full border border-cyan-500/30
        bg-slate-950/90 px-3 py-1 font-mono text-[11px] text-cyan-300
        shadow-lg backdrop-blur-md
      ">
        WAFER · LITHO · AFM
      </div>
      <div className="
        absolute right-2 -bottom-2 rounded-full border border-teal-500/30
        bg-slate-950/90 px-3 py-1 font-mono text-[11px] text-teal-300
        shadow-lg backdrop-blur-md
      ">
        LP · 33⅓ RPM · GROOVE
      </div>
    </div>
  );
}

export function AbstractCardGraphic({
  type,
  cardNumber,
}: {
  type: AbstractGraphicType;
  cardNumber: number;
}) {
  return (
    <div className="
      relative flex h-24 w-full items-center justify-between overflow-hidden
      rounded-xl border border-cyan-500/15 bg-gradient-to-br from-slate-900/95
      via-[#0a1528] to-slate-950 px-4 py-3
    ">
      {/* 배경 그리드 장식 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(34,211,238,0.4) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden="true"
      />

      {/* 좌측 카드 번호 및 그래픽 레이블 */}
      <div className="relative z-10 flex flex-col justify-between">
        <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400/90">
          EXP #{String(cardNumber).padStart(2, "0")}
        </span>
        <span className="mt-1 font-mono text-[11px] uppercase tracking-widest text-slate-400">
          {getGraphicCaption(type)}
        </span>
      </div>

      {/* 우측 추상 기술 SVG 아이콘 */}
      <div className="relative z-10 flex items-center">
        {renderGraphicSvg(type)}
      </div>
    </div>
  );
}

function getGraphicCaption(type: AbstractGraphicType): string {
  switch (type) {
    case "wafer-litho":
      return "PHOTOLITHOGRAPHY · PATTERN";
    case "yield-chart":
      return "YIELD · CP/CPK · ANALYTICS";
    case "afm-probe":
      return "AFM · NON-CONTACT METROLOGY";
    case "mosfet-device":
      return "MOSFET · SCE · MEMORY CELL";
    case "mcu-control":
      return "STM32 · PWM · SENSOR LOOP";
    case "wearable-signal":
      return "ESP32-S3 · MULTI-NODE COMM";
    case "fire-matrix":
      return "PATHFINDING · SENSOR MATRIX";
    case "edge-audio":
      return "RPi4 · FASTENHANCER-T · GPU";
    case "pcb-power":
      return "EASYEDA · PCB · INA219";
    case "imu-posture":
      return "MPU6050 · 6-AXIS THRESHOLD";
    case "riscv-pipeline":
      return "RV32I · 5-STAGE PIPELINE";
    case "oscilloscope":
      return "OSCILLOSCOPE · AFG · LTSPICE";
    case "logic-gates":
      return "TTL IC · NI ELVIS · LOGIC";
    case "escape-groove":
      return "CLUB OPS · SCHEDULING";
  }
}

function renderGraphicSvg(type: AbstractGraphicType) {
  switch (type) {
    case "wafer-litho":
      return (
        <svg className="h-16 w-24 text-cyan-400" viewBox="0 0 96 64" fill="none">
          <circle
            cx="64"
            cy="32"
            r="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
          <circle
            cx="64"
            cy="32"
            r="16"
            stroke="#14b8a6"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
          <path
            d="M48 24H80M48 32H80M48 40H80M56 16V48M64 16V48M72 16V48"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.45"
          />
          <rect
            x="56"
            y="24"
            width="8"
            height="8"
            fill="#22d3ee"
            fillOpacity="0.35"
          />
          <path
            d="M8 16L28 32L8 48"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
        </svg>
      );
    case "yield-chart":
      return (
        <svg className="h-16 w-24 text-teal-400" viewBox="0 0 96 64" fill="none">
          <line
            x1="12"
            y1="52"
            x2="88"
            y2="52"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <line
            x1="24"
            y1="12"
            x2="24"
            y2="52"
            stroke="#f59e0b"
            strokeDasharray="2 2"
            strokeOpacity="0.7"
          />
          <line
            x1="76"
            y1="12"
            x2="76"
            y2="52"
            stroke="#f59e0b"
            strokeDasharray="2 2"
            strokeOpacity="0.7"
          />
          <path
            d="M14 50 C 28 50, 38 14, 50 14 C 62 14, 72 50, 86 50"
            stroke="#22d3ee"
            strokeWidth="2"
          />
          <circle cx="50" cy="14" r="3" fill="#2dd4bf" />
        </svg>
      );
    case "afm-probe":
      return (
        <svg className="h-16 w-24 text-cyan-400" viewBox="0 0 96 64" fill="none">
          <path
            d="M16 18H56L64 34L59 20"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <polygon points="58,20 68,20 63,36" fill="#22d3ee" fillOpacity="0.6" />
          <path
            d="M12 48 Q 24 40, 36 48 T 60 48 T 84 48"
            stroke="#14b8a6"
            strokeWidth="1.6"
          />
          <line
            x1="63"
            y1="36"
            x2="63"
            y2="46"
            stroke="#fbbf24"
            strokeDasharray="2 2"
          />
        </svg>
      );
    case "mosfet-device":
      return (
        <svg className="h-16 w-24 text-cyan-400" viewBox="0 0 96 64" fill="none">
          <rect
            x="16"
            y="34"
            width="64"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeOpacity="0.6"
          />
          <rect
            x="22"
            y="34"
            width="14"
            height="10"
            fill="#14b8a6"
            fillOpacity="0.45"
          />
          <rect
            x="60"
            y="34"
            width="14"
            height="10"
            fill="#14b8a6"
            fillOpacity="0.45"
          />
          <rect
            x="38"
            y="22"
            width="20"
            height="9"
            fill="#22d3ee"
            fillOpacity="0.5"
          />
          <line
            x1="36"
            y1="32"
            x2="60"
            y2="32"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          <line x1="48" y1="12" x2="48" y2="22" stroke="#22d3ee" strokeWidth="1.5" />
        </svg>
      );
    case "mcu-control":
    case "pcb-power":
      return (
        <svg className="h-16 w-24 text-cyan-400" viewBox="0 0 96 64" fill="none">
          <rect
            x="32"
            y="16"
            width="32"
            height="32"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <rect
            x="40"
            y="24"
            width="16"
            height="16"
            fill="#22d3ee"
            fillOpacity="0.2"
          />
          {[22, 32, 42].map((y) => (
            <g key={y} stroke="#14b8a6" strokeWidth="1.5">
              <line x1="20" y1={y} x2="32" y2={y} />
              <line x1="64" y1={y} x2="76" y2={y} />
            </g>
          ))}
        </svg>
      );
    case "riscv-pipeline":
      return (
        <svg className="h-16 w-24 text-cyan-400" viewBox="0 0 96 64" fill="none">
          {[10, 26, 42, 58, 74].map((x, i) => (
            <rect
              key={x}
              x={x}
              y="22"
              width="12"
              height="22"
              rx="2"
              stroke={i % 2 === 0 ? "#22d3ee" : "#14b8a6"}
              fill="#22d3ee"
              fillOpacity={0.1 + i * 0.05}
            />
          ))}
          <path
            d="M64 22 C 64 12, 32 12, 32 22"
            stroke="#fbbf24"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
        </svg>
      );
    case "oscilloscope":
    case "edge-audio":
    case "wearable-signal":
      return (
        <svg className="h-16 w-24 text-cyan-400" viewBox="0 0 96 64" fill="none">
          <path
            d="M8 32 L20 32 L26 16 L34 48 L42 20 L50 44 L58 28 L66 36 L74 32 L88 32"
            stroke="#22d3ee"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="8"
            y1="32"
            x2="88"
            y2="32"
            stroke="#14b8a6"
            strokeOpacity="0.3"
            strokeDasharray="3 3"
          />
        </svg>
      );
    default:
      return (
        <svg className="h-16 w-24 text-cyan-400" viewBox="0 0 96 64" fill="none">
          <circle
            cx="48"
            cy="32"
            r="20"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <circle cx="48" cy="32" r="10" stroke="#14b8a6" strokeWidth="1.5" />
          <circle cx="48" cy="32" r="3" fill="#fbbf24" />
        </svg>
      );
  }
}
