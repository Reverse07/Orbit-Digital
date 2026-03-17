'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [hovered, setHovered] = useState<string | null>(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

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

  const ANNOUNCE_H = 36
  const NAV_H = 76 // Aumentado ligeramente para acomodar el logo más grande

  return (
    <>
      {/* ── Barra de anuncio ── */}
      <motion.div
        initial={{ y: -ANNOUNCE_H, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 60, height: `${ANNOUNCE_H}px`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '10px',
          background: 'linear-gradient(90deg, rgba(79,124,255,0.12), rgba(124,58,237,0.12), rgba(79,124,255,0.12))',
          borderBottom: '1px solid rgba(79,124,255,0.18)',
          color: '#a5b8ff', fontSize: '11px', fontWeight: 600,
          letterSpacing: '0.02em',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#06d6a0', flexShrink: 0 }} />
        Disponibles para nuevos proyectos —{' '}
        <span style={{ color: '#fff', fontWeight: 700 }}>
          {new Date().toLocaleString('es', { month: 'long', year: 'numeric' })}
        </span>
        <ArrowRight size={12} color="#4f7cff" />
      </motion.div>

      {/* ── Navbar ── */}
      <motion.nav
        initial={{ y: -(ANNOUNCE_H + NAV_H), opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{
          position: 'fixed',
          top: `${ANNOUNCE_H}px`,
          left: 0, right: 0,
          zIndex: 50,
          height: `${NAV_H}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 5%',
          transition: 'background 0.4s, box-shadow 0.4s, border-color 0.4s',
          ...(scrolled ? {
            background: 'rgba(8,11,18,0.88)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 4px 48px rgba(0,0,0,0.45)',
          } : {
            background: 'transparent',
          }),
        }}
      >
        {/* Logo con imagen real - más grande */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <Image
            src="/img/logOrbitDigital-Photoroom.png"
            alt="Orbit Digital"
            width={52}
            height={52}
            style={{
              width: 'auto',
              height: '48px',
              objectFit: 'contain',
            }}
            priority
          />
          <span style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: '1.35rem', // Aumentado de 1.15rem a 1.35rem
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 40%, #a5b8ff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {SITE.name}
          </span>
        </a>

        {/* Links desktop */}
        <ul
          ref={navRef}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: 'none',
            position: 'relative',
            listStyle: 'none', margin: 0,
            padding: '6px 8px', gap: '2px',
            borderRadius: 16,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
          className="md:flex"
        >
          {/* Pill animada */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="pill"
                initial={{ opacity: 0, left: pillStyle.left, width: pillStyle.width }}
                animate={{ opacity: 1, left: pillStyle.left, width: pillStyle.width }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                style={{
                  position: 'absolute', top: 6,
                  height: 'calc(100% - 12px)',
                  borderRadius: 10, pointerEvents: 'none',
                  background: 'rgba(79,124,255,0.13)',
                  border: '1px solid rgba(79,124,255,0.22)',
                }}
              />
            )}
          </AnimatePresence>

          {links.map(link => {
            const isActive = activeLink === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onMouseEnter={e => handleMouseEnter(link.href, e)}
                  style={{
                    position: 'relative', display: 'block',
                    padding: '8px 16px', borderRadius: 10,
                    fontSize: '13.5px', fontWeight: 500,
                    color: isActive ? '#fff' : '#8a97b0',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dot"
                      style={{
                        position: 'absolute', bottom: 4,
                        left: '50%', transform: 'translateX(-50%)',
                        width: 4, height: 4, borderRadius: '50%',
                        background: '#4f7cff', display: 'block',
                      }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden md:flex">
          <motion.a
            href="#contacto"
            whileHover={{ y: -2, boxShadow: '0 0 35px rgba(79,124,255,0.55)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 22px', borderRadius: 12,
              background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
              boxShadow: '0 0 22px rgba(79,124,255,0.38)',
              color: '#fff', fontSize: '13.5px', fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            Cotizar proyecto
            <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Hamburger mobile */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden"
          style={{
            width: 40, height: 40, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#fff', cursor: 'pointer',
          }}
        >
          <AnimatePresence mode="wait">
            {menuOpen
              ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={17} /></motion.div>
              : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={17} /></motion.div>
            }
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: `${ANNOUNCE_H + NAV_H + 8}px`,
              left: 12, right: 12, zIndex: 40,
              borderRadius: 18, overflow: 'hidden',
              background: 'rgba(10,14,26,0.97)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(28px)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: '10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {links.map((link, i) => (
                <motion.li key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a href={link.href} onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '12px 16px', borderRadius: 12,
                      color: activeLink === link.href ? '#fff' : '#8a97b0',
                      fontSize: 14, fontWeight: 500, textDecoration: 'none',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                  >
                    {link.label}
                    <ArrowRight size={14} style={{ opacity: 0.4 }} />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div style={{ padding: '0 10px 10px' }}>
              <a href="#contacto" onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 8, width: '100%', padding: '14px',
                  borderRadius: 12, textDecoration: 'none',
                  background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
                  color: '#fff', fontSize: 14, fontWeight: 600,
                  boxShadow: '0 0 20px rgba(79,124,255,0.3)',
                }}
              >
                Cotizar proyecto <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}