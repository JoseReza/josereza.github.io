import { Languages, FileDown, Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" style={{
      color: "var(--text-color)",
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}>
      <div style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 32,
        boxShadow: "0 2px 4px var(--shadow)"
      }}>
        <p style={{
          fontSize: "1.1rem",
          lineHeight: 1.6,
          margin: 0,
          textAlign: "center"
        }}>
          Me apasiona la integración de software con sistemas de
          electrónica y automatización. En este sitio encontrarás una
          selección de mis proyectos y experiencia.
        </p>
      </div>

      <br />

      <div style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
      }}>
        {/* Nivel de inglés */}
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: 24,
          boxShadow: "0 2px 4px var(--shadow)"
        }}>
          <h3 style={{ marginTop: 0, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Languages size={18} />
            Nivel de Inglés
          </h3>
          <div style={{ marginBottom: 8 }}>Intermedio</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
            <li>Lectura 90%</li>
            <li>Escritura 90%</li>
            <li>Escucha 70%</li>
            <li>Habla 70%</li>
          </ul>
        </div>

        {/* Descarga de CV */}
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: 32,
          boxShadow: "0 2px 4px var(--shadow)"
        }}>
          <h3 style={{ marginTop: 0, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <FileDown size={18} />
            Descargar CV
          </h3>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <a href="/curriculum_ES.pdf" download style={{
              background: "var(--foreground)", color: "var(--background)", padding: "10px 14px", borderRadius: 8, textAlign: "center"
            }}><Download size={18} /> Es</a>
            <a href="/curriculum_EN.pdf" download style={{
              background: "var(--foreground)", color: "var(--background)", padding: "10px 14px", borderRadius: 8, textAlign: "center"
            }}><Download size={18} /> En</a>
          </div>
        </div>
      </div>
    </section>
  );
}


