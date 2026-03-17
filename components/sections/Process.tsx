'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Paintbrush, Code2, Rocket, ArrowRight, CheckCircle2, Clock } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Descubrimiento',
    subtitle: 'Entendemos tu negocio',
    color: '#4f7cff',
    duration: '1–2 días',
    description: 'Antes de escribir una sola línea de código, nos sentamos a entender tu negocio, tus clientes y qué querés lograr. Nada de suposiciones.',
    details: [
      'Reunión inicial para entender tu negocio',
      'Definimos exactamente qué se va a construir',
      'Acordamos plazos y presupuesto sin sorpresas',
      'Te explicamos todo en términos simples',
    ],
    outcome: 'Al terminar esta etapa tenés un plan claro de qué se va a hacer, cómo y cuándo.',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Diseño',
    subtitle: 'Así va a verse tu proyecto',
    color: '#7c3aed',
    duration: '3–5 días',
    description: 'Te mostramos cómo va a verse antes de construirlo. Podés pedir cambios, ajustar colores, mover secciones — hasta que quede exactamente como lo imaginás.',
    details: [
      'Diseño visual completo antes de programar',
      'Podés ver y aprobar cómo queda',
      'Ajustes ilimitados hasta que estés conforme',
      'Diseño adaptado a tu marca e identidad',
    ],
    outcome: 'Aprobás el diseño y avanzamos con la tranquilidad de que el resultado final va a ser lo que esperabas.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrollo',
    subtitle: 'Lo construimos con precisión',
    color: '#06d6a0',
    duration: '1–3 semanas',
    description: 'Con el diseño aprobado, construimos tu proyecto. Te mantenemos informado en todo momento — no desaparecemos hasta la entrega.',
    details: [
      'Construcción según el diseño aprobado',
      'Actualizaciones periódicas de avance',
      'Podés ver el progreso en tiempo real',
      'Pruebas en celular, tablet y computadora',
    ],
    outcome: 'Tu proyecto construido exactamente como se acordó, sin cambios sorpresa de último momento.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lanzamiento',
    subtitle: 'Tu proyecto, en vivo',
    color: '#f59e0b',
    duration: '1–2 días',
    description: 'Revisamos todo, hacemos las pruebas finales y lanzamos. Te capacitamos para que puedas manejarlo vos mismo, y te acompañamos los primeros días.',
    details: [
      'Revisión y pruebas finales completas',
      'Publicación y puesta en marcha',
      'Te enseñamos a usar y administrar tu proyecto',
      'Soporte los primeros días post-lanzamiento',
    ],
    outcome: 'Tu proyecto en vivo, funcionando perfecto, y vos con el control total sobre él.',
  },
]

