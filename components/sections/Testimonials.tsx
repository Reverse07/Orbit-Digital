'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ArrowLeft, ArrowRight, TrendingUp, ExternalLink } from 'lucide-react'

const testimonials = [
  {
    name: 'Ernesto Arroyo',
    role: 'Gerente General',
    company: 'Construcciones Generales LUDIER',
    avatar: 'EA',
    color: '#f59e0b',
    stars: 5,
    text: 'Antes no teníamos presencia en internet y los clientes no nos encontraban. Orbit Digital nos hizo el sitio web y ahora recibimos consultas de personas que nos buscan en Google. El sitio quedó muy profesional y representa bien lo que hacemos.',
    result: 'Presencia profesional en internet desde el primer mes',
    url: 'https://reverse07.github.io/modular-web-base/index.html',
  },
  {
    name: 'Directiva del Club',
    role: 'Club de Fútbol — Liga Distrital de Chorrillos',
    company: 'Deportivo Huracán La Campiña',
    avatar: 'DH',
    color: '#4f7cff',
    stars: 5,
    text: 'Nos construyeron una plataforma completa para el club. Los hinchas pueden ver la tabla de posiciones, los partidos y la plantilla desde el celular, todo actualizado en tiempo real. El club ganó mucha visibilidad en el distrito.',
    result: 'Plataforma activa con tabla de posiciones en tiempo real',
    url: 'https://huracan-lc.vercel.app/',
  },
  {
    name: 'Administración',
    role: 'Sistema de Gestión Interna',
    company: 'Clínica Médica',
    avatar: 'CM',
    color: '#06d6a0',
    stars: 5,
    text: 'Manejábamos todo en Excel y se perdía información constantemente. El sistema que nos hicieron tiene roles para el doctor, el paciente y el administrador. Ahora todo está centralizado y el equipo trabaja mucho más ordenado y rápido.',
    result: 'Cero pérdida de información desde la implementación',
    url: null,
  },
]

