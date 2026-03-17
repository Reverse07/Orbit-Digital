'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP = '51965391256'
const MESSAGE = encodeURIComponent('Hola! Me interesa conocer más sobre sus servicios de desarrollo web.')

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [pulsing, setPulsing] = useState(true)

  // Aparece después de 2 segundos de scroll
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Muestra tooltip automático a los 4 segundos
  useEffect(() => {
    const t1 = setTimeout(() => setShowTooltip(true), 4000)
    const t2 = setTimeout(() => { setShowTooltip(false); setPulsing(false) }, 8000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <div style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
          display: 'flex', alignItems: 'flex-end', gap: 12,
          pointerEvents: 'none',
        }}>

          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#1a2235',
                  border: '1px solid rgba(6,214,160,0.25)',
                  borderRadius: 14, padding: '12px 16px',
                  pointerEvents: 'auto', marginBottom: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  maxWidth: 220,
                }}
              >
                <p style={{
                  color: '#fff', fontSize: 13, fontWeight: 600,
                  margin: '0 0 4px', fontFamily: 'Syne, sans-serif',
                }}>
                  ¿Tenés un proyecto en mente?
                </p>
                <p style={{ color: '#8a97b0', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  Escribinos y te respondemos al toque 🚀
                </p>
                {/* Flecha */}
                <div style={{
                  position: 'absolute', right: -7, bottom: 18,
                  width: 13, height: 13,
                  background: '#1a2235',
                  border: '1px solid rgba(6,214,160,0.25)',
                  borderTop: 'none', borderLeft: 'none',
                  transform: 'rotate(-45deg)',
                }} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{ pointerEvents: 'auto', position: 'relative' }}
          >
            {/* Pulso animado */}
            {pulsing && (
              <>
                <motion.div
                  animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                  style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    background: 'rgba(37,211,102,0.4)',
                    pointerEvents: 'none',
                  }}
                />
                <motion.div
                  animate={{ scale: [1, 1.9], opacity: [0.3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                  style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    background: 'rgba(37,211,102,0.25)',
                    pointerEvents: 'none',
                  }}
                />
              </>
            )}

            <motion.a
              href={`https://wa.me/${WHATSAPP}?text=${MESSAGE}`}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              style={{
                width: 58, height: 58, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, #25d366, #128c5e)',
                boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
                textDecoration: 'none', position: 'relative',
              }}
            >
              {/* Logo WhatsApp SVG oficial */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.057 23.428a.75.75 0 0 0 .915.915l5.57-1.476A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.722.986.986-3.613-.235-.374A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
            </motion.a>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  )
}