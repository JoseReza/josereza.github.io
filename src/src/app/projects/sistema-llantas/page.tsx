'use client';

import Link from "next/link";
import Image from "next/image";

export default function SistemaLlantasPage() {
  return (
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px 24px",
      background: "var(--background)",
      color: "var(--text-color)",
      minHeight: "100vh"
    }}>
      <Link href="/" style={{
        display: "inline-block",
        marginBottom: 32,
        color: "var(--text-color)",
        textDecoration: "none",
        padding: "8px 16px",
        background: "var(--hover-bg)",
        borderRadius: "6px",
        transition: "all 0.3s ease"
      }}>
        ← Volver al Portafolio
      </Link>

      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: 16,
        textAlign: "center"
      }}>
        Sistema de Llantas - Migración Web
      </h1>

      <div style={{
        textAlign: "center",
        marginBottom: 48,
        fontSize: "1.2rem",
        opacity: 0.8
      }}>
        Migración completa de sistema MS-DOS a arquitectura web moderna
      </div>

      {/* Descripción del Proyecto */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 24, textAlign: "center" }}>Descripción del Proyecto</h2>
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: 32,
          boxShadow: "0 4px 8px var(--shadow)"
        }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
            Este proyecto consistió en la migración completa de un sistema de gestión de llantas desde MS-DOS
            a una arquitectura web moderna. La solución implementa tecnologías actuales para mejorar la
            experiencia del usuario, la mantenibilidad del sistema y la escalabilidad.
          </p>
          <div style={{ marginTop: 16 }}>
            <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Stack de herramientas utilizado:</h4>
            <ul style={{ fontSize: "0.95rem", lineHeight: 1.6, opacity: 0.9, margin: 0, paddingLeft: 20 }}>
              <li>VSCode y Cursor (entorno de desarrollo)</li>
              <li>Next.js con Typescript y Tailwind CSS (frontend)</li>
              <li>Python y FastAPI (API)</li>
              <li>MS SQL Server (base de datos)</li>
              <li>Docker (contenedores)</li>
              <li>Jenkins (CI/CD)</li>
              <li>Red Hat Linux Server (despliegue)</li>
            </ul>
          </div>
        </div>

        <br />
      </section>

      {/* Galería de Imágenes */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 24, textAlign: "center" }}>Galería del Proyecto</h2>

        {/* Imagen 1 - Interfaz Principal */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Interfaz Principal del Sistema
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/1.png"
              alt="Interfaz principal del sistema de gestión de llantas"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Vista General:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Interfaz moderna y responsiva</li>
                <li>Navegación clara y organizada</li>
                <li>Diseño intuitivo para usuarios</li>
                <li>Compatibilidad con diferentes dispositivos</li>
                <li>Experiencia de usuario mejorada</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen 2 - Órdenes de compra */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Órdenes de Compra - Registro de Llantas
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/2.png"
              alt="Listado de órdenes de compra con folios, proveedor, fecha, almacén y estado"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Qué se ve aquí:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Folio de orden y número de llantas en el folio</li>
                <li>Proveedor, fecha, almacén y costo</li>
                <li>Tipo de movimiento: Ingreso</li>
                <li>Datos de factura y orden de compra SAP</li>
                <li>Detalle expandible con cada llanta del folio</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen 3 - Catálogo de llantas */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Catálogo de Llantas - Movimientos y Semáforos
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/3.png"
              alt="Catálogo de llantas con panel de movimientos y semáforos por llanta"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Qué se ve aquí:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Listado por llanta con marca, medida, DOT, almacén y estado</li>
                <li>Profundidad central/externa/interna por registro</li>
                <li>Panel de Movimientos con detalle por fecha y usuario</li>
                <li>Panel de Semáforos con presión y profundidad actuales</li>
                <li>Acceso a "Ver detalles" por cada registro</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen 4 - Gráficas RFID asignados */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Gráficas - RFID Asignados
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/4.png"
              alt="Tablero de gráficas con progreso de asignación de RFID a llantas, carros y remolques"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Indicadores mostrados:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Objetos asignados vs objetivo</li>
                <li>Llantas, carros y remolques con progreso circular</li>
                <li>Tarjetas resumen por categoría</li>
                <li>Leyendas y valores por cada indicador</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen 5 - Kilometrajes de llantas */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Kilometrajes de Llantas
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/5.png"
              alt="Pantalla de kilometrajes con tabla de periodo y gráfico del costo por kilómetro"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Qué se ve aquí:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Tabla de trayecto con fechas, kilómetros y precio aplicado</li>
                <li>Cálculo de costo por kilómetro</li>
                <li>Gráfico con kms recorridos</li>
                <li>Búsqueda por Llanta ID</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen 6 - Semáforos de carros */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Semáforos - Carro T-1650
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/6.png"
              alt="Tabla de semáforos del carro con posiciones y métricas por llanta"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Indicadores por posición:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Profundidad (32vo/in) con semáforo</li>
                <li>Presión (PSI) con semáforo</li>
                <li>Fecha del último semáforo</li>
                <li>Días de diferencia por mantenimiento</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen 7 - Transferencia entre Almacenes */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Transferencia entre Almacenes
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/7.png"
              alt="Pantalla de transferencia entre almacenes con selección de destino y lista de llantas"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Flujo de Transferencia:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Selección de almacén destino con buscador</li>
                <li>Búsqueda de llantas y agregado a la selección</li>
                <li>Listado de llantas seleccionadas con columnas ID, Marca, Medida, Almacén y Último movimiento</li>
                <li>Acciones por fila: remover elemento de la selección</li>
                <li>Controles de Buscar y Limpiar para filtrar resultados</li>
                <li>Confirmación final con botón "Transferir Llantas"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen 8 - Desmontaje */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Desmontaje de Llanta
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/8.png"
              alt="Modal de desmontaje con datos de la llanta, almacén destino y confirmación"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Campos del formulario:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Llanta, marca y medida</li>
                <li>Profundidades central/externa/interna</li>
                <li>Fecha y hora automáticas</li>
                <li>Causa de desmontaje y tipo</li>
                <li>Almacén de destino y comentario</li>
                <li>Botón de confirmación "Desmontar"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen 9 - Montaje */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
            Montaje de Llanta
          </h3>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 4px 8px var(--shadow)"
          }}>
            <Image
              src="/images/sistema-llantas/9.png"
              alt="Modal de montaje con selección de llanta, profundidades y confirmación"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
            <div style={{ marginTop: 16 }}>
              <h4 style={{ fontSize: "1rem", marginBottom: 8, color: "var(--text-color)" }}>Campos del formulario:</h4>
              <ul style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0, paddingLeft: 20 }}>
                <li>Selector de llanta por ID, Folio de Orden y Marca</li>
                <li>Datos de llanta: Marca y Medida</li>
                <li>Captura de profundidades: Central, Externa e Interna</li>
                <li>Fecha y hora con opción de uso automático</li>
                <li>Comentario opcional</li>
                <li>Botón de confirmación "Montar"</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* Resultados del Proyecto */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 24, textAlign: "center" }}>Resultados del Proyecto</h2>
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: 32,
          boxShadow: "0 4px 8px var(--shadow)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24
          }}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "#10b981", fontSize: "2rem", margin: "0 0 8px" }}>100%</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>Migración exitosa de datos históricos</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "#3b82f6", fontSize: "2rem", margin: "0 0 8px" }}>80%</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>Reducción en tiempo de reportes</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "#8b5cf6", fontSize: "2rem", margin: "0 0 8px" }}>10x</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>Mejora en experiencia de usuario</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "#f59e0b", fontSize: "2rem", margin: "0 0 8px" }}>100</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>Usuarios concurrentes soportados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Información del Proyecto */}
      <section style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: 32,
        boxShadow: "0 4px 8px var(--shadow)",
        textAlign: "center"
      }}>
        <h3 style={{ marginBottom: 16 }}>Información del Proyecto</h3>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          flexWrap: "wrap",
          color: "var(--text-color)",
          opacity: 0.8
        }}>
          <span><strong>Estado:</strong> Completado</span>
          <span><strong>Duración:</strong> 3 meses</span>
          <span><strong>Rol:</strong> Full Stack Developer</span>
        </div>
      </section>
    </div >
  );
}