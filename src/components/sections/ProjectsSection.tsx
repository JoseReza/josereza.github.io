'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Project = {
  title: string;
  description: string;
  link?: string;
  details?: string;
  technologies?: string[];
};

const projects: Project[] = [
  {
    title: "Sistema de Llantas - Migración Web",
    description:
      "Migración completa de sistema MS-DOS a arquitectura web moderna.",
    details: "Migración completa de sistema MS-DOS a arquitectura web moderna: Next.js frontend + Python API + base de datos relacional. Implementación de API REST con FastAPI, autenticación JWT, y dashboard responsivo.",
    technologies: ["VSCode", "Next.js", "Python", "FastAPI", "MSSqlServer", "Docker", "Jenkins", "Typescript", "Tailwind css", "RedHat linux server", "Cursor"],
    link: "/projects/sistema-llantas",
  },
  {
    title: "Conectividad a red industrial | máquina soldadora",
    description:
      "Retrofitting con ESP32 para control virtual vía Wi‑Fi (IIoT).",
    details: "Nueva interfaz y conectividad para máquina soldadora: ingeniería inversa, ESP32 con servidor web embebido y UI accesible desde navegador en red local.",
    technologies: ["PlatformIO", "ESP32", "C/C++", "HTML", "CSS", "JavaScript", "IIoT"],
    link: "/projects/conectividad-maquina-soldadora",
  },
  {
    title: "Investigación IIoT",
    description:
      "Proyecto de investigación para Internet Industrial de las Cosas.",
    details: "Internet Industrial de las Cosas. Desarrollo de sensores inteligentes, análisis de datos en tiempo real y integración con sistemas industriales.",
    technologies: ["Arduino", "IoT", "MQTT", "Node.js", "Node-Red"],
    link: "/projects/investigacion-iiot",
  },
  {
    title: "PID | Control y setpoint",
    description:
      "Simulación de controlador PID con señal y setpoint.",
    details: "Visualización en tiempo real de PV, SP y salida del controlador. Ajuste interactivo de Kp, Ki, Kd y frecuencia de muestreo.",
    technologies: ["React", "TypeScript", "SVG", "Simulación"],
    link: "/projects/pid-demo",
  },
];

// Export for PDF generator
export { projects as projectsData };

function makeAbsolute(link: string): string {
  if (!link) return '';
  if (/^https?:\/\//i.test(link)) return link;
  if (typeof window !== 'undefined') return `${window.location.origin}${link}`;
  return link;
}

export default function ProjectsSection() {
  // Permite múltiples cards desplegadas simultáneamente
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [origin, setOrigin] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index); else next.add(index);
      return next;
    });
  };

  return (
    <section id="projects" style={{
      color: "var(--text-color)",
      transition: "background-color 0.3s ease, color 0.3s ease",
    }}>
      <h2 style={{ marginBottom: 24, textAlign: "center" }}>Proyectos</h2>
      <ul style={{
        listStyle: "none",
        padding: 0,
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
      }}>
        {projects.map((p, index) => (
          <li key={p.title}>
                <div
              style={{
                border: "1px solid var(--card-border)",
                borderRadius: 12,
                background: "var(--card-bg)",
                boxShadow: "0 2px 4px var(--shadow)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                overflow: "hidden"
              }}
              onClick={() => toggleCard(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 8px var(--shadow)";
                e.currentTarget.style.borderColor = "var(--text-color)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px var(--shadow)";
                e.currentTarget.style.borderColor = "var(--card-border)";
              }}
            >
              <div style={{ padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ margin: "0 0 8px", color: "var(--text-color)" }}>{p.title}</h3>
                      <div style={{
                    fontSize: "20px",
                    color: "var(--text-color)",
                        transform: expandedCards.has(index) ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease"
                  }}>
                    ▼
                  </div>
                </div>
                <p style={{ margin: 0, color: "var(--text-color)", opacity: 0.8 }}>{p.description}</p>
              </div>

              <div style={{
                    maxHeight: expandedCards.has(index) ? "900px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease, padding 0.3s ease",
                    padding: expandedCards.has(index) ? "0 16px 16px" : "0 16px 0"
              }}>
                <div style={{ borderTop: "1px solid var(--card-border)", paddingTop: 16 }}>
                  <p style={{ margin: "0 0 12px", color: "var(--text-color)" }}>{p.details}</p>

                  {p.technologies && (
                    <div style={{ marginBottom: 16 }}>
                      <h4 style={{ margin: "0 0 8px", fontSize: "14px", color: "var(--text-color)", opacity: 0.8 }}>Tecnologías:</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {p.technologies.map((tech) => (
                          <span key={tech} style={{
                            background: "var(--hover-bg)",
                            color: "var(--text-color)",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            border: "1px solid var(--card-border)"
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {p.link && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: 'flex-start' }}>
                      <Link href={p.link} style={{
                        display: "inline-flex",
                        background: "var(--foreground)",
                        color: "var(--background)",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "all 0.3s ease",
                        whiteSpace: 'nowrap',
                        width: 'auto',
                        maxWidth: '100%'
                      }}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        Ver proyecto completo →
                      </Link>
                      <Link
                        href={p.link}
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: "var(--text-color)", textDecoration: "underline", fontSize: 16, wordBreak: 'break-all' }}
                      >
                        {origin ? `${origin}${p.link}` : p.link}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}


