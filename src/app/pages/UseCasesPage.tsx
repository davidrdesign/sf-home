import { LockOpen, ShoppingCart, Package } from 'lucide-react';

export function UseCasesPage() {
  return (
    <div style={{ paddingTop: '60px', background: 'var(--hp-bg)', color: 'var(--hp-ink)' }}>
      {/* Hero */}
      <div style={{ padding: '130px 48px 80px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '20px' }}>
          Powering autonomous commerce across industries
        </h1>
        <p style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.65, color: 'var(--hp-body)', maxWidth: '560px', margin: '0 auto 36px' }}>
          From retail to enterprise SaaS, discover how leading companies are using Skyfire to enable agent-driven transactions.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn btn-teal">Start Building</button>
          <button className="btn btn-ghost">See Case Studies</button>
        </div>
      </div>

      {/* Use Case: Access */}
      <div style={{ borderTop: '1px solid var(--hp-border)', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, letterSpacing: '-0.035em', lineHeight: 1.15, marginBottom: '16px' }}>
              Secure web access for AI agents
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--hp-body)', lineHeight: 1.75, marginBottom: '36px' }}>
              Enable your agents to browse, discover, and interact with web services using verified credentials and authenticated sessions.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {[
                'Authenticated browsing with verified agent identity',
                'Session management and credential storage',
                'Rate limiting and abuse prevention at the protocol level'
              ].map((point) => (
                <div key={point} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0, marginTop: '7px', background: 'var(--orange)' }}></div>
                  <p style={{ fontSize: '15px', color: 'var(--hp-body)', lineHeight: 1.6, margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>
            
            <button className="btn btn-orange-solid">Learn More →</button>
          </div>
          
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--hp-border)' }}>
            <div style={{ background: '#0e0e0e', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: <LockOpen size={14} />, title: 'Amazon.com', sub: 'Product search • Agent A-8x7k', badge: 'Settled', badgeColor: 'teal' },
                { icon: <ShoppingCart size={14} />, title: 'Walmart.com', sub: 'Add to cart • Agent A-9m4n', badge: 'Pending', badgeColor: 'orange' },
                { icon: <Package size={14} />, title: 'Shopify Checkout', sub: 'Payment processing • Agent A-2p5q', badge: 'Queued', badgeColor: 'gray' }
              ].map((row) => (
                <div key={row.title} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  padding: '12px 14px', 
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)', 
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    background: row.badgeColor === 'orange' ? 'rgba(238,120,67,0.15)' : row.badgeColor === 'teal' ? 'rgba(89,173,158,0.15)' : 'rgba(255,255,255,0.08)',
                    color: row.badgeColor === 'orange' ? 'var(--orange)' : row.badgeColor === 'teal' ? 'var(--teal)' : 'rgba(255,255,255,0.5)'
                  }}>
                    {row.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>{row.title}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>{row.sub}</div>
                  </div>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '3px 9px',
                    borderRadius: '100px',
                    flexShrink: 0,
                    background: row.badgeColor === 'teal' ? 'rgba(89,173,158,0.15)' : row.badgeColor === 'orange' ? 'rgba(238,120,67,0.12)' : 'rgba(255,255,255,0.05)',
                    color: row.badgeColor === 'teal' ? 'var(--teal)' : row.badgeColor === 'orange' ? 'var(--orange)' : 'rgba(255,255,255,0.4)'
                  }}>
                    {row.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use Case: Revenue */}
      <div style={{ borderTop: '1px solid var(--hp-border)', padding: '96px 48px', background: 'var(--hp-bg-soft)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', direction: 'rtl' }}>
          <div style={{ direction: 'ltr' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, letterSpacing: '-0.035em', lineHeight: 1.15, marginBottom: '16px' }}>
              Monetize your agent's capabilities
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--hp-body)', lineHeight: 1.75, marginBottom: '36px' }}>
              Turn your AI agents into revenue-generating assets with built-in payment collection, subscription management, and usage-based billing.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {[
                'Accept payments directly from other agents or users',
                'Flexible pricing models: per-use, subscription, or hybrid',
                'Automatic revenue splitting and partner payouts'
              ].map((point) => (
                <div key={point} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0, marginTop: '7px', background: 'var(--teal)' }}></div>
                  <p style={{ fontSize: '15px', color: 'var(--hp-body)', lineHeight: 1.6, margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>
            
            <button className="btn btn-teal-dark">Learn More →</button>
          </div>
          
          <div style={{ direction: 'ltr' }}>
            <div style={{ background: '#fff', border: '1px solid var(--hp-border)', borderRadius: '20px', padding: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--hp-bg-soft)', border: '1px solid var(--hp-border)', borderRadius: '12px', padding: '20px 24px' }}>
                  <div style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.04em', color: 'var(--orange)' }}>$48.2K</div>
                  <div style={{ fontSize: '12px', color: 'var(--hp-muted)', marginTop: '4px' }}>Monthly Revenue</div>
                </div>
                <div style={{ background: 'var(--hp-bg-soft)', border: '1px solid var(--hp-border)', borderRadius: '12px', padding: '20px 24px' }}>
                  <div style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.04em', color: 'var(--orange)' }}>1,240</div>
                  <div style={{ fontSize: '12px', color: 'var(--hp-muted)', marginTop: '4px' }}>Active Subscribers</div>
                </div>
              </div>
              
              <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--hp-muted)', marginBottom: '12px' }}>Revenue by Source</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--hp-ink)' }}>Subscriptions</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)' }}>$32.4K (67%)</span>
                  </div>
                  <div style={{ height: '6px', background: '#E9E7E4', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: '67%', height: '100%', background: 'var(--teal)', borderRadius: '100px' }}></div>
                  </div>
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--hp-ink)' }}>Usage-Based</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)' }}>$11.2K (23%)</span>
                  </div>
                  <div style={{ height: '6px', background: '#E9E7E4', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: '23%', height: '100%', background: 'var(--orange)', borderRadius: '100px' }}></div>
                  </div>
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--hp-ink)' }}>One-Time</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--hp-ink)' }}>$4.6K (10%)</span>
                  </div>
                  <div style={{ height: '6px', background: '#E9E7E4', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: '10%', height: '100%', background: '#B4B0AB', borderRadius: '100px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case: Marketplace */}
      <div style={{ borderTop: '1px solid var(--hp-border)', padding: '96px 48px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '14px' }}>
              Agent Marketplace
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, letterSpacing: '-0.035em', lineHeight: 1.15, marginBottom: '16px' }}>
              Agent-to-agent commerce at scale
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--hp-body)', lineHeight: 1.75, marginBottom: '36px' }}>
              Create marketplaces where agents can discover, negotiate, and transact with each other - no human intervention required.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {[
                'Trustless transactions with cryptographic verification',
                'Automated negotiation and price discovery',
                'Instant settlement with full auditability'
              ].map((point) => (
                <div key={point} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0, marginTop: '7px', background: 'var(--orange)' }}></div>
                  <p style={{ fontSize: '15px', color: 'var(--hp-body)', lineHeight: 1.6, margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>
            
            <button className="btn btn-orange-solid">Learn More →</button>
          </div>
          
          <div style={{ background: '#fff', border: '1px solid var(--hp-border)', borderRadius: '20px', padding: '32px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--hp-light)', marginBottom: '16px' }}>
              Recent Transactions
            </div>
            
            {[
              { from: 'Agent A-8x7k', fromSub: 'Data Provider', to: 'Agent B-2m4n', toSub: 'ML Model', amount: '$0.42' },
              { from: 'Agent C-5p9q', fromSub: 'API Service', to: 'Agent D-7k3m', toSub: 'Automation', amount: '$1.20' },
              { from: 'Agent E-1n8p', fromSub: 'Compute', to: 'Agent F-4m2q', toSub: 'Training', amount: '$8.50' }
            ].map((tx, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                border: '1px solid var(--hp-border)',
                borderRadius: '12px',
                marginBottom: i < 2 ? '12px' : 0
              }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--hp-ink)' }}>{tx.from}</div>
                  <div style={{ fontSize: '11px', color: 'var(--hp-muted)', marginTop: '2px' }}>{tx.fromSub}</div>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--hp-muted)', textAlign: 'center', whiteSpace: 'nowrap' }}>
                  →
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--hp-ink)' }}>{tx.to}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--teal-accent)', marginTop: '2px' }}>{tx.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ background: 'var(--hp-ink)', color: '#fff', padding: '100px 48px', textAlign: 'center', borderTop: '1px solid var(--hp-border)' }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '16px' }}>
          Start building your use case
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.65 }}>
          Join the companies pioneering autonomous commerce with Skyfire's trust infrastructure.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-teal">Get Started</button>
          <button className="btn btn-outline-white">Talk to Sales</button>
        </div>
      </div>
    </div>
  );
}