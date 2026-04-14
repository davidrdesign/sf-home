import { TrustNetworkCanvas } from '../components/TrustNetworkCanvas';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LogoImage } from '../components/LogoImage';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { KeyRound, CreditCard } from 'lucide-react';
import consumerReports from '../../assets/5afad90ea1a8cc9664bc50452e19cbb69d499e6d.png';
import experian from '../../assets/f8e7181dab1f7893efc29380fa121227d111500f.png';
import rbc from '../../imports/rbc-logo-shield.svg';

function IntroCardSquircles() {
  return (
    <svg
      className="intro-card__pattern-svg"
      aria-hidden
      viewBox="0 0 520 320"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.85">
        <rect x="8" y="48" width="128" height="128" rx="40" />
        <rect x="168" y="-24" width="196" height="196" rx="62" opacity="0.9" />
        <rect x="368" y="108" width="168" height="168" rx="54" opacity="0.75" />
        <rect x="72" y="188" width="104" height="104" rx="34" opacity="0.55" />
        <rect x="288" y="232" width="96" height="96" rx="30" opacity="0.45" />
      </g>
    </svg>
  );
}

export function HomePage() {
  useScrollReveal();
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );
  const isMobile = viewportWidth <= 600;
  const isTablet = viewportWidth <= 900;
  
  // API Demo animation state
  const [demoStep, setDemoStep] = useState(0);
  const [merchantIndex, setMerchantIndex] = useState(0);
  
  // Case study cycling state
  const [caseIndex, setCaseIndex] = useState(0);
  
  // Rotating merchants for demo
  const merchants = [
    { name: 'Getty Images', action: 'License image_4281.jpg' },
    { name: 'Anthropic', action: 'Claude API tokens (10K)' },
    { name: 'Bose Headphones', action: 'QuietComfort 45' },
    { name: 'OpenAI Tokens', action: 'GPT-4 API access (100K)' },
    { name: 'API Access', action: 'Premium tier subscription' },
  ];
  
  // Case studies data
  const caseStudies = [
    {
      company: 'Consumer Reports',
      logos: ['Consumer Reports', 'Royal Bank of Canada', 'Experian'],
      activeIndex: 0,
      accentColor: '#59AD9E',
      problem: "Legacy fraud-detection pipelines couldn't distinguish legitimate AI agents from bots, blocking automated purchases and degrading the consumer experience.",
      solution: "Skyfire's KYA identity layer gave every agent a verifiable credential that existing WAF and CDN partners could interpret in real time, with no rip-and-replace required.",
      stats: [
        { value: '93%', label: 'reduction', sublabel: 'in false-positive agent blocks' },
        { value: '2.4×', label: 'increase', sublabel: 'in automated transaction throughput' },
        { value: 'Sub-200 ms', label: 'identity', sublabel: 'verification at edge' }
      ],
      quote: "Skyfire let us welcome AI agents instead of fighting them. Our members get faster service and we get cleaner data.",
      attribution: "VP of Digital Products, Consumer Reports"
    },
    {
      company: 'Royal Bank of Canada',
      logos: ['Consumer Reports', 'Royal Bank of Canada', 'Experian'],
      activeIndex: 1,
      accentColor: '#3B6FD8',
      problem: "Customers wanted AI assistants to handle routine banking tasks (bill pay, transfers, balance checks), but regulatory and security requirements made it nearly impossible to grant programmatic access.",
      solution: "Skyfire's Agentic Wallet provided controlled, auditable payment access with built-in compliance guardrails, enabling 1-click agent checkout inside the banking app.",
      stats: [
        { value: '4.1×', label: 'growth', sublabel: 'in agent-initiated transactions' },
        { value: 'Zero', label: 'compliance', sublabel: 'incidents post-launch' },
        { value: 'NPS +18', label: 'among early-', sublabel: 'adopter customers' }
      ],
      quote: "We needed a solution that satisfied our regulators and delighted our customers. Skyfire delivered both.",
      attribution: "Head of Digital Innovation, Royal Bank of Canada"
    },
    {
      company: 'Experian',
      logos: ['Consumer Reports', 'Royal Bank of Canada', 'Experian'],
      activeIndex: 2,
      accentColor: '#7A5AF8',
      problem: "Merchant partners were losing conversions when AI-driven shopping sessions had to break out of the app to complete identity verification and payment.",
      solution: "Skyfire's Buy For Me protocol kept the entire purchase flow in-app, combining identity, payment, and merchant settlement into a single seamless handshake.",
      stats: [
        { value: '10×', label: 'improvement', sublabel: 'in agent-assisted conversion rate' },
        { value: '68%', label: 'reduction', sublabel: 'in checkout abandonment' },
        { value: '$12M', label: 'incremental GMV in first quarter', sublabel: '' }
      ],
      quote: "The in-app experience went from clunky to magical. Merchants are lining up to integrate.",
      attribution: "SVP of Partnerships, Experian"
    }
  ];

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    // Animation sequence timing
    const timings = [
      { step: 0, delay: 0 },
      { step: 1, delay: 1100 },   // Token request
      { step: 2, delay: 2300 },   // Website access
      { step: 3, delay: 3600 },   // Login + success
      { step: 4, delay: 4900 },   // Checkout
      { step: 5, delay: 6200 },   // Live transaction + LIVE panel emphasis
      { step: 0, delay: 9000 }
    ];
    
    const timeouts: NodeJS.Timeout[] = [];
    
    timings.forEach(({ step, delay }) => {
      const timeout = setTimeout(() => {
        setDemoStep(step);
      }, delay);
      timeouts.push(timeout);
    });
    
    // Loop the animation and cycle merchants
    const loopInterval = setInterval(() => {
      setDemoStep(0);
      setMerchantIndex((prev) => (prev + 1) % merchants.length); // Cycle to next merchant
      timings.forEach(({ step, delay }) => {
        const timeout = setTimeout(() => {
          setDemoStep(step);
        }, delay);
        timeouts.push(timeout);
      });
    }, 9200);
    
    // Cycle case studies every 8 seconds
    const caseInterval = setInterval(() => {
      setCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 8000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(loopInterval);
      clearInterval(caseInterval);
    };
  }, []);
  
  return (
    <div className="page-home" style={{ paddingTop: '0' }}>
      {/* Hero - Immersive Full Screen */}
      <div style={{
        position: 'relative',
        minHeight: 'min(100vh, 1200px)',
        background: 'var(--hp-ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: isMobile ? '108px 20px 40px' : isTablet ? '112px 28px 48px' : '100px 40px 56px'
        }}>
        {/* Subtle gradient background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 30% 50%, rgba(238,120,67,0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 50%, rgba(89,173,158,0.08) 0%, transparent 50%)
          `
        }} />

        {/* Hero: text left | diagram right */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '40px' : '64px'
        }}>
          {/* Left: headline, copy, CTAs */}
          <div style={{
            flex: '0 0 auto',
            width: isMobile ? '100%' : '420px',
            textAlign: 'left',
            padding: '0',
            animation: 'fadeInUp 0.8s ease-out 0.1s backwards'
          }}>
            {/* Main headline */}
            <h1 style={{
              fontSize: isMobile ? 'clamp(38px, 12vw, 56px)' : 'clamp(44px, 4.5vw, 64px)',
              fontWeight: 500,
              letterSpacing: '-0.045em',
              lineHeight: 1.08,
              color: '#fff',
              marginBottom: isMobile ? '16px' : '20px'
            }}>
              Access.
              <br />
              Identity.
              <br />
              Checkout.
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #EE7843 0%, #59AD9E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                The Agent Trust Stack.
              </span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: isMobile ? '16px' : 'clamp(16px, 1.65vw, 18px)',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: isMobile ? '24px' : '28px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              For teams that own or operate agents: Skyfire is how you get reliable website access and checkout at internet scale. You issue KYA tokens from Skyfire and send them so agents can access the experiences you need, without evasion or brittle workarounds.
            </p>

            {/* CTA buttons */}
            <div style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'stretch' : 'center',
              justifyContent: 'flex-start'
            }}>
              <a
                className="btn"
                href="https://docs.skyfire.xyz/docs/developer-documentation"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                background: 'linear-gradient(135deg, #59AD9E 0%, #3E9686 100%)',
                color: '#fff',
                padding: isMobile ? '16px 24px' : '14px 32px',
                fontSize: '15px',
                border: 'none',
                boxShadow: '0 8px 24px rgba(89,173,158,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                width: isMobile ? '100%' : 'auto',
                justifyContent: 'center',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '100px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(89,173,158,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(89,173,158,0.3)';
              }}>
                Learn about KYA
              </a>
              <Link
                to="/use-cases"
                className="btn"
                style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                padding: isMobile ? '16px 24px' : '14px 32px',
                fontSize: '15px',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                transition: 'background 0.2s, border-color 0.2s',
                width: isMobile ? '100%' : 'auto',
                justifyContent: 'center',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '100px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}>
                See Use Cases
              </Link>
            </div>
          </div>

          {/* Right: diagram */}
          <div style={{
            flex: 1,
            minWidth: 0,
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
          }}>
            <svg
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
              viewBox="0 0 520 345"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Agent stack: KYA and Wallet feed Skyfire, Skyfire feeds Agent; Agent connects to Security; Security reaches Websites, Checkout, OAuth, and Protocols."
            >
              <defs>
                {/* Glow filters */}
                <filter id="glow-orange" x="-70%" y="-70%" width="240%" height="240%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="glow-teal" x="-70%" y="-70%" width="240%" height="240%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="glow-white" x="-70%" y="-70%" width="240%" height="240%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>

                {/* Directional arrowheads — userSpaceOnUse so size is in SVG px, not stroke-width multiples */}
                <marker id="arr-teal" markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0,0.5 L0,6.5 L9,3.5 z" fill="#59AD9E" fillOpacity="0.8" />
                </marker>
                <marker id="arr-orange" markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0,0.5 L0,6.5 L9,3.5 z" fill="#EE7843" fillOpacity="0.9" />
                </marker>
              </defs>

              {/* ── Connection lines (drawn first, circles paint over the endpoints) ── */}
              <g strokeLinecap="round">
                {/* KYA → Skyfire */}
                <line x1="73" y1="236" x2="87" y2="214"
                  stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.5" markerEnd="url(#arr-teal)" />
                {/* Wallet → Skyfire */}
                <line x1="137" y1="236" x2="123" y2="214"
                  stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.5" markerEnd="url(#arr-teal)" />
                {/* Skyfire → Agent */}
                <line x1="105" y1="151" x2="105" y2="129"
                  stroke="#EE7843" strokeWidth="1.6" strokeOpacity="0.65" markerEnd="url(#arr-orange)" />
                {/* Agent → Security — long, dashed, dramatic */}
                <line x1="137" y1="106" x2="268" y2="149"
                  stroke="#EE7843" strokeWidth="2.2" strokeOpacity="0.6"
                  strokeDasharray="8 5" markerEnd="url(#arr-orange)" />
                {/* Security → Websites */}
                <line x1="329" y1="142" x2="441" y2="73"
                  stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.45" markerEnd="url(#arr-teal)" />
                {/* Security → Checkout */}
                <line x1="334" y1="155" x2="436" y2="140"
                  stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.45" markerEnd="url(#arr-teal)" />
                {/* Security → OAuth */}
                <line x1="333" y1="170" x2="437" y2="200"
                  stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.45" markerEnd="url(#arr-teal)" />
                {/* Security → Protocols */}
                <line x1="327" y1="181" x2="443" y2="269"
                  stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.45" markerEnd="url(#arr-teal)" />
              </g>

              {/* ── Nodes (r=34 all, painted on top of lines) ─────────────── */}

              {/* KYA */}
              <g filter="url(#glow-teal)">
                <circle cx="55" cy="265" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.6">
                  <animate attributeName="stroke-opacity" values="0.4;0.75;0.4" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
                </circle>
                <text x="55" y="269" textAnchor="middle" fill="#7FD4C1" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">KYA</text>
              </g>

              {/* WALLET */}
              <g filter="url(#glow-teal)">
                <circle cx="155" cy="265" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.6">
                  <animate attributeName="stroke-opacity" values="0.4;0.75;0.4" dur="4s" repeatCount="indefinite" begin="0.7s" />
                </circle>
                <text x="155" y="269" textAnchor="middle" fill="#7FD4C1" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.06em">WALLET</text>
              </g>

              {/* SKYFIRE */}
              <g filter="url(#glow-orange)">
                <circle cx="105" cy="185" r="34" fill="#0c0c0e" stroke="#EE7843" strokeWidth="2" strokeOpacity="0.85">
                  <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <text x="105" y="189" textAnchor="middle" fill="#EE7843" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.06em">SKYFIRE</text>
              </g>

              {/* AGENT */}
              <g filter="url(#glow-white)">
                <circle cx="105" cy="95" r="34" fill="#0c0c0e" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="4.2s" repeatCount="indefinite" begin="0.3s" />
                </circle>
                <text x="105" y="99" textAnchor="middle" fill="#E8FFFA" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">AGENT</text>
              </g>

              {/* SECURITY */}
              <g filter="url(#glow-orange)">
                <circle cx="300" cy="160" r="34" fill="#0c0c0e" stroke="#EE7843" strokeWidth="2.2" strokeOpacity="0.8">
                  <animate attributeName="stroke-opacity" values="0.45;0.9;0.45" dur="3s" repeatCount="indefinite" begin="0.8s" />
                </circle>
                <text x="300" y="164" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.05em">SECURITY</text>
              </g>

              {/* WEBSITES */}
              <g filter="url(#glow-teal)">
                <circle cx="470" cy="55" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                  <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <text x="470" y="59" textAnchor="middle" fill="#C8FFF4" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.04em">WEBSITES</text>
              </g>

              {/* CHECKOUT */}
              <g filter="url(#glow-teal)">
                <circle cx="470" cy="135" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                  <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite" begin="1.1s" />
                </circle>
                <text x="470" y="139" textAnchor="middle" fill="#C8FFF4" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.03em">CHECKOUT</text>
              </g>

              {/* OAUTH */}
              <g filter="url(#glow-teal)">
                <circle cx="470" cy="215" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                  <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3.9s" repeatCount="indefinite" begin="1.7s" />
                </circle>
                <text x="470" y="219" textAnchor="middle" fill="#C8FFF4" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.05em">OAUTH</text>
              </g>

              {/* PROTOCOLS */}
              <g filter="url(#glow-teal)">
                <circle cx="470" cy="295" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                  <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="4.1s" repeatCount="indefinite" begin="2.2s" />
                </circle>
                <text x="470" y="299" textAnchor="middle" fill="#C8FFF4" fontSize="10" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.03em">PROTOCOLS</text>
              </g>

              {/* ── Animated data-flow pulses (edge-to-edge) ──────────── */}
              <g>
                {/* KYA → Skyfire */}
                <circle r="3" fill="#59AD9E">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 73 236 L 87 214" />
                  <animate attributeName="opacity" values="0;1;1;0;0;0;0;0;0;0;0" keyTimes="0;0.05;0.14;0.18;1;1;1;1;1;1;1" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Wallet → Skyfire */}
                <circle r="3" fill="#59AD9E">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 137 236 L 123 214" />
                  <animate attributeName="opacity" values="0;0;0;1;1;0;0;0;0;0;0" keyTimes="0;0.08;0.12;0.14;0.22;0.26;1;1;1;1;1" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Skyfire → Agent */}
                <circle r="3" fill="#EE7843">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 105 151 L 105 129" />
                  <animate attributeName="opacity" values="0;0;0;0;0;1;1;0;0;0;0" keyTimes="0;0.2;0.24;0.26;0.28;0.3;0.38;0.42;1;1;1" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Agent → Security */}
                <circle r="3.5" fill="#EE7843">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 137 106 L 268 149" />
                  <animate attributeName="opacity" values="0;0;0;0;0;0;0;1;1;0;0" keyTimes="0;0.35;0.38;0.4;0.42;0.44;0.46;0.48;0.58;0.62;1" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Security → Websites */}
                <circle r="3" fill="#59AD9E">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 329 142 L 441 73" />
                  <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.5;0.52;0.54;0.56;0.58;0.6;0.62;0.64;0.66;0.72" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Security → Checkout */}
                <circle r="3" fill="#59AD9E">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 334 155 L 436 140" />
                  <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.6;0.62;0.64;0.66;0.68;0.7;0.72;0.74;0.76;0.78;0.84" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Security → OAuth */}
                <circle r="3" fill="#59AD9E">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 333 170 L 437 200" />
                  <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.65;0.67;0.69;0.71;0.73;0.75;0.77;0.79;0.81;0.83;0.85;0.9" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Security → Protocols */}
                <circle r="3" fill="#59AD9E">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 327 181 L 443 269" />
                  <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.7;0.72;0.74;0.76;0.78;0.8;0.82;0.84;0.86;0.88;0.9;0.92;0.98" dur="10s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>
        </div>

        {/* Scroll indicator */}
        {!isMobile && (
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'bounce 2s ease-in-out infinite'
        }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)'
          }}>
            Scroll to Explore
          </div>
          <div style={{
            width: '1px',
            height: '24px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)'
          }} />
        </div>
        )}

        {/* Add keyframes via a style tag */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-10px); }
          }
        `}</style>
      </div>

      {/* Two-col Intro */}
      <div className="two-col-intro">
        <div className="intro-cards-wrap">
          <div className="intro-card intro-card--access">
            <div className="intro-card__pattern" aria-hidden>
              <IntroCardSquircles />
            </div>
            <div className="intro-card__top">
              <span className="intro-card__eyebrow">KYA · Access</span>
              <div className="intro-card__icon-box">
                <KeyRound size={20} strokeWidth={2} aria-hidden />
              </div>
            </div>
            <div className="intro-card__content">
              <h3>Access &amp; Login</h3>
              <p>
                A portable, verified identity token accepted by the majority of the commercial internet. KYA is designed to allow you programmatic access and log in capabilities to web properties, applications and agent protocol with little engineering effort.
              </p>
              <div className="partner-row">
                {['Experian', 'Akamai', 'Datadome', 'Okta', 'Auth0', 'Ory', 'Apify', 'CartAI', 'Sequentum', 'Cequence', 'F5', 'Forter'].map((p) => (
                  <span key={p} className="p-tag">{p}</span>
                ))}
              </div>
              <a href="https://docs.skyfire.xyz/docs/developer-documentation" target="_blank" rel="noopener noreferrer" className="learn-more">Learn more about KYA →</a>
            </div>
          </div>

          <div className="intro-card intro-card--commerce">
            <div className="intro-card__pattern" aria-hidden>
              <IntroCardSquircles />
            </div>
            <div className="intro-card__top">
              <span className="intro-card__eyebrow">Agentic commerce</span>
              <div className="intro-card__icon-box">
                <CreditCard size={20} strokeWidth={2} aria-hidden />
              </div>
            </div>
            <div className="intro-card__content">
              <h3>Checkout &amp; Payments</h3>
              <p>
                A complete agentic commerce experience that allows agents to complete checkouts and make payments via websites and agentic protocols. Skyfire partners with all major card networks to allow tokenized card transactions with user mandates so agents can access and pay reliably at the scale of the internet.
              </p>
              <div className="partner-row">
                {['Visa', 'Mastercard', 'Henry Labs', 'Cart-ai', 'Consumer Reports', 'Getty Images'].map((p) => (
                  <span key={p} className="p-tag">{p}</span>
                ))}
              </div>
              <a href="https://docs.skyfire.xyz/docs/developer-documentation" target="_blank" rel="noopener noreferrer" className="learn-more">Learn more about Checkout &amp; Payments →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage */}
      <div className="coverage-section">
        <h2 className="coverage-headline">
          Covering more than <em style={{ color: '#EE7843', fontStyle: 'normal' }}>60%</em> of the{' '}
          commercial&nbsp;web.
        </h2>
        <div className="stat-sub">Powering agentic commerce security through leading identity partners</div>
        <div className="coverage-logos">
          <div className="coverage-logos__row" aria-label="Partner logos, row 1 of 2">
            {['Akamai', 'Datadome', 'Forter', 'Okta', 'Auth0'].map((name) => (
              <div
                key={name}
                className={
                  ['Akamai', 'Auth0'].includes(name)
                    ? 'coverage-logo coverage-logo--prominent'
                    : 'coverage-logo'
                }
              >
                <LogoImage name={name} size={20} showText={false} />
              </div>
            ))}
          </div>
          <div className="coverage-logos__row" aria-label="Partner logos, row 2 of 2">
            {['Ory', 'Cequence', 'F5', 'Fastly'].map((name) => (
              <div key={name} className="coverage-logo">
                <LogoImage name={name} size={20} showText={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="coverage-cta">
          <a
            href="https://kyapay.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg coverage-cta-btn"
          >
            Enable Agent Access →
          </a>
        </div>
      </div>

            {/* Access story: replaces product matrix */}
      <div className="matrix-section access-story-section">
        <div className="matrix-header">
          <div className="hp-eyebrow">ACCESS</div>
          <h2>Enable Agent Access At Internet Scale</h2>
          <p>
            Teams that operate agents need reliable access to websites and dependable checkout, not one-off hacks.
            KYA tokens from Skyfire are how you authorize access and payment in one stack, built for programmatic
            login, session continuity, and agentic commerce across the open web.
          </p>
        </div>
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 12px 40px rgba(14,14,14,0.08)',
          background: '#0A0A0A',
          padding: '48px 32px'
        }}>
          <svg
            style={{ width: '100%', height: 'auto', display: 'block' }}
            viewBox="0 0 520 345"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Agent data flow: KYA and Wallet feed Skyfire, Skyfire feeds Agent; Agent connects to Security; Security reaches Websites, Checkout, OAuth, and Protocols."
          >
            <defs>
              <filter id="aaf-glow-orange" x="-70%" y="-70%" width="240%" height="240%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="aaf-glow-teal" x="-70%" y="-70%" width="240%" height="240%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="aaf-glow-white" x="-70%" y="-70%" width="240%" height="240%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <marker id="aaf-arr-teal" markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M0,0.5 L0,6.5 L9,3.5 z" fill="#59AD9E" fillOpacity="0.8" />
              </marker>
              <marker id="aaf-arr-orange" markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M0,0.5 L0,6.5 L9,3.5 z" fill="#EE7843" fillOpacity="0.9" />
              </marker>
            </defs>

            {/* Connection lines */}
            <g strokeLinecap="round">
              <line x1="73" y1="236" x2="87" y2="214"
                stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.5" markerEnd="url(#aaf-arr-teal)" />
              <line x1="137" y1="236" x2="123" y2="214"
                stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.5" markerEnd="url(#aaf-arr-teal)" />
              <line x1="105" y1="151" x2="105" y2="129"
                stroke="#EE7843" strokeWidth="1.6" strokeOpacity="0.65" markerEnd="url(#aaf-arr-orange)" />
              <line x1="137" y1="106" x2="268" y2="149"
                stroke="#EE7843" strokeWidth="2.2" strokeOpacity="0.6"
                strokeDasharray="8 5" markerEnd="url(#aaf-arr-orange)" />
              <line x1="329" y1="142" x2="441" y2="73"
                stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.45" markerEnd="url(#aaf-arr-teal)" />
              <line x1="334" y1="155" x2="436" y2="140"
                stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.45" markerEnd="url(#aaf-arr-teal)" />
              <line x1="333" y1="170" x2="437" y2="200"
                stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.45" markerEnd="url(#aaf-arr-teal)" />
              <line x1="327" y1="181" x2="443" y2="269"
                stroke="#59AD9E" strokeWidth="1.4" strokeOpacity="0.45" markerEnd="url(#aaf-arr-teal)" />
            </g>

            {/* KYA */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="55" cy="265" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.6">
                <animate attributeName="stroke-opacity" values="0.4;0.75;0.4" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <text x="55" y="269" textAnchor="middle" fill="#7FD4C1" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">KYA</text>
            </g>

            {/* WALLET */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="155" cy="265" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.6">
                <animate attributeName="stroke-opacity" values="0.4;0.75;0.4" dur="4s" repeatCount="indefinite" begin="0.7s" />
              </circle>
              <text x="155" y="269" textAnchor="middle" fill="#7FD4C1" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.06em">WALLET</text>
            </g>

            {/* SKYFIRE */}
            <g filter="url(#aaf-glow-orange)">
              <circle cx="105" cy="185" r="34" fill="#0c0c0e" stroke="#EE7843" strokeWidth="2" strokeOpacity="0.85">
                <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <text x="105" y="189" textAnchor="middle" fill="#EE7843" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.06em">SKYFIRE</text>
            </g>

            {/* AGENT */}
            <g filter="url(#aaf-glow-white)">
              <circle cx="105" cy="95" r="34" fill="#0c0c0e" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6">
                <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="4.2s" repeatCount="indefinite" begin="0.3s" />
              </circle>
              <text x="105" y="99" textAnchor="middle" fill="#E8FFFA" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">AGENT</text>
            </g>

            {/* SECURITY */}
            <g filter="url(#aaf-glow-orange)">
              <circle cx="300" cy="160" r="34" fill="#0c0c0e" stroke="#EE7843" strokeWidth="2.2" strokeOpacity="0.8">
                <animate attributeName="stroke-opacity" values="0.45;0.9;0.45" dur="3s" repeatCount="indefinite" begin="0.8s" />
              </circle>
              <text x="300" y="164" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.05em">SECURITY</text>
            </g>

            {/* WEBSITES */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="470" cy="55" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <text x="470" y="59" textAnchor="middle" fill="#C8FFF4" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.04em">WEBSITES</text>
            </g>

            {/* CHECKOUT */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="470" cy="135" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite" begin="1.1s" />
              </circle>
              <text x="470" y="139" textAnchor="middle" fill="#C8FFF4" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.03em">CHECKOUT</text>
            </g>

            {/* OAUTH */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="470" cy="215" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3.9s" repeatCount="indefinite" begin="1.7s" />
              </circle>
              <text x="470" y="219" textAnchor="middle" fill="#C8FFF4" fontSize="10.5" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.05em">OAUTH</text>
            </g>

            {/* PROTOCOLS */}
            <g filter="url(#aaf-glow-teal)">
              <circle cx="470" cy="295" r="34" fill="#0c0c0e" stroke="#59AD9E" strokeWidth="1.6" strokeOpacity="0.65">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="4.1s" repeatCount="indefinite" begin="2.2s" />
              </circle>
              <text x="470" y="299" textAnchor="middle" fill="#C8FFF4" fontSize="10" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.03em">PROTOCOLS</text>
            </g>

            {/* Animated data-flow pulses (edge-to-edge) */}
            <g>
              <circle r="3" fill="#59AD9E">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 73 236 L 87 214" />
                <animate attributeName="opacity" values="0;1;1;0;0;0;0;0;0;0;0" keyTimes="0;0.05;0.14;0.18;1;1;1;1;1;1;1" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#59AD9E">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 137 236 L 123 214" />
                <animate attributeName="opacity" values="0;0;0;1;1;0;0;0;0;0;0" keyTimes="0;0.08;0.12;0.14;0.22;0.26;1;1;1;1;1" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#EE7843">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 105 151 L 105 129" />
                <animate attributeName="opacity" values="0;0;0;0;0;1;1;0;0;0;0" keyTimes="0;0.2;0.24;0.26;0.28;0.3;0.38;0.42;1;1;1" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="3.5" fill="#EE7843">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 137 106 L 268 149" />
                <animate attributeName="opacity" values="0;0;0;0;0;0;0;1;1;0;0" keyTimes="0;0.35;0.38;0.4;0.42;0.44;0.46;0.48;0.58;0.62;1" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#59AD9E">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 329 142 L 441 73" />
                <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.5;0.52;0.54;0.56;0.58;0.6;0.62;0.64;0.66;0.72" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#59AD9E">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 334 155 L 436 140" />
                <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.6;0.62;0.64;0.66;0.68;0.7;0.72;0.74;0.76;0.78;0.84" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#59AD9E">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 333 170 L 437 200" />
                <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.65;0.67;0.69;0.71;0.73;0.75;0.77;0.79;0.81;0.83;0.85;0.9" dur="10s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#59AD9E">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 327 181 L 443 269" />
                <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.7;0.72;0.74;0.76;0.78;0.8;0.82;0.84;0.86;0.88;0.9;0.92;0.98" dur="10s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <a
            href="https://kyapay.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-teal"
          >
            Enable Agent Access →
          </a>
        </div>
      </div>

{/* Case Studies */}
      <div className="outcomes-section">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '64px 0 0' : isTablet ? '84px 0 0' : '100px 48px'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#8E8984',
              marginBottom: '16px'
            }}>
              CASE STUDIES
            </div>
            <h2 style={{
              fontSize: 'clamp(36px, 4vw, 52px)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              color: '#0E0E0E',
              marginBottom: '0'
            }}>
              Real Outcomes. Real Scale.
            </h2>
          </div>

          {/* Current Case Study */}
          {(() => {
            const currentCase = caseStudies[caseIndex];
            return (
              <div>
                {/* Logo Cards */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: isMobile ? '12px' : '16px',
                  marginBottom: isMobile ? '28px' : '48px',
                  flexWrap: 'wrap'
                }}>
                  {currentCase.logos.map((logo, idx) => {
                    // Find which case study this logo corresponds to
                    const correspondingCaseIndex = caseStudies.findIndex(cs => cs.activeIndex === idx);
                    
                    return (
                      <div 
                        key={logo} 
                        onClick={() => setCaseIndex(correspondingCaseIndex)}
                        style={{
                          padding: isMobile ? '20px 18px' : isTablet ? '24px 28px' : '32px 48px',
                          background: idx === currentCase.activeIndex ? currentCase.accentColor : '#fff',
                          color: idx === currentCase.activeIndex ? '#fff' : '#0E0E0E',
                          border: '1px solid rgba(14,14,14,0.1)',
                          borderRadius: '4px',
                          fontSize: '14px',
                          fontWeight: 600,
                          textAlign: 'center',
                          minWidth: isMobile ? 'calc(50% - 6px)' : isTablet ? '160px' : '200px',
                          flex: isMobile ? '1 1 calc(50% - 6px)' : '0 1 auto',
                          transition: 'background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          alignItems: 'center',
                          cursor: 'pointer',
                          boxShadow: idx === currentCase.activeIndex ? '0 8px 24px rgba(14,14,14,0.15)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (idx !== currentCase.activeIndex) {
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(14,14,14,0.1)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (idx !== currentCase.activeIndex) {
                            e.currentTarget.style.boxShadow = 'none';
                          }
                        }}
                      >
                      {logo === 'Consumer Reports' ? (
                        <img 
                          src={consumerReports} 
                          alt="Consumer Reports"
                          style={{
                            height: '32px',
                            width: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            filter: idx === currentCase.activeIndex ? 'brightness(0) invert(1)' : 'none'
                          }}
                        />
                      ) : logo === 'Experian' ? (
                        <img 
                          src={experian} 
                          alt="Experian"
                          style={{
                            height: '32px',
                            width: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            filter: idx === currentCase.activeIndex ? 'brightness(0) invert(1)' : 'none'
                          }}
                        />
                      ) : logo === 'Royal Bank of Canada' ? (
                        <img 
                          src={rbc} 
                          alt="Royal Bank of Canada"
                          style={{
                            height: '40px',
                            width: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      ) : (
                        <div>{logo}</div>
                      )}
                    </div>
                    );
                  })}
                </div>

                {/* Main Content Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
                  gap: isMobile ? '24px' : '48px',
                  marginBottom: isMobile ? '24px' : '40px'
                }}>
                  {/* Left - Problem & Solution */}
                  <div style={{
                    borderLeft: '3px solid #EE7843',
                    paddingLeft: isMobile ? '16px' : '24px'
                  }}>
                    <div style={{
                      marginBottom: '32px'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: currentCase.accentColor,
                        marginBottom: '12px'
                      }}>
                        THE PROBLEM
                      </div>
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: '#0E0E0E',
                        margin: '0'
                      }}>
                        {currentCase.problem}
                      </p>
                    </div>

                    <div>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: currentCase.accentColor,
                        marginBottom: '12px'
                      }}>
                        SKYFIRE SOLUTION
                      </div>
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: '#0E0E0E',
                        margin: '0'
                      }}>
                        {currentCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right - Stats */}
                  <div style={{
                    display: 'flex',
                    gap: isMobile ? '12px' : '24px',
                    flexDirection: isMobile ? 'column' : 'row'
                  }}>
                    {currentCase.stats.map((stat, idx) => (
                      <div key={idx} style={{
                        flex: 1,
                        padding: isMobile ? '22px 20px' : '32px 24px',
                        background: `${currentCase.accentColor}14`,
                        border: `1px solid ${currentCase.accentColor}33`,
                        borderRadius: '4px',
                        textAlign: 'center',
                        boxShadow: `0 8px 20px ${currentCase.accentColor}14`
                      }}>
                        <div style={{
                          fontSize: 'clamp(32px, 4vw, 48px)',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                          color: '#0E0E0E',
                          marginBottom: '8px'
                        }}>
                          {stat.value}
                        </div>
                        <div style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: '#0E0E0E',
                          marginBottom: '4px'
                        }}>
                          {stat.label}
                        </div>
                        {stat.sublabel && (
                          <div style={{
                            fontSize: '13px',
                            color: '#8E8984'
                          }}>
                            {stat.sublabel}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div style={{
                  background: `${currentCase.accentColor}10`,
                  padding: isMobile ? '24px 20px' : '40px 48px',
                  borderLeft: `4px solid ${currentCase.accentColor}`,
                  borderRadius: '4px'
                }}>
                  <div style={{
                    fontSize: isMobile ? '18px' : '20px',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    color: '#0E0E0E',
                    marginBottom: '16px'
                  }}>
                    "{currentCase.quote}"
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#8E8984'
                  }}>
                    · {currentCase.attribution}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Indicator Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '48px'
          }}>
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const targetCaseIndex = caseStudies.findIndex((cs) => cs.activeIndex === idx);
                  setCaseIndex(targetCaseIndex);
                }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: 'none',
                  background: idx === caseStudies[caseIndex].activeIndex ? '#59AD9E' : 'rgba(142,137,132,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
                aria-label={`View case study ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeInCase {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>

      {/* Demo */}
      <div className="demo-section">
        <div className="demo-inner">
          <div className="demo-left">
            <h2>WATCH AN AGENT COMPLETE CHECKOUT</h2>
            <p>
              Follow a single KYA-backed session: token issuance, site access, authenticated login, checkout, and a live-ledger transaction, end to end on Skyfire infrastructure.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '28px'
            }}>
              <a
                className="btn btn-teal"
                href="https://app.skyfire.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Skyfire
              </a>
              <a
                className="btn btn-outline-white"
                href="https://docs.skyfire.xyz/docs/developer-documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Documentation
              </a>
            </div>
          </div>
          <div className="demo-right">
            <div className="demo-bar">
              <div className="demo-dots">
                <div className="demo-dot"></div>
                <div className="demo-dot"></div>
                <div className="demo-dot"></div>
              </div>
              <div className="demo-url">api.skyfire.xyz/v1/agents/checkout</div>
            </div>
            <div className="demo-body" style={{
              minHeight: isMobile ? 'auto' : '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {/* Step 1: Token request */}
              <div className="demo-step" style={{
                opacity: demoStep >= 1 ? 1 : 0.5,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                zIndex: demoStep === 1 ? 10 : 1,
                margin: '12px 0'
              }}>
                <div className={`step-num ${demoStep >= 1 ? 'done' : ''}`} style={{
                  transition: 'all 0.4s ease'
                }}>1</div>
                <div className="step-content">
                  <div className="step-title">Token request</div>
                  <div className="step-body">
                    Agent requests a KYA session token for this merchant scope
                    {demoStep === 1 && (
                      <span style={{ 
                        marginLeft: '6px',
                        color: '#59AD9E',
                        animation: 'blink 1s infinite'
                      }}>...</span>
                    )}
                  </div>
                  {demoStep === 1 && (
                    <div style={{
                      marginTop: '6px',
                      fontSize: '11px',
                      color: '#59AD9E',
                      fontFamily: 'monospace',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      → POST /v1/tokens • scope: checkout • agent_id: a7f8x9...
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 1 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 1 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 1 ? 'DONE' : 'PENDING'}</div>
              </div>
              
              {/* Step 2: Website access */}
              <div className="demo-step" style={{
                opacity: demoStep >= 2 ? 1 : 0.5,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                zIndex: demoStep === 2 ? 10 : 1,
                margin: '12px 0'
              }}>
                <div className={`step-num ${demoStep >= 2 ? 'done' : ''}`} style={{
                  transition: 'all 0.4s ease'
                }}>2</div>
                <div className="step-content">
                  <div className="step-title">Website access</div>
                  <div className="step-body">
                    Token bound to session; agent loads merchant site with verified context
                    {demoStep === 2 && (
                      <span style={{ 
                        marginLeft: '6px',
                        color: '#59AD9E',
                        animation: 'blink 1s infinite'
                      }}>...</span>
                    )}
                  </div>
                  {demoStep === 2 && (
                    <div style={{
                      marginTop: '6px',
                      fontSize: '11px',
                      color: '#59AD9E',
                      fontFamily: 'monospace',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      ✓ Edge allowlist • ✓ Session cookie • ✓ Bot/WAF pass-through
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 2 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 2 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 2 ? 'DONE' : 'PENDING'}</div>
              </div>
              
              {/* Step 3: Login */}
              <div className="demo-step" style={{
                opacity: demoStep >= 3 ? 1 : 0.5,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                zIndex: demoStep === 3 ? 10 : 1,
                margin: '12px 0'
              }}>
                <div className={`step-num ${demoStep >= 3 ? 'done' : ''}`} style={{
                  transition: 'all 0.4s ease'
                }}>3</div>
                <div className="step-content">
                  <div className="step-title">Login</div>
                  <div className="step-body">
                    User or delegated auth completes login; KYA links identity to the session
                    {demoStep === 3 && (
                      <span style={{ 
                        marginLeft: '6px',
                        color: '#59AD9E',
                        animation: 'blink 1s infinite'
                      }}>...</span>
                    )}
                  </div>
                  {demoStep === 3 && (
                    <div style={{
                      marginTop: '6px',
                      fontSize: '11px',
                      color: '#59AD9E',
                      fontFamily: 'monospace',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      ✓ Login successful • user_4h2k… • KYA credential bound
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 3 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 3 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 3 ? 'SUCCESS' : 'PENDING'}</div>
              </div>
              
              {/* Step 4: Checkout */}
              <div className="demo-step" style={{
                opacity: demoStep >= 4 ? 1 : 0.5,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                zIndex: demoStep === 4 ? 10 : 1,
                margin: '12px 0'
              }}>
                <div className={`step-num ${demoStep >= 5 ? 'done' : demoStep === 4 ? 'active' : ''}`} style={{
                  transition: 'all 0.4s ease'
                }}>4</div>
                <div className="step-content">
                  <div className="step-title">Checkout</div>
                  <div className="step-body">
                    Agentic Wallet authorizes payment to merchant API
                    {demoStep === 4 && (
                      <span style={{ 
                        marginLeft: '6px',
                        color: '#EE7843',
                        animation: 'blink 1s infinite'
                      }}>...</span>
                    )}
                  </div>
                  {demoStep === 4 && (
                    <div style={{
                      marginTop: '6px',
                      fontSize: '11px',
                      color: '#EE7843',
                      fontFamily: 'monospace',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      → Wallet auth • Card tokenization • POST /checkout
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 5 ? 'badge-done' : demoStep === 4 ? 'badge-active' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 4 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 5 ? 'DONE' : demoStep === 4 ? 'IN PROGRESS' : 'PENDING'}</div>
              </div>
              
              {/* Step 5: Live transaction */}
              <div className="demo-step" style={{
                opacity: demoStep >= 5 ? 1 : 0.5,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                zIndex: demoStep === 5 ? 10 : 1,
                margin: '12px 0'
              }}>
                <div className={`step-num ${demoStep >= 5 ? 'done' : ''}`} style={{
                  transition: 'all 0.4s ease'
                }}>5</div>
                <div className="step-content">
                  <div className="step-title">Live transaction</div>
                  <div className="step-body">
                    {demoStep >= 5 ? 'Settlement confirmed; transaction written to ledger with audit trail' : 'Awaiting authorization and settlement'}
                    {demoStep === 5 && (
                      <span style={{ 
                        marginLeft: '6px',
                        color: '#59AD9E',
                        animation: 'blink 1s infinite'
                      }}>...</span>
                    )}
                  </div>
                  {demoStep === 5 && (
                    <div style={{
                      marginTop: '6px',
                      fontSize: '11px',
                      color: '#59AD9E',
                      fontFamily: 'monospace',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      ✓ tx_9k2m7f… • 184ms • Logged to ledger
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 5 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 5 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 5 ? 'DONE' : 'PENDING'}</div>
              </div>
              
              {/* Live Transaction Box */}
              <div className="demo-live" style={{
                opacity: demoStep >= 4 ? 1 : 0.3,
                transition: 'all 0.5s ease',
                transform: demoStep === 5 ? 'scale(1.05)' : 'scale(1)',
                boxShadow: demoStep === 5 ? '0 8px 32px rgba(238,120,67,0.4)' : demoStep >= 4 ? '0 4px 24px rgba(238,120,67,0.2)' : 'none',
                border: demoStep === 5 ? '2px solid rgba(238,120,67,0.5)' : demoStep >= 4 ? '1px solid rgba(238,120,67,0.3)' : '1px solid rgba(255,255,255,0.1)'
              }}>
                <div className="demo-live-label" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  LIVE TRANSACTION
                  {demoStep >= 4 && (
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#EE7843',
                      animation: 'pulse 1.5s ease infinite'
                    }} />
                  )}
                </div>
                <div className="demo-live-body" style={{
                  fontSize: '14px',
                  lineHeight: 1.6
                }}>
                  <div style={{ 
                    marginBottom: '4px',
                    fontWeight: 600,
                    animation: demoStep >= 4 ? 'slideInLeft 0.4s ease' : 'none'
                  }}>
                    {merchants[merchantIndex].name} → {merchants[merchantIndex].action}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#59AD9E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    animation: demoStep >= 4 ? 'fadeIn 0.6s ease 0.2s backwards' : 'none'
                  }}>
                    <span>✓ KYA Verified</span>
                    <span>·</span>
                    <span>Sub-200ms</span>
                    <span>·</span>
                    <span>No PCI burden</span>
                  </div>
                </div>
              </div>
              
              {/* Add processing animation styles */}
              <style>{`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.3; }
                }
                
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(-4px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideInLeft {
                  from { opacity: 0; transform: translateX(-8px); }
                  to { opacity: 1; transform: translateX(0); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      

      {/* Press */}
      <div className="press-section">
        <div className="trust-inner">
          <h2>Featured in</h2>
          <div className="sub">Press coverage and industry recognition</div>
          <div className="press-logos">
            {['The Wall Street Journal', 'TechCrunch', 'Decrypt', 'VentureBeat', 'Forbes', 'Business Insider', 'American Banker'].map((pub) => (
              <div key={pub} className="press-logo">
                <LogoImage name={pub} size={20} showText={false} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="final-cta">
        <h2>Ready to enable your agents?</h2>
        <p>Join the companies building the future of autonomous commerce with verified, compliant agent infrastructure.</p>
        <div className="final-buttons">
          <button className="btn btn-teal">Get Started →</button>
          <button className="btn btn-outline-white">Schedule Demo</button>
        </div>
      </div>
    </div>
  );
}
