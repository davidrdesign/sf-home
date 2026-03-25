import { TrustNetworkCanvas } from '../components/TrustNetworkCanvas';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, useEffect } from 'react';

export function HomePage() {
  useScrollReveal();
  
  // API Demo animation state
  const [demoStep, setDemoStep] = useState(0);
  
  useEffect(() => {
    // Animation sequence timing
    const timings = [
      { step: 0, delay: 0 },      // Initial state
      { step: 1, delay: 800 },    // Step 1 completes
      { step: 2, delay: 1600 },   // Step 2 completes
      { step: 3, delay: 2400 },   // Step 3 becomes active
      { step: 4, delay: 3800 },   // Step 4 completes
      { step: 0, delay: 5800 }    // Reset and loop
    ];
    
    const timeouts: NodeJS.Timeout[] = [];
    
    timings.forEach(({ step, delay }) => {
      const timeout = setTimeout(() => {
        setDemoStep(step);
      }, delay);
      timeouts.push(timeout);
    });
    
    // Loop the animation
    const loopInterval = setInterval(() => {
      setDemoStep(0);
      timings.forEach(({ step, delay }) => {
        const timeout = setTimeout(() => {
          setDemoStep(step);
        }, delay);
        timeouts.push(timeout);
      });
    }, 6000);
    
    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(loopInterval);
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
              The Trust Network
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #EE7843 0%, #59AD9E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Built for Agents
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
              Identity verification, secure access, and autonomous payments in one unified infrastructure. Purpose-built for AI agents to transact with confidence.
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
            <h3>Know Your Agent (KYA)</h3>
            <p>Verified identity for every agent, creating trust at the protocol level with cryptographic attestation and multi-party compliance.</p>
            <div className="partner-row">
              {['Experian', 'Jumio', 'Onfido', 'Sumsub'].map((p) => (
                <span key={p} className="p-tag">{p}</span>
              ))}
            </div>
            <a href="#" className="learn-more">Learn more →</a>
          </div>

          <div className="intro-card">
            <h3>Agent Payment Infrastructure</h3>
            <p>Purpose-built wallet and settlement rails that enable agents to transact autonomously while maintaining full auditability and regulatory compliance.</p>
            <div className="partner-row">
              {['Visa', 'Mastercard', 'RBC', 'Circle'].map((p) => (
                <span key={p} className="p-tag">{p}</span>
              ))}
            </div>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
        </div>
      </div>

      {/* Coverage */}
      <div className="coverage-section">
        <h2>
          <em>72%</em> of global commerce,<br />accessible to agents
        </h2>
        <div className="big-stat">$45 Trillion</div>
        <div className="stat-sub">Annual transaction volume enabled</div>
        <div className="coverage-logos">
          {['Amazon', 'Shopify', 'Stripe', 'PayPal', 'Square', 'Walmart', 'Target', 'Alibaba'].map((name) => (
            <div key={name} className="logo-chip">{name}</div>
          ))}
        </div>
      </div>

      {/* Product Matrix */}
      <div className="matrix-section">
        <div className="matrix-header">
          <h2>Three layers, infinite possibilities</h2>
          <p>From identity verification to autonomous commerce, Skyfire provides the complete trust infrastructure for the agentic economy.</p>
        </div>
        
        <div className="matrix-table">
          <div className="matrix-head">
            <div className="col-head"></div>
            <div className="col-head">
              KYA<br />
              <span className="subtitle">Know Your Agent</span>
            </div>
            <div className="col-head">
              Wallet<br />
              <span className="subtitle">Agent Payments</span>
            </div>
            <div className="col-head">
              Buy For Me<br />
              <span className="subtitle">Commerce Layer</span>
            </div>
          </div>

          <div className="matrix-row">
            <div className="row-label">
              <span className="rl-name">Identity</span>
              <span className="rl-sub">Verification</span>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Cryptographic Attestation</div>
              <div className="cell-body">Multi-party identity verification with on-chain proof</div>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Linked Accounts</div>
              <div className="cell-body">Verified payment methods tied to KYA identity</div>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Merchant Trust</div>
              <div className="cell-body">Pre-verified for instant checkout across platforms</div>
            </div>
          </div>

          <div className="matrix-row">
            <div className="row-label">
              <span className="rl-name">Access</span>
              <span className="rl-sub">Authorization</span>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Permission Scopes</div>
              <div className="cell-body">Granular control over agent capabilities</div>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Spending Limits</div>
              <div className="cell-body">Dynamic budgets and approval workflows</div>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Site Access</div>
              <div className="cell-body">Authenticated browsing across merchant network</div>
            </div>
          </div>

          <div className="matrix-row">
            <div className="row-label">
              <span className="rl-name">Settlement</span>
              <span className="rl-sub">Transactions</span>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Audit Trail</div>
              <div className="cell-body">Immutable record of all agent actions</div>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Instant Settlement</div>
              <div className="cell-body">Real-time clearing and reconciliation</div>
            </div>
            <div className="matrix-cell">
              <div className="cell-title">Automated Checkout</div>
              <div className="cell-body">One-click purchasing across merchants</div>
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
            <div className="demo-body">
              {/* Step 1 - Agent Authentication */}
              <div className="demo-step" style={{
                opacity: demoStep >= 1 ? 1 : 0.5,
                transition: 'opacity 0.3s ease'
              }}>
                <div className={`step-num ${demoStep >= 1 ? 'done' : ''}`} style={{
                  transition: 'all 0.3s ease'
                }}>1</div>
                <div className="step-content">
                  <div className="step-title">Agent Authentication</div>
                  <div className="step-body">KYA identity verified • sig_8x7k2m</div>
                </div>
                <div className={`step-badge ${demoStep >= 1 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease'
                }}>{demoStep >= 1 ? 'Done' : 'Pending'}</div>
              </div>
              
              {/* Step 2 - Permission Check */}
              <div className="demo-step" style={{
                opacity: demoStep >= 2 ? 1 : 0.5,
                transition: 'opacity 0.3s ease'
              }}>
                <div className={`step-num ${demoStep >= 2 ? 'done' : ''}`} style={{
                  transition: 'all 0.3s ease'
                }}>2</div>
                <div className="step-content">
                  <div className="step-title">Permission Check</div>
                  <div className="step-body">Spending limit OK • $250/$500 daily</div>
                </div>
                <div className={`step-badge ${demoStep >= 2 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease'
                }}>{demoStep >= 2 ? 'Done' : 'Pending'}</div>
              </div>
              
              {/* Step 3 - Merchant Settlement */}
              <div className="demo-step" style={{
                opacity: demoStep >= 3 ? 1 : 0.5,
                transition: 'opacity 0.3s ease'
              }}>
                <div className={`step-num ${demoStep >= 4 ? 'done' : demoStep === 3 ? 'active' : ''}`} style={{
                  transition: 'all 0.3s ease'
                }}>3</div>
                <div className="step-content">
                  <div className="step-title">Merchant Settlement</div>
                  <div className="step-body">Processing payment • walmart.com</div>
                </div>
                <div className={`step-badge ${demoStep >= 4 ? 'badge-done' : demoStep === 3 ? 'badge-active' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease'
                }}>{demoStep >= 4 ? 'Done' : demoStep === 3 ? 'Active' : 'Pending'}</div>
              </div>
              
              {/* Step 4 - Transaction Complete */}
              <div className="demo-step" style={{
                opacity: demoStep >= 4 ? 1 : 0.5,
                transition: 'opacity 0.3s ease'
              }}>
                <div className={`step-num ${demoStep >= 4 ? 'done' : ''}`} style={{
                  transition: 'all 0.3s ease'
                }}>4</div>
                <div className="step-content">
                  <div className="step-title">Transaction Complete</div>
                  <div className="step-body">{demoStep >= 4 ? 'Settlement confirmed • tx_9k2m...' : 'Awaiting settlement confirmation'}</div>
                </div>
                <div className={`step-badge ${demoStep >= 4 ? 'badge-done' : 'badge-pending'}`} style={{
                  transition: 'all 0.3s ease'
                }}>{demoStep >= 4 ? 'Done' : 'Pending'}</div>
              </div>
              
              {/* Response Box */}
              <div className="demo-live" style={{
                opacity: demoStep >= 4 ? 1 : 0.3,
                transition: 'opacity 0.5s ease'
              }}>
                <div className="demo-live-label">Response</div>
                <div className="demo-live-body">
                  {'{'} "status": "<span style={{ color: demoStep >= 4 ? '#59AD9E' : '#8E8984' }}>{demoStep >= 4 ? 'success' : 'processing'}</span>", "tx_id": "<span style={{ color: demoStep >= 4 ? '#59AD9E' : '#8E8984' }}>tx_9k2m...</span>" {'}'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="outcomes-section">
        <div className="outcomes-inner">
          <div className="outcomes-header">
            <h2>Proven outcomes across industries</h2>
          </div>
          <div className="cases-wrap">
            <div className="case-card">
              <div className="case-company">Retail AI</div>
              <h3>Autonomous inventory management at scale</h3>
              <div className="case-problem">Challenge: Manual procurement bottlenecks limiting growth</div>
              <div className="case-solution">Solution: Deployed Skyfire-enabled purchasing agents across 500+ retail locations, automating restocking decisions and vendor negotiations with verified identity and payment rails.</div>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="stat-num">78%</div>
                  <div className="stat-label">Cost reduction</div>
                </div>
                <div className="case-stat">
                  <div className="stat-num">$12M</div>
                  <div className="stat-label">Annual savings</div>
                </div>
              </div>
              <div className="case-chips">
                <span className="chip">KYA Verified</span>
                <span className="chip">Auto-settlement</span>
              </div>
            </div>

            <div className="case-card">
              <div className="case-company">Enterprise SaaS</div>
              <h3>Agent-to-agent marketplace for cloud resources</h3>
              <div className="case-problem">Challenge: Complex multi-vendor procurement requiring human approval</div>
              <div className="case-solution">Solution: Built an autonomous marketplace where infrastructure agents can discover, negotiate, and purchase cloud resources from multiple vendors using Skyfire's trust layer for verification and settlement.</div>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="stat-num">92%</div>
                  <div className="stat-label">Faster procurement</div>
                </div>
                <div className="case-stat">
                  <div className="stat-num">45K</div>
                  <div className="stat-label">Monthly transactions</div>
                </div>
              </div>
              <div className="case-chips">
                <span className="chip">Real-time settlement</span>
                <span className="chip">Multi-vendor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust / Partners */}
      <div className="trust-section">
        <div className="trust-inner">
          <h2>Trusted infrastructure partners</h2>
          <div className="sub">Enterprise-grade security and compliance built in</div>
          <div className="partners-grid">
            {['Experian', 'Jumio', 'Onfido', 'Sumsub', 'Visa', 'Mastercard', 'RBC', 'Circle', 'Akamai', 'Cloudflare', 'Stripe', 'Plaid', 'Forter', 'Sift', 'AWS', 'Google Cloud'].map((partner) => (
              <div key={partner} className="partner-pill">{partner}</div>
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
              <div key={pub} className="press-logo">{pub}</div>
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