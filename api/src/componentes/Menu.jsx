// Menu.jsx
import React from 'react';
import LiMenu from './LiMenu';

function Menu() {
  const MenuStilos = {
    margin: '0px',
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    padding: 0, 
  };
  return (
    <div style={MenuStilos}>
      <LiMenu to="/" texto="Inicio"/>
      <LiMenu to="/Inicio" texto="Registro"/>
      <LiMenu to="/pacienteRejistrado" texto="Pacientes"/>
      <LiMenu to="/donaciones" texto="QR"/>
      <LiMenu to="/objetivos" texto="Ambulacia"/>
    </div>
  );
}

export default Menu;
