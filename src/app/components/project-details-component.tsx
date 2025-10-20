import Link from "next/link";

export default function SistemaLlantasPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <Link href="/projects" style={{ display: "inline-block", marginBottom: 24, color: "#666" }}>
        ← Volver a Proyectos
      </Link>
      
      <h1>Sistema de Llantas - Migración Web</h1>
      
      <div style={{ marginBottom: 32 }}>
        <h2>Descripción del Proyecto</h2>
        <p>
          Migración completa de un sistema de gestión de llantas desde MS-DOS a una 
          arquitectura web moderna, implementando tecnologías actuales para mejorar 
          la experiencia del usuario y la mantenibilidad del sistema.
        </p>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h2>Tecnologías Utilizadas</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          <div style={{ border: "1px solid #eaeaea", borderRadius: 8, padding: 16 }}>
            <h3>Frontend</h3>
            <ul>
              <li>Next.js 14+ (React)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Componentes reutilizables</li>
            </ul>
          </div>
          
          <div style={{ border: "1px solid #eaeaea", borderRadius: 8, padding: 16 }}>
            <h3>Backend</h3>
            <ul>
              <li>Python (FastAPI)</li>
              <li>SQLAlchemy ORM</li>
              <li>PostgreSQL</li>
              <li>Autenticación JWT</li>
            </ul>
          </div>
          
          <div style={{ border: "1px solid #eaeaea", borderRadius: 8, padding: 16 }}>
            <h3>DevOps</h3>
            <ul>
              <li>Docker & Docker Compose</li>
              <li>GitHub Actions CI/CD</li>
              <li>Nginx (reverse proxy)</li>
              <li>Despliegue en VPS</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h2>Características Principales</h2>
        <ul style={{ lineHeight: 1.6 }}>
          <li><strong>Migración de datos:</strong> Scripts automatizados para migrar información desde archivos MS-DOS</li>
          <li><strong>Interfaz moderna:</strong> Dashboard responsivo con gráficos y reportes en tiempo real</li>
          <li><strong>API RESTful:</strong> Endpoints bien documentados para integración con otros sistemas</li>
          <li><strong>Autenticación segura:</strong> Sistema de usuarios con roles y permisos</li>
          <li><strong>Reportes avanzados:</strong> Generación de PDFs y exportación a Excel</li>
          <li><strong>Backup automático:</strong> Respaldo programado de la base de datos</li>
        </ul>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h2>Beneficios de la Migración</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          <div style={{ textAlign: "center", padding: 16 }}>
            <h3 style={{ color: "#2563eb" }}>Accesibilidad</h3>
            <p>Acceso desde cualquier navegador web, sin instalación local</p>
          </div>
          <div style={{ textAlign: "center", padding: 16 }}>
            <h3 style={{ color: "#16a34a" }}>Escalabilidad</h3>
            <p>Arquitectura preparada para múltiples usuarios simultáneos</p>
          </div>
          <div style={{ textAlign: "center", padding: 16 }}>
            <h3 style={{ color: "#dc2626" }}>Mantenimiento</h3>
            <p>Código modular y documentado, fácil de actualizar</p>
          </div>
          <div style={{ textAlign: "center", padding: 16 }}>
            <h3 style={{ color: "#7c3aed" }}>Integración</h3>
            <p>API REST permite integración con otros sistemas</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h2>Arquitectura del Sistema</h2>
        <div style={{ 
          background: "#f8fafc", 
          border: "1px solid #e2e8f0", 
          borderRadius: 8, 
          padding: 24,
          textAlign: "center"
        }}>
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ background: "#dbeafe", padding: "12px 20px", borderRadius: 6 }}>
              <strong>Frontend</strong><br />
              Next.js + TypeScript
            </div>
            <div style={{ fontSize: "24px" }}>↔️</div>
            <div style={{ background: "#dcfce7", padding: "12px 20px", borderRadius: 6 }}>
              <strong>API</strong><br />
              Python FastAPI
            </div>
            <div style={{ fontSize: "24px" }}>↔️</div>
            <div style={{ background: "#fef3c7", padding: "12px 20px", borderRadius: 6 }}>
              <strong>Database</strong><br />
              PostgreSQL
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: "#f0f9ff", 
        border: "1px solid #0ea5e9", 
        borderRadius: 8, 
        padding: 20,
        marginBottom: 32
      }}>
        <h3 style={{ margin: "0 0 12px", color: "#0369a1" }}>Resultados del Proyecto</h3>
        <ul style={{ margin: 0, lineHeight: 1.6 }}>
          <li>✅ Migración exitosa de 100% de los datos históricos</li>
          <li>✅ Reducción del 80% en tiempo de generación de reportes</li>
          <li>✅ Interfaz 10x más intuitiva que el sistema MS-DOS</li>
          <li>✅ Soporte para múltiples usuarios concurrentes</li>
          <li>✅ Sistema de respaldo automático implementado</li>
        </ul>
      </div>

      <div style={{ 
        borderTop: "1px solid #eaeaea", 
        paddingTop: 24, 
        textAlign: "center",
        color: "#666"
      }}>
        <p>
          <strong>Estado:</strong> Completado | 
          <strong> Duración:</strong> 3 meses | 
          <strong> Rol:</strong> Full Stack Developer
        </p>
      </div>
    </div>
  );
}
