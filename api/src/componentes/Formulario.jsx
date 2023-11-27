import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../firebaseB'; 
import { collection, addDoc,doc,setDoc } from 'firebase/firestore';


const Formulario = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    const onSubmit = async (data) => {
      try {
        // Genera un ID único (puedes usar otra lógica si es necesario)
        const usuarioId = data.nombre.toLowerCase().replace(/\s+/g, '-');
  
        // Guarda los datos en Firestore con un ID personalizado
        const usuarioRef = doc(collection(db, 'usuarios'), usuarioId);
        await setDoc(usuarioRef, {
          nombre: data.nombre,
          apellidos: data.apellidos,
          ci: data.ci,
          numero: data.numero,
          seguro: data.seguro,
          diagnostico: data.diagnostico,
        });

        console.log('Datos guardados en Firestore con ID personalizado:', usuarioId);
  
        // Limpiar los campos del formulario después de enviar los datos
        reset();
      } catch (error) {
        console.error('Error al guardar datos en Firestore:', error.message);
      }
    };
  const formulario={
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '10px',
    width: '80%', // Puedes ajustar el ancho según tus necesidades
    maxWidth: '350px',
    margin: 'auto',
    backgroundColor: 'white', // Fondo blanco
    borderRadius: '16px', // Radio de borde
    padding: '20px', // Ajusta el relleno según tus necesidades
    
    border:'2px solid black'
  }
  const gridStyles = {
    
    backgroundImage: 'url(https://img.freepik.com/psd-gratis/habitacion-hospital-cama-mesa-ia-generativa_587448-2097.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais)',
      // Esta propiedad centrará el contenido tanto horizontal como verticalmente
    height: '100%', // Reemplaza "URL_DE_TU_IMAGEN" con la URL de tu imagen
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Altura del 100% del viewport'
  };
  const button = {
    backgroundColor: '#038554',
    border: 'none',
    color: 'white',
    cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
  };
  const overlayStyle = {
    display: 'grid',
placeItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta el tono oscuro aquí
  };


  return (
    <div style={gridStyles}>
      <div style={overlayStyle}>
      <form style={formulario} onSubmit={handleSubmit(onSubmit)}>

        {/* nombre */}
        <label htmlFor="nombre">Nombre</label>
        <input type="text" {...register("nombre",{required:true})} id="nombre" />
        {errors.nombre && <span>Nombre requerido</span>}

        {/* apellidos */}
        <label htmlFor="apellidos">Apellidos</label>
        <input type="text" {...register("apellidos",{required:true})} id="apellidos" />
        {errors.apellidos && <span>Apellidos requeridos</span>}

        {/* c.i. */}
        <label htmlFor="ci">C.I</label>
        <input type="number" {...register("ci",{required:true})} id="ci" />
        {errors.ci && <span>C.I. requerido</span>}

        {/* numero */}
        <label htmlFor="numero">Numero</label>
        <input type="number" {...register("numero",{required:true})} id="numero" />

        {/* Seguro */}
        <label htmlFor="seguro">Seguro</label>
        <input type="text" {...register("seguro",{required:true})} id="seguro" />
        
        {/* diagnostico */}
        <label htmlFor="diagnostico">Diagnostico</label>
        <textarea type="text" {...register("diagnostico",{required:true})} id="diagnostico" />

        <button style={button} type="submit">Enviar</button>

      </form>
      </div>
    </div>
  );
};

export default Formulario;
