import React, { useState, useEffect } from 'react';
import { db } from '../firebaseB';
import { collection, getDocs } from 'firebase/firestore';

const PacienteRejistrado = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usuariosCollection = collection(db, 'usuarios');
        const usuariosSnapshot = await getDocs(usuariosCollection);

        const usuariosData = usuariosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsuarios(usuariosData);
        console.log('Datos obtenidos de Firestore:', usuariosData);
      } catch (error) {
        console.error('Error al obtener datos de Firestore:', error.message);
      }
    };

    fetchData();
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  const filteredUsuarios = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h2 style={{ color: 'white', textAlign: 'center', padding: '5px' }}>Datos de Usuarios</h2>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ ...inputStyle, padding: '5px' }}
        />
        <ul style={{ ...ulStyle, padding: '5px' }}>
          {filteredUsuarios.map((usuario) => (
            <li key={usuario.id} style={{ ...liStyle, padding: '5px' }}>
              <strong>{usuario.nombre}</strong> - {usuario.apellidos} - CI: {usuario.ci} - Número: {usuario.numero} - Seguro: {usuario.seguro} - Diagnóstico: {usuario.diagnostico}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const containerStyle = {
  backgroundImage: 'url(https://ueb.edu.bo/wp-content/uploads/2023/04/tecnologia-en-la-formacion-de-salud-.jpg)',
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
  position: 'relative',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '20px',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '600px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
};

const ulStyle = {
  padding: 0,
  margin: 0,
  listStyle: 'none',
};

const liStyle = {
  width: '100%',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '8px',
};

export default PacienteRejistrado;
