import React from 'react';

const Objetivos = () => {
  const containerStyle = {
    backgroundImage: 'url(https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/open-graph/2021/blog/experto/ford-blog-consejo-recomendacion-ambulancia-emergencia-auto-donde-orillarse-arcen.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const overlayStyle = {
    position: 'absolute', // Cambié a 'absolute' para que el overlay cubra completamente el contenedor
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad aquí
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        {/* Agrega aquí el contenido que quieras mostrar sobre el fondo oscuro */}
      </div>
    </div>
  );
};

export default Objetivos;
