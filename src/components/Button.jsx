import React from 'react'

export default function Button({ icon, color, bgColor, size, text, borderRadius, bgHoverColor, fun }) {
  return (
    <button
      type='button'
      style={{ background: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={fun}
    >
      {icon || text}
    </button>
  )
}
