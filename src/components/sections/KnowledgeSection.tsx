import { ChevronDown } from 'lucide-react';

type Skill = { title: string; detail: string };
type Group = { name: string; items: Skill[] };

const groups: Group[] = [
  {
    name: "Electrónica",
    items: [
      { title: "Interpretación de diagramas", detail: "Lectura de esquemáticos y netlists para diagnosticar fallas y planear cableado." },
      { title: "Leyes básicas (Ohm, Kirchhoff)", detail: "Dimensionamiento de componentes y análisis de nodos/mallas para estimar cargas." },
      { title: "Instrumentación", detail: "Uso de multímetro y osciloscopio para validación funcional y trazas de señal." },
      { title: "DC y acondicionamiento", detail: "Topologías simples de rectificación/filtrado y conexión segura de circuitos en CD." },
    ],
  },
  {
    name: "Programación",
    items: [
      { title: "Sincrona y asíncrona", detail: "Promesas, async/await, colas de trabajo y manejo de I/O bound." },
      { title: "Orientada a objetos y modular", detail: "Abstracción de dominios, separación por capas y contratos de interfaces." },
      { title: "Procesamiento de señales", detail: "Filtros discretos básicos (media móvil, IIR) y pipeline de normalización." },
      { title: "Control y monitoreo HW", detail: "Drivers simples, polling e interrupciones para sensórica/actuadores." },
    ],
  },
  {
    name: "Sistemas de despliegue continuo",
    items: [
      { title: "Jenkins", detail: "Pipelines declarativos para build, pruebas y deploy con stages paralelos." },
      { title: "Docker", detail: "Contenerización reproducible, multistage builds y redes para servicios IIoT." },
    ],
  },
  {
    name: "Lenguajes y frameworks",
    items: [
      { title: "C/C++", detail: "Firmware y utilidades nativas con enfoque en determinismo y gestión de memoria." },
      { title: "JavaScript/TypeScript (Node, React)", detail: "APIs REST/WS, workers, SSR en Next.js y UI reactivas con estado predecible." },
      { title: "Java y Spring Boot", detail: "Servicios robustos con control transaccional y validación declarativa." },
      { title: "HTML/CSS (Bootstrap)", detail: "Componentes responsivos, grid/flex y theming accesible." },
      { title: "Python (Flask)", detail: "Servicios ligeros para integración y scripts de automatización/ETL." },
      { title: "Bash", detail: "Automatización de tareas CI/CD y utilidades de observabilidad." },
    ],
  },
  {
    name: "Protocolos",
    items: [
      { title: "TCP/IP y serial", detail: "Diseño de tramas, control de tiempo y recuperación de sesión." },
      { title: "HTTP (GET/POST/PUT/DELETE)", detail: "Modelado idempotente, paginación y negociación de contenido." },
      { title: "JSON", detail: "Esquemas compactos y validación para interoperabilidad HMI/servicios." },
    ],
  },
  {
    name: "Paquetes computacionales",
    items: [
      { title: "Office (Word, Excel, PowerPoint, OneNote)", detail: "Documentación técnica, tableros y reportes versionados." },
    ],
  },
  {
    name: "Sistemas embebidos y microcomputadoras",
    items: [
      { title: "PIC 16F886, Arduino (Uno/Mega/Leonardo), ESP32", detail: "GPIO, PWM, ADC/DAC, comunicación UART/I2C/SPI y bajo consumo." },
      { title: "Raspberry Pi 3+/4", detail: "Gateways IIoT con Linux, Node-RED y contenedores para edge." },
    ],
  },
  {
    name: "Sistemas operativos",
    items: [
      { title: "Windows y Linux (RHEL/Ubuntu/Raspbian/Orange Pi OS)", detail: "Hardening básico, systemd, redes y monitoreo con logs." },
    ],
  },
  {
    name: "Control",
    items: [
      { title: "P, PI, PD, PID", detail: "Sintonía empírica (Ziegler–Nichols) y anti-windup para procesos discretos." },
    ],
  },
  {
    name: "Sistemas neumáticos",
    items: [
      { title: "Festo didáctic", detail: "Lectura de planos, válvulas 5/2, actuadores y lógica combinacional neumática." },
    ],
  },
  {
    name: "PLC",
    items: [
      { title: "Allen-Bradley 1000/1200", detail: "Ladder, temporizadores, contadores e integración HMI básica." },
      { title: "Siemens S7", detail: "Bloques de funciones y comunicación para celdas de manufactura." },
    ],
  },
];

export default function KnowledgeSection() {
  return (
    <section id="knowledge" style={{
      color: 'var(--text-color)',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      padding: '24px 0'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Conocimientos</h2>

      <div style={{
        display: 'grid',
        gap: 12,
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'
      }}>
        {groups.map((g) => (
          <details key={g.name} style={{
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
              <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>{g.name}</span>
              <ChevronDown size={16} aria-hidden style={{ opacity: 0.7 }} />
            </summary>
            <div style={{ padding: '0 12px 12px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
                {g.items.map((s) => (
                  <li key={s.title}>
                    <div style={{ fontWeight: 600 }}>• {s.title}</div>
                    <div style={{ opacity: 0.85, fontSize: 13 }}>{s.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}


