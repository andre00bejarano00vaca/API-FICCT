import React from 'react';

const Bienvenido = () => {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'url("https://pymstatic.com/27050/conversions/ramas-medicina-wide.jpg")', // Reemplaza "url_de_tu_imagen" con la URL de tu imagen
    backgroundSize: 'cover',
    position: 'relative',
    color: 'white', // Color del texto
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta el tono oscuro aquí
  };

  const button = {
    width: '150px',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: '#038554',
    color: 'white',
    border: 'none',
    marginTop: '10px',
    zIndex: 1,  };

  const h1Styles = {
    fontSize: '450%',
    textAlign: 'center',
    margin: '0px',
    zIndex: 1,
  };

  const pStyle = {
    margin: '0px',
    zIndex: 1,
  };

  return (
    <>
    <div style={divStyle}>
      <div style={overlayStyle}></div>
      <h1 style={h1Styles}>
        API HISTORIA CLINICA
      </h1>
      <p style={pStyle}>Esta interfaz reúne tu información de salud en un solo lugar, además de ser sencilla de usar.</p>
      <button style={button}>Inicio</button>
      
    </div>
    </>
  );
}

export default Bienvenido;
