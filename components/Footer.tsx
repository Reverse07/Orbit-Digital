'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, ArrowUpCircle } from 'lucide-react'
import Image from 'next/image'

const WHATSAPP = '51965391256'

const WhatsAppIcon = ({ size = 20, color = '#06d6a0' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const links = {
  servicios: [
    { label: 'Página Web Profesional', href: '#servicios' },
    { label: 'Sistema para tu Negocio', href: '#servicios' },
    { label: 'Automatización de Tareas', href: '#servicios' },
    { label: 'Mantenimiento y Soporte', href: '#servicios' },
  ],
  navegacion: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Nuestro Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ],
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ background: '#080b12', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* ── CTA Banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(79,124,255,0.1), rgba(124,58,237,0.1))',
        borderBottom: '1px solid rgba(79,124,255,0.12)',
        padding: '48px 5%',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff',
              letterSpacing: '-0.02em', marginBottom: 8,
            }}>
              ¿Listo para hacer crecer tu negocio?
            </h3>
            <p style={{ color: '#8a97b0', fontSize: 15, margin: 0 }}>
              Primera consulta gratis.{' '}
              <span style={{ color: '#fff', fontWeight: 600 }}>Sin compromisos.</span>
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <motion.a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: '0 0 28px rgba(6,214,160,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 24px', borderRadius: 12, textDecoration: 'none',
                background: 'linear-gradient(135deg, rgba(6,214,160,0.2), rgba(6,214,160,0.1))',
                border: '1px solid rgba(6,214,160,0.35)',
                color: '#06d6a0', fontSize: 14, fontWeight: 600,
              }}
            >
              <WhatsAppIcon size={16} color="#06d6a0" />
              WhatsApp
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ y: -2, boxShadow: '0 0 28px rgba(79,124,255,0.45)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 24px', borderRadius: 12, textDecoration: 'none',
                background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
                color: '#fff', fontSize: 14, fontWeight: 600,
                boxShadow: '0 0 20px rgba(79,124,255,0.3)',
              }}
            >
              Cotizar proyecto <ArrowRight size={15} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 5% 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 48, marginBottom: 56,
        }} className="footer-grid">

          {/* Columna marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 20 }}>
              <Image
                src="/img/logOrbitDigital-Photoroom.png"
                alt="Orbit Digital"
                width={52}
                height={52}
                style={{ width: 'auto', height: '48px', objectFit: 'contain' }}
                priority
              />
              <span style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: '1.35rem', letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #fff 40%, #a5b8ff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Orbit Digital
              </span>
            </div>

            <p style={{
              color: '#8a97b0', fontSize: 14, lineHeight: 1.75,
              maxWidth: 320, marginBottom: 28,
            }}>
              Agencia de desarrollo web y sistemas digitales. Ayudamos a empresas a tener presencia profesional en internet y a optimizar sus procesos con tecnología.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: <WhatsAppIcon size={14} color="#06d6a0" />, text: '+51 965 391 256', href: `https://wa.me/${WHATSAPP}` },
                { icon: <Mail size={14} color="#4f7cff" />, text: 'tmldiego0@hotmail.com', href: 'mailto:tmldiego0@hotmail.com' },
                { icon: <Phone size={14} color="#7c3aed" />, text: 'Lima, Perú', href: null },
              ].map((item, i) => (
                item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 10,
                      textDecoration: 'none', transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                  >
                    {item.icon}
                    <span style={{ color: '#a0aec0', fontSize: 13 }}>{item.text}</span>
                  </a>
                ) : (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {item.icon}
                    <span style={{ color: '#a0aec0', fontSize: 13 }}>{item.text}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Columna servicios */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: 13, color: '#fff', letterSpacing: '0.06em',
              textTransform: 'uppercase', marginBottom: 20,
            }}>
              Servicios
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.servicios.map(link => (
                <li key={link.label}>
                  <a href={link.href}
                    style={{
                      color: '#8a97b0', fontSize: 13, textDecoration: 'none',
                      transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#8a97b0' }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#4f7cff', display: 'inline-block', flexShrink: 0 }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna navegación */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: 13, color: '#fff', letterSpacing: '0.06em',
              textTransform: 'uppercase', marginBottom: 20,
            }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.navegacion.map(link => (
                <li key={link.label}>
                  <a href={link.href}
                    style={{
                      color: '#8a97b0', fontSize: 13, textDecoration: 'none',
                      transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#8a97b0' }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#7c3aed', display: 'inline-block', flexShrink: 0 }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Línea divisoria ── */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 28 }} />

        {/* ── Bottom bar ── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}>
          <p style={{ color: '#4a5568', fontSize: 12, margin: 0 }}>
            © {new Date().getFullYear()} Orbit Digital. Todos los derechos reservados.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#4a5568', fontSize: 12 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06d6a0', display: 'inline-block' }} />
              Disponibles para nuevos proyectos
            </span>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 36, height: 36, borderRadius: 10, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#8a97b0',
              }}
              title="Volver arriba"
            >
              <ArrowUpCircle size={16} />
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  )
}