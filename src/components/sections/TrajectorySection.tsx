'use client';

type Item = {
  org: string;
  role: string;
  start: string;
  end: string;
  notes?: string;
  manager?: string;
};

const items: Item[] = [
  {
    org: 'Fletes México',
    role: 'Ingeniero en sistemas desarrollador',
    start: 'Ago 2024',
    end: 'Actualidad',
    manager: 'Ramon Aguayo (Gerente de sistemas)',
  },
  {
    org: 'Robert Bosch',
    role: 'Técnico de desarrollo de aplicaciones',
    start: 'Jun 2022',
    end: 'Dic 2023',
    notes: 'Desarrollo y despliegue de aplicaciones',
    manager: 'Israel Soriano (Ingeniero de sistemas)',
  },
  {
    org: 'TecNM Campus Cd. Juárez',
    role: 'Estudiante (Ing. Mecatrónica)',
    start: 'Ago 2018',
    end: 'Dic 2022',
    manager: 'Mario Macario (Director de sistemas e institución)',
  },
  {
    org: 'Nodo de creatividad, innovación y emprendimiento Cd. Juárez',
    role: 'Practicante (IIoT y Web)',
    start: 'Feb 2019',
    end: 'Jun 2021',
    manager: 'Rafael Rodriguez (Director de mecatrónica)',
  },
  {
    org: 'CBTis 128',
    role: 'Estudiante (Electrónica)',
    start: 'Ago 2015',
    end: 'Jun 2018',
    manager: 'No especificado',
  },
];

export default function TrajectorySection() {
  return (
    <section id="trajectory" style={{
      color: 'var(--text-color)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <h2 style={{ marginBottom: 16, textAlign: 'center' }}>Trayectoria</h2>

      <div style={{
        border: '1px solid var(--card-border)',
        borderRadius: 12,
        background: 'var(--card-bg)',
        boxShadow: '0 2px 4px var(--shadow)',
        padding: 16
      }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {items.map((it) => (
            <li key={`${it.org}-${it.start}`} style={{
              border: '1px solid var(--card-border)',
              borderRadius: 10,
              padding: 12,
              background: 'var(--background)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{it.org}</div>
                  <div style={{ opacity: 0.85 }}>{it.role}</div>
                  {it.notes && (
                    <div style={{ opacity: 0.7, fontSize: 12 }}>{it.notes}</div>
                  )}
                </div>
                <div style={{ opacity: 0.8, whiteSpace: 'nowrap' }}>{it.start} — {it.end}</div>
              </div>
              <div style={{ marginTop: 6, opacity: 0.85, fontSize: 13 }}>
                <strong>Jefe directo:</strong> {it.manager ?? 'No especificado'}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Export for PDF generator
export { items as trajectoryData };


