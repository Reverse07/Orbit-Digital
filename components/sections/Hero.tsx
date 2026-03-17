'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, easeInOut } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { SITE } from '@/lib/constants'

// ── Variantes con física real ──
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(12px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, ease: easeInOut },
  },
}

const clients = [
  { initials: 'TC', color: '#4f7cff' },
  { initials: 'SB', color: '#7c3aed' },
  { initials: 'IM', color: '#06d6a0' },
  { initials: 'AR', color: '#f59e0b' },
]

// ── Texto con efecto typewriter ──
function TypewriterText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && subIndex === words[index].length) {
        setTimeout(() => setDeleting(true), 1800)
        return
      }
      if (deleting && subIndex === 0) {
        setDeleting(false)
        setIndex(prev => (prev + 1) % words.length)
        return
      }
      setSubIndex(prev => prev + (deleting ? -1 : 1))
    }, deleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words])

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(v => !v), 500)
    return () => clearInterval(blinkTimer)
  }, [])

  return (
    <span style={{
      background: 'linear-gradient(135deg, #4f7cff 0%, #a78bfa 45%, #06d6a0 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
    }}>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, WebkitTextFillColor: '#a78bfa' }}>|</span>
    </span>
  )
}

// ── Partícula orbitando ──
function OrbitingParticle({ radius, duration, size, color, startAngle }: {
  radius: number; duration: number; size: number; color: string; startAngle: number
}) {
  const angle = useMotionValue(startAngle)

  useAnimationFrame((t) => {
    angle.set(startAngle + (t / 1000) * (360 / duration))
  })

  const x = useTransform(angle, (a) => Math.cos((a * Math.PI) / 180) * radius)
  const y = useTransform(angle, (a) => Math.sin((a * Math.PI) / 180) * radius)

  return (
    <motion.div
      style={{
        position: 'absolute', x, y,
        width: size, height: size, borderRadius: '50%',
        background: color,
        boxShadow: `0 0 ${size * 3}px ${color}`,
        top: '50%', left: '50%',
        marginTop: -size / 2, marginLeft: -size / 2,
      }}
    />
  )
}

