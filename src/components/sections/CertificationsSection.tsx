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
  const total = certs.length;

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
          {/* Navegación simple con botones */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Certificaciones</div>
              <div style={{ opacity: 0.7, fontSize: 12, marginTop: 4 }}>{total} certificados disponibles</div>
            </div>
          </div>

          {/* Visor PDF principal */}
          <div
            style={{
              width: '100%',
              height: 600,
              minHeight: 300,
              maxHeight: 800,
              resize: 'vertical',
              overflow: 'auto',
              border: '1px solid var(--card-border)',
              borderRadius: 8,
              background: 'var(--background)',
              marginBottom: 16
            }}
          >
            <iframe
              src={`${certs[0].file}#toolbar=0&navpanes=0&scrollbar=0`}
              title={certs[0].title}
              style={{ width: '100%', height: '100%', border: 0, display: 'block', background: 'var(--background)' }}
            />
          </div>

          {/* Botones de acción para el certificado actual */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
            <a href={certs[0].file} target="_blank" rel="noreferrer" style={{
              background: 'var(--foreground)', 
              color: 'var(--background)', 
              padding: '8px 16px', 
              borderRadius: 8, 
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600
            }}>Abrir en nueva pestaña</a>
            <a href={certs[0].file} download style={{
              background: 'var(--hover-bg)', 
              color: 'var(--text-color)', 
              padding: '8px 16px', 
              border: '1px solid var(--card-border)', 
              borderRadius: 8, 
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600
            }}>Descargar</a>
          </div>

          {/* Lista compacta de todos los certificados */}
          <details>
            <summary style={{
              cursor: 'pointer',
              padding: 12,
              background: 'var(--hover-bg)',
              borderRadius: 8,
              border: '1px solid var(--card-border)',
              fontSize: '0.9rem',
              fontWeight: 600,
              textAlign: 'center'
            }}>
              Ver todos los certificados ({total})
            </summary>
            <div style={{ marginTop: 12 }}>
              <div style={{ 
                display: 'grid', 
                gap: 8, 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                maxHeight: 400,
                overflowY: 'auto',
                padding: 8,
                border: '1px solid var(--card-border)',
                borderRadius: 8,
                background: 'var(--background)'
              }}>
                {certs.map((cert, i) => (
                  <div key={i} style={{
                    border: '1px solid var(--card-border)',
                    borderRadius: 6,
                    padding: 10,
                    background: 'var(--card-bg)',
                    transition: 'all 0.2s ease'
                  }}>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: 6, lineHeight: 1.3 }}>
                      {cert.title}
                    </div>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      <a href={cert.file} target="_blank" rel="noreferrer" style={{
                        background: 'var(--foreground)', 
                        color: 'var(--background)', 
                        padding: '3px 6px', 
                        borderRadius: 4, 
                        textDecoration: 'none',
                        fontSize: '0.75rem'
                      }}>Ver</a>
                      <a href={cert.file} download style={{
                        background: 'var(--hover-bg)', 
                        color: 'var(--text-color)', 
                        padding: '3px 6px', 
                        border: '1px solid var(--card-border)', 
                        borderRadius: 4, 
                        textDecoration: 'none',
                        fontSize: '0.75rem'
                      }}>Descargar</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </details>
    </section>
  );
}


