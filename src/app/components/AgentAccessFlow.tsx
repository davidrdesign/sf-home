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

              {/* Animation paths */}
              <path id="aaf-p-user-cdn"    d="M 130 74  C 260 52  350 82  366 88" />
              <path id="aaf-p-agent-cdn"   d="M 134 162 C 270 130 350 86  366 88" />
              <path id="aaf-p-cdn-web"     d="M 436 88  L 550 88" />
              <path id="aaf-p-web-login"   d="M 620 88  L 736 88" />
              <path id="aaf-p-kya-sky"     d="M 100 326 L 100 302" />
              <path id="aaf-p-sky-agent"   d="M 100 234 L 100 206" />
            </defs>

            {/* ── Connection lines ───────────────────────────────────── */}

            {/* Vertical stack: USER ↔ AGENT (subtle, shows pairing) */}
            <line x1="100" y1="110" x2="100" y2="144"
              stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 5" />

            {/* Vertical stack: KYA → SKYFIRE (upward arrow, teal) */}
            <line x1="100" y1="326" x2="100" y2="305"
              stroke="rgba(89,173,158,0.4)" strokeWidth="1.5"
              markerEnd="url(#aaf-arr-teal-up)" />

            {/* Vertical stack: SKYFIRE → AGENT (upward arrow, teal) */}
            <line x1="100" y1="234" x2="100" y2="208"
              stroke="rgba(89,173,158,0.4)" strokeWidth="1.5"
              markerEnd="url(#aaf-arr-teal-up)" />

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
            <circle r="2.5" fill="#59AD9E">
              <animateMotion dur="0.9s" repeatCount="indefinite" begin="0.2s"><mpath href="#aaf-p-kya-sky" /></animateMotion>
            </circle>

            {/* SKYFIRE → AGENT : small upward teal dot */}
            <circle r="2.5" fill="#59AD9E">
              <animateMotion dur="1.0s" repeatCount="indefinite" begin="0.7s"><mpath href="#aaf-p-sky-agent" /></animateMotion>
            </circle>

            {/* ── Nodes ─────────────────────────────────────────────── */}

            {/* USER */}
            <g filter="url(#aaf-glow-white)">
              <circle cx="100" cy="80" r="44" fill="rgba(255,255,255,0.03)">
                <animate attributeName="r" values="44;50;44" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="80" r="30" fill="#0c0c0e" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
              <text x="100" y="84" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.08em">USER</text>
            </g>

            {/* AGENT */}
            <g filter="url(#aaf-glow-orange)">
              <circle cx="100" cy="174" r="50" fill="rgba(238,120,67,0.05)">
                <animate attributeName="r" values="50;58;50" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="1;0.4;1" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="100" cy="174" r="34" fill="#0c0c0e" stroke="#EE7843" strokeWidth="1.8" />
              <text x="100" y="178" textAnchor="middle" fill="#EE7843" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.08em">AGENT</text>
            </g>

            {/* SKYFIRE (largest — the core trust layer) */}
            <g filter="url(#aaf-glow-orange)">
              <circle cx="100" cy="270" r="58" fill="rgba(238,120,67,0.04)">
                <animate attributeName="r" values="58;66;58" dur="4.2s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="1;0.35;1" dur="4.2s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="100" cy="270" r="38" fill="#0c0c0e" stroke="#EE7843" strokeWidth="2" />
              <text x="100" y="274" textAnchor="middle" fill="#EE7843" fontSize="11" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.06em">SKYFIRE</text>
            </g>

            {/* KYA */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="100" cy="350" r="36" fill="rgba(89,173,158,0.05)">
                <animate attributeName="r" values="36;42;36" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
                <animate attributeName="opacity" values="1;0.4;1" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle cx="100" cy="350" r="26" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.5" />
              <text x="100" y="354" textAnchor="middle" fill="#59AD9E" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.08em">KYA</text>
            </g>

            {/* CDN */}
            <g filter="url(#aaf-glow-white)">
              <circle cx="401" cy="88" r="48" fill="rgba(255,255,255,0.02)">
                <animate attributeName="r" values="48;54;48" dur="3.2s" repeatCount="indefinite" begin="0.3s" />
                <animate attributeName="opacity" values="1;0.4;1" dur="3.2s" repeatCount="indefinite" begin="0.3s" />
              </circle>
              <circle cx="401" cy="88" r="34" fill="#0c0c0e" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
              <text x="401" y="92" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.08em">CDN</text>
            </g>

            {/* WEBSITE */}
            <g filter="url(#aaf-glow-white)">
              <circle cx="585" cy="88" r="44" fill="rgba(255,255,255,0.02)">
                <animate attributeName="r" values="44;50;44" dur="3.6s" repeatCount="indefinite" begin="0.9s" />
                <animate attributeName="opacity" values="1;0.4;1" dur="3.6s" repeatCount="indefinite" begin="0.9s" />
              </circle>
              <circle cx="585" cy="88" r="34" fill="#0c0c0e" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
              <text x="585" y="92" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.07em">WEBSITE</text>
            </g>

            {/* LOGIN (success end node) */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="770" cy="88" r="46" fill="rgba(89,173,158,0.05)">
                <animate attributeName="r" values="46;54;46" dur="3s" repeatCount="indefinite" begin="1.2s" />
                <animate attributeName="opacity" values="1;0.35;1" dur="3s" repeatCount="indefinite" begin="1.2s" />
              </circle>
              <circle cx="770" cy="88" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.8" />
              <text x="770" y="92" textAnchor="middle" fill="#59AD9E" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.08em">LOGIN</text>
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
