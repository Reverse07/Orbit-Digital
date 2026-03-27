'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Monitor, LayoutDashboard, Zap, Headphones, Smartphone,
  ArrowRight, CheckCircle2,
  TrendingUp, Shield, Lightbulb, Target, Award
} from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Página Web Profesional',
    subtitle: 'Hacé que tus clientes te encuentren online',
    description: 'Si hoy alguien busca tu negocio en Google y no te encuentra, estás perdiendo clientes. Te creamos una página web profesional para que tu negocio genere confianza desde el primer momento.',
    color: '#4f7cff',
    gradient: 'linear-gradient(135deg, rgba(79,124,255,0.1), rgba(79,124,255,0.02))',
    badge: 'Más solicitado',
    problem: '¿Tu negocio no aparece en internet?',
    result: 'Con una web profesional vas a generar más confianza, atraer más clientes y diferenciarte de la competencia.',
    features: [
      'Tu negocio visible en Google',
      'Se ve bien en celular, tablet y computadora',
      'Tus clientes pueden contactarte con un clic',
      'Carga rápida para no perder visitas',
      'Diseño que transmite profesionalismo',
      'Dominio y hosting incluido el primer año',
      'Tu sitio protegido y seguro',
      'Te enseñamos cómo actualizarlo vos mismo',
    ],
    ideal: ['Negocios locales', 'Empresas', 'Emprendedores', 'Profesionales'],
    stats: [
      { icon: TrendingUp, text: '+40% más consultas' },
      { icon: Shield, text: 'Listo en 2–3 semanas' },
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Sistema para tu Negocio',
    subtitle: 'Organizá y controlá todo desde un solo lugar',
    description: 'Si hoy manejás tu negocio con planillas de Excel, papeles o mensajes de WhatsApp, hay una mejor manera. Te creamos un sistema a medida para gestionar clientes, pedidos o turnos de forma simple y ordenada.',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(124,58,237,0.02))',
    badge: null,
    problem: '¿Tu negocio creció pero el orden no?',
    result: 'Con tu propio sistema vas a perder menos tiempo, cometer menos errores y tener todo tu negocio bajo control.',
    features: [
      'Manejá clientes, pedidos o turnos desde la pantalla',
      'Accedé desde cualquier celular o computadora',
      'Cada empleado ve solo lo que necesita ver',
      'Reportes claros para tomar mejores decisiones',
      'Fácil de usar, sin conocimientos técnicos',
      'Tu información siempre guardada y segura',
      'Lo probamos bien antes de entregártelo',
      'Te acompañamos en los primeros días de uso',
    ],
    ideal: ['Tiendas y comercios', 'Clínicas y consultorios', 'Empresas de servicios', 'Negocios con equipo'],
    stats: [
      { icon: Shield, text: 'Ahorrás horas por semana' },
      { icon: Shield, text: 'Tu info siempre segura' },
    ],
  },
  {
    icon: Smartphone,
    title: 'Aplicación Móvil',
    subtitle: 'Tu negocio en el bolsillo de tus clientes',
    description: 'Una app propia le da a tu negocio una presencia permanente en el celular de tus clientes. Ideal para fidelizar, gestionar pedidos, enviar notificaciones y ofrecer una experiencia diferente a la competencia.',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(236,72,153,0.02))',
    badge: 'Nuevo',
    problem: '¿Tus clientes usan más el celular que la computadora?',
    result: 'Con tu propia app vas a fidelizar clientes, recibir pedidos directos y tener un canal de comunicación que siempre está a mano.',
    features: [
      'Disponible para Android e iOS',
      'Notificaciones push para llegar a tus clientes',
      'Diseño adaptado a la identidad de tu marca',
      'Catálogo de productos o servicios integrado',
      'Sistema de pedidos o reservas desde la app',
      'Panel de administración para gestionar todo',
      'Publicación en Google Play y App Store',
      'Soporte y actualizaciones incluidas',
    ],
    ideal: ['Tiendas con clientes frecuentes', 'Restaurantes y delivery', 'Negocios de servicios', 'Emprendimientos en crecimiento'],
    stats: [
      { icon: TrendingUp, text: '+60% retención de clientes' },
      { icon: Shield, text: 'Android e iOS' },
    ],
  },
  {
    icon: Zap,
    title: 'Automatización de Tareas',
    subtitle: 'Que la tecnología trabaje por vos',
    description: 'Hay tareas que tu equipo hace todos los días de forma manual que se pueden hacer solas. Enviamos respuestas automáticas, registramos datos sin que nadie los cargue y conectamos las herramientas que ya usás.',
    color: '#06d6a0',
    gradient: 'linear-gradient(135deg, rgba(6,214,160,0.1), rgba(6,214,160,0.02))',
    badge: 'Alto ahorro de tiempo',
    problem: '¿Tu equipo pierde tiempo en tareas repetitivas?',
    result: 'Automatizando procesos vas a liberar tiempo de tu equipo para enfocarse en lo que realmente hace crecer el negocio.',
    features: [
      'Respuestas automáticas a consultas de clientes',
      'Los datos del formulario llegan directo donde los necesitás',
      'Notificaciones automáticas por WhatsApp o email',
      'Reportes que se generan solos',
      'Las herramientas que ya usás trabajando juntas',
      'Menos errores humanos en los procesos',
      'Todo funciona solo, las 24 horas',
    ],
    ideal: ['Negocios con muchas consultas', 'Empresas con procesos repetitivos', 'Equipos que quieren ser más productivos'],
    stats: [
      { icon: TrendingUp, text: 'Hasta 70% menos trabajo manual' },
      { icon: Shield, text: 'Funciona 24/7 solo' },
    ],
  },
  {
    icon: Headphones,
    title: 'Mantenimiento y Soporte',
    subtitle: 'Tu sitio siempre funcionando, sin preocupaciones',
    description: 'Una página web o sistema necesita cuidado para seguir funcionando bien. Nos ocupamos de todo: que no se caiga, que esté seguro y que tenga los cambios que necesitás. Vos te dedicás a tu negocio, nosotros al resto.',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))',
    badge: null,
    problem: '¿Quién se ocupa de tu web cuando algo falla?',
    result: 'Con nuestro soporte tu sitio siempre va a estar disponible, actualizado y seguro. Sin sorpresas ni dolores de cabeza.',
    features: [
      'Vigilamos tu sitio para que no se caiga',
      'Actualizaciones para que todo funcione bien',
      'Si algo falla, lo resolvemos rápido',
      'Cambios de texto o fotos cuando los necesitás',
      'Tu sitio protegido contra ataques',
      'Copias de seguridad automáticas',
      'Alguien real a quien llamar cuando tenés un problema',
    ],
    ideal: ['Negocios con sitio web activo', 'Empresas con sistema en uso', 'Quienes no tienen equipo técnico propio'],
    stats: [
      { icon: Shield, text: '99.9% tiempo activo' },
      { icon: Shield, text: 'Respuesta en menos de 24hs' },
    ],
  },
]