const stats = [
  { value: '5+', label: 'Proyectos entregados' },
  { value: '100%', label: 'Clientes satisfechos' },
  { value: '5★', label: 'Calificación promedio' },
  { value: '< 24h', label: 'Tiempo de respuesta' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const cur = testimonials[active]

  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(i => (i + 1) % testimonials.length)

  return (
    <section id="testimonios" style={{ background: '#0a0d18', padding: '110px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%' }}>

        {/* ── Header ── */}
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
            Testimonios
          </span>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
          }}>
            Lo que dicen quienes{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f7cff, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              ya confiaron en nosotros
            </span>
          </h2>

          <p style={{ color: '#8a97b0', fontSize: 16, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            No te decimos lo buenos que somos. Te lo dicen ellos.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0, marginBottom: 48, borderRadius: 18, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '24px 20px', textAlign: 'center',
              background: 'rgba(255,255,255,0.02)',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 26, marginBottom: 4,
                background: 'linear-gradient(135deg, #fff, #a5b8ff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {s.value}
              </div>
              <div style={{ color: '#8a97b0', fontSize: 12 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Layout principal ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr',
          gap: 20, alignItems: 'start',
        }} className="testimonial-layout">

          {/* Lista de clientes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                onClick={() => setActive(i)}
                whileHover={{ x: 3 }}
                style={{
                  padding: '16px 20px', borderRadius: 16, cursor: 'pointer',
                  border: `1px solid ${active === i ? t.color + '40' : 'rgba(255,255,255,0.06)'}`,
                  background: active === i
                    ? `linear-gradient(135deg, ${t.color}10, ${t.color}04)`
                    : 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s',
                  display: 'flex', alignItems: 'center', gap: 14,
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Línea lateral activa */}
                {active === i && (
                  <motion.div layoutId="clientLine" style={{
                    position: 'absolute', left: 0, top: '15%', bottom: '15%',
                    width: 3, borderRadius: 3,
                    background: `linear-gradient(180deg, ${t.color}, ${t.color}44)`,
                  }} />
                )}

                {/* Avatar */}
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff',
                  background: active === i
                    ? `linear-gradient(135deg, ${t.color}, ${t.color}88)`
                    : 'rgba(255,255,255,0.06)',
                  border: `2px solid ${active === i ? t.color + '60' : 'rgba(255,255,255,0.08)'}`,
                  transition: 'all 0.3s',
                }}>
                  {t.avatar}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
                    color: active === i ? '#fff' : '#c8d0e0',
                    marginBottom: 2, transition: 'color 0.3s',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    color: '#8a97b0', fontSize: 11,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {t.company}
                  </div>
                </div>

                {/* Estrellas mini */}
                <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={9}
                      color={active === i ? '#f59e0b' : '#2d3748'}
                      fill={active === i ? '#f59e0b' : '#2d3748'}
                    />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Controles prev/next */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
              <motion.button
                onClick={prev} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{
                  width: 38, height: 38, borderRadius: 10, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)', color: '#8a97b0',
                }}
              >
                <ArrowLeft size={15} />
              </motion.button>

              <motion.button
                onClick={next} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{
                  width: 38, height: 38, borderRadius: 10, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)', color: '#8a97b0',
                }}
              >
                <ArrowRight size={15} />
              </motion.button>

              {/* Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 6 }}>
                {testimonials.map((_, i) => (
                  <div
                    key={i} onClick={() => setActive(i)}
                    style={{
                      width: active === i ? 20 : 6, height: 6,
                      borderRadius: 3, cursor: 'pointer',
                      background: active === i ? cur.color : 'rgba(255,255,255,0.15)',
                      transition: 'all 0.3s',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Panel del testimonio activo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{
                padding: '36px 40px', borderRadius: 20,
                background: `linear-gradient(135deg, ${cur.color}10, ${cur.color}03)`,
                border: `1px solid ${cur.color}25`,
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow decorativo */}
              <div style={{
                position: 'absolute', top: -60, right: -60,
                width: 240, height: 240, borderRadius: '50%',
                background: `radial-gradient(circle, ${cur.color}15, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Quote icon */}
              <div style={{
                width: 46, height: 46, borderRadius: 13, marginBottom: 20,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${cur.color}18`, border: `1px solid ${cur.color}30`,
              }}>
                <Quote size={20} color={cur.color} />
              </div>

              {/* Estrellas */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 18 }}>
                {[...Array(cur.stars)].map((_, i) => (
                  <Star key={i} size={15} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>

              {/* Texto del testimonio */}
              <p style={{
                color: '#d1d9e6', fontSize: 16, lineHeight: 1.85,
                marginBottom: 24, fontStyle: 'italic',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
              }}>
                "{cur.text}"
              </p>

              {/* Resultado obtenido */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '9px 16px', borderRadius: 10, marginBottom: 28,
                background: `${cur.color}12`, border: `1px solid ${cur.color}25`,
              }}>
                <TrendingUp size={14} color={cur.color} />
                <span style={{ color: cur.color, fontSize: 13, fontWeight: 600 }}>
                  {cur.result}
                </span>
              </div>

              {/* Autor + link */}
              <div style={{
                paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  {/* Avatar */}
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff',
                    background: `linear-gradient(135deg, ${cur.color}, ${cur.color}88)`,
                    border: `2px solid ${cur.color}50`,
                    boxShadow: `0 0 16px ${cur.color}25`,
                  }}>
                    {cur.avatar}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Syne, sans-serif', fontWeight: 700,
                      fontSize: 15, color: '#fff', marginBottom: 3,
                    }}>
                      {cur.name}
                    </div>
                    <div style={{ color: '#8a97b0', fontSize: 12 }}>
                      {cur.role} ·{' '}
                      <span style={{ color: cur.color }}>{cur.company}</span>
                    </div>
                  </div>
                </div>

                {/* Link al proyecto real */}
                {cur.url && (
                  <motion.a
                    href={cur.url} target="_blank" rel="noopener noreferrer"
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      padding: '9px 16px', borderRadius: 10, textDecoration: 'none',
                      background: `${cur.color}12`,
                      border: `1px solid ${cur.color}30`,
                      color: cur.color, fontSize: 12, fontWeight: 600,
                      transition: 'all 0.2s',
                    }}
                  >
                    Ver proyecto
                    <ExternalLink size={12} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-layout { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}