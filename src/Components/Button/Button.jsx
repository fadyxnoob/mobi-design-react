import React from 'react'

function Button(
    text, color, bg
) {
  return (
    <>
      <button
        className={`text-${color} bg-${bg} `}
      >{text}</button>
    </>
  )
}

export default Button