// ── Contador animado ──
function AnimatedCounter({ value, suffix = '', id }: { value: number; suffix?: string; id: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true)
    })
    const el = document.getElementById(id)
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [id])

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress === 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [started, value])

  return <span id={id}>{count}{suffix}</span>
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isReady, setIsReady] = useState(false)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })
  const rotateX = useTransform(springY, [-300, 300], [6, -6])
  const rotateY = useTransform(springX, [-300, 300], [-6, 6])

  useEffect(() => {
    setIsReady(true)
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section ref={ref} id="inicio" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', overflow: 'hidden', background: '#060810',
    }}>

      {/* ── Fondo con parallax y glows animados ── */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-20%', left: '30%',
            width: '900px', height: '900px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(79,124,255,0.22) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{
            position: 'absolute', top: '0%', left: '-10%',
            width: '700px', height: '700px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          style={{
            position: 'absolute', bottom: '10%', right: '-5%',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(6,214,160,0.14) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* ── Grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(79,124,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,124,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 0%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 0%, transparent 100%)',
      }} />

      {/* ── Órbitas de partículas ── */}
      {isReady && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          marginTop: -400, marginLeft: -400,
          width: 800, height: 800, pointerEvents: 'none',
        }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              width: 420, height: 420, marginTop: -210, marginLeft: -210,
              borderRadius: '50%', border: '1px solid rgba(79,124,255,0.06)',
            }} />
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              width: 580, height: 580, marginTop: -290, marginLeft: -290,
              borderRadius: '50%', border: '1px dashed rgba(124,58,237,0.05)',
            }} />
            <OrbitingParticle radius={210} duration={18} size={4} color="#4f7cff" startAngle={0} />
            <OrbitingParticle radius={210} duration={18} size={3} color="#06d6a0" startAngle={120} />
            <OrbitingParticle radius={210} duration={18} size={3} color="#a78bfa" startAngle={240} />
            <OrbitingParticle radius={290} duration={28} size={3} color="#7c3aed" startAngle={60} />
            <OrbitingParticle radius={290} duration={28} size={2} color="#4f7cff" startAngle={200} />
          </div>
        </div>
      )}

      {/* ── Contenido con perspectiva 3D al mouse ── */}
      <motion.div style={{ y: contentY, opacity, perspective: 1200 }}>
        <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{
              position: 'relative', zIndex: 10, width: '100%',
              maxWidth: '1000px', margin: '0 auto', padding: '140px 24px 120px',
            }}
          >

            {/* Badge con shimmer */}
            <motion.div variants={itemVariants} style={{ marginBottom: '40px' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '8px 20px', borderRadius: '100px',
                  background: 'linear-gradient(135deg, rgba(79,124,255,0.12), rgba(124,58,237,0.12))',
                  border: '1px solid rgba(79,124,255,0.3)',
                  color: '#a5b8ff', fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  cursor: 'default', position: 'relative', overflow: 'hidden',
                }}>
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', top: 0, left: 0,
                    width: '40%', height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                    transform: 'skewX(-20deg)',
                  }}
                />
                <Sparkles size={12} color="#4f7cff" />
                Agencia Digital de Alto Rendimiento
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06d6a0', display: 'inline-block' }}
                />
              </motion.div>
            </motion.div>

            {/* Headline con typewriter */}
            <motion.div variants={itemVariants}>
              <h1 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(2.8rem, 6.5vw, 5.4rem)',
                lineHeight: 1.04, letterSpacing: '-0.035em',
                color: '#fff', marginBottom: '28px',
              }}>
                Soluciones digitales que{' '}
                <br />
                <TypewriterText words={[
                  'impulsan tu negocio',
                  'convierten clientes',
                  'automatizan procesos',
                  'generan resultados',
                ]} />
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <p style={{
                color: '#8a97b0', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 48px',
              }}>
                Diseñamos y desarrollamos sitios web, sistemas y automatizaciones
                que convierten visitantes en clientes y procesos lentos en{' '}
                <span style={{ color: '#c8d0e0', fontWeight: 500 }}>ventajas competitivas.</span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '64px' }}>

              <motion.a
                href="#portafolio"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '15px 30px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, #4f7cff 0%, #7c3aed 100%)',
                  boxShadow: '0 0 40px rgba(79,124,255,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
                  color: '#fff', fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)',
                  position: 'relative', overflow: 'hidden',
                }}>
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '200%', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    transform: 'skewX(-20deg)',
                  }}
                />
                Ver proyectos
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.a>

              <motion.a
                href="#contacto"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '15px 30px', borderRadius: '14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#c8d0e0', fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none',
                }}>
                Cotizar proyecto
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                {clients.map((c, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 700, color: '#fff',
                      background: `linear-gradient(135deg, ${c.color}, ${c.color}88)`,
                      border: '2.5px solid #060810',
                      marginLeft: i === 0 ? 0 : '-11px',
                      zIndex: clients.length - i, position: 'relative',
                      boxShadow: `0 0 12px ${c.color}40`,
                    }}>
                    {c.initials}
                  </motion.div>
                ))}
              </div>

              <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.08)' }} />

              <div>
                <motion.div
                  style={{ display: 'flex', gap: '3px', marginBottom: '5px', justifyContent: 'center' }}
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 1.2 } } }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      variants={{ hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1 } }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      style={{ color: '#f59e0b', fontSize: '15px' }}
                    >★</motion.span>
                  ))}
                </motion.div>
                <p style={{ color: '#8a97b0', fontSize: '12px', margin: 0 }}>
                  <span style={{ color: '#fff', fontWeight: 600 }}>+50 empresas</span> confían en nosotros
                </p>
              </div>

              <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.08)' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06d6a0', display: 'inline-block' }}
                />
                <span style={{ color: '#8a97b0', fontSize: '12px' }}>Disponibles para nuevos proyectos</span>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Stats bar con contadores animados ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center',
          background: 'rgba(10,13,25,0.9)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px',
          padding: '18px 36px', whiteSpace: 'nowrap',
          boxShadow: '0 12px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}>
        {[
          { value: 50, suffix: '+', label: 'Proyectos', id: 'stat-1' },
          { value: 98, suffix: '%', label: 'Satisfacción', id: 'stat-2' },
          { value: 3, suffix: 'x', label: 'Conversiones', id: 'stat-3' },
          { value: 24, suffix: 'h', label: 'Respuesta', id: 'stat-4' },
        ].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            <motion.div whileHover={{ y: -2 }} style={{ textAlign: 'center', cursor: 'default' }}>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: '22px', lineHeight: 1.2,
                background: 'linear-gradient(135deg, #fff 0%, #a5b8ff 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} id={stat.id} />
              </div>
              <div style={{ color: '#4a5568', fontSize: '11px', marginTop: '3px', fontWeight: 500, letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </motion.div>
            {i < 3 && <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.05)' }} />}
          </div>
        ))}
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: 'absolute', bottom: '110px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          pointerEvents: 'none',
        }}>
        <span style={{ color: '#2d3748', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px', height: '32px',
            background: 'linear-gradient(to bottom, rgba(79,124,255,0.6), transparent)',
          }}
        />
      </motion.div>

    </section>
  )
}