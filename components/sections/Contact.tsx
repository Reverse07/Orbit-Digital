'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, Clock, CheckCircle2, ArrowRight, Phone } from 'lucide-react'

const WHATSAPP = '51965391256'
const EMAIL = 'tmldiego0@hotmail.com'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgonorvv'

const WhatsAppIcon = ({ size = 20, color = '#06d6a0' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const services = [
  { value: 'web', label: 'Página Web Profesional' },
  { value: 'system', label: 'Sistema para mi Negocio' },
  { value: 'automation', label: 'Automatización de Tareas' },
  { value: 'maintenance', label: 'Mantenimiento y Soporte' },
  { value: 'other', label: 'No sé, necesito asesoría' },
]

const guarantees = [
  { icon: CheckCircle2, text: 'Primera consulta completamente gratis', isWhatsapp: false },
  { icon: Clock, text: 'Respondemos en menos de 24 horas', isWhatsapp: false },
  { icon: null, text: 'Sin presiones ni compromisos', isWhatsapp: true },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: services.find(s => s.value === formData.service)?.label || formData.service,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} - Orbit Digital`,
        }),
      })
      if (response.ok) {
        setSent(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        const data = await response.json()
        setError(data.error || 'Hubo un error al enviar el mensaje. Por favor intentá de nuevo.')
      }
    } catch {
      setError('Error de conexión. Por favor intentá de nuevo o escribinos por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%', padding: '12px 16px', borderRadius: 12,
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'rgba(79,124,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
    color: '#fff', fontSize: 14, outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    boxShadow: focused === name ? '0 0 0 3px rgba(79,124,255,0.08)' : 'none',
    fontFamily: 'DM Sans, sans-serif',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 12, fontWeight: 600,
    color: '#8a97b0', marginBottom: 8, letterSpacing: '0.02em',
  }

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa conocer más sobre sus servicios. Mi nombre es ${formData.name || '...'} y necesito ${services.find(s => s.value === formData.service)?.label || 'información'}.`
  )

  return (
    <section id="contacto" style={{ background: '#080b12', padding: '110px 0', overflow: 'hidden' }}>
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
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06d6a0', display: 'inline-block' }} />
            Contacto
          </span>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
          }}>
            Hablemos de{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f7cff, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              tu proyecto
            </span>
          </h2>

          <p style={{ color: '#8a97b0', fontSize: 16, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Contanos qué necesitás y te respondemos en menos de 24 horas. Sin tecnicismos, sin vueltas.
          </p>
        </motion.div>

        {/* Grid principal */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr',
          gap: 24, alignItems: 'start',
        }} className="contact-grid">

          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            {/* WhatsApp — acción principal */}
            <motion.a
              href={`https://wa.me/${WHATSAPP}?text=${whatsappMessage}`}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(6,214,160,0.2)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '20px 22px', borderRadius: 18, textDecoration: 'none',
                background: 'linear-gradient(135deg, rgba(6,214,160,0.12), rgba(6,214,160,0.04))',
                border: '1px solid rgba(6,214,160,0.25)',
                transition: 'all 0.3s',
              }}
            >
              <div style={{
                width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(6,214,160,0.15)', border: '1px solid rgba(6,214,160,0.3)',
                boxShadow: '0 0 16px rgba(6,214,160,0.15)',
              }}>
                <WhatsAppIcon size={26} color="#06d6a0" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 4 }}>
                  Escribinos por WhatsApp
                </div>
                <div style={{ color: '#8a97b0', fontSize: 12 }}>
                  Respuesta en minutos — la forma más rápida
                </div>
              </div>
              <ArrowRight size={16} color="#06d6a0" style={{ flexShrink: 0 }} />
            </motion.a>

            {/* Email */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '18px 22px', borderRadius: 18,
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(79,124,255,0.12)', border: '1px solid rgba(79,124,255,0.25)',
              }}>
                <Mail size={20} color="#4f7cff" />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 3 }}>Email</div>
                <div style={{ color: '#8a97b0', fontSize: 12 }}>{EMAIL}</div>
              </div>
            </div>

            {/* Horario */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '18px 22px', borderRadius: 18,
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
              }}>
                <Clock size={20} color="#7c3aed" />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 3 }}>Horario de atención</div>
                <div style={{ color: '#8a97b0', fontSize: 12 }}>Lunes a Viernes — 9am a 6pm</div>
              </div>
            </div>

            {/* Teléfono */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '18px 22px', borderRadius: 18,
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)',
              }}>
                <Phone size={20} color="#f59e0b" />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 3 }}>Teléfono</div>
                <div style={{ color: '#8a97b0', fontSize: 12 }}>+51 965 391 256</div>
              </div>
            </div>

            {/* Garantías */}
            <div style={{
              padding: '20px 22px', borderRadius: 18,
              background: 'linear-gradient(135deg, rgba(79,124,255,0.07), rgba(124,58,237,0.07))',
              border: '1px solid rgba(79,124,255,0.14)',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              {guarantees.map((g, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {g.isWhatsapp
                    ? <WhatsAppIcon size={14} color="#4f7cff" />
                    : g.icon && <g.icon size={14} color="#4f7cff" style={{ flexShrink: 0 }} />
                  }
                  <span style={{ color: '#c8d0e0', fontSize: 13 }}>{g.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    padding: '60px 40px', borderRadius: 20, textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(6,214,160,0.08), rgba(6,214,160,0.02))',
                    border: '1px solid rgba(6,214,160,0.2)',
                  }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%', margin: '0 auto 24px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(6,214,160,0.15)', border: '1px solid rgba(6,214,160,0.3)',
                    boxShadow: '0 0 24px rgba(6,214,160,0.2)',
                  }}>
                    <CheckCircle2 size={30} color="#06d6a0" />
                  </div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 12 }}>
                    ¡Mensaje recibido!
                  </h3>
                  <p style={{ color: '#8a97b0', fontSize: 14, lineHeight: 1.7, maxWidth: 340, margin: '0 auto 28px' }}>
                    Gracias por escribirnos. Te respondemos en menos de 24 horas. También podés escribirnos directamente por WhatsApp para una respuesta más rápida.
                  </p>
                  <motion.a
                    href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '12px 24px', borderRadius: 12, textDecoration: 'none',
                      background: 'linear-gradient(135deg, #06d6a0, #059669)',
                      color: '#fff', fontSize: 14, fontWeight: 600,
                    }}
                  >
                    Ir a WhatsApp <ArrowRight size={14} />
                  </motion.a>
                </motion.div>

              ) : (
                <motion.div
                  key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{
                    padding: '36px', borderRadius: 20,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 6 }}>
                    Contanos sobre tu proyecto
                  </h3>
                  <p style={{ color: '#8a97b0', fontSize: 13, marginBottom: 28 }}>
                    Completá el formulario y te respondemos en menos de 24 horas.
                  </p>

                  {error && (
                    <div style={{
                      padding: '12px', borderRadius: 8,
                      background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                      color: '#ef4444', fontSize: 13, marginBottom: 16,
                    }}>
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                      <div>
                        <label style={labelStyle}>Tu nombre</label>
                        <input type="text" name="name" required placeholder="Juan García"
                          value={formData.name} onChange={handleChange}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                          style={inputStyle('name')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Tu email</label>
                        <input type="email" name="email" required placeholder="juan@email.com"
                          value={formData.email} onChange={handleChange}
                          onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                          style={inputStyle('email')} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                      <div>
                        <label style={labelStyle}>Tu teléfono (opcional)</label>
                        <input type="tel" name="phone" placeholder="+51 999 999 999"
                          value={formData.phone} onChange={handleChange}
                          onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                          style={inputStyle('phone')} />
                      </div>
                      <div>
                        <label style={labelStyle}>¿Qué necesitás?</label>
                        <select name="service" value={formData.service} onChange={handleChange}
                          onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                          style={{ ...inputStyle('service'), cursor: 'pointer' }} required>
                          <option value="" disabled>Seleccioná un servicio</option>
                          {services.map(s => (
                            <option key={s.value} value={s.value} style={{ background: '#111827', color: '#fff' }}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Contanos sobre tu proyecto</label>
                      <textarea name="message" required rows={5}
                        placeholder="¿Qué querés lograr? ¿Tenés alguna idea en mente? Cuanto más nos contés, mejor podemos ayudarte."
                        value={formData.message} onChange={handleChange}
                        onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                        style={{ ...inputStyle('message'), resize: 'none', lineHeight: 1.6 }} />
                    </div>

                    <div style={{ display: 'flex', gap: 12, marginTop: 4 }} className="form-buttons">
                      <motion.button
                        type="submit" disabled={loading}
                        whileHover={{ y: loading ? 0 : -2, boxShadow: loading ? 'none' : '0 0 32px rgba(79,124,255,0.5)' }}
                        whileTap={{ scale: loading ? 1 : 0.97 }}
                        style={{
                          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                          padding: '14px', borderRadius: 12, cursor: loading ? 'default' : 'pointer',
                          background: loading ? 'rgba(79,124,255,0.5)' : 'linear-gradient(135deg, #4f7cff, #7c3aed)',
                          color: '#fff', fontSize: 14, fontWeight: 600,
                          border: '1px solid rgba(255,255,255,0.1)',
                          boxShadow: loading ? 'none' : '0 0 22px rgba(79,124,255,0.3)',
                          fontFamily: 'DM Sans, sans-serif', opacity: loading ? 0.7 : 1,
                        }}
                      >
                        {loading ? 'Enviando...' : 'Enviar mensaje'}
                        {!loading && <Send size={15} />}
                      </motion.button>

                      <motion.a
                        href={`https://wa.me/${WHATSAPP}?text=${whatsappMessage}`}
                        target="_blank" rel="noopener noreferrer"
                        whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                          padding: '14px 20px', borderRadius: 12, textDecoration: 'none',
                          background: 'rgba(6,214,160,0.1)',
                          border: '1px solid rgba(6,214,160,0.25)',
                          color: '#06d6a0', fontSize: 14, fontWeight: 600,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <WhatsAppIcon size={17} color="#06d6a0" />
                        WhatsApp
                      </motion.a>
                    </div>

                    <p style={{ color: '#4a5568', fontSize: 11, textAlign: 'center' }}>
                      Tu información es confidencial y nunca será compartida con terceros.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .form-buttons { flex-direction: column !important; }
        }
        select option { background: #111827 !important; color: #fff !important; }
        input::placeholder, textarea::placeholder { color: #4a5568 !important; }
      `}</style>
    </section>
  )
}