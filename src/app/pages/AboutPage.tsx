import { LogoImage } from '../components/LogoImage';

export function AboutPage() {
  return (
    <div className="page-about" style={{ paddingTop: '60px' }}>
      {/* Hero */}
      <div className="ab-hero">
        <div>
          <h1>
            Building <em>trust infrastructure</em> for the agentic economy
          </h1>
        </div>
        <div className="ab-hero-lede">
          <strong>The internet wasn't built for agents.</strong> Every system assumes a human is present - to verify identity, authorize payments, and complete transactions. We're changing that.
        </div>
      </div>

      <div className="ab-hr"></div>

      {/* One-liner */}
      <div className="ab-one-liner">
        <p>
          <span>We believe that </span>
          <em>autonomous agents will reshape commerce</em>
          <span>, but only if they can operate with the same trust and credibility as humans.</span>
        </p>
      </div>

      {/* Problem */}
      <div className="ab-problem">
        <div className="ab-problem-inner">
          <div></div>
          <div className="ab-problem-body">
            <h2>The trust gap holding back the agentic era</h2>
            <p>
              <strong>Today's AI agents can't transact autonomously.</strong> They lack verified identity, can't hold funds securely, and have no way to prove trustworthiness to merchants. Every purchase requires human intervention, limiting agents to advisory roles instead of autonomous action.
            </p>
            <div className="ab-problem-stats">
              <div>
                <div className="ab-p-stat-num">$8.3T</div>
                <div className="ab-p-stat-label">Potential autonomous commerce market by 2030</div>
              </div>
              <div>
                <div className="ab-p-stat-num">94%</div>
                <div className="ab-p-stat-label">Of agent tasks currently blocked by payment friction</div>
              </div>
              <div>
                <div className="ab-p-stat-num">0</div>
                <div className="ab-p-stat-label">Global standards for agent identity until now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="ab-products">
        <div className="ab-products-header">
          <div></div>
          <h2>Three layers of trust, purpose-built for agents</h2>
        </div>

        <div className="ab-product-list">
          <div className="ab-product-item">
            <div className="ab-product-num">01</div>
            <div>
              <div className="ab-product-sub">Identity Layer</div>
              <div className="ab-product-name">Know Your Agent (KYA)</div>
            </div>
            <div className="ab-product-desc">
              <strong>Verified identity at the protocol level.</strong> Multi-party attestation creates cryptographic proof of agent identity, compliance status, and authorization scope - making agents as trustworthy as the organizations that deploy them.
            </div>
          </div>

          <div className="ab-product-item">
            <div className="ab-product-num">02</div>
            <div>
              <div className="ab-product-sub">Payment Layer</div>
              <div className="ab-product-name">Agent Wallet</div>
            </div>
            <div className="ab-product-desc">
              <strong>Purpose-built payment infrastructure.</strong> Agents can hold funds, execute transactions, and settle payments autonomously - with full auditability, spending controls, and regulatory compliance built in.
            </div>
          </div>

          <div className="ab-product-item">
            <div className="ab-product-num">03</div>
            <div>
              <div className="ab-product-sub">Commerce Layer</div>
              <div className="ab-product-name">Buy For Me</div>
            </div>
            <div className="ab-product-desc">
              <strong>Autonomous checkout across the web.</strong> Pre-verified agent credentials enable instant purchasing across thousands of merchants, turning browsing into buying without human intervention.
            </div>
          </div>
        </div>
      </div>

      {/* Network */}
      <div className="ab-network">
        <div className="ab-network-inner">
          <div></div>
          <div className="ab-network-body">
            <h2>Built with the best in the business</h2>
            <p>
              We partner with industry leaders in identity, payments, and infrastructure to deliver enterprise-grade trust and security.
            </p>
            <div className="ab-network-partners">
              {[
                { name: 'Experian', role: 'Identity Verification' },
                { name: 'Visa', role: 'Payment Processing' },
                { name: 'Akamai', role: 'Edge Infrastructure' },
                { name: 'Forter', role: 'Fraud Prevention' },
                { name: 'RBC', role: 'Banking Partner' },
                { name: 'Stripe', role: 'Payment Rails' },
              ].map((partner) => (
                <div key={partner.name} className="ab-partner-cell">
                  <div className="ab-partner-cell-name">
                    <LogoImage name={partner.name} size={20} showText={true} />
                  </div>
                  <div className="ab-partner-cell-role">{partner.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Positioning */}
      <div className="ab-positioning">
        <div></div>
        <div className="ab-positioning-body">
          <blockquote>
            "The shift from human-driven to <em>agent-driven commerce</em> isn't just inevitable - it's already happening."
          </blockquote>
          <p>
            We're building the trust infrastructure that will power this transformation. Every agent transaction, every autonomous purchase, every verified identity - these are the building blocks of a new economic paradigm.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="ab-cta">
        <div className="ab-cta-inner">
          <div className="ab-cta-text">
            <h2>Join us in building the future</h2>
            <p>We're looking for forward-thinking teams ready to enable autonomous agents at scale.</p>
          </div>
          <div className="ab-cta-buttons">
            <button className="btn btn-white">Get Started</button>
            <button className="btn btn-outline-cream">Read the Docs</button>
          </div>
        </div>
      </div>
    </div>
  );
}