export default function Process() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="proceso" style={{ background: '#080b12', padding: '110px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 100,
            background: 'rgba(79,124,255,0.08)', border: '1px solid rgba(79,124,255,0.2)',
            color: '#a5b8ff', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4f7cff', display: 'inline-block' }} />
            Nuestro Proceso
          </span>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
          }}>
            Sabés en todo momento{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f7cff, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              qué está pasando
            </span>
          </h2>

          <p style={{ color: '#8a97b0', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Sin sorpresas, sin desaparecer a la mitad del proyecto. Un proceso claro y transparente de principio a fin.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {/* Línea conectora */}
          <div style={{
            position: 'absolute',
            top: 36, left: '6%', right: '6%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(79,124,255,0.2), rgba(124,58,237,0.2), transparent)',
            pointerEvents: 'none',
          }} className="process-line" />

          {/* Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }} className="process-grid">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = active === i
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
                >
                  {/* Card */}
                  <motion.div
                    onClick={() => setActive(isActive ? null : i)}
                    whileHover={{ y: -4 }}
                    style={{
                      padding: '24px 20px',
                      borderRadius: 18,
                      border: `1px solid ${isActive ? step.color + '45' : 'rgba(255,255,255,0.06)'}`,
                      background: isActive
                        ? `linear-gradient(135deg, ${step.color}12, ${step.color}04)`
                        : 'rgba(255,255,255,0.02)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      position: 'relative', overflow: 'hidden',
                    }}
                  >
                    {/* Glow activo */}
                    {isActive && (
                      <div style={{
                        position: 'absolute', inset: 0, pointerEvents: 'none',
                        background: `radial-gradient(ellipse at top, ${step.color}10, transparent 70%)`,
                      }} />
                    )}

                    {/* Número */}
                    <div style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', marginBottom: 18,
                    }}>
                      <span style={{
                        fontFamily: 'Syne, sans-serif', fontWeight: 900,
                        fontSize: 13, letterSpacing: '0.05em',
                        color: isActive ? step.color : 'rgba(255,255,255,0.2)',
                        transition: 'color 0.3s',
                      }}>
                        {step.number}
                      </span>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 4,
                        padding: '3px 8px', borderRadius: 100,
                        background: `${step.color}12`,
                        border: `1px solid ${step.color}25`,
                      }}>
                        <Clock size={10} color={step.color} />
                        <span style={{ color: step.color, fontSize: 10, fontWeight: 600 }}>
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Icono */}
                    <div style={{
                      width: 52, height: 52, borderRadius: 16, marginBottom: 16,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isActive ? `${step.color}20` : `${step.color}10`,
                      border: `1px solid ${isActive ? step.color + '40' : step.color + '20'}`,
                      transition: 'all 0.3s',
                    }}>
                      <Icon size={22} color={step.color} />
                    </div>

                    <h3 style={{
                      fontFamily: 'Syne, sans-serif', fontWeight: 700,
                      fontSize: 16, color: '#fff', marginBottom: 6,
                    }}>
                      {step.title}
                    </h3>

                    <p style={{ color: step.color, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>
                      {step.subtitle}
                    </p>

                    <p style={{ color: '#8a97b0', fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                      {step.description}
                    </p>

                    {/* Indicador expandir */}
                    <div style={{
                      marginTop: 16, display: 'flex', alignItems: 'center', gap: 6,
                      color: isActive ? step.color : '#4a5568',
                      fontSize: 12, fontWeight: 600, transition: 'color 0.3s',
                    }}>
                      <span>{isActive ? 'Ver menos' : 'Ver detalle'}</span>
                      <motion.div animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration: 0.2 }}>
                        <ArrowRight size={13} />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Panel expandible */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          padding: '20px', borderRadius: 16,
                          background: `${step.color}08`,
                          border: `1px solid ${step.color}20`,
                        }}>
                          {/* Checklist */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                            {step.details.map((d, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.06 }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}
                              >
                                <CheckCircle2 size={13} color={step.color} style={{ flexShrink: 0, marginTop: 2 }} />
                                <span style={{ color: '#c8d0e0', fontSize: 12, lineHeight: 1.5 }}>{d}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Outcome */}
                          <div style={{
                            padding: '10px 14px', borderRadius: 10,
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                          }}>
                            <p style={{ color: '#a0aec0', fontSize: 12, lineHeight: 1.6, margin: 0 }}>
                              <span style={{ color: '#fff', fontWeight: 600 }}>Resultado: </span>
                              {step.outcome}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Banner inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: 56, borderRadius: 20,
            padding: '32px 40px',
            background: 'linear-gradient(135deg, rgba(79,124,255,0.07), rgba(124,58,237,0.07))',
            border: '1px solid rgba(79,124,255,0.12)',
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between', gap: 20,
          }}
        >
          <div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: 18, color: '#fff', marginBottom: 6,
            }}>
              ¿Listo para empezar?
            </h3>
            <p style={{ color: '#8a97b0', fontSize: 14, margin: 0 }}>
              El primer paso es una charla sin costo.{' '}
              <span style={{ color: '#fff', fontWeight: 600 }}>Sin presiones, sin compromisos.</span>
            </p>
          </div>

          <motion.a
            href="#contacto" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 12, textDecoration: 'none',
              background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
              color: '#fff', fontSize: 14, fontWeight: 600,
              boxShadow: '0 0 24px rgba(79,124,255,0.3)',
              flexShrink: 0,
            }}
          >
            Empezar ahora <ArrowRight size={15} />
          </motion.a>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}