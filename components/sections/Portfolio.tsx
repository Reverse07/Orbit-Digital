'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Globe, Monitor, Database, Users } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Construcciones Generales LUDIER',
    category: 'Página Web Corporativa',
    description: 'Sitio web profesional para empresa peruana especializada en estructuras metálicas. Incluye galería de proyectos reales, servicios, testimonios y formulario de contacto.',
    url: 'https://reverse07.github.io/modular-web-base/index.html',
    color: '#f59e0b',
    icon: Globe,
    image: '/img/paginaLudier.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    highlights: [
      'Galería de obras reales con fotos de proyectos',
      'Secciones de servicios y proyectos destacados',
      'Formulario de contacto directo',
      'Optimizado para celular y escritorio',
    ],
    status: 'En producción',
    type: 'web',
  },
  {
    id: 2,
    title: 'Deportivo Huracán La Campiña',
    category: 'Plataforma Deportiva',
    description: 'Plataforma completa para club de fútbol de la Liga Distrital de Chorrillos. Tabla de posiciones en tiempo real, calendario de partidos, plantilla de jugadores y estadísticas de temporada.',
    url: 'https://huracan-lc.vercel.app/',
    color: '#4f7cff',
    icon: Globe,
    image: '/img/paginaHuracan.png',
    tags: ['Next.js', 'Vercel', 'Responsive', 'Dashboard'],
    highlights: [
      'Tabla de posiciones actualizada en tiempo real',
      'Calendario y resultados de partidos',
      'Perfiles de jugadores con estadísticas',
      'Panel de administración para el club',
    ],
    status: 'En producción',
    type: 'web',
  },
  {
    id: 3,
    title: 'Sistema Web — Clínica Médica',
    category: 'Sistema Web',
    description: 'Sistema de gestión hospitalaria con tres roles diferenciados: Administrador, Doctor y Paciente. Gestión de citas, historial médico, recetas y reportes administrativos completos.',
    url: null,
    color: '#06d6a0',
    icon: Monitor,
    image: null,
    tags: ['React', 'Spring Boot', 'Supabase', 'Roles'],
    highlights: [
      'Panel de administrador con reportes completos',
      'Agenda de citas para doctores',
      'Historial médico y recetas por paciente',
      'Control de acceso por roles',
    ],
    status: 'Entregado',
    type: 'system',
  },
  {
    id: 4,
    title: 'Sistema de Ventas — Escritorio',
    category: 'Aplicación de Escritorio',
    description: 'Aplicación de escritorio para gestión de ventas con control de inventario, facturación, reportes de caja y base de datos relacional. Desarrollada en Java con interfaz intuitiva.',
    url: null,
    color: '#7c3aed',
    icon: Database,
    image: null,
    tags: ['Java', 'MySQL', 'JavaFX', 'Desktop'],
    highlights: [
      'Gestión de productos e inventario',
      'Facturación y comprobantes de venta',
      'Reportes de caja y ventas por período',
      'Base de datos relacional optimizada',
    ],
    status: 'Entregado',
    type: 'system',
  },
  {
    id: 5,
    title: 'Sistema de Biblioteca',
    category: 'Sistema Web',
    description: 'Sistema completo de gestión bibliotecaria con catálogo de libros, control de préstamos, registro de usuarios y reportes de disponibilidad. Base de datos PostgreSQL.',
    url: null,
    color: '#ec4899',
    icon: Users,
    image: null,
    tags: ['Java', 'PostgreSQL', 'JDBC', 'Desktop'],
    highlights: [
      'Catálogo digital de libros y recursos',
      'Control de préstamos y devoluciones',
      'Registro y gestión de usuarios',
      'Reportes de disponibilidad y mora',
    ],
    status: 'Entregado',
    type: 'system',
  },
]

