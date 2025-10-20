'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Cert = { title: string; file: string };

const certs: Cert[] = [
  { title: 'Título TecNM', file: '/certifications/certificado-titulo-tecnm.pdf' },
  { title: 'GitHub', file: '/certifications/certificado_github.pdf' },
  { title: 'Desarrollo Web Full Stack', file: '/certifications/certificado_desarrollo_web_full_stack.pdf' },
  { title: 'Bases de Datos Relacionales', file: '/certifications/certificado_base_de_datos_relacionales.pdf' },
  { title: 'Node.js (1)', file: '/certifications/certificado_node.js_1.pdf' },
  { title: 'Node.js (2)', file: '/certifications/certificado_node.js_2.pdf' },
  { title: 'JavaScript (1)', file: '/certifications/certificado_javascript_1.pdf' },
  { title: 'JavaScript (2)', file: '/certifications/certificado_javascript_2.pdf' },
  { title: 'JavaScript (3)', file: '/certifications/certificado_javascript_3.pdf' },
  { title: 'JavaScript (4)', file: '/certifications/certificado_javascript_4.pdf' },
  { title: 'HTML & CSS (1)', file: '/certifications/certificado_html_css_1.pdf' },
  { title: 'HTML & CSS (2)', file: '/certifications/certificado_html_css_2.pdf' },
  { title: 'Desarrollo Web', file: '/certifications/certificado_desarrollo_web.pdf' },
  { title: 'Gestión del tiempo (1)', file: '/certifications/certificado_gestion_del_tiempo_1.pdf' },
  { title: 'Gestión del tiempo (2)', file: '/certifications/certificado_gestion_del_tiempo_2.pdf' },
  { title: 'Gestión de proyectos', file: '/certifications/certificado_gestion_de_proyectos.pdf' },
  { title: 'Bécalos Proficiency', file: '/certifications/becalos_proficiency_certificate.pdf' },
  { title: 'Lean Six Sigma: Fundamentos', file: '/certifications/CertificadoDeFinalizacion_Fundamentos de Lean Six Sigma.pdf' },
  { title: 'Lean Six Sigma: Definición y Medición', file: '/certifications/CertificadoDeFinalizacion_Lean Six Sigma Herramientas de las fases Definicion y Medicion.pdf' },
  { title: 'Lean Six Sigma: Análisis, Mejora y Control', file: '/certifications/CertificadoDeFinalizacion_Lean Six Sigma Herramientas de las fases de Analisis Mejora y Control.pdf' },
  { title: 'Python', file: '/certifications/certificado_python.pdf' },
  { title: 'Técnico en Electrónica', file: '/certifications/certificado_tecnico_electronico.pdf' },
  { title: 'Diploma TecNM', file: '/certifications/certificado-diploma-tecnm.pdf' },
  { title: 'Preparatoria', file: '/certifications/certificado-preparatoria.pdf' },
  { title: 'PLC CENALTEC', file: '/certifications/certificado_plc_cenaltec.pdf' },
  
];

export default function CertificationsSection() {
  const [index, setIndex] = useState(0);
  // Altura ajustable por el usuario (similar a textarea)
  const [viewerHeight] = useState<number>(1040); // valor inicial; el usuario puede redimensionar con el handle
  const total = certs.length;
  const go = (d: number) => setIndex((i) => (i + d + total) % total);

  // accesos por teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total]);

  const active = certs[index];

  return (
    <section id="certifications" style={{
      color: 'var(--text-color)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>

      <details open style={{
        border: '1px solid var(--card-border)',
        borderRadius: 12,
        background: 'var(--card-bg)',
        boxShadow: '0 2px 4px var(--shadow)'
      }}>
        <summary style={{
          cursor: 'pointer',
          userSelect: 'none',
          padding: 12,
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8
        }}>
          <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>Certificaciones</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.8, fontSize: 12 }}>
            <span>{total} items</span>
            <ChevronDown size={16} aria-hidden />
          </div>
        </summary>

        <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <button onClick={() => go(-1)} aria-label="Anterior" style={{
            background: 'var(--hover-bg)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer'
          }}>‹</button>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontWeight: 600 }}>{active.title}</div>
            <div style={{ opacity: 0.7, fontSize: 12 }}>{index + 1} / {total}</div>
          </div>
          <button onClick={() => go(1)} aria-label="Siguiente" style={{
            background: 'var(--hover-bg)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer'
          }}>›</button>
        </div>

        {/* Visor PDF redimensionable (drag) */}
        <div
          style={{
            width: '100%',
            height: viewerHeight,
            minHeight: 300,
            maxHeight: 1200,
            resize: 'vertical',
            overflow: 'auto',
            border: '1px solid var(--card-border)',
            borderRadius: 8,
            background: 'var(--background)'
          }}
        >
          <iframe
            src={`${active.file}#toolbar=0&navpanes=0&scrollbar=0`}
            title={active.title}
            style={{ width: '100%', height: '100%', border: 0, display: 'block', background: 'var(--background)' }}
          />
        </div>

        <div style={{ marginTop: 12, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={active.file} target="_blank" rel="noreferrer" style={{
            background: 'var(--foreground)', color: 'var(--background)', padding: '6px 12px', borderRadius: 8, textDecoration: 'none'
          }}>Abrir</a>
          <a href={active.file} download style={{
            background: 'var(--hover-bg)', color: 'var(--text-color)', padding: '6px 12px', border: '1px solid var(--card-border)', borderRadius: 8, textDecoration: 'none'
          }}>Descargar</a>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
          {certs.map((_, i) => (
            <button key={i} aria-label={`ir a ${i + 1}`} onClick={() => setIndex(i)} style={{ width: 8, height: 8, borderRadius: 999, border: 'none', cursor: 'pointer', background: i === index ? 'var(--text-color)' : 'var(--card-border)' }} />
          ))}
        </div>
        </div>
      </details>
    </section>
  );
}


