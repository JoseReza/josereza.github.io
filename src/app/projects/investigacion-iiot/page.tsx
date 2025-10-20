'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function InvestigacionIIoTPage() {
  return (
    <div style={{
      maxWidth: 1000,
      margin: "0 auto",
      padding: "40px 24px",
      background: "var(--background)",
      color: "var(--text-color)",
      minHeight: "100vh"
    }}>
      <Link href="/" style={{
        display: "inline-block",
        marginBottom: 24,
        color: "var(--text-color)",
        textDecoration: "none",
        padding: "8px 16px",
        background: "var(--hover-bg)",
        borderRadius: 6
      }}>
        ← Volver al Portafolio
      </Link>

      <h1 style={{ fontSize: "2rem", marginBottom: 8 }}>Investigación IIoT</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>Prácticas y prototipos para Internet Industrial de las Cosas</p>

      {/* Portada */}
      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <img src="/images/investigacion-iiot/portada.png" alt="Portada Investigación IIoT" style={{ width: "100%", height: "auto", borderRadius: 8, marginBottom: 16 }} />
        <h2 style={{ marginBottom: 12 }}>Resumen</h2>
        <p style={{ lineHeight: 1.6 }}>
          Trabajo de exploración técnica para sentar bases de sistemas IIoT: instrumentación de equipos,
          adquisición de datos, procesamiento en borde y visualización para diagnóstico y mejora operativa.
        </p>
      </section>

      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <h2 style={{ marginBottom: 12 }}>Objetivos</h2>
        <ul style={{ lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
          <li>Probar arquitecturas IIoT escalables y seguras.</li>
          <li>Evaluar sensores y protocolos para entornos industriales.</li>
          <li>Construir prototipos de monitoreo y analítica en tiempo real.</li>
        </ul>
      </section>

      {/* Galería (Carousel) */}
      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <h2 style={{ marginBottom: 12 }}>Galería</h2>
        {(() => {
          const images = Array.from({ length: 18 }, (_, i) => `/images/investigacion-iiot/d${i + 1}.png`);
          const [index, setIndex] = useState(0);
          const go = (delta: number) => setIndex((prev) => (prev + delta + images.length) % images.length);

          useEffect(() => {
            const onKey = (e: KeyboardEvent) => {
              if (e.key === 'ArrowLeft') go(-1);
              if (e.key === 'ArrowRight') go(1);
            };
            window.addEventListener('keydown', onKey);
            return () => window.removeEventListener('keydown', onKey);
          }, []);

          return (
            <div>
              <div style={{ position: "relative", border: "1px solid var(--card-border)", borderRadius: 12, overflow: "hidden" }}>
                <button aria-label="Anterior" onClick={() => go(-1)} style={{
                  position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
                  background: "var(--hover-bg)", color: "var(--text-color)", border: "1px solid var(--card-border)", borderRadius: 999,
                  width: 36, height: 36, cursor: "pointer"
                }}>{'‹'}</button>
                <img src={images[index]} alt={`d${index + 1}.png`} style={{ width: "100%", height: "auto", display: "block" }} />
                <button aria-label="Siguiente" onClick={() => go(1)} style={{
                  position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                  background: "var(--hover-bg)", color: "var(--text-color)", border: "1px solid var(--card-border)", borderRadius: 999,
                  width: 36, height: 36, cursor: "pointer"
                }}>{'›'}</button>
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Ir a imagen ${i + 1}`}
                    onClick={() => setIndex(i)}
                    style={{
                      width: 8, height: 8, borderRadius: 999,
                      background: i === index ? "var(--text-color)" : "var(--card-border)",
                      border: "none", cursor: "pointer"
                    }}
                  />
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: 8, marginTop: 12 }}>
                {images.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`miniatura d${i + 1}.png`}
                    onClick={() => setIndex(i)}
                    style={{
                      width: "100%", height: 64, objectFit: "cover", borderRadius: 8,
                      border: i === index ? "2px solid var(--text-color)" : "1px solid var(--card-border)", cursor: "pointer"
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <h2 style={{ marginBottom: 12 }}>Prototipos</h2>
        <ul style={{ lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
          <li>Nodos de sensado con microcontroladores (telemetría de variables físicas).</li>
          <li>Pasarela de datos y normalización de mensajes.</li>
          <li>Dashboards para visualización y alertamiento.</li>
        </ul>
      </section>

      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <h2 style={{ marginBottom: 12 }}>Tecnologías</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Platformio", "ESP32", "MQTT", "Node-RED", "Node js"].map((t) => (
            <span key={t} style={{
              background: "var(--hover-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: 12,
              padding: "4px 8px",
              fontSize: 12
            }}>{t}</span>
          ))}
        </div>
      </section>

      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <h2 style={{ marginBottom: 12 }}>Resultados</h2>
        <ul style={{ lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
          <li>Lineamientos de arquitectura para proyectos IIoT posteriores.</li>
          <li>Pruebas comparativas de sensores, conectividad y formato de datos.</li>
          <li>Base funcional para escalamiento a soluciones productivas.</li>
        </ul>
      </section>

      <p style={{ fontSize: 12, opacity: 0.7 }}>
        Fuente: <a href="https://josereza.github.io/projects/investigacion-iiot/index.html" target="_blank" rel="noreferrer">Documentación completa</a>
      </p>
    </div>
  );
}