const filters = ['Todos', 'Página Web', 'Sistema Web', 'Aplicación de Escritorio', 'Plataforma Deportiva']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portafolio" style={{ background: '#080b12', padding: '110px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 100,
            background: 'rgba(79,124,255,0.08)', border: '1px solid rgba(79,124,255,0.2)',
            color: '#a5b8ff', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4f7cff', display: 'inline-block' }} />
            Portafolio
          </span>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
          }}>
            Proyectos reales,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f7cff, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              resultados reales
            </span>
          </h2>

          <p style={{ color: '#8a97b0', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Cada proyecto fue construido para resolver un problema concreto. Esto es lo que podemos hacer por tu negocio.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 48 }}
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 18px', borderRadius: 100, cursor: 'pointer',
                fontSize: 13, fontWeight: 500, transition: 'all 0.25s',
                background: activeFilter === f
                  ? 'linear-gradient(135deg, #4f7cff, #7c3aed)'
                  : 'rgba(255,255,255,0.04)',
                border: activeFilter === f
                  ? '1px solid transparent'
                  : '1px solid rgba(255,255,255,0.08)',
                color: activeFilter === f ? '#fff' : '#8a97b0',
                boxShadow: activeFilter === f ? '0 0 16px rgba(79,124,255,0.3)' : 'none',
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 20,
            }}
            className="portfolio-grid"
          >
            {filtered.map((project, i) => {
              const Icon = project.icon
              const isHovered = hovered === project.id
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    borderRadius: 20, overflow: 'hidden',
                    border: `1px solid ${isHovered ? project.color + '35' : 'rgba(255,255,255,0.06)'}`,
                    background: '#111827',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}20` : 'none',
                  }}
                >
                  {/* Imagen/Preview */}
                  <div style={{
                    height: 180, position: 'relative', overflow: 'hidden',
                    background: `linear-gradient(135deg, ${project.color}18, ${project.color}06)`,
                  }}>
                    {/* Imagen real si existe */}
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
                          sizes="(max-width: 640px) 100vw, 340px"
                        />
                        {/* Overlay degradado para legibilidad de badges */}
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: `linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)`,
                        }} />
                      </>
                    ) : (
                      <>
                        {/* Patrón decorativo (solo para proyectos sin imagen) */}
                        <div style={{
                          position: 'absolute', inset: 0,
                          backgroundImage: `radial-gradient(${project.color}20 1px, transparent 1px)`,
                          backgroundSize: '24px 24px',
                        }} />
                        <div style={{
                          position: 'absolute', bottom: -20, right: -20,
                          width: 140, height: 140, borderRadius: '50%',
                          background: `radial-gradient(circle, ${project.color}18, transparent 70%)`,
                        }} />
                        <div style={{
                          position: 'absolute', top: -10, left: -10,
                          width: 80, height: 80, borderRadius: '50%',
                          background: `radial-gradient(circle, ${project.color}12, transparent 70%)`,
                        }} />
                        {/* Icono central (solo sin imagen) */}
                        <div style={{
                          position: 'absolute', top: '50%', left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 64, height: 64, borderRadius: 18,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: `${project.color}20`,
                          border: `1px solid ${project.color}35`,
                          boxShadow: `0 0 24px ${project.color}20`,
                        }}>
                          <Icon size={28} color={project.color} />
                        </div>
                      </>
                    )}

                    {/* Badge categoría */}
                    <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 2 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 600, padding: '4px 10px',
                        borderRadius: 100,
                        background: `${project.color}20`, color: project.color,
                        border: `1px solid ${project.color}35`,
                        backdropFilter: 'blur(8px)',
                      }}>
                        {project.category}
                      </span>
                    </div>

                    {/* Status */}
                    <div style={{ position: 'absolute', top: 14, right: 14, zIndex: 2 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 600, padding: '4px 10px',
                        borderRadius: 100, display: 'flex', alignItems: 'center', gap: 5,
                        background: 'rgba(6,214,160,0.12)',
                        color: '#06d6a0', border: '1px solid rgba(6,214,160,0.25)',
                        backdropFilter: 'blur(8px)',
                      }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#06d6a0', display: 'inline-block' }} />
                        {project.status}
                      </span>
                    </div>

                    {/* Link hover */}
                    {project.url && (
                      <motion.a
                        href={project.url} target="_blank" rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: 'absolute', bottom: 14, right: 14, zIndex: 2,
                          width: 36, height: 36, borderRadius: 10,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: project.color,
                          boxShadow: `0 0 16px ${project.color}50`,
                          textDecoration: 'none',
                        }}
                      >
                        <ArrowUpRight size={16} color="#fff" />
                      </motion.a>
                    )}
                  </div>

                  {/* Contenido */}
                  <div style={{ padding: '22px 24px 24px' }}>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif', fontWeight: 700,
                      fontSize: 17, color: '#fff', marginBottom: 8, lineHeight: 1.3,
                    }}>
                      {project.title}
                    </h3>

                    <p style={{ color: '#8a97b0', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <div style={{
                            width: 5, height: 5, borderRadius: '50%',
                            background: project.color, flexShrink: 0, marginTop: 6,
                          }} />
                          <span style={{ color: '#a0aec0', fontSize: 12, lineHeight: 1.5 }}>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: 11, padding: '3px 9px', borderRadius: 6,
                          background: 'rgba(255,255,255,0.05)',
                          color: '#8a97b0', border: '1px solid rgba(255,255,255,0.07)',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: 56, textAlign: 'center',
            padding: '40px', borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(79,124,255,0.07), rgba(124,58,237,0.07))',
            border: '1px solid rgba(79,124,255,0.12)',
          }}
        >
          <h3 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700,
            fontSize: 22, color: '#fff', marginBottom: 10,
          }}>
            ¿Querés que hagamos algo así para tu negocio?
          </h3>
          <p style={{ color: '#8a97b0', fontSize: 14, marginBottom: 24, maxWidth: 480, margin: '0 auto 24px' }}>
            Contanos tu idea y te decimos exactamente cómo podemos ayudarte. Sin compromiso.
          </p>
          <motion.a
            href="#contacto" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 12, textDecoration: 'none',
              background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
              color: '#fff', fontSize: 14, fontWeight: 600,
              boxShadow: '0 0 24px rgba(79,124,255,0.35)',
            }}
          >
            Hablar sobre mi proyecto <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}