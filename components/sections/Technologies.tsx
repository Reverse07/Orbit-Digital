'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Smartphone, RefreshCw, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Carga ultra rápida',
    description: 'Tus clientes no esperan. Los sitios que construimos cargan en menos de 2 segundos, lo que reduce el abandono y mejora tu posición en Google.',
    color: '#f59e0b',
    metric: '< 2s',
    metricLabel: 'Tiempo de carga',
  },
  {
    icon: Smartphone,
    title: 'Perfecto en cualquier pantalla',
    description: 'Más del 70% de las visitas vienen desde el celular. Todo lo que desarrollamos se ve y funciona perfecto en celular, tablet y computadora.',
    color: '#4f7cff',
    metric: '100%',
    metricLabel: 'Responsive',
  },
  {
    icon: Shield,
    title: 'Seguro y confiable',
    description: 'Usamos infraestructura de nivel empresarial. Tu sitio o sistema está protegido, con copias de seguridad automáticas y disponible las 24 horas.',
    color: '#06d6a0',
    metric: '99.9%',
    metricLabel: 'Tiempo activo',
  },
  {
    icon: TrendingUp,
    title: 'Crece con tu negocio',
    description: 'No vas a necesitar rehacerlo todo cuando tu negocio crezca. Construimos pensando en el futuro para que la inversión te dure años.',
    color: '#7c3aed',
    metric: '∞',
    metricLabel: 'Escalable',
  },
  {
    icon: RefreshCw,
    title: 'Fácil de mantener',
    description: 'Podés actualizar contenido sin saber programación. Y cuando necesitás ayuda, estamos disponibles para resolverlo rápido.',
    color: '#ec4899',
    metric: '< 24h',
    metricLabel: 'Soporte',
  },
]

const stack = [
  { name: 'Next.js',     benefit: 'Sitios ultra rápidos',      color: '#ffffff' },
  { name: 'Supabase',    benefit: 'Datos seguros en la nube',   color: '#3ecf8e' },
  { name: 'Spring Boot', benefit: 'Sistemas robustos',          color: '#6db33f' },
  { name: 'Docker',      benefit: 'Deploy sin interrupciones',  color: '#2496ed' },
  { name: 'GitHub',      benefit: 'Código siempre respaldado',  color: '#a78bfa' },
]

export default function Technologies() {
  return (
    <section id="tecnologias" style={{ background: '#0a0d18', padding: '110px 0', overflow: 'hidden' }}>
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
            Por qué elegirnos
          </span>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
          }}>
            Lo que obtenés con{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f7cff, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              cada proyecto nuestro
            </span>
          </h2>

          <p style={{ color: '#8a97b0', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Usamos las mejores herramientas del mercado — no para impresionarte con nombres, sino porque se traducen en resultados concretos para tu negocio.
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16, marginBottom: 56,
        }} className="tech-grid">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                padding: '24px 26px', borderRadius: 18,
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow fondo */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 120, height: 120, borderRadius: '50%',
                background: `radial-gradient(circle, ${b.color}12, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                {/* Icono */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${b.color}15`, border: `1px solid ${b.color}30`,
                }}>
                  <b.icon size={20} color={b.color} />
                </div>

                {/* Métrica */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800,
                    fontSize: 22, color: b.color, lineHeight: 1,
                  }}>
                    {b.metric}
                  </div>
                  <div style={{ color: '#8a97b0', fontSize: 10, marginTop: 2 }}>
                    {b.metricLabel}
                  </div>
                </div>
              </div>

              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: 16, color: '#fff', marginBottom: 8,
              }}>
                {b.title}
              </h3>
              <p style={{ color: '#8a97b0', fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Separador con stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '28px 36px', borderRadius: 18,
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between', gap: 20,
          }}
        >
          <div>
            <p style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: 15, color: '#fff', marginBottom: 4,
            }}>
              Herramientas de nivel empresarial
            </p>
            <p style={{ color: '#8a97b0', fontSize: 13, margin: 0 }}>
              Las mismas tecnologías que usan empresas como Vercel, GitHub y grandes startups globales.
            </p>
          </div>

          {/* Stack pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {stack.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                title={s.benefit}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '7px 14px', borderRadius: 100,
                  background: `${s.color}10`,
                  border: `1px solid ${s.color}25`,
                  cursor: 'default',
                }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: s.color, display: 'inline-block', flexShrink: 0,
                }} />
                <span style={{ color: '#c8d0e0', fontSize: 12, fontWeight: 600 }}>{s.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <p style={{ color: '#8a97b0', fontSize: 14, marginBottom: 20 }}>
            ¿Querés saber qué tecnología es la mejor para tu proyecto?{' '}
            <span style={{ color: '#fff', fontWeight: 600 }}>Te asesoramos sin costo.</span>
          </p>
          <motion.a
            href="#contacto" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 26px', borderRadius: 12, textDecoration: 'none',
              background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
              color: '#fff', fontSize: 14, fontWeight: 600,
              boxShadow: '0 0 20px rgba(79,124,255,0.3)',
            }}
          >
            Consultá gratis <ArrowRight size={14} />
          </motion.a>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}