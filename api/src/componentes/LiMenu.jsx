import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LiMenu({to,texto}) {
    const [isHovered, setIsHovered] = useState(false);
    const LiStilos={
        color:'white',
        backgroundColor: '#038554', // Color de fondo con transparencia
        backdropFilter: 'blur(10px)',
        textAlign:'center',
        //borderBottomLeftRadius: '5px',   // Redondear la esquina inferior izquierda
        //borderBottomRightRadius: '5px',
        borderLeft: isHovered ? '2px solid white' : 'none',  // Aplicar el borde si el cursor está sobre el elemento
        borderRight: isHovered ? '2px solid white' : 'none',
        borderBottom: isHovered ? '2px solid white' : 'none'
      };
      const linkStyles={
        display:'block',
        height:'100%',
        color:'white',
        textDecoration:'none',
        textAlign:'center'
      }
  return (
    <>
      <li 
      style={LiStilos}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <Link to={to} style={linkStyles}>{texto}</Link>
        
      </li>
    </>
    
  )
}

export default LiMenu
