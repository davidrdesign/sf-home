import { ShieldCheck, Lock, Zap, DollarSign, Settings, BarChart3, Check, Clock, MoreHorizontal } from 'lucide-react';

export function ProductsPage() {
  return (
    <div className="page-products" style={{ paddingTop: '60px', background: 'var(--hp-bg)', color: 'var(--hp-ink)' }}>
      {/* Hero */}
      <div style={{ 
        background: 'var(--hp-ink)', 
        padding: '130px 48px 100px', 
        textAlign: 'center', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{
          content: '',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(238,120,67,0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 500, 
            letterSpacing: '-0.04em', 
            lineHeight: 1.05,
            color: '#fff', 
            maxWidth: '700px', 
            margin: '0 auto 20px'
          }}>
            The complete trust stack for autonomous agents
          </h1>
          <p style={{
            fontSize: '18px', 
            fontWeight: 300, 
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.5)', 
            maxWidth: '520px', 
            margin: '0 auto 36px'
          }}>
            From identity verification to checkout, everything your agents need to transact with confidence.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-teal">Start Building</button>
            <button className="btn btn-outline-white">View Docs</button>
          </div>
        </div>
      </div>

      {/* Feature: KYA */}
      <div style={{ 
        maxWidth: '1160px', 
        margin: '0 auto',
        padding: '100px 48px',
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '80px', 
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 500, 
            letterSpacing: '-0.035em', 
            lineHeight: 1.15,
            marginBottom: '16px'
          }}>
            Verified agent identity you can trust
          </h2>
          <p style={{
            fontSize: '16px', 
            color: 'var(--hp-body)', 
            lineHeight: 1.7,
            marginBottom: '36px'
          }}>
            KYA provides cryptographic attestation of agent identity, creating trust at the protocol level. Multi-party verification ensures agents meet compliance requirements before they can transact.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
            {[
              { icon: <ShieldCheck size={16} />, title: 'Multi-Party Attestation', desc: 'Verified by trusted identity providers including Experian, Jumio, and Onfido' },
              { icon: <Lock size={16} />, title: 'Cryptographic Proof', desc: 'Immutable on-chain records of agent credentials and authorization scope' },
              { icon: <Zap size={16} />, title: 'Instant Verification', desc: 'Sub-second identity checks enable real-time agent transactions' }
            ].map((feature) => (
              <div key={feature.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  background: 'rgba(238,120,67,0.08)',
                  border: '1px solid rgba(238,120,67,0.2)'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--hp-ink)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                    {feature.title}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--hp-muted)', lineHeight: 1.6 }}>
                    {feature.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="btn btn-teal-dark">Learn More →</button>
        </div>
        
        <div style={{
          background: 'var(--hp-bg-soft)',
          border: '1px solid var(--hp-border)',
          borderRadius: '20px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          minHeight: '380px',
          justifyContent: 'center'
        }}>
          <div style={{
            background: '#fff',
            border: '1px solid var(--hp-border)',
            borderRadius: '12px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 600,
              background: 'rgba(89,173,158,0.1)',
              color: 'var(--teal-accent)'
            }}><Check size={18} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)', marginBottom: '2px' }}>Agent ID: A-8x7k2m</div>
              <div style={{ fontSize: '12px', color: 'var(--hp-muted)' }}>Verified by Experian</div>
            </div>
            <div style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '100px',
              background: 'rgba(89,173,158,0.1)',
              color: 'var(--teal-bold)'
            }}>Verified</div>
          </div>
          
          <div style={{
            background: '#fff',
            border: '1px solid var(--hp-border)',
            borderRadius: '12px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 600,
              background: 'rgba(238,120,67,0.1)',
              color: 'var(--orange)'
            }}><Clock size={18} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)', marginBottom: '2px' }}>Agent ID: A-9m4n8p</div>
              <div style={{ fontSize: '12px', color: 'var(--hp-muted)' }}>Awaiting verification</div>
            </div>
            <div style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '100px',
              background: 'rgba(238,120,67,0.1)',
              color: 'var(--orange-accent)'
            }}>Pending</div>
          </div>
          
          <div style={{
            background: '#fff',
            border: '1px solid var(--hp-border)',
            borderRadius: '12px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 600,
              background: '#F5F4F2',
              color: 'var(--hp-muted)'
            }}><MoreHorizontal size={18} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)', marginBottom: '2px' }}>New Agent</div>
              <div style={{ fontSize: '12px', color: 'var(--hp-muted)' }}>Start verification</div>
            </div>
            <div style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '100px',
              background: '#F5F4F2',
              color: 'var(--hp-muted)'
            }}>New</div>
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--hp-border)', margin: 0 }} />

      {/* Feature: Wallet */}
      <div style={{ 
        maxWidth: '1160px', 
        margin: '0 auto',
        padding: '100px 48px',
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '80px', 
        alignItems: 'center',
        direction: 'rtl'
      }}>
        <div style={{ direction: 'ltr' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 500, 
            letterSpacing: '-0.035em', 
            lineHeight: 1.15,
            marginBottom: '16px'
          }}>
            Autonomous payments with full control
          </h2>
          <p style={{
            fontSize: '16px', 
            color: 'var(--hp-body)', 
            lineHeight: 1.7,
            marginBottom: '36px'
          }}>
            Purpose-built payment infrastructure lets agents transact independently while maintaining spending limits, approval workflows, and complete auditability.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
            {[
              { icon: <DollarSign size={16} />, title: 'Smart Budgets', desc: 'Dynamic spending limits with real-time adjustment based on agent behavior' },
              { icon: <Settings size={16} />, title: 'Approval Workflows', desc: 'Configurable rules for high-value transactions and vendor whitelisting' },
              { icon: <BarChart3 size={16} />, title: 'Full Auditability', desc: 'Immutable transaction logs with detailed attribution and reconciliation' }
            ].map((feature) => (
              <div key={feature.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  background: 'rgba(89,173,158,0.08)',
                  border: '1px solid rgba(89,173,158,0.2)'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--hp-ink)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                    {feature.title}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--hp-muted)', lineHeight: 1.6 }}>
                    {feature.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="btn btn-teal-dark">Learn More →</button>
        </div>
        
        <div style={{ direction: 'ltr', background: 'var(--hp-bg-soft)', border: '1px solid var(--hp-border)', borderRadius: '20px', padding: '40px', minHeight: '380px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--hp-ink)' }}>Monthly Budget</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)' }}>$15,240 / $25,000</span>
            </div>
            <div style={{ height: '6px', background: '#E9E7E4', borderRadius: '100px', overflow: 'hidden' }}>
              <div style={{ width: '61%', height: '100%', background: 'var(--orange)', borderRadius: '100px' }}></div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--hp-ink)' }}>Daily Limit</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)' }}>$840 / $1,000</span>
            </div>
            <div style={{ height: '6px', background: '#E9E7E4', borderRadius: '100px', overflow: 'hidden' }}>
              <div style={{ width: '84%', height: '100%', background: 'var(--teal)', borderRadius: '100px' }}></div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--hp-ink)' }}>Available Balance</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)' }}>$9,760</span>
            </div>
            <div style={{ height: '6px', background: '#E9E7E4', borderRadius: '100px', overflow: 'hidden' }}>
              <div style={{ width: '39%', height: '100%', background: '#B4B0AB', borderRadius: '100px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ background: 'var(--hp-bg-soft)', borderTop: '1px solid var(--hp-border)', padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 500, letterSpacing: '-0.04em', marginBottom: '14px' }}>
          Ready to enable your agents?
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--hp-muted)', maxWidth: '440px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Start building with Skyfire's complete trust stack today.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-teal">Get Started</button>
          <button className="btn btn-ghost">View Documentation</button>
        </div>
      </div>
    </div>
  );
}