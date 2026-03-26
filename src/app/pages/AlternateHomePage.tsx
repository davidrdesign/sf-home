import { LogoImage } from '../components/LogoImage';

const audienceCards = [
  {
    eyebrow: 'For Developers',
    title: 'Verify agents and take payment in the same request path.',
    body: 'Integrate KYA, spending controls, and settlement logic without stitching together separate systems for identity, checkout, and auditability.',
    points: ['KYA integration', 'Payment controls', 'Audit-ready transactions'],
  },
  {
    eyebrow: 'For Platforms',
    title: 'Approve the right agents. Bill for the right actions.',
    body: 'Gate APIs, paid content, commerce flows, or high-value actions with a verified agent signal instead of anonymous traffic heuristics.',
    points: ['Access gating', 'Usage monetization', 'Verified caller identity'],
  },
  {
    eyebrow: 'For Enterprise',
    title: 'Give policy, fraud, and product teams one transaction model.',
    body: 'Skyfire keeps identity, authorization, and payment linked so teams can review, govern, and expand agent traffic without adding one-off exceptions.',
    points: ['Unified control model', 'Clear audit trail', 'Built for rollout'],
  },
];

const proofLogos = [
  'Experian',
  'Visa',
  'Akamai',
  'Forter',
  'Okta',
  'Ory',
  'Cloudflare',
  'Consumer Reports',
];

const pressLogos = [
  'The Wall Street Journal',
  'TechCrunch',
  'Decrypt',
  'VentureBeat',
  'Forbes',
  'Business Insider',
  'American Banker',
];

const integrationSignals = [
  'Verified agent identity',
  'Programmable spend controls',
  'Linked authorization and settlement',
];

export function AlternateHomePage() {
  return (
    <div className="page-alt-home">
      <style>{`
        .page-alt-home {
          background: linear-gradient(180deg, #fcfbf8 0%, #f6f2eb 100%);
          color: #171311;
          min-height: 100vh;
        }

        .alt-shell {
          width: min(1180px, calc(100vw - 48px));
          margin: 0 auto;
        }

        .alt-kicker {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(23, 19, 17, 0.48);
        }

        .alt-hero {
          padding: 124px 0 48px;
        }

        .alt-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
          gap: clamp(28px, 4vw, 72px);
          align-items: end;
        }

        .alt-hero-copy h1 {
          margin-top: 18px;
          max-width: 11ch;
          font-size: clamp(54px, 8vw, 110px);
          line-height: 0.94;
          letter-spacing: -0.065em;
          font-weight: 500;
          color: #171311;
        }

        .alt-hero-copy p {
          margin-top: 24px;
          max-width: 32rem;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.55;
          color: rgba(23, 19, 17, 0.72);
        }

        .alt-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
          align-items: center;
        }

        .alt-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease;
        }

        .alt-button:hover {
          transform: translateY(-1px);
        }

        .alt-button-primary {
          background: #171311;
          color: #f8f4ee;
          box-shadow: 0 12px 30px rgba(23, 19, 17, 0.12);
        }

        .alt-button-secondary {
          border: 1px solid rgba(23, 19, 17, 0.14);
          color: #171311;
          background: rgba(255, 255, 255, 0.76);
        }

        .alt-hero-note {
          margin-top: 18px;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(23, 19, 17, 0.48);
        }

        .alt-proof-panel {
          position: relative;
          padding: 28px;
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(247, 241, 232, 0.94) 100%);
          border: 1px solid rgba(23, 19, 17, 0.08);
          box-shadow: 0 30px 60px rgba(74, 53, 34, 0.08);
          overflow: hidden;
        }

        .alt-proof-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(238, 120, 67, 0.16), transparent 32%),
            radial-gradient(circle at bottom left, rgba(89, 173, 158, 0.14), transparent 28%);
          pointer-events: none;
        }

        .alt-proof-header,
        .alt-proof-footer {
          position: relative;
          z-index: 1;
        }

        .alt-proof-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(23, 19, 17, 0.42);
        }

        .alt-proof-title {
          margin-top: 14px;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.08;
          letter-spacing: -0.05em;
          max-width: 12ch;
          color: #171311;
        }

        .alt-proof-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 14px;
          margin: 26px 0 28px;
        }

        .alt-proof-item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 14px;
          align-items: start;
          padding: 16px 0;
          border-top: 1px solid rgba(23, 19, 17, 0.1);
        }

        .alt-proof-index {
          font-size: 13px;
          font-weight: 700;
          color: rgba(23, 19, 17, 0.38);
        }

        .alt-proof-item strong {
          display: block;
          font-size: 15px;
          line-height: 1.45;
          letter-spacing: -0.02em;
        }

        .alt-proof-item span {
          display: block;
          margin-top: 4px;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(23, 19, 17, 0.58);
        }

        .alt-proof-footer {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .alt-micro-pill {
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(23, 19, 17, 0.08);
          font-size: 12px;
          font-weight: 700;
          color: rgba(23, 19, 17, 0.66);
        }

        .alt-logos {
          padding: 14px 0 72px;
        }

        .alt-logos-rule {
          display: grid;
          gap: 18px;
          padding-top: 18px;
          border-top: 1px solid rgba(23, 19, 17, 0.1);
        }

        .alt-logos-row {
          display: flex;
          flex-wrap: wrap;
          gap: 22px 32px;
          align-items: center;
        }

        .alt-logo-wrap {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          opacity: 0.92;
        }

        .alt-section {
          padding: 44px 0 72px;
        }

        .alt-section-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: clamp(22px, 4vw, 80px);
          align-items: start;
        }

        .alt-section-copy h2 {
          margin-top: 14px;
          max-width: 11ch;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .alt-section-copy p {
          margin-top: 18px;
          max-width: 30rem;
          font-size: 16px;
          line-height: 1.72;
          color: rgba(23, 19, 17, 0.66);
        }

        .alt-audience-list {
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(23, 19, 17, 0.1);
        }

        .alt-audience-card {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 22px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(23, 19, 17, 0.1);
        }

        .alt-audience-card h3 {
          margin-top: 12px;
          font-size: clamp(22px, 2.6vw, 34px);
          line-height: 1.06;
          letter-spacing: -0.045em;
        }

        .alt-audience-card p {
          font-size: 15px;
          line-height: 1.68;
          color: rgba(23, 19, 17, 0.66);
        }

        .alt-audience-points {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .alt-signal {
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(23, 19, 17, 0.1);
          font-size: 12px;
          font-weight: 700;
          color: rgba(23, 19, 17, 0.62);
        }

        .alt-flow {
          padding: 72px 0;
        }

        .alt-flow-panel {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .alt-flow-step {
          padding: 22px 0 0;
          border-top: 1px solid rgba(23, 19, 17, 0.1);
        }

        .alt-flow-step strong {
          display: block;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(23, 19, 17, 0.46);
        }

        .alt-flow-step h3 {
          margin-top: 16px;
          font-size: clamp(22px, 2.4vw, 30px);
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .alt-flow-step p {
          margin-top: 12px;
          font-size: 15px;
          line-height: 1.68;
          color: rgba(23, 19, 17, 0.66);
        }

        .alt-flow-step ul {
          list-style: none;
          margin-top: 18px;
          display: grid;
          gap: 10px;
          padding: 0;
        }

        .alt-flow-step li {
          font-size: 14px;
          line-height: 1.55;
          color: rgba(23, 19, 17, 0.58);
          padding-left: 16px;
          position: relative;
        }

        .alt-flow-step li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.7em;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(23, 19, 17, 0.24);
        }

        .alt-close {
          padding: 8px 0 108px;
        }

        .alt-close-card {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
          gap: 28px;
          padding: clamp(24px, 4vw, 40px);
          border-radius: 34px;
          background: #171311;
          color: #f4efe7;
          box-shadow: 0 30px 80px rgba(23, 19, 17, 0.14);
        }

        .alt-close-card h2 {
          margin-top: 12px;
          max-width: 12ch;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .alt-close-card p {
          margin-top: 18px;
          max-width: 33rem;
          font-size: 16px;
          line-height: 1.72;
          color: rgba(244, 239, 231, 0.74);
        }

        .alt-close-actions {
          display: grid;
          gap: 12px;
          align-content: end;
        }

        .alt-close-actions .alt-button-primary {
          background: #f4efe7;
          color: #171311;
        }

        .alt-close-actions .alt-button-secondary {
          background: transparent;
          color: #f4efe7;
          border-color: rgba(244, 239, 231, 0.22);
        }

        .alt-close-actions p {
          margin: 2px 0 0;
          font-size: 12px;
          line-height: 1.6;
          color: rgba(244, 239, 231, 0.56);
        }

        @media (max-width: 980px) {
          .alt-hero-grid,
          .alt-section-grid,
          .alt-close-card,
          .alt-audience-card {
            grid-template-columns: 1fr;
          }

          .alt-flow-panel {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .alt-shell {
            width: min(100vw - 28px, 1180px);
          }

          .alt-hero {
            padding-top: 106px;
          }

          .alt-proof-panel {
            padding: 22px;
            border-radius: 24px;
          }

          .alt-hero-actions,
          .alt-proof-footer,
          .alt-logos-row {
            gap: 10px 14px;
          }

          .alt-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="alt-hero">
        <div className="alt-shell alt-hero-grid">
          <div className="alt-hero-copy">
            <div className="alt-kicker">Agent payments and identity infrastructure</div>
            <h1>The infrastructure layer for trusted agent transactions.</h1>
            <p>
              Give agents a verified identity, a controlled payment method, and a clear path
              to access APIs, paid services, and checkout flows.
            </p>
            <div className="alt-hero-actions">
              <a
                className="alt-button alt-button-primary"
                href="https://app.skyfire.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Skyfire
              </a>
              <a
                className="alt-button alt-button-secondary"
                href="https://docs.skyfire.xyz/docs/developer-documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Documentation
              </a>
            </div>
            <div className="alt-hero-note">
              For developers integrating KYA, platforms monetizing agent traffic, and enterprises preparing to handle agent transactions at scale.
            </div>
          </div>

          <aside className="alt-proof-panel">
            <div className="alt-proof-header">
              <div className="alt-proof-label">What Skyfire does</div>
              <div className="alt-proof-title">A single transaction layer for agent identity and payment.</div>
            </div>

            <div className="alt-proof-grid">
              <div className="alt-proof-item">
                <div className="alt-proof-index">01</div>
                <div>
                  <strong>Verify the agent before you serve the request.</strong>
                  <span>KYA tells your stack which agent is calling, which organization it belongs to, and whether it should be trusted.</span>
                </div>
              </div>
              <div className="alt-proof-item">
                <div className="alt-proof-index">02</div>
                <div>
                  <strong>Monetize access or complete the transaction in-line.</strong>
                  <span>Charge for API calls, gated access, or checkout without forcing the request into a human approval or payment fallback.</span>
                </div>
              </div>
              <div className="alt-proof-item">
                <div className="alt-proof-index">03</div>
                <div>
                  <strong>Keep identity, payment, and auditability connected.</strong>
                  <span>Every approved action carries identity, authorization, and payment context from request through settlement.</span>
                </div>
              </div>
            </div>

            <div className="alt-proof-footer">
              {integrationSignals.map((signal) => (
                <span key={signal} className="alt-micro-pill">{signal}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="alt-logos">
        <div className="alt-shell alt-logos-rule">
          <div className="alt-kicker">Signals of trust</div>
          <div className="alt-logos-row">
            {proofLogos.map((name) => (
              <span key={name} className="alt-logo-wrap">
                <LogoImage name={name} size={22} showText={false} />
              </span>
            ))}
          </div>
          <div className="alt-logos-row">
            {pressLogos.map((name) => (
              <span key={name} className="alt-logo-wrap">
                <LogoImage name={name} size={20} showText={false} />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="alt-section">
        <div className="alt-shell alt-section-grid">
          <div className="alt-section-copy">
            <div className="alt-kicker">One story, three entry points</div>
            <h2>Different buyers. One answer.</h2>
            <p>
              Different teams touch different parts of the transaction, but they all need the same thing:
              an agent that can identify itself, pay when required, and be governed like any other approved actor in the system.
            </p>
          </div>

          <div className="alt-audience-list">
            {audienceCards.map((card) => (
              <article key={card.eyebrow} className="alt-audience-card">
                <div>
                  <div className="alt-kicker">{card.eyebrow}</div>
                  <h3>{card.title}</h3>
                </div>
                <div>
                  <p>{card.body}</p>
                  <div className="alt-audience-points">
                    {card.points.map((point) => (
                      <span key={point} className="alt-signal">{point}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="alt-flow">
        <div className="alt-shell">
          <div className="alt-kicker">What changes with Skyfire</div>
          <div className="alt-flow-panel">
            <article className="alt-flow-step">
              <strong>Step 01</strong>
              <h3>Identify the agent.</h3>
              <p>
                Start with a request your infrastructure can classify before it reaches pricing, access, or checkout logic.
              </p>
              <ul>
                <li>Know who is calling.</li>
                <li>Attach policy and scope to the session.</li>
                <li>Reduce uncertainty at the edge.</li>
              </ul>
            </article>
            <article className="alt-flow-step">
              <strong>Step 02</strong>
              <h3>Authorize access or payment.</h3>
              <p>
                Apply policy to the action itself: serve the request, charge for it, or move it through checkout with the right controls attached.
              </p>
              <ul>
                <li>Monetize premium access.</li>
                <li>Approve controlled spending.</li>
                <li>Keep the experience inside your product.</li>
              </ul>
            </article>
            <article className="alt-flow-step">
              <strong>Step 03</strong>
              <h3>Operate with an audit trail.</h3>
              <p>
                Review and govern agent traffic using a single record that ties identity, authorization, and payment together.
              </p>
              <ul>
                <li>Readable operational signal.</li>
                <li>Cleaner handoff to internal controls.</li>
                <li>A path from pilot to policy.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="alt-close">
        <div className="alt-shell">
          <div className="alt-close-card">
            <div>
              <div className="alt-kicker" style={{ color: 'rgba(244, 239, 231, 0.52)' }}>Ready to evaluate</div>
              <h2>Start with the docs if you want to integrate. Launch if you want to see the product.</h2>
              <p>
                If you need to decide whether Skyfire belongs in your stack, the shortest path is still the right one: read the integration model or open the product.
              </p>
            </div>
            <div className="alt-close-actions">
              <a
                className="alt-button alt-button-primary"
                href="https://app.skyfire.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Skyfire
              </a>
              <a
                className="alt-button alt-button-secondary"
                href="https://docs.skyfire.xyz/docs/developer-documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Documentation
              </a>
              <p>Evaluate the implementation path first, then decide how far you want to go.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
