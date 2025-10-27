'use client';

import Link from "next/link";

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

      {/* Galería */}
      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <h2 style={{ marginBottom: 12 }}>Galería</h2>
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: 16,
          marginTop: 12 
        }}>
          {Array.from({ length: 18 }, (_, i) => (
            <div key={i} style={{
              background: "var(--hover-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: 8,
              padding: 12,
              textAlign: "center"
            }}>
              <img 
                src={`/images/investigacion-iiot/d${i + 1}.png`} 
                alt={`Diapositiva ${i + 1}`}
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  borderRadius: 6,
                  marginBottom: 8
                }} 
              />
              <p style={{ 
                fontSize: 12, 
                opacity: 0.7, 
                margin: 0 
              }}>
                Diapositiva {i + 1}
              </p>
            </div>
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

      {/* Documento PDF */}
      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <h2 style={{ marginBottom: 12 }}>Documento Completo</h2>
        <p style={{ marginBottom: 16, opacity: 0.8 }}>
          Accede al documento PDF completo de la investigación IIoT con todos los detalles técnicos y resultados.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a 
            href="/images/investigacion-iiot/documento.pdf" 
            target="_blank" 
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              background: "var(--hover-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: 8,
              color: "var(--text-color)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500
            }}
          >
            📄 Ver PDF
          </a>
          <a 
            href="/images/investigacion-iiot/documento.pdf" 
            download="investigacion-iiot-documento.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              background: "var(--text-color)",
              color: "var(--background)",
              border: "none",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500
            }}
          >
            ⬇️ Descargar PDF
          </a>
        </div>
      </section>

      <p style={{ fontSize: 12, opacity: 0.7 }}>
        Fuente: <a href="https://josereza.github.io/projects/investigacion-iiot/index.html" target="_blank" rel="noreferrer">Documentación completa</a>
      </p>
    </div>
  );
}


