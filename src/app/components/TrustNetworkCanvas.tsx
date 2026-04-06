import { useEffect, useRef, useState } from 'react';

const ORANGE = '#EE7843';
const TEAL = '#59AD9E';
const WHITE = 'rgba(255,255,255,0.85)';

interface Node {
  label: string;
  sub: string;
  r: number;
  color: string;
  ring?: number;
  orbit?: number;
  speed?: number;
  phase?: number;
}

interface Pulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
  color: string;
  delay?: number;
}

interface TrustNetworkCanvasProps {
  fullscreen?: boolean;
}

export function TrustNetworkCanvas({ fullscreen = false }: TrustNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [txCount, setTxCount] = useState(0);
  const [idCount, setIdCount] = useState(0);
  const [latency, setLatency] = useState(120);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * devicePixelRatio;
      canvas.height = r.height * devicePixelRatio;
      ctx?.scale(devicePixelRatio, devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas?.getBoundingClientRect().width || 0;
    const H = () => canvas?.getBoundingClientRect().height || 0;

    const nodes: Node[] = [
      { label: 'Skyfire', sub: 'Trust Layer', r: 52, color: ORANGE, ring: 0 },
      { label: 'Access', sub: 'KYA token', r: 30, color: TEAL, orbit: 130, speed: 0.0004, phase: 0 },
      { label: 'Identity', sub: 'Verified agent', r: 30, color: TEAL, orbit: 130, speed: 0.0004, phase: Math.PI * 0.66 },
      { label: 'Checkout', sub: 'Wallet & pay', r: 30, color: TEAL, orbit: 130, speed: 0.0004, phase: Math.PI * 1.33 },
      { label: 'Akamai', sub: 'CDN', r: 22, color: WHITE, orbit: 230, speed: 0.00022, phase: 0.3 },
      { label: 'Experian', sub: 'Identity', r: 22, color: WHITE, orbit: 230, speed: 0.00022, phase: 1.5 },
      { label: 'Forter', sub: 'Fraud', r: 22, color: WHITE, orbit: 230, speed: 0.00022, phase: 2.7 },
      { label: 'Visa', sub: 'Payments', r: 22, color: WHITE, orbit: 230, speed: 0.00022, phase: 4.1 },
      { label: 'RBC', sub: 'Finance', r: 22, color: WHITE, orbit: 230, speed: 0.00022, phase: 5.2 },
    ];

    const pulses: Pulse[] = [];
    let lastPulse = 0;

    function spawnPulse() {
      const outerIdx = Math.floor(Math.random() * 5) + 4;
      const innerIdx = Math.floor(Math.random() * 3) + 1;
      pulses.push({ from: outerIdx, to: 0, progress: 0, speed: 0.016, color: ORANGE });
      pulses.push({ from: 0, to: innerIdx, progress: 0, speed: 0.02, color: TEAL, delay: 35 });
    }

    function formatNum(n: number) {
      if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
      if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
      return n.toString();
    }

    function getPos(node: Node, t: number) {
      const cx = W() * 0.5;
      const cy = H() * 0.44;
      if (node.ring === 0) return { x: cx, y: cy };
      const angle = (node.phase || 0) + t * (node.speed || 0);
      return {
        x: cx + Math.cos(angle) * (node.orbit || 0),
        y: cy + Math.sin(angle) * (node.orbit || 0) * 0.52
      };
    }

    function drawOrbitRing(cx: number, cy: number, r: number, opacity: number) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * 0.52, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function drawNode(node: Node, pos: { x: number; y: number }) {
      if (!ctx) return;
      const col = node.color === WHITE ? '255,255,255' : node.color === ORANGE ? '238,120,67' : '89,173,158';
      const alpha = node.color === WHITE ? '0.07' : '0.22';
      const g = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, node.r * 2.4);
      g.addColorStop(0, `rgba(${col},${alpha})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, node.r * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = '#0e0e0e';
      ctx.fill();
      ctx.strokeStyle = node.color === WHITE ? 'rgba(255,255,255,0.2)' : node.color;
      ctx.lineWidth = node.ring === 0 ? 2 : 1.2;
      ctx.stroke();

      const titleSize = node.ring === 0 ? 14 : node.r > 25 ? 11 : 9;
      const subSize = node.ring === 0 ? 10 : 8;

      ctx.textAlign = 'center';
      ctx.fillStyle = node.color;
      ctx.font = `500 ${titleSize}px 'Geist', sans-serif`;
      ctx.fillText(node.label, pos.x, pos.y + (node.sub ? -4 : 5));
      if (node.sub) {
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.font = `400 ${subSize}px 'Geist', sans-serif`;
        ctx.fillText(node.sub, pos.x, pos.y + titleSize - 2);
      }
    }

    function drawPulse(pulse: Pulse, t: number): boolean {
      if (!ctx) return false;
      if (pulse.delay && pulse.delay > 0) {
        pulse.delay--;
        return false;
      }
      const fromPos = getPos(nodes[pulse.from], t);
      const toPos = getPos(nodes[pulse.to], t);
      const px = fromPos.x + (toPos.x - fromPos.x) * pulse.progress;
      const py = fromPos.y + (toPos.y - fromPos.y) * pulse.progress;
      const trailStart = Math.max(0, pulse.progress - 0.25);
      const col = pulse.color === ORANGE ? '238,120,67' : '89,173,158';
      ctx.beginPath();
      ctx.moveTo(fromPos.x + (toPos.x - fromPos.x) * trailStart, fromPos.y + (toPos.y - fromPos.y) * trailStart);
      ctx.lineTo(px, py);
      ctx.strokeStyle = `rgba(${col},0.45)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fillStyle = pulse.color;
      ctx.fill();
      pulse.progress += pulse.speed;
      return pulse.progress >= 1;
    }

    function tick(t: number) {
      if (!ctx || !canvas) return;
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.44;

      drawOrbitRing(cx, cy, 130, 0.08);
      drawOrbitRing(cx, cy, 230, 0.05);

      for (let i = 1; i <= 3; i++) {
        const pos = getPos(nodes[i], t);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = 'rgba(89,173,158,0.07)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      if (t - lastPulse > 800 + Math.random() * 600) {
        spawnPulse();
        lastPulse = t;
        setTxCount(prev => {
          const newVal = prev + Math.floor(Math.random() * 8 + 3);
          return newVal;
        });
        setIdCount(prev => {
          const newVal = prev + Math.floor(Math.random() * 5 + 2);
          return newVal;
        });
        setLatency(Math.floor(Math.random() * 80 + 120));
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        if (drawPulse(pulses[i], t)) {
          pulses.splice(i, 1);
        }
      }

      for (let i = nodes.length - 1; i >= 0; i--) {
        drawNode(nodes[i], getPos(nodes[i], t));
      }

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const formatNum = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
  };

  return (
    <div style={{ 
      background: fullscreen ? 'transparent' : '#0A0A0A', 
      borderColor: '#1a1a1a', 
      borderRadius: fullscreen ? '0' : '20px', 
      overflow: 'hidden', 
      position: 'relative', 
      minHeight: fullscreen ? '100%' : '520px',
      width: '100%',
      height: '100%'
    }}>
      <canvas ref={canvasRef} style={{ 
        width: '100%', 
        height: fullscreen ? '100%' : '520px', 
        display: 'block' 
      }} />
      {!fullscreen && (
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.04em', color: '#EE7843', fontFamily: 'Geist, sans-serif' }}>
              {formatNum(txCount)}
            </div>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontFamily: 'Geist, sans-serif' }}>
              Transactions
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.04em', color: '#59AD9E', fontFamily: 'Geist, sans-serif' }}>
              {formatNum(idCount)}
            </div>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontFamily: 'Geist, sans-serif' }}>
              KYA Verified
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.7)', fontFamily: 'Geist, sans-serif' }}>
              {latency}ms
            </div>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontFamily: 'Geist, sans-serif' }}>
              Avg Latency
            </div>
          </div>
        </div>
      )}
    </div>
  );
}