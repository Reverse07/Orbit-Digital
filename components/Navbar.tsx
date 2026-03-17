'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SITE } from '@/lib/constants'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Contacto', href: '#contacto' },
]

const ANNOUNCE_H = 36
const NAV_H = 72

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [hovered, setHovered] = useState<string | null>(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const navRef = useRef<HTMLUListElement>(null)

  const { scrollY } = useScroll()
  const announceOpacity = useTransform(scrollY, [0, 80], [1, 0])
  const announceHeight = useTransform(scrollY, [0, 80], [ANNOUNCE_H, 0])
  const navTop = useTransform(scrollY, [0, 80], [ANNOUNCE_H, 0])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Cerrar menu al hacer resize a desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  // Bloquear scroll cuando menu abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleMouseEnter = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    setHovered(href)
    const el = e.currentTarget
    const navEl = navRef.current
    if (navEl) {
      const navRect = navEl.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setPillStyle({ left: elRect.left - navRect.left, width: elRect.width })
    }
  }

  return (
    <>
      {/* ── Barra de anuncio con scroll fade ── */}
      <motion.div
        style={{
          height: announceHeight,
          opacity: announceOpacity,
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ y: -ANNOUNCE_H }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: `${ANNOUNCE_H}px`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px',
            background: 'linear-gradient(90deg, rgba(79,124,255,0.1), rgba(124,58,237,0.14), rgba(79,124,255,0.1))',
            borderBottom: '1px solid rgba(79,124,255,0.16)',
            color: '#a5b8ff', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.03em',
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#06d6a0', display: 'inline-block', flexShrink: 0 }}
          />
          <span>
            Disponibles para nuevos proyectos —{' '}
            <span style={{ color: '#fff', fontWeight: 700 }}>
              {new Date().toLocaleString('es', { month: 'long', year: 'numeric' })}
            </span>
          </span>
          <ArrowRight size={12} color="#4f7cff" />
        </motion.div>
      </motion.div>

      {/* ── Navbar ── */}
      <motion.nav
        style={{ top: navTop }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="navbar-root"
      >
        <div
          className="navbar-inner"
          style={{
            position: 'fixed',
            left: 0, right: 0,
            zIndex: 50,
            height: `${NAV_H}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 5%',
            transition: 'background 0.4s, box-shadow 0.4s, border-color 0.4s',
            ...(scrolled ? {
              background: 'rgba(6,8,16,0.92)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 4px 40px rgba(0,0,0,0.5)',
            } : {
              background: 'transparent',
            }),
          }}
        >
          {/* ── Logo ── */}
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'flex', alignItems: 'center', gap: '11px', textDecoration: 'none', flexShrink: 0 }}
          >
            <div style={{ position: 'relative' }}>
              {/* Glow detrás del logo */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute', inset: -6, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(79,124,255,0.3), transparent 70%)',
                  filter: 'blur(8px)',
                  pointerEvents: 'none',
                }}
              />
              <Image
                src="/img/logOrbitDigital-Photoroom.png"
                alt="Orbit Digital"
                width={44}
                height={44}
                style={{ width: 'auto', height: '42px', objectFit: 'contain', position: 'relative', zIndex: 1 }}
                priority
              />
            </div>
            <span style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: isMobile ? '1.15rem' : '1.3rem',
              letterSpacing: '-0.025em',
              background: 'linear-gradient(135deg, #fff 30%, #a5b8ff 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {SITE.name}
            </span>
          </motion.a>

          {/* ── Links desktop con pill animada ── */}
          <ul
            ref={navRef}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: isMobile ? 'none' : 'flex',
              position: 'relative', listStyle: 'none', margin: 0,
              padding: '5px 6px', gap: '2px', borderRadius: '14px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Pill hover */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  key="pill"
                  layoutId="nav-pill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, left: pillStyle.left, width: pillStyle.width }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  style={{
                    position: 'absolute', top: 5,
                    height: 'calc(100% - 10px)',
                    borderRadius: '9px', pointerEvents: 'none',
                    background: 'rgba(79,124,255,0.12)',
                    border: '1px solid rgba(79,124,255,0.2)',
                    boxShadow: '0 0 12px rgba(79,124,255,0.08)',
                  }}
                />
              )}
            </AnimatePresence>

            {links.map(link => {
              const isActive = activeLink === link.href
              return (
                <li key={link.href} style={{ position: 'relative' }}>
                  <a
                    href={link.href}
                    onMouseEnter={e => handleMouseEnter(link.href, e)}
                    style={{
                      position: 'relative', display: 'block',
                      padding: '8px 15px', borderRadius: '9px',
                      fontSize: '13.5px', fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#fff' : '#8a97b0',
                      textDecoration: 'none', transition: 'color 0.2s',
                      zIndex: 1,
                    }}
                  >
                    {link.label}
                    {/* Dot activo */}
                    {isActive && (
                      <motion.span
                        layoutId="active-dot"
                        style={{
                          position: 'absolute', bottom: 3,
                          left: '50%', transform: 'translateX(-50%)',
                          width: 3, height: 3, borderRadius: '50%',
                          background: '#4f7cff', display: 'block',
                        }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* ── CTA desktop ── */}
          {!isMobile && (
            <motion.a
              href="#contacto"
              whileHover={{ y: -2, boxShadow: '0 0 32px rgba(79,124,255,0.6)' }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 22px', borderRadius: 12,
                background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
                boxShadow: '0 0 20px rgba(79,124,255,0.35)',
                color: '#fff', fontSize: '13.5px', fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.12)',
                position: 'relative', overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              {/* Shimmer */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: 0, left: 0, width: '40%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  transform: 'skewX(-20deg)',
                }}
              />
              Cotizar proyecto
              <ArrowRight size={14} />
            </motion.a>
          )}

          {/* ── Hamburger mobile ── */}
          {isMobile && (
            <motion.button
              onClick={() => setMenuOpen(v => !v)}
              whileTap={{ scale: 0.88 }}
              style={{
                width: 40, height: 40, borderRadius: 11,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: menuOpen ? 'rgba(79,124,255,0.15)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${menuOpen ? 'rgba(79,124,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
                color: '#fff', cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s',
                flexShrink: 0,
              }}
            >
              <AnimatePresence mode="wait">
                {menuOpen
                  ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={17} /></motion.div>
                  : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={17} /></motion.div>
                }
              </AnimatePresence>
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* ── Menú mobile fullscreen ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 38,
                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
              }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: `${ANNOUNCE_H + NAV_H + 10}px`,
                left: 12, right: 12, zIndex: 39,
                borderRadius: 20, overflow: 'hidden',
                background: 'rgba(8,10,20,0.98)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(32px)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Glow superior */}
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '80%', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(79,124,255,0.5), transparent)',
              }} />

              <ul style={{ listStyle: 'none', margin: 0, padding: '14px 12px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '13px 16px', borderRadius: 13,
                        color: activeLink === link.href ? '#fff' : '#8a97b0',
                        fontSize: 15, fontWeight: activeLink === link.href ? 600 : 400,
                        textDecoration: 'none',
                        background: activeLink === link.href ? 'rgba(79,124,255,0.08)' : 'transparent',
                        border: activeLink === link.href ? '1px solid rgba(79,124,255,0.15)' : '1px solid transparent',
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        {activeLink === link.href && (
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4f7cff', display: 'inline-block', flexShrink: 0 }} />
                        )}
                        {link.label}
                      </span>
                      <ArrowRight size={13} style={{ opacity: 0.3 }} />
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Divisor */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '0 12px' }} />

              {/* CTA mobile */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ padding: '12px' }}
              >
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 8, width: '100%', padding: '15px',
                    borderRadius: 13, textDecoration: 'none',
                    background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
                    color: '#fff', fontSize: 15, fontWeight: 600,
                    boxShadow: '0 0 24px rgba(79,124,255,0.35)',
                  }}
                >
                  Cotizar proyecto <ArrowRight size={14} />
                </a>
              </motion.div>

              {/* Info de contacto rápido */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                style={{
                  padding: '0 12px 14px',
                  display: 'flex', justifyContent: 'center', gap: 20,
                }}
              >
                <span style={{ color: '#3d4860', fontSize: 11 }}>+51 965 391 256</span>
                <span style={{ color: '#3d4860', fontSize: 11 }}>·</span>
                <span style={{ color: '#3d4860', fontSize: 11 }}>tmldiego0@hotmail.com</span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-root {
          position: fixed;
          left: 0;
          right: 0;
          z-index: 50;
        }
        @media (max-width: 767px) {
          .navbar-root { top: ${ANNOUNCE_H}px !important; }
        }
      `}</style>
    </>
  )
}