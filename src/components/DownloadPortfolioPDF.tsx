'use client';

import { useRef } from 'react';
import { projectsData } from '@/components/sections/ProjectsSection';
import { trajectoryData } from '@/components/sections/TrajectorySection';

type Props = { fullName: string; role: string; photoSrc: string; certCount: number };

export default function DownloadPortfolioPDF({ fullName, role, photoSrc, certCount }: Props) {
  const tplRef = useRef<HTMLDivElement>(null);

  // Carga jsPDF.html + html2canvas (v probada) para evitar PDF en blanco
  const ensureJsPDF = async () => {
    if (typeof window === 'undefined') return null;
    const w = window as any;
    if (!w.jspdf) {
      await new Promise<void>((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        s.async = true;
        s.crossOrigin = 'anonymous';
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('jsPDF load error'));
        document.head.appendChild(s);
      });
    }
    if (!w.html2canvas) {
      const tryUrls = [
        'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.0.0-alpha.12/html2canvas.min.js',
        'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-alpha.12/dist/html2canvas.min.js',
        'https://unpkg.com/html2canvas@1.0.0-alpha.12/dist/html2canvas.min.js'
      ];
      let loaded = false;
      for (const url of tryUrls) {
        try {
          // eslint-disable-next-line no-await-in-loop
          await new Promise<void>((resolve, reject) => {
            const s = document.createElement('script');
            s.src = url;
            s.async = true;
            s.crossOrigin = 'anonymous';
            s.onload = () => resolve();
            s.onerror = () => reject(new Error('html2canvas load error'));
            document.head.appendChild(s);
          });
          loaded = true; break;
        } catch {
          // try next url
        }
      }
      if (!loaded) throw new Error('html2canvas load error');
    }
    return (window as any).jspdf.jsPDF as new (...a:any[]) => any;
  };

  const handleDownload = async () => {
    const JsPDFCtor = await ensureJsPDF();
    if (!JsPDFCtor || !tplRef.current) return;
    const opt = {
      margin: [14, 16, 16, 16],
      filename: 'Portafolio_Jose_Soto.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: true, letterRendering: true, backgroundColor: '#ffffff', windowWidth: 794, scrollX: 0, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', compress: true },
      pagebreak: { mode: ['css', 'legacy'] }
    };
    // Clonar plantilla en body para asegurar layout y evitar estilos del árbol
    const clone = tplRef.current.cloneNode(true) as HTMLElement;
    Object.assign(clone.style, {
      position: 'absolute', left: '-10000px', top: '0', width: '794px', background: '#fff', zIndex: '-1'
    });
    document.body.appendChild(clone);
    // pequeño delay para pintar recursos (imágenes)
    await new Promise((r) => setTimeout(r, 120));
    const pdf = new JsPDFCtor({ unit: 'pt', format: 'a4' });
    await (pdf as any).html(clone, {
      margin: [36, 36, 40, 36],
      autoPaging: 'text',
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', windowWidth: 794 }
    });
    pdf.save('Portafolio_Jose_Soto.pdf');
    clone.remove();
  };

  return (
    <>
      <button onClick={handleDownload} style={{
        background: 'var(--foreground)', color: 'var(--background)', padding: '8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer'
      }}>
        Descargar portafolio (PDF)
      </button>

      {/* Plantilla oculta para PDF */}
      <div ref={tplRef} style={{ position: 'absolute', left: -10000, top: 0, width: 794, padding: 0, background: '#fff' }}>
        <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#111', padding: 28 }}>
          {/* Header */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
            <img src={photoSrc} alt="foto" style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 8 }} />
            <div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{fullName}</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>{role}</div>
            </div>
          </div>

          {/* Proyectos */}
          <h3 style={{ fontSize: 14, margin: '10px 0 6px' }}>Proyectos</h3>
          <div style={{ fontSize: 11, lineHeight: 1.4 }}>
            {projectsData.map((p) => (
              <div key={p.title} style={{ marginBottom: 10, pageBreakInside: 'avoid' as any }}>
                <div style={{ fontWeight: 700 }}>• {p.title}</div>
                <div>{p.details ?? p.description}</div>
                {p.link && (
                  <div style={{ color: '#2563eb', wordBreak: 'break-all' }}>{p.link}</div>
                )}
                <div style={{ height: 1, background: '#e5e7eb', marginTop: 6 }} />
              </div>
            ))}
          </div>

          {/* Certificaciones */}
          <h3 style={{ fontSize: 14, margin: '10px 0 6px', pageBreakBefore: 'auto' as any }}>Certificaciones</h3>
          <div style={{ fontSize: 11 }}>Total de certificaciones: {certCount}</div>

          {/* Trayectoria */}
          <h3 style={{ fontSize: 14, margin: '10px 0 6px' }}>Trayectoria</h3>
          <div style={{ fontSize: 11, lineHeight: 1.4 }}>
            {trajectoryData.map((t) => (
              <div key={t.org + t.start} style={{ marginBottom: 8, pageBreakInside: 'avoid' as any }}>
                <div>• {t.org} — {t.role} ({t.start} – {t.end})</div>
                {t.manager && <div>Jefe directo: {t.manager}</div>}
                {t.notes && <div style={{ opacity: 0.85 }}>{t.notes}</div>}
                <div style={{ height: 1, background: '#e5e7eb', marginTop: 6 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


