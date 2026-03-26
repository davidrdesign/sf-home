import { TrustNetworkCanvas } from '../components/TrustNetworkCanvas';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LogoImage } from '../components/LogoImage';
import { useState, useEffect } from 'react';
import consumerReports from '../../assets/5afad90ea1a8cc9664bc50452e19cbb69d499e6d.png';
import experian from '../../assets/f8e7181dab1f7893efc29380fa121227d111500f.png';
import rbc from '../../imports/rbc-logo-shield.svg';

export function HomePage() {
  useScrollReveal();
  
  // API Demo animation state
  const [demoStep, setDemoStep] = useState(0);
  const [merchantIndex, setMerchantIndex] = useState(0);
  
  // Case study cycling state
  const [caseIndex, setCaseIndex] = useState(0);
  
  // Matrix table interaction state
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
  
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
      company: 'Experian',
      logos: ['Consumer Reports', 'Royal Bank of Canada', 'Experian'],
      activeIndex: 2,
      problem: "Merchant partners were losing conversions when AI-driven shopping sessions had to break out of the app to complete identity verification and payment.",
      solution: "Skyfire's Buy For Me protocol kept the entire purchase flow in-app, combining identity, payment, and merchant settlement into a single seamless handshake.",
      stats: [
        { value: '10×', label: 'improvement', sublabel: 'in agent-assisted conversion rate' },
        { value: '68%', label: 'reduction', sublabel: 'in checkout abandonment' },
        { value: '$12M', label: 'incremental GMV in first quarter', sublabel: '' }
      ],
      quote: "The in-app experience went from clunky to magical. Merchants are lining up to integrate.",
      attribution: "SVP of Partnerships, Experian"
    },
    {
      company: 'Royal Bank of Canada',
      logos: ['Consumer Reports', 'Royal Bank of Canada', 'Experian'],
      activeIndex: 1,
      problem: "Customers wanted AI assistants to handle routine banking tasks—bill pay, transfers, balance checks—but regulatory and security requirements made it nearly impossible to grant programmatic access.",
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
      company: 'Consumer Reports',
      logos: ['Consumer Reports', 'Royal Bank of Canada', 'Experian'],
      activeIndex: 0,
      problem: "Legacy fraud-detection pipelines couldn't distinguish legitimate AI agents from bots, blocking automated purchases and degrading the consumer experience.",
      solution: "Skyfire's KYA identity layer gave every agent a verifiable credential that existing WAF and CDN partners could interpret in real time—no rip-and-replace required.",
      stats: [
        { value: '93%', label: 'reduction', sublabel: 'in false-positive agent blocks' },
        { value: '2.4×', label: 'increase', sublabel: 'in automated transaction throughput' },
        { value: 'Sub-200 ms', label: 'identity', sublabel: 'verification at edge' }
      ],
      quote: "Skyfire let us welcome AI agents instead of fighting them. Our members get faster service and we get cleaner data.",
      attribution: "VP of Digital Products, Consumer Reports"
    }
  ];
  
  useEffect(() => {
    // Animation sequence timing
    const timings = [
      { step: 0, delay: 0 },      // Initial state
      { step: 1, delay: 1200 },   // Step 1 completes - Service Request
      { step: 2, delay: 2400 },   // Step 2 completes - KYA Identity
      { step: 3, delay: 3600 },   // Step 3 completes - Checkout Process (LIVE TRANSACTION starts)
      { step: 4, delay: 4800 },   // Step 4 completes - Payment Settlement
      { step: 5, delay: 6000 },   // Zoom into LIVE TRANSACTION and pause
      { step: 0, delay: 9000 }    // Reset and loop
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
        minHeight: '100vh',
        background: 'var(--hp-ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px 48px 80px'
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

        {/* Content Container - Side by Side */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Side - Content */}
          <div style={{
            animation: 'fadeInUp 0.8s ease-out 0.1s backwards'
          }}>
            {/* Main headline */}
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 500,
              letterSpacing: '-0.045em',
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: '24px'
            }}>
              Identity.
              <br />
              Access.
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
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px'
            }}>
              Skyfire's trust network lets AI agents securely access the web, complete checkout, and transact with KYA-verified identity and payment infrastructure, purpose-built for the agentic era.
            </p>

            {/* CTA buttons */}
            <div style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap'
            }}>
              <button className="btn" style={{
                background: 'linear-gradient(135deg, #59AD9E 0%, #3E9686 100%)',
                color: '#fff',
                padding: '14px 32px',
                fontSize: '15px',
                border: 'none',
                boxShadow: '0 8px 24px rgba(89,173,158,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(89,173,158,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(89,173,158,0.3)';
              }}>
                Start Building →
              </button>
              <button className="btn" style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                padding: '14px 32px',
                fontSize: '15px',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                transition: 'background 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Technical Network Diagram */}
          <div style={{
            position: 'relative',
            height: '600px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '20px',
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
          }}>
            {/* Diagram Header */}
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '4px'
                }}>
                  System Architecture
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#fff'
                }}>
                  Trust Network Topology
                </div>
              </div>
              <div style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#59AD9E',
                  boxShadow: '0 0 8px #59AD9E'
                }}>
                  <div style={{
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#fff',
                  fontWeight: 500
                }}>
                  LIVE
                </div>
              </div>
            </div>

            {/* Technical Network Diagram SVG */}
            <svg style={{
              width: '100%',
              height: 'calc(100% - 60px)'
            }} viewBox="0 0 600 500" preserveAspectRatio="xMidYMid meet">
              <defs>
                {/* Gradients */}
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#59AD9E" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#59AD9E" stopOpacity="0.3" />
                </linearGradient>
                
                <radialGradient id="orange-glow">
                  <stop offset="0%" stopColor="#EE7843" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#EE7843" stopOpacity="0" />
                </radialGradient>
                
                <radialGradient id="teal-glow">
                  <stop offset="0%" stopColor="#59AD9E" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#59AD9E" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Subtle grid background */}
              <rect width="600" height="500" fill="rgba(255,255,255,0.01)" />
              <g opacity="0.06">
                {Array.from({ length: 11 }).map((_, i) => (
                  <line key={`h-${i}`} x1="50" y1={50 + i * 40} x2="550" y2={50 + i * 40} 
                        stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 13 }).map((_, i) => (
                  <line key={`v-${i}`} x1={50 + i * 40} y1="50" x2={50 + i * 40} y2="450" 
                        stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                ))}
              </g>
              
              {/* Connection Lines */}
              <g>
                {/* Identity to Core */}
                <line x1="150" y1="150" x2="260" y2="240" 
                      stroke="#59AD9E" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="150" y1="150" x2="260" y2="240" 
                      stroke="#59AD9E" strokeWidth="1.5" strokeDasharray="5,5" strokeOpacity="0.8">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
                </line>
                
                {/* Payment to Core */}
                <line x1="450" y1="150" x2="340" y2="240" 
                      stroke="#59AD9E" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="450" y1="150" x2="340" y2="240" 
                      stroke="#59AD9E" strokeWidth="1.5" strokeDasharray="5,5" strokeOpacity="0.8">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
                </line>
                
                {/* Core to Commerce */}
                <line x1="300" y1="290" x2="300" y2="350" 
                      stroke="#59AD9E" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="300" y1="290" x2="300" y2="350" 
                      stroke="#59AD9E" strokeWidth="1.5" strokeDasharray="5,5" strokeOpacity="0.8">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
                </line>
              </g>
              
              {/* Nodes */}
              {/* Center - Skyfire Core */}
              <g>
                <circle cx="300" cy="265" r="48" fill="url(#orange-glow)" />
                <circle cx="300" cy="265" r="40" fill="rgba(238,120,67,0.15)" 
                        stroke="#EE7843" strokeWidth="2.5" />
                <circle cx="300" cy="265" r="32" fill="none" 
                        stroke="#EE7843" strokeWidth="1" strokeOpacity="0.4" />
                <text x="300" y="268" textAnchor="middle" 
                      fill="#EE7843" fontSize="14" fontWeight="700">SKYFIRE</text>
                <text x="300" y="281" textAnchor="middle" 
                      fill="#EE7843" fontSize="9" fontWeight="500" opacity="0.8">Trust Core</text>
              </g>
              
              {/* Left - Identity */}
              <g>
                <circle cx="150" cy="150" r="38" fill="url(#teal-glow)" />
                <circle cx="150" cy="150" r="32" fill="rgba(89,173,158,0.12)" 
                        stroke="#59AD9E" strokeWidth="2" />
                <circle cx="150" cy="150" r="25" fill="none" 
                        stroke="#59AD9E" strokeWidth="1" strokeOpacity="0.3" />
                <text x="150" y="153" textAnchor="middle" 
                      fill="#7FD4C1" fontSize="13" fontWeight="700">KYA</text>
                <text x="150" y="164" textAnchor="middle" 
                      fill="#59AD9E" fontSize="8" fontWeight="500" opacity="0.8">Identity</text>
              </g>
              
              {/* Right - Payment */}
              <g>
                <circle cx="450" cy="150" r="38" fill="url(#teal-glow)" />
                <circle cx="450" cy="150" r="32" fill="rgba(89,173,158,0.12)" 
                        stroke="#59AD9E" strokeWidth="2" />
                <circle cx="450" cy="150" r="25" fill="none" 
                        stroke="#59AD9E" strokeWidth="1" strokeOpacity="0.3" />
                <text x="450" y="153" textAnchor="middle" 
                      fill="#7FD4C1" fontSize="13" fontWeight="700">WALLET</text>
                <text x="450" y="164" textAnchor="middle" 
                      fill="#59AD9E" fontSize="8" fontWeight="500" opacity="0.8">Payment</text>
              </g>
              
              {/* Bottom - Commerce */}
              <g>
                <circle cx="300" cy="390" r="38" fill="url(#teal-glow)" />
                <circle cx="300" cy="390" r="32" fill="rgba(89,173,158,0.12)" 
                        stroke="#59AD9E" strokeWidth="2" />
                <circle cx="300" cy="390" r="25" fill="none" 
                        stroke="#59AD9E" strokeWidth="1" strokeOpacity="0.3" />
                <text x="300" y="393" textAnchor="middle" 
                      fill="#7FD4C1" fontSize="13" fontWeight="700">BUY</text>
                <text x="300" y="404" textAnchor="middle" 
                      fill="#59AD9E" fontSize="8" fontWeight="500" opacity="0.8">Commerce</text>
              </g>
              
              {/* Sub-nodes - Simple and clean */}
              <g opacity="0.9">
                {/* Identity sub-nodes */}
                <rect x="48" y="88" width="48" height="24" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <text x="72" y="100" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="9" fontWeight="600">ID</text>
                <line x1="96" y1="106" x2="125" y2="135" stroke="rgba(89,173,158,0.3)" strokeWidth="1.5" />
                
                <rect x="42" y="188" width="60" height="24" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <text x="72" y="200" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="9" fontWeight="600">AUTH</text>
                <line x1="96" y1="194" x2="125" y2="165" stroke="rgba(89,173,158,0.3)" strokeWidth="1.5" />
                
                {/* Payment sub-nodes */}
                <rect x="492" y="88" width="48" height="24" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <text x="516" y="100" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="9" fontWeight="600">PAY</text>
                <line x1="504" y1="106" x2="475" y2="135" stroke="rgba(89,173,158,0.3)" strokeWidth="1.5" />
                
                <rect x="482" y="188" width="68" height="24" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <text x="516" y="200" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="9" fontWeight="600">SETTLE</text>
                <line x1="504" y1="194" x2="475" y2="165" stroke="rgba(89,173,158,0.3)" strokeWidth="1.5" />
                
                {/* Commerce sub-nodes */}
                <rect x="200" y="418" width="56" height="24" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <text x="228" y="430" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="9" fontWeight="600">CART</text>
                <line x1="246" y1="424" x2="275" y2="405" stroke="rgba(89,173,158,0.3)" strokeWidth="1.5" />
                
                <rect x="338" y="418" width="64" height="24" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <text x="370" y="430" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="9" fontWeight="600">ORDER</text>
                <line x1="354" y1="424" x2="325" y2="405" stroke="rgba(89,173,158,0.3)" strokeWidth="1.5" />
              </g>
              
              {/* External Systems */}
              <g opacity="0.8">
                <rect x="30" y="30" width="90" height="40" rx="4" 
                      fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" 
                      strokeWidth="1" strokeDasharray="3,2" />
                <text x="75" y="46" textAnchor="middle" 
                      fill="#fff" fontSize="9" fontWeight="600">IDENTITY</text>
                <text x="75" y="58" textAnchor="middle" 
                      fill="#fff" fontSize="7">PROVIDERS</text>
                <line x1="75" y1="70" x2="120" y2="120" 
                      stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2" />
                
                <rect x="480" y="30" width="90" height="40" rx="4" 
                      fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" 
                      strokeWidth="1" strokeDasharray="3,2" />
                <text x="525" y="46" textAnchor="middle" 
                      fill="#fff" fontSize="9" fontWeight="600">PAYMENT</text>
                <text x="525" y="58" textAnchor="middle" 
                      fill="#fff" fontSize="7">NETWORKS</text>
                <line x1="525" y1="70" x2="480" y2="120" 
                      stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2" />
              </g>
              
              {/* Animated data flow dots */}
              <g>
                <circle r="3.5" fill="#59AD9E">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 150 150 L 260 240" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
                </circle>
                
                <circle r="3.5" fill="#59AD9E">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 450 150 L 340 240" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
                </circle>
                
                <circle r="3.5" fill="#59AD9E">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M 300 290 L 300 350" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin="2s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Corner markers */}
              <g stroke="#EE7843" fill="none" strokeWidth="1.5" opacity="0.5">
                <path d="M 20 20 L 40 20 M 20 20 L 20 40" />
                <path d="M 580 20 L 560 20 M 580 20 L 580 40" />
                <path d="M 20 480 L 40 480 M 20 480 L 20 460" />
                <path d="M 580 480 L 560 480 M 580 480 L 580 460" />
              </g>
            </svg>
          </div>
        </div>

        {/* Scroll indicator */}
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
          <div className="intro-card">
            <h3>Identity & Trust</h3>
            <p>A portable, verifiable identity signal that your existing enforcement partners and fraud detection systems interpret and act on. KYA is designed to extend, not replace, the tools already sitting in front of your web properties.</p>
            <div className="partner-row">
              {['Akamai', 'Datadome', 'Ory', 'Okta', 'Forter', 'Experian'].map((p) => (
                <span key={p} className="p-tag">
                  <LogoImage name={p} size={14} showText={true} />
                </span>
              ))}
            </div>
            <a href="#" className="learn-more">Learn more about the Agent Know Your Agent Protocol →</a>
          </div>

          <div className="intro-card">
            <h3>Checkout & Payments</h3>
            <p>Commerce only happens when an agent can complete checkout with controlled payment access and a clear audit trail. Skyfire partners with major merchants, payments, and checkout infrastructure so approved agents can pay reliably, safely, and at scale.</p>
            <div className="partner-row">
              {['Visa', 'Henry Labs', 'Cart-ai', 'Consumer Reports', 'Getty Images'].map((p) => (
                <span key={p} className="p-tag">
                  <LogoImage name={p} size={14} showText={true} />
                </span>
              ))}
            </div>
            <a href="#" className="learn-more">Learn more about the Agent Checkout and Payments Platform →</a>
          </div>
        </div>
      </div>

      {/* Coverage */}
      <div className="coverage-section">
        <h2>
          Covering more than <em style={{ color: '#EE7843', fontStyle: 'normal' }}>80%</em> of the Web.
        </h2>
        <div className="big-stat" style={{ color: '#59AD9E' }}>250,001,264 sites (and counting).</div>
        <div className="stat-sub">Powering agentic commerce security through leading identity partners</div>
        <div className="coverage-logos">
          {['Akamai', 'Forter', 'Experian', 'Datadome', 'Okta', 'Ory'].map((name) => (
            <div key={name} className="logo-chip">
              <LogoImage name={name} size={16} showText={true} />
            </div>
          ))}
        </div>
      </div>

      {/* Product Matrix */}
      <div className="matrix-section">
        <div className="matrix-header">
          <div style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#EE7843',
            marginBottom: '16px'
          }}>
            SKYFIRE SOLUTIONS
          </div>
          <h2>Turning Agents into Trusted Economic Actors</h2>
          <p>One platform for every stakeholder in the agentic commerce stack, from shopping apps and CDNs to financial institutions.</p>
        </div>
        
        <div className="matrix-table">
          <div className="matrix-head">
            <div className="col-head"></div>
            <div className="col-head" onClick={() => setSelectedColumn(selectedColumn === 'cdn' ? null : 'cdn')} style={{ cursor: 'pointer', transition: 'all 0.3s ease', background: selectedColumn === 'cdn' ? 'rgba(89,173,158,0.12)' : '' }}>
              Content Delivery Networks<br />
              <span className="subtitle">Akamai, Cloudflare, Fastly</span>
            </div>
            <div className="col-head" onClick={() => setSelectedColumn(selectedColumn === 'finance' ? null : 'finance')} style={{ cursor: 'pointer', transition: 'all 0.3s ease', background: selectedColumn === 'finance' ? 'rgba(89,173,158,0.12)' : '' }}>
              Finance<br />
              <span className="subtitle">Citi, Bank of America, RBC</span>
            </div>
            <div className="col-head" onClick={() => setSelectedColumn(selectedColumn === 'merchants' ? null : 'merchants')} style={{ cursor: 'pointer', transition: 'all 0.3s ease', background: selectedColumn === 'merchants' ? 'rgba(89,173,158,0.12)' : '' }}>
              Merchants<br />
              <span className="subtitle">Consumer Reports, Getty Images</span>
            </div>
          </div>

          <div className="matrix-row" onClick={() => setSelectedRow(selectedRow === 'buyForMe' ? null : 'buyForMe')} style={{ cursor: 'pointer' }}>
            <div className="row-label">
              <span className="rl-name">Buy for Me</span>
              <span className="rl-sub">In-app checkout</span>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'buyForMe' || selectedColumn === 'cdn') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'buyForMe' || selectedColumn === 'cdn') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'buyForMe' || selectedColumn === 'cdn') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Agent Traffic Routing</div>
              <div className="cell-body">Route verified agent checkout requests without triggering WAF or bot protection rules</div>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'buyForMe' || selectedColumn === 'finance') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'buyForMe' || selectedColumn === 'finance') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'buyForMe' || selectedColumn === 'finance') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">1-Click In-App Checkout</div>
              <div className="cell-body">Stay top of wallet as agents complete purchases on behalf of banking app users</div>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'buyForMe' || selectedColumn === 'merchants') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'buyForMe' || selectedColumn === 'merchants') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'buyForMe' || selectedColumn === 'merchants') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Higher Conversion</div>
              <div className="cell-body">Turn referral links into completed purchases. Users never leave the platform</div>
            </div>
          </div>

          <div className="matrix-row" onClick={() => setSelectedRow(selectedRow === 'kya' ? null : 'kya')} style={{ cursor: 'pointer' }}>
            <div className="row-label">
              <span className="rl-name">Know Your Agent</span>
              <span className="rl-sub">Identity verification</span>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'kya' || selectedColumn === 'cdn') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'kya' || selectedColumn === 'cdn') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'kya' || selectedColumn === 'cdn') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Verified Agent Passthrough</div>
              <div className="cell-body">Accept KYA tokens to distinguish good agents from malicious bots with zero code required</div>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'kya' || selectedColumn === 'finance') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'kya' || selectedColumn === 'finance') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'kya' || selectedColumn === 'finance') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Extend Customer Trust</div>
              <div className="cell-body">KYC-verified identity extends to authorized agents acting on behalf of account holders</div>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'kya' || selectedColumn === 'merchants') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'kya' || selectedColumn === 'merchants') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'kya' || selectedColumn === 'merchants') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Know Who's Buying</div>
              <div className="cell-body">Every agent transaction is traceable to a verified platform, agent, and end user</div>
            </div>
          </div>

          <div className="matrix-row" onClick={() => setSelectedRow(selectedRow === 'wallet' ? null : 'wallet')} style={{ cursor: 'pointer' }}>
            <div className="row-label">
              <span className="rl-name">Agentic Wallet</span>
              <span className="rl-sub">Embedded payments</span>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'wallet' || selectedColumn === 'cdn') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'wallet' || selectedColumn === 'cdn') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'wallet' || selectedColumn === 'cdn') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Protocol-Based Commerce</div>
              <div className="cell-body">Enable headless, API-native checkout flows for verified agents at CDN edge</div>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'wallet' || selectedColumn === 'finance') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'wallet' || selectedColumn === 'finance') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'wallet' || selectedColumn === 'finance') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Card Mandate Management</div>
              <div className="cell-body">Issue per-transaction mandates. No PCI compliance burden on the bank's platform</div>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'wallet' || selectedColumn === 'merchants') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'wallet' || selectedColumn === 'merchants') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'wallet' || selectedColumn === 'merchants') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Accept Agentic Payments</div>
              <div className="cell-body">Programmatic checkout via API. Agents pay with stablecoins or tokenized cards</div>
            </div>
          </div>

          <div className="matrix-row" onClick={() => setSelectedRow(selectedRow === 'trustScore' ? null : 'trustScore')} style={{ cursor: 'pointer' }}>
            <div className="row-label">
              <span className="rl-name">Dynamic Trust Score</span>
              <span className="rl-sub">Real-time risk</span>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'trustScore' || selectedColumn === 'cdn') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'trustScore' || selectedColumn === 'cdn') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'trustScore' || selectedColumn === 'cdn') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Edge-Level Risk Scoring</div>
              <div className="cell-body">Block, throttle, or allow agents based on real-time trust signals at the CDN layer</div>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'trustScore' || selectedColumn === 'finance') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'trustScore' || selectedColumn === 'finance') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'trustScore' || selectedColumn === 'finance') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Behavioral Risk Model</div>
              <div className="cell-body">Score across agent history, payment patterns, and merchant feedback in milliseconds</div>
            </div>
            <div className="matrix-cell" style={{
              background: (selectedRow === 'trustScore' || selectedColumn === 'merchants') ? 'rgba(89,173,158,0.08)' : '',
              borderColor: (selectedRow === 'trustScore' || selectedColumn === 'merchants') ? 'rgba(89,173,158,0.25)' : '',
              opacity: (selectedRow || selectedColumn) && !(selectedRow === 'trustScore' || selectedColumn === 'merchants') ? 0.25 : 1,
              transition: 'all 0.3s ease'
            }}>
              <div className="cell-title">Dynamic Fraud Thresholds</div>
              <div className="cell-body">Set custom thresholds per product type: site access, login, checkout, API usage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo */}
      <div className="demo-section">
        <div className="demo-inner">
          <div className="demo-left">
            <h2>Watch an agent complete a purchase</h2>
            <p>From verification to checkout in under 200ms. See how Skyfire's infrastructure enables seamless autonomous commerce.</p>
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
              minHeight: '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {/* Step 1 - Agent Authentication */}
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
                  <div className="step-title">Service Request</div>
                  <div className="step-body">
                    AI agent initiates request to merchant API
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
                      → POST /api/v1/checkout • agent_id: a7f8x9...
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 1 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 1 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 1 ? 'DONE' : 'PENDING'}</div>
              </div>
              
              {/* Step 2 - Permission Check */}
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
                  <div className="step-title">KYA Identity Verification</div>
                  <div className="step-body">
                    Skyfire verifies platform, agent ID, and end user
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
                      ✓ Platform verified • ✓ Agent ID • ✓ User KYC
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 2 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 2 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 2 ? 'VERIFIED' : 'PENDING'}</div>
              </div>
              
              {/* Step 3 - Merchant Settlement */}
              <div className="demo-step" style={{
                opacity: demoStep >= 3 ? 1 : 0.5,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                zIndex: demoStep === 3 ? 10 : 1,
                margin: '12px 0'
              }}>
                <div className={`step-num ${demoStep >= 4 ? 'done' : demoStep === 3 ? 'active' : ''}`} style={{
                  transition: 'all 0.4s ease'
                }}>3</div>
                <div className="step-content">
                  <div className="step-title">Checkout Processing</div>
                  <div className="step-body">
                    Secure agent checkout initiated via Agentic Wallet
                    {demoStep === 3 && (
                      <span style={{ 
                        marginLeft: '6px',
                        color: '#EE7843',
                        animation: 'blink 1s infinite'
                      }}>...</span>
                    )}
                  </div>
                  {demoStep === 3 && (
                    <div style={{
                      marginTop: '6px',
                      fontSize: '11px',
                      color: '#EE7843',
                      fontFamily: 'monospace',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      → Wallet auth • Card tokenization • Merchant API
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 4 ? 'badge-done' : demoStep === 3 ? 'badge-active' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 3 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 4 ? 'DONE' : demoStep === 3 ? 'IN PROGRESS' : 'PENDING'}</div>
              </div>
              
              {/* Step 4 - Transaction Complete */}
              <div className="demo-step" style={{
                opacity: demoStep >= 4 ? 1 : 0.5,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                zIndex: demoStep === 4 ? 10 : 1,
                margin: '12px 0'
              }}>
                <div className={`step-num ${demoStep >= 4 ? 'done' : ''}`} style={{
                  transition: 'all 0.4s ease'
                }}>4</div>
                <div className="step-content">
                  <div className="step-title">Payment Settlement</div>
                  <div className="step-body">
                    {demoStep >= 4 ? 'Transaction confirmed, audit trail logged' : 'Awaiting settlement confirmation'}
                    {demoStep === 4 && (
                      <span style={{ 
                        marginLeft: '6px',
                        color: '#59AD9E',
                        animation: 'blink 1s infinite'
                      }}>...</span>
                    )}
                  </div>
                  {demoStep === 4 && (
                    <div style={{
                      marginTop: '6px',
                      fontSize: '11px',
                      color: '#59AD9E',
                      fontFamily: 'monospace',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      ✓ tx_9k2m7f... • 184ms • Logged to ledger
                    </div>
                  )}
                </div>
                <div className={`step-badge ${demoStep >= 4 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease',
                  animation: demoStep === 4 ? 'pulse 0.8s ease infinite' : 'none'
                }}>{demoStep >= 4 ? 'DONE' : 'PENDING'}</div>
              </div>
              
              {/* Live Transaction Box */}
              <div className="demo-live" style={{
                opacity: demoStep >= 3 ? 1 : 0.3,
                transition: 'all 0.5s ease',
                transform: demoStep === 5 ? 'scale(1.05)' : 'scale(1)',
                boxShadow: demoStep === 5 ? '0 8px 32px rgba(238,120,67,0.4)' : demoStep >= 3 ? '0 4px 24px rgba(238,120,67,0.2)' : 'none',
                border: demoStep === 5 ? '2px solid rgba(238,120,67,0.5)' : demoStep >= 3 ? '1px solid rgba(238,120,67,0.3)' : '1px solid rgba(255,255,255,0.1)'
              }}>
                <div className="demo-live-label" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  LIVE TRANSACTION
                  {demoStep >= 3 && (
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
                    animation: demoStep >= 3 ? 'slideInLeft 0.4s ease' : 'none'
                  }}>
                    {merchants[merchantIndex].name} → {merchants[merchantIndex].action}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#59AD9E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    animation: demoStep >= 3 ? 'fadeIn 0.6s ease 0.2s backwards' : 'none'
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

      {/* Case Studies */}
      <div className="outcomes-section">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '100px 48px'
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
              <div key={caseIndex} style={{
                animation: 'fadeInCase 0.6s ease'
              }}>
                {/* Logo Cards */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px',
                  marginBottom: '48px'
                }}>
                  {currentCase.logos.map((logo, idx) => {
                    // Find which case study this logo corresponds to
                    const correspondingCaseIndex = caseStudies.findIndex(cs => cs.activeIndex === idx);
                    
                    return (
                      <div 
                        key={logo} 
                        onClick={() => setCaseIndex(correspondingCaseIndex)}
                        style={{
                          padding: '32px 48px',
                          background: idx === currentCase.activeIndex ? '#0E0E0E' : '#fff',
                          color: idx === currentCase.activeIndex ? '#fff' : '#0E0E0E',
                          border: '1px solid rgba(14,14,14,0.1)',
                          borderRadius: '4px',
                          fontSize: '14px',
                          fontWeight: 600,
                          textAlign: 'center',
                          minWidth: '200px',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          alignItems: 'center',
                          cursor: 'pointer',
                          transform: idx === currentCase.activeIndex ? 'scale(1)' : 'scale(0.98)',
                          boxShadow: idx === currentCase.activeIndex ? '0 8px 24px rgba(14,14,14,0.15)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (idx !== currentCase.activeIndex) {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(14,14,14,0.1)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (idx !== currentCase.activeIndex) {
                            e.currentTarget.style.transform = 'scale(0.98)';
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
                  gridTemplateColumns: '1fr 2fr',
                  gap: '48px',
                  marginBottom: '40px'
                }}>
                  {/* Left - Problem & Solution */}
                  <div style={{
                    borderLeft: '3px solid #EE7843',
                    paddingLeft: '24px'
                  }}>
                    <div style={{
                      marginBottom: '32px'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#8E8984',
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
                        color: '#8E8984',
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
                    gap: '24px'
                  }}>
                    {currentCase.stats.map((stat, idx) => (
                      <div key={idx} style={{
                        flex: 1,
                        padding: '32px 24px',
                        background: '#fff',
                        border: '1px solid rgba(14,14,14,0.1)',
                        borderRadius: '4px',
                        textAlign: 'center'
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
                  background: 'rgba(89,173,158,0.05)',
                  padding: '40px 48px',
                  borderLeft: '4px solid #59AD9E',
                  borderRadius: '4px'
                }}>
                  <div style={{
                    fontSize: '20px',
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
                    — {currentCase.attribution}
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
                onClick={() => setCaseIndex(idx)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: 'none',
                  background: idx === caseIndex ? '#59AD9E' : 'rgba(142,137,132,0.3)',
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

      {/* Trust / Partners */}
      <div className="trust-section">
        <div className="trust-inner">
          <h2>Trusted infrastructure partners</h2>
          <div className="sub">Enterprise-grade security and compliance built in</div>
          <div className="partners-grid">
            {['Experian', 'Jumio', 'Onfido', 'Sumsub', 'Visa', 'Mastercard', 'RBC', 'Circle', 'Akamai', 'Cloudflare', 'Stripe', 'Plaid', 'Forter', 'Sift', 'AWS', 'Google Cloud'].map((partner) => (
              <div key={partner} className="partner-pill">
                <LogoImage name={partner} size={18} showText={true} />
              </div>
            ))}
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
                <LogoImage name={pub} size={20} showText={true} />
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