const whyUs = [
  { icon: Lightbulb, text: 'Te explicamos todo en palabras simples, sin tecnicismos' },
  { icon: Zap,        text: 'Entregamos rápido y cumplimos los plazos acordados' },
  { icon: Headphones, text: 'Estamos disponibles cuando nos necesitás' },
  { icon: Target,     text: 'Nos enfocamos en resultados reales para tu negocio' },
  { icon: Shield,     text: 'Soporte técnico confiable después de cada entrega' },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const cur = services[active]

  return (
    <section id="servicios" style={{ background: '#0a0d18', padding: '110px 0', overflow: 'hidden' }}>
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
            Nuestros Servicios
          </span>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
          }}>
            Soluciones digitales pensadas{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f7cff, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              para tu negocio
            </span>
          </h2>

          <p style={{ color: '#8a97b0', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            Sin tecnicismos ni complicaciones. Te decimos exactamente qué problema resuelve cada servicio y qué vas a ganar con él.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 20, alignItems: 'start' }} className="services-grid">

          {/* Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {services.map((s, i) => {
              const Icon = s.icon
              const isActive = active === i
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => setActive(i)}
                  style={{
                    position: 'relative', cursor: 'pointer',
                    padding: '18px 22px', borderRadius: 16,
                    border: `1px solid ${isActive ? s.color + '45' : 'rgba(255,255,255,0.06)'}`,
                    background: isActive ? s.gradient : 'rgba(255,255,255,0.02)',
                    transition: 'all 0.3s ease', overflow: 'hidden',
                  }}
                >
                  {isActive && (
                    <motion.div layoutId="activeLine" style={{
                      position: 'absolute', left: 0, top: '15%', bottom: '15%',
                      width: 3, borderRadius: 3,
                      background: `linear-gradient(180deg, ${s.color}, ${s.color}44)`,
                    }} />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isActive ? `${s.color}25` : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${isActive ? s.color + '40' : 'rgba(255,255,255,0.08)'}`,
                      transition: 'all 0.3s',
                    }}>
                      <Icon size={19} color={isActive ? s.color : '#8a97b0'} />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                        <span style={{
                          fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
                          color: isActive ? '#fff' : '#c8d0e0', transition: 'color 0.3s',
                        }}>
                          {s.title}
                        </span>
                        {s.badge && (
                          <span style={{
                            fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 100,
                            letterSpacing: '0.05em',
                            background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}40`,
                          }}>
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 12, color: '#8a97b0', margin: 0, lineHeight: 1.4 }}>
                        {s.subtitle}
                      </p>
                    </div>

                    <ArrowRight size={15} color={isActive ? s.color : '#4a5568'}
                      style={{ flexShrink: 0, transition: 'all 0.3s', transform: isActive ? 'translateX(2px)' : 'none' }} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Panel detalle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${cur.color}25` }}
            >
              {/* Banner problema */}
              <div style={{
                padding: '13px 24px',
                background: `linear-gradient(90deg, ${cur.color}18, ${cur.color}08)`,
                borderBottom: `1px solid ${cur.color}18`,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <Lightbulb size={14} color={cur.color} style={{ flexShrink: 0 }} />
                <span style={{ color: cur.color, fontSize: 13, fontWeight: 600 }}>
                  {cur.problem}
                </span>
              </div>

              <div style={{ padding: '28px 28px 32px', background: cur.gradient }}>

                {/* Icono + título */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${cur.color}20`, border: `1px solid ${cur.color}40`,
                    boxShadow: `0 0 18px ${cur.color}20`,
                  }}>
                    <cur.icon size={24} color={cur.color} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif', fontWeight: 800,
                      fontSize: 20, color: '#fff', margin: '0 0 3px',
                    }}>
                      {cur.title}
                    </h3>
                    <p style={{ color: cur.color, fontSize: 12, fontWeight: 600, margin: 0 }}>
                      {cur.subtitle}
                    </p>
                  </div>
                </div>

                {/* Descripción */}
                <p style={{ color: '#a0aec0', fontSize: 14, lineHeight: 1.8, marginBottom: 18 }}>
                  {cur.description}
                </p>

                {/* Resultado */}
                <div style={{
                  padding: '13px 16px', borderRadius: 10, marginBottom: 20,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                }}>
                  <Target size={15} color={cur.color} style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ color: '#c8d0e0', fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>Resultado: </span>
                    {cur.result}
                  </p>
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
                  {cur.stats.map((stat, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 7,
                      padding: '7px 14px', borderRadius: 10,
                      background: `${cur.color}10`, border: `1px solid ${cur.color}25`,
                    }}>
                      <stat.icon size={13} color={cur.color} />
                      <span style={{ color: cur.color, fontSize: 12, fontWeight: 600 }}>{stat.text}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <p style={{
                  color: '#fff', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  marginBottom: 12, opacity: 0.45,
                }}>
                  Lo que recibís
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
                  {cur.features.map((f, i) => (
                    <motion.div key={f}
                      initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}
                    >
                      <CheckCircle2 size={14} color={cur.color} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: '#c8d0e0', fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Ideal para */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                  <span style={{ color: '#8a97b0', fontSize: 12 }}>Ideal para:</span>
                  {cur.ideal.map(item => (
                    <span key={item} style={{
                      fontSize: 11, padding: '3px 10px', borderRadius: 100,
                      background: `${cur.color}10`, color: cur.color,
                      border: `1px solid ${cur.color}25`,
                    }}>
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="#contacto"
                  whileHover={{ y: -2, boxShadow: `0 0 32px ${cur.color}45` }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 26px', borderRadius: 12, textDecoration: 'none',
                    background: `linear-gradient(135deg, ${cur.color}, ${cur.color}cc)`,
                    color: '#fff', fontSize: 14, fontWeight: 600,
                    boxShadow: `0 0 20px ${cur.color}28`,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  Me interesa este servicio <ArrowRight size={15} />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ¿Por qué nosotros? */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: 48, borderRadius: 20, padding: '36px 40px',
            background: 'linear-gradient(135deg, rgba(79,124,255,0.06), rgba(124,58,237,0.06))',
            border: '1px solid rgba(79,124,255,0.12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)',
            }}>
              <Award size={16} color="#f59e0b" />
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: 18, color: '#fff', margin: 0,
            }}>
              ¿Por qué trabajar con nosotros?
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 16, marginBottom: 28 }}>
            {whyUs.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
              >
                <div style={{
                  width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(79,124,255,0.1)', border: '1px solid rgba(79,124,255,0.2)',
                }}>
                  <item.icon size={14} color="#4f7cff" />
                </div>
                <span style={{ color: '#c8d0e0', fontSize: 13, lineHeight: 1.6 }}>{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div style={{
            paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: 16,
          }}>
            <p style={{ color: '#a0aec0', fontSize: 14, margin: 0 }}>
              ¿No sabés cuál necesitás?{' '}
              <span style={{ color: '#fff', fontWeight: 600 }}>Primera consulta completamente gratis.</span>
            </p>
            <motion.a
              href="#contacto" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '11px 24px', borderRadius: 12, textDecoration: 'none',
                background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
                color: '#fff', fontSize: 13, fontWeight: 600,
                boxShadow: '0 0 20px rgba(79,124,255,0.28)',
              }}
            >
              Hablar con un experto <ArrowRight size={14} />
            </motion.a>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}