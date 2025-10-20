'use client';

import Link from "next/link";

export default function ConectividadMaquinaSoldadoraPage() {
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

      <h1 style={{ fontSize: "2rem", marginBottom: 8 }}>Conectividad a red industrial | máquina soldadora</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>Aplicación del concepto de Internet Industrial de las Cosas (IIoT)</p>

      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
        marginBottom: 24
      }}>
        <h2 style={{ marginBottom: 12 }}>Resumen</h2>
        <p style={{ lineHeight: 1.6 }}>
          Se diseñó e implementó una nueva interfaz de usuario y conectividad para una máquina soldadora
          cuyo sistema de comunicación hombre–máquina (HMI) original había fallado por uso y desgaste.
          Se realizó retrofitting e ingeniería inversa para comprender su funcionamiento y dotarla de
          control virtual multiplataforma mediante conectividad inalámbrica Wi‑Fi.
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
        <h2 style={{ marginBottom: 12 }}>Problema</h2>
        <p style={{ lineHeight: 1.6 }}>
          El HMI previo dejó de operar. El cliente (asesor de SMT) requirió desarrollar un control físico o
          virtual que permitiera manipular la máquina de forma segura y confiable.
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
        <h2 style={{ marginBottom: 12 }}>Solución</h2>
        <ul style={{ lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
          <li>Investigación de partes, señales y lógica de la máquina (ingeniería inversa).</li>
          <li>Retrofitting con un sistema embebido IoT (Espressif/ESP32) para conectividad Wi‑Fi.</li>
          <li>Diseño de interfaz de usuario moderna y responsiva accesible desde navegador.</li>
          <li>Exposición de controles y telemetría en red local para operación y monitoreo.</li>
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
        <h2 style={{ marginBottom: 12 }}>Arquitectura resumida</h2>
        <ul style={{ lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
          <li>ESP32 como controlador IoT con Wi‑Fi y GPIOs para señales de la máquina.</li>
          <li>Servidor HTTP ligero en el embebido para UI de control.</li>
          <li>Comunicación local segura dentro de la red de planta.</li>
        </ul>
      </section>

      <div style={{
        position: "relative",
        paddingTop: "56.25%",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 24
      }}>
        <iframe
          src="https://www.youtube.com/embed/W1cihA2iUeM"
          title="Demostración: conectividad máquina soldadora"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

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
          {["ESP32", "C/C++", "Html", "Css"].map((t) => (
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
          <li>Restitución del control de máquina sin sustituir toda la electrónica.</li>
          <li>Operación desde múltiples dispositivos (PC, tablet, móvil).</li>
          <li>Base para monitoreo y mantenimiento predictivo bajo IIoT.</li>
        </ul>
      </section>
    </div>
  );
}


