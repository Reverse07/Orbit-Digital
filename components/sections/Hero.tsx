'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { SITE } from '@/lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
}

const clients = [
  { initials: 'TC', color: '#4f7cff' },
  { initials: 'SB', color: '#7c3aed' },
  { initials: 'IM', color: '#06d6a0' },
  { initials: 'AR', color: '#f59e0b' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="inicio" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      background: '#080b12',
    }}>

      {/* ── Gradientes de fondo ── */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Glow azul arriba centro */}
        <div style={{
          position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(79,124,255,0.28) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        {/* Glow morado izquierda */}
        <div style={{
          position: 'absolute', top: '10%', left: '5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        {/* Glow verde derecha */}
        <div style={{
          position: 'absolute', top: '20%', right: '5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(6,214,160,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        {/* Glow inferior */}
        <div style={{
          position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(79,124,255,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </motion.div>

      {/* ── Grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(79,124,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,124,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
      }} />

      {/* ── Partículas ── */}
      {[...Array(8)].map((_, i) => (
        <motion.div key={i}
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: i % 2 === 0 ? '3px' : '2px',
            height: i % 2 === 0 ? '3px' : '2px',
            borderRadius: '50%',
            background: i % 3 === 0 ? '#4f7cff' : i % 3 === 1 ? '#7c3aed' : '#06d6a0',
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 18}%`,
          }}
        />
      ))}

      {/* ── Contenido principal ── */}
      <motion.div style={{ opacity, position: 'relative', zIndex: 10, width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '140px 24px 100px' }}>

        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '8px 18px', borderRadius: '100px', marginBottom: '36px',
            background: 'linear-gradient(135deg, rgba(79,124,255,0.1), rgba(124,58,237,0.1))',
            border: '1px solid rgba(79,124,255,0.25)',
            color: '#a5b8ff', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
          <Sparkles size={12} color="#4f7cff" />
          Agencia Digital de Alto Rendimiento
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06d6a0', animation: 'pulse 2s infinite' }} />
        </motion.div>

        {/* Headline */}
        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)',
            lineHeight: 1.04,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: '24px',
          }}>
          Soluciones digitales que{' '}
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #4f7cff 0%, #a78bfa 45%, #06d6a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            impulsan tu negocio
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
          style={{
            color: '#8a97b0', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            lineHeight: 1.75, maxWidth: '620px', margin: '0 auto 40px',
          }}>
          Diseñamos y desarrollamos sitios web, sistemas y automatizaciones
          que convierten visitantes en clientes y procesos lentos en ventajas competitivas.
        </motion.p>

        {/* CTAs */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '56px' }}>

          <motion.a href="#portafolio" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 28px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #4f7cff 0%, #7c3aed 100%)',
              boxShadow: '0 0 30px rgba(79,124,255,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
              color: '#fff', fontSize: '14px', fontWeight: 600,
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)',
            }}>
            Ver proyectos
            <ArrowRight size={16} />
          </motion.a>

          <motion.a href="#contacto" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 28px', borderRadius: '14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#c8d0e0', fontSize: '14px', fontWeight: 600,
              textDecoration: 'none',
            }}>
            Cotizar proyecto
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>

          {/* Avatares */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {clients.map((c, i) => (
              <div key={i} style={{
                width: '38px', height: '38px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: 700, color: '#fff',
                background: `linear-gradient(135deg, ${c.color}, ${c.color}88)`,
                border: '2px solid #080b12',
                marginLeft: i === 0 ? 0 : '-10px',
                zIndex: clients.length - i,
                position: 'relative',
              }}>
                {c.initials}
              </div>
            ))}
          </div>

          <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.1)' }} />

          <div>
            <div style={{ display: 'flex', gap: '3px', marginBottom: '4px', justifyContent: 'center' }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: '14px' }}>★</span>)}
            </div>
            <p style={{ color: '#8a97b0', fontSize: '12px', margin: 0 }}>
              <span style={{ color: '#fff', fontWeight: 600 }}>+50 empresas</span> confían en nosotros
            </p>
          </div>

          <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.1)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06d6a0', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#8a97b0', fontSize: '12px' }}>Disponibles para nuevos proyectos</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Stats bar flotante ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '0',
          background: 'rgba(13,17,32,0.85)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
          padding: '16px 32px', whiteSpace: 'nowrap',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        }}>
        {[
          { value: '50+', label: 'Proyectos' },
          { value: '98%', label: 'Satisfacción' },
          { value: '3x', label: 'Conversiones' },
          { value: '< 24h', label: 'Respuesta' },
        ].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '20px', color: '#fff', lineHeight: 1.2 }}>
                {stat.value}
              </div>
              <div style={{ color: '#8a97b0', fontSize: '11px', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
            {i < 3 && <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.07)' }} />}
          </div>
        ))}
      </motion.div>

    </section>
  )
}