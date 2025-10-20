'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';

type PidParams = { kp: number; ki: number; kd: number };

export default function PidDemoPage() {
  const [running, setRunning] = useState<boolean>(false);
  const [setpoint, setSetpoint] = useState<number>(50);
  const [pid, setPid] = useState<PidParams>({ kp: 1.2, ki: 0.3, kd: 0.05 });
  const [sampleHz, setSampleHz] = useState<number>(20);

  // Simulation state (process variable pv and controller output u)
  const [pv, setPv] = useState<number>(0);
  const [u, setU] = useState<number>(0);

  // History buffers for plotting
  const maxPoints = 400;
  const [history, setHistory] = useState<Array<{ t: number; pv: number; sp: number; u: number }>>([]);

  // Internal integrator/derivative memory
  const integralRef = useRef<number>(0);
  const prevErrRef = useRef<number>(0);
  const lastTsRef = useRef<number>(performance.now());

  // Simple first-order process model with noise: x' = -a x + b u + noise
  const a = 1.2; // natural decay
  const b = 0.8; // control gain

  // Start/stop loop
  useEffect(() => {
    if (!running) return;
    let raf = 0;
    const step = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTsRef.current) / 1000; // seconds
      const period = 1 / sampleHz;
      const needsTick = dt >= period || history.length === 0;
      if (needsTick) {
        lastTsRef.current = now;
        // PID control
        const err = setpoint - pv;
        integralRef.current += err * period;
        const derr = (err - prevErrRef.current) / period;
        const ctrl = pid.kp * err + pid.ki * integralRef.current + pid.kd * derr;
        prevErrRef.current = err;
        // Saturation
        const uSat = Math.max(-100, Math.min(100, ctrl));
        setU(uSat);
        // Process evolve
        const noise = (Math.random() - 0.5) * 0.6;
        const nextPv = pv + (-a * pv + b * uSat) * period + noise;
        setPv(nextPv);
        setHistory((h) => {
          const next = [...h, { t: now, pv: nextPv, sp: setpoint, u: uSat }];
          return next.length > maxPoints ? next.slice(next.length - maxPoints) : next;
        });
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [running, sampleHz, pid, setpoint, pv, history.length]);

  // Reset simulation
  const handleReset = () => {
    setRunning(false);
    integralRef.current = 0;
    prevErrRef.current = 0;
    setPv(0);
    setU(0);
    setHistory([]);
    lastTsRef.current = performance.now();
  };

  // Build SVG paths
  const { width, height, pad } = { width: 700, height: 340, pad: 48 };
  const paths = useMemo(() => {
    if (history.length < 2) return { pv: '', sp: '' };
    const xs = history.map((_, i) => i);
    const innerW = width - pad * 2 - 2; // keep 1-2px safety to respect right padding
    const xScale = (i: number) => pad + (i / (maxPoints - 1)) * innerW;
    // Y scales
    const pvMin = -20, pvMax = 120;
    const yScalePV = (v: number) => height - pad - ((v - pvMin) / (pvMax - pvMin)) * (height - pad * 2);
    const toPath = (ys: number[], yScale: (v: number) => number) =>
      ys.map((v, i) => `${i === 0 ? 'M' : 'L'}${xScale(xs[i]).toFixed(1)},${yScale(v).toFixed(1)}`).join(' ');
    const pvPath = toPath(history.map((p) => p.pv), yScalePV);
    const spPath = toPath(history.map((p) => p.sp), yScalePV);
    return { pv: pvPath, sp: spPath };
  }, [history]);

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px', background: 'var(--background)', color: 'var(--text-color)' }}>
      <Link href="/" style={{ display: 'inline-block', marginBottom: 24, color: 'var(--text-color)', textDecoration: 'none', padding: '8px 16px', background: 'var(--hover-bg)', borderRadius: 6 }}>← Volver al Portafolio</Link>

      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Control PID en vivo</h1>
      <p style={{ opacity: 0.8, marginBottom: 16 }}>Señal real simulada, setpoint y control PID con visualización en tiempo real.</p>

      <section style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 12, padding: 16, boxShadow: '0 2px 4px var(--shadow)', marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          <div>
            <label>Kp</label>
            <input type="range" min={0} max={5} step={0.05} value={pid.kp} onChange={(e) => setPid({ ...pid, kp: Number(e.target.value) })} style={{ width: '100%' }} />
            <div style={{ opacity: 0.8 }}>Kp: {pid.kp.toFixed(2)}</div>
          </div>
          <div>
            <label>Ki</label>
            <input type="range" min={0} max={2} step={0.01} value={pid.ki} onChange={(e) => setPid({ ...pid, ki: Number(e.target.value) })} style={{ width: '100%' }} />
            <div style={{ opacity: 0.8 }}>Ki: {pid.ki.toFixed(2)}</div>
          </div>
          <div>
            <label>Kd</label>
            <input type="range" min={0} max={1} step={0.01} value={pid.kd} onChange={(e) => setPid({ ...pid, kd: Number(e.target.value) })} style={{ width: '100%' }} />
            <div style={{ opacity: 0.8 }}>Kd: {pid.kd.toFixed(2)}</div>
          </div>
          <div>
            <label>Setpoint</label>
            <input type="range" min={0} max={100} step={1} value={setpoint} onChange={(e) => setSetpoint(Number(e.target.value))} style={{ width: '100%' }} />
            <div style={{ opacity: 0.8 }}>SP: {setpoint.toFixed(0)}</div>
          </div>
          <div>
            <label>Frecuencia (Hz)</label>
            <input type="range" min={5} max={60} step={1} value={sampleHz} onChange={(e) => setSampleHz(Number(e.target.value))} style={{ width: '100%' }} />
            <div style={{ opacity: 0.8 }}>{sampleHz} Hz</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'end' }}>
            <button onClick={() => setRunning((r) => !r)} style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid var(--card-border)', background: 'var(--hover-bg)', cursor: 'pointer' }}>{running ? 'Pausar' : 'Iniciar'}</button>
            <button onClick={handleReset} style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid var(--card-border)', background: 'var(--hover-bg)', cursor: 'pointer' }}>Reset</button>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 12, padding: 12, boxShadow: '0 2px 4px var(--shadow)' }}>
        <div style={{ width: '100%', margin: '0 auto', aspectRatio: `${width} / ${height}` }}>
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" role="img" aria-label="Gráfica PID" style={{ display: 'block' }}>
          <rect x={0} y={0} width={width} height={height} fill="var(--background)" />
          <defs>
            <clipPath id="plotClip">
              <rect x={pad} y={pad} width={width - pad * 2 - 2} height={height - pad * 2} />
            </clipPath>
          </defs>
          {/* Grid lines */}
          {Array.from({ length: 6 }, (_, i) => (
            <line key={i} x1={pad} x2={width - pad - 2} y1={pad + ((height - pad * 2) / 5) * i} y2={pad + ((height - pad * 2) / 5) * i} stroke="var(--card-border)" strokeWidth={1} opacity={0.5} />
          ))}
          {/* Axes */}
          <line x1={pad} y1={height - pad} x2={width - pad - 2} y2={height - pad} stroke="var(--card-border)" strokeWidth={1.5} />
          <line x1={pad} y1={pad} x2={pad} y2={height - pad} stroke="var(--card-border)" strokeWidth={1.5} />

          {/* Series */}
          <g clipPath="url(#plotClip)">
            <path d={paths.sp} stroke="#10b981" strokeWidth={2.5} fill="none" />
            <path d={paths.pv} stroke="#60a5fa" strokeWidth={2.5} fill="none" />
          </g>

          {/* Legend */}
          <g>
            <rect x={pad} y={10} width={220} height={24} rx={6} fill="var(--card-bg)" stroke="var(--card-border)" />
            <circle cx={pad + 12} cy={22} r={4} fill="#10b981" />
            <text x={pad + 22} y={26} fill="var(--text-color)" style={{ fontSize: 12 }}>SP (verde)</text>
            <circle cx={pad + 110} cy={22} r={4} fill="#60a5fa" />
            <text x={pad + 120} y={26} fill="var(--text-color)" style={{ fontSize: 12 }}>PV (azul)</text>
          </g>

          {/* Ticks and labels */}
          {
            (() => {
              const spanSec = history.length > 1 ? (history[history.length - 1].t - history[0].t) / 1000 : 0;
              const xTicks = 5;
              const pvMin = -20, pvMax = 120;
              const yTicks = 5;
              const elems: ReactNode[] = [];
              for (let i = 0; i <= xTicks; i++) {
                const frac = i / xTicks;
                const x = pad + frac * (width - pad * 2);
                const label = `${(spanSec * frac).toFixed(1)}s`;
                elems.push(
                  <g key={`xt${i}`}>
                    <line x1={x} x2={x} y1={height - pad} y2={height - pad + 6} stroke="var(--card-border)" />
                    <text x={x} y={height - pad + 20} fill="var(--text-color)" textAnchor="middle" style={{ fontSize: 11 }}>{label}</text>
                  </g>
                );
              }
              for (let i = 0; i <= yTicks; i++) {
                const frac = i / yTicks;
                const y = height - pad - frac * (height - pad * 2);
                const val = pvMin + frac * (pvMax - pvMin);
                elems.push(
                  <g key={`yt${i}`}>
                    <line x1={pad - 6} x2={pad} y1={y} y2={y} stroke="var(--card-border)" />
                    <text x={pad - 10} y={y + 4} fill="var(--text-color)" textAnchor="end" style={{ fontSize: 11 }}>{val.toFixed(0)}</text>
                  </g>
                );
              }
              // Axis titles
              elems.push(
                <text key="xlabel" x={(width) / 2} y={height - 8} fill="var(--text-color)" textAnchor="middle" style={{ fontSize: 12, opacity: 0.9 }}>Tiempo (s)</text>
              );
              elems.push(
                <text key="ylabel" x={16} y={height / 2} fill="var(--text-color)" textAnchor="middle" transform={`rotate(-90 16 ${height / 2})`} style={{ fontSize: 12, opacity: 0.9 }}>Magnitud</text>
              );
              return elems;
            })()
          }
        </svg>
        </div>
      </section>
    </div>
  );
}


