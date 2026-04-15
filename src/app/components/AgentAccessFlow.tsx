export function AgentAccessFlow() {
  return (
    <section className="aaf-section">
      <div className="aaf-inner">

        {/* Flow diagram */}
        <div className="aaf-diagram">
          <svg
            className="aaf-svg"
            viewBox="0 0 940 480"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {/* Glow filter – orange */}
              <filter id="aaf-glow-orange" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="aaf-glow-skyfire" x="-90%" y="-90%" width="280%" height="280%">
                <feGaussianBlur stdDeviation="10" result="blur-1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur-2" />
                <feMerge>
                  <feMergeNode in="blur-1" />
                  <feMergeNode in="blur-2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Glow filter – teal */}
              <filter id="aaf-glow-teal" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              {/* Glow filter – white */}
              <filter id="aaf-glow-white" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              {/* Arrowhead markers */}
              <marker id="aaf-arr-white" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0.5 L0,6.5 L7,3.5 z" fill="rgba(255,255,255,0.28)" />
              </marker>
              <marker id="aaf-arr-teal" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0.5 L0,6.5 L7,3.5 z" fill="rgba(89,173,158,0.7)" />
              </marker>
              <marker id="aaf-arr-teal-up" markerWidth="7" markerHeight="7" refX="3.5" refY="5" orient="auto">
                <path d="M0.5,7 L6.5,7 L3.5,0 z" fill="rgba(89,173,158,0.7)" />
              </marker>
              <marker id="aaf-arr-orange-up" markerWidth="7" markerHeight="7" refX="3.5" refY="5" orient="auto">
                <path d="M0.5,7 L6.5,7 L3.5,0 z" fill="rgba(238,120,67,0.86)" />
              </marker>

              <radialGradient id="aaf-skyfire-core" cx="50%" cy="45%" r="72%">
                <stop offset="0%" stopColor="rgba(255,215,194,0.24)" />
                <stop offset="52%" stopColor="rgba(238,120,67,0.1)" />
                <stop offset="100%" stopColor="rgba(12,12,14,0)" />
              </radialGradient>
              <radialGradient id="aaf-skyfire-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(238,120,67,0.26)" />
                <stop offset="62%" stopColor="rgba(238,120,67,0.08)" />
                <stop offset="100%" stopColor="rgba(238,120,67,0)" />
              </radialGradient>

              <linearGradient id="aaf-kya-channel" x1="100" y1="371" x2="100" y2="304" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(89,173,158,0.04)" />
                <stop offset="45%" stopColor="rgba(89,173,158,0.66)" />
                <stop offset="100%" stopColor="rgba(200,255,244,0.98)" />
              </linearGradient>
              <linearGradient id="aaf-agent-channel" x1="100" y1="233" x2="100" y2="177" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(238,120,67,0.08)" />
                <stop offset="48%" stopColor="rgba(238,120,67,0.74)" />
                <stop offset="100%" stopColor="rgba(255,220,202,0.98)" />
              </linearGradient>

              {/* Animation paths */}
              <path id="aaf-p-user-cdn"    d="M 130 74  C 260 52  350 82  366 88" />
              <path id="aaf-p-agent-cdn"   d="M 134 162 C 270 130 350 86  366 88" />
              <path id="aaf-p-cdn-web"     d="M 436 88  L 550 88" />
              <path id="aaf-p-web-login"   d="M 620 88  L 736 88" />
              <path id="aaf-p-kya-sky"     d="M 100 371 C 95 351, 95 324, 100 304" />
              <path id="aaf-p-sky-agent"   d="M 100 233 C 92 216, 92 193, 100 177" />
            </defs>

            {/* ── Connection lines ───────────────────────────────────── */}

            {/* Vertical stack: USER ↔ AGENT (subtle, shows pairing) */}
            <line x1="100" y1="110" x2="100" y2="144"
              stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 5" />

            {/* Vertical stack: KYA → SKYFIRE (upward arrow, teal) */}
            <path d="M 100 371 C 95 351, 95 324, 100 304"
              fill="none" stroke="rgba(89,173,158,0.18)" strokeWidth="8.2" strokeOpacity="0.45" />
            <path d="M 100 371 C 95 351, 95 324, 100 304"
              fill="none" stroke="url(#aaf-kya-channel)" strokeWidth="2.85" strokeOpacity="0.98"
              markerEnd="url(#aaf-arr-teal-up)" />
            <path d="M 100 371 C 95 351, 95 324, 100 304"
              fill="none" stroke="rgba(200,255,244,0.72)" strokeWidth="1.1"
              strokeDasharray="2 7" strokeDashoffset="18">
              <animate attributeName="stroke-dashoffset" values="18;0" dur="2.35s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.14;0.84;0.14" dur="2.35s" repeatCount="indefinite" />
            </path>

            {/* Vertical stack: SKYFIRE → AGENT (upward arrow, teal) */}
            <path d="M 100 233 C 92 216, 92 193, 100 177"
              fill="none" stroke="rgba(238,120,67,0.2)" strokeWidth="8.6" strokeOpacity="0.48" />
            <path d="M 100 233 C 92 216, 92 193, 100 177"
              fill="none" stroke="url(#aaf-agent-channel)" strokeWidth="3" strokeOpacity="0.98"
              markerEnd="url(#aaf-arr-orange-up)" />
            <path d="M 100 233 C 92 216, 92 193, 100 177"
              fill="none" stroke="rgba(255,220,202,0.78)" strokeWidth="1.15"
              strokeDasharray="3 8" strokeDashoffset="22">
              <animate attributeName="stroke-dashoffset" values="22;0" dur="2.05s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.14;0.88;0.14" dur="2.05s" repeatCount="indefinite" />
            </path>

            {/* USER → CDN (upper curve, white) */}
            <path d="M 130 74 C 260 52 350 82 366 88"
              fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="6 6" />

            {/* AGENT → CDN (lower curve, orange) */}
            <path d="M 134 162 C 270 130 350 86 366 88"
              fill="none" stroke="rgba(238,120,67,0.2)" strokeWidth="1.5" strokeDasharray="6 6" />

            {/* CDN → WEBSITE */}
            <line x1="436" y1="88" x2="550" y2="88"
              stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"
              markerEnd="url(#aaf-arr-white)" />

            {/* WEBSITE → LOGIN */}
            <line x1="620" y1="88" x2="736" y2="88"
              stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"
              markerEnd="url(#aaf-arr-white)" />

            {/* ── Animated pulses ───────────────────────────────────── */}

            {/* USER → CDN : two offset white dots */}
            <circle r="3.5" fill="rgba(255,255,255,0.85)">
              <animateMotion dur="2.6s" repeatCount="indefinite" begin="0s"><mpath href="#aaf-p-user-cdn" /></animateMotion>
            </circle>
            <circle r="3.5" fill="rgba(255,255,255,0.85)">
              <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.3s"><mpath href="#aaf-p-user-cdn" /></animateMotion>
            </circle>

            {/* AGENT → CDN : two offset orange dots */}
            <circle r="4" fill="#EE7843">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.6s"><mpath href="#aaf-p-agent-cdn" /></animateMotion>
            </circle>
            <circle r="4" fill="#EE7843">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.0s"><mpath href="#aaf-p-agent-cdn" /></animateMotion>
            </circle>

            {/* CDN → WEBSITE : teal dots */}
            <circle r="3.5" fill="#59AD9E">
              <animateMotion dur="1.3s" repeatCount="indefinite" begin="1.8s"><mpath href="#aaf-p-cdn-web" /></animateMotion>
            </circle>
            <circle r="3.5" fill="#59AD9E">
              <animateMotion dur="1.3s" repeatCount="indefinite" begin="2.5s"><mpath href="#aaf-p-cdn-web" /></animateMotion>
            </circle>

            {/* WEBSITE → LOGIN : teal dots */}
            <circle r="3.5" fill="#59AD9E">
              <animateMotion dur="1.3s" repeatCount="indefinite" begin="2.4s"><mpath href="#aaf-p-web-login" /></animateMotion>
            </circle>
            <circle r="3.5" fill="#59AD9E">
              <animateMotion dur="1.3s" repeatCount="indefinite" begin="3.1s"><mpath href="#aaf-p-web-login" /></animateMotion>
            </circle>

            {/* KYA → SKYFIRE : small upward teal dot */}
            <circle r="3" fill="#59AD9E">
              <animateMotion dur="0.9s" repeatCount="indefinite" begin="0.2s"><mpath href="#aaf-p-kya-sky" /></animateMotion>
            </circle>

            {/* SKYFIRE → AGENT : small upward teal dot */}
            <circle r="3.2" fill="#EE7843">
              <animateMotion dur="1.0s" repeatCount="indefinite" begin="0.7s"><mpath href="#aaf-p-sky-agent" /></animateMotion>
            </circle>

            {/* ── Nodes ─────────────────────────────────────────────── */}

            {/* USER */}
            <g filter="url(#aaf-glow-white)">
              <circle cx="100" cy="80" r="44" fill="rgba(255,255,255,0.03)">
                <animate attributeName="r" values="44;50;44" dur="4.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="4.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="80" r="34" fill="#0c0c0e" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6">
                <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="4.2s" repeatCount="indefinite" begin="0.1s" />
              </circle>
              <text x="100" y="84" textAnchor="middle" fill="#E8FFFA" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">USER</text>
            </g>

            {/* AGENT */}
            <g filter="url(#aaf-glow-white)">
              <circle cx="100" cy="145" r="44" fill="rgba(255,255,255,0.03)">
                <animate attributeName="r" values="44;50;44" dur="4.2s" repeatCount="indefinite" begin="0.3s" />
                <animate attributeName="opacity" values="1;0.5;1" dur="4.2s" repeatCount="indefinite" begin="0.3s" />
              </circle>
              <circle cx="100" cy="145" r="34" fill="#0c0c0e" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6">
                <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="4.2s" repeatCount="indefinite" begin="0.3s" />
              </circle>
              <text x="100" y="149" textAnchor="middle" fill="#E8FFFA" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">AGENT</text>
            </g>

            {/* SKYFIRE (largest — the core trust layer) */}
            <g filter="url(#aaf-glow-skyfire)">
              <circle cx="100" cy="270" r="82" fill="url(#aaf-skyfire-halo)" opacity="0.95">
                <animate attributeName="r" values="78;84;78" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.55;0.95;0.55" dur="3.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="270" r="57" fill="url(#aaf-skyfire-core)" opacity="0.95">
                <animate attributeName="r" values="54;59;54" dur="3.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="270" r="45" fill="#0c0c0e" stroke="#EE7843" strokeWidth="3" strokeOpacity="1">
                <animate attributeName="stroke-opacity" values="0.7;1;0.75" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="270" r="35" fill="none" stroke="rgba(255,214,196,0.22)" strokeWidth="1.1">
                <animate attributeName="stroke-opacity" values="0.12;0.35;0.12" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <text x="100" y="274.5" textAnchor="middle" fill="#FFD7C2" fontSize="11.8" fontWeight="800" fontFamily="Geist, sans-serif" letterSpacing="0.09em">SKYFIRE</text>
            </g>

            {/* KYA */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="100" cy="395" r="34" fill="rgba(89,173,158,0.04)">
                <animate attributeName="r" values="34;40;34" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
                <animate attributeName="opacity" values="1;0.45;1" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle cx="100" cy="395" r="26" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.5" />
              <text x="100" y="399" textAnchor="middle" fill="#59AD9E" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.08em">KYA</text>
            </g>

            {/* CDN */}
            <g filter="url(#aaf-glow-white)">
              <circle cx="401" cy="88" r="44" fill="rgba(255,255,255,0.03)">
                <animate attributeName="r" values="44;50;44" dur="4s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="401" cy="88" r="34" fill="#0c0c0e" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6">
                <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <text x="401" y="92" textAnchor="middle" fill="#E8FFFA" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">CDN</text>
            </g>

            {/* WEBSITE */}
            <g filter="url(#aaf-glow-white)">
              <circle cx="585" cy="88" r="44" fill="rgba(255,255,255,0.03)">
                <animate attributeName="r" values="44;50;44" dur="4.1s" repeatCount="indefinite" begin="0.9s" />
                <animate attributeName="opacity" values="1;0.5;1" dur="4.1s" repeatCount="indefinite" begin="0.9s" />
              </circle>
              <circle cx="585" cy="88" r="34" fill="#0c0c0e" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6">
                <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="4.1s" repeatCount="indefinite" begin="0.9s" />
              </circle>
              <text x="585" y="92" textAnchor="middle" fill="#E8FFFA" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.06em">WEBSITE</text>
            </g>

            {/* LOGIN (success end node) */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="770" cy="88" r="44" fill="rgba(89,173,158,0.05)">
                <animate attributeName="r" values="44;50;44" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
                <animate attributeName="opacity" values="1;0.4;1" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
              </circle>
              <circle cx="770" cy="88" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
              </circle>
              <text x="770" y="92" textAnchor="middle" fill="#C8FFF4" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.08em">LOGIN</text>
            </g>

          </svg>

          {/* Text overlay — sits in the empty centre of the diagram */}
          <div className="aaf-overlay">
            <div className="hp-eyebrow teal">ACCESS</div>
            <h2 className="aaf-title">Enable Agent Access<br />At Internet Scale</h2>
            <p className="aaf-desc">
              Teams that operate agents need reliable access to websites and dependable checkout,
              not one-off hacks. KYA tokens from Skyfire authorize access and payment in one stack —
              built for programmatic login, session continuity, and agentic commerce across the open web.
            </p>
            <a
              href="https://kyapay.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-teal btn-lg"
            >
              Enable Agent Access →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
