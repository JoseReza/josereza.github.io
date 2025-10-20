import { Phone, Mail, MapPin, Home as HomeIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" style={{
      color: "var(--text-color)",
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}>
      {/* Tarjeta de datos de contacto */}
      <div style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 4px var(--shadow)",
      }}>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Phone size={16} /> <strong>Teléfono:</strong> <a href="tel:+5256565741161" style={{ color: "var(--text-color)" }}>+52 656 574 1161</a></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Mail size={16} /> <strong>Correo:</strong> <a href="mailto:josesotoreza@gmail.com" style={{ color: "var(--text-color)" }}>josesotoreza@gmail.com</a></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><HomeIcon size={16} /> <strong>Dirección:</strong> Paseos de las mariposas 8671, Fracc. Paseos del Alba</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><MapPin size={16} /> <strong>Lugar de residencia:</strong> <span style={{ opacity: 0.85 }}>Ciudad Juárez, Chihuahua, México</span></div>
        </div>
      </div>


    </section>
  );
}


