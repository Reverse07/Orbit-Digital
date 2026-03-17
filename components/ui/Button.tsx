'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  size = 'md',
}: ButtonProps) {

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const base = `relative inline-flex items-center justify-center gap-2.5 font-semibold rounded-xl overflow-hidden transition-all duration-300 cursor-pointer select-none ${sizes[size]}`

  const content = (
    <>
      {/* Brillo interno animado */}
      {variant === 'primary' && (
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
            transform: 'skewX(-15deg)',
          }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
    </>
  )

  const variants = {
    primary: {
      style: {
        background: 'linear-gradient(135deg, #4f7cff 0%, #6d5aed 100%)',
        boxShadow: '0 0 25px rgba(79,124,255,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.1)',
      },
      hoverStyle: {},
      className: 'group hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(79,124,255,0.55)]',
    },
    outline: {
      style: {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: '#c8d0e0',
      },
      hoverStyle: {},
      className: 'group hover:-translate-y-1 hover:border-[#4f7cff]/40 hover:bg-[#4f7cff]/8 hover:text-white',
    },
    ghost: {
      style: {
        background: 'transparent',
        border: '1px solid transparent',
        color: '#8a97b0',
      },
      hoverStyle: {},
      className: 'group hover:text-white hover:bg-white/5',
    },
  }

  const v = variants[variant]
  const classes = `${base} ${v.className} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} style={v.style}>
        {content}
      </a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      style={v.style}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  )
}