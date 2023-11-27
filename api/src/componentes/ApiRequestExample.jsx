import React from 'react'

const ApiRequestExample = () => {
  const divStyle={
    width:'100%',
    height:'100%',
    display:'grid',
    placeItems: 'center',
  }
  return (
    <div style={divStyle}>
      <h2>Escanear el QR para la atención</h2>
      <img src="https://me-qr.com/static/pages/qr-code-for-image-img/image-qr-code.webp" alt="imagenQR" /></div>
  )
}

export default ApiRequestExample