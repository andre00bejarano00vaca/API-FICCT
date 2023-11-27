// App.jsx
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Buscador from './componentes/Buscador';
import Comentario from './componentes/Comentario';
import Menu from './componentes/Menu';
import Inicio from './componentes/Inicio';
import Materias from './componentes/Pacientes';
import Donaciones from './componentes/Donaciones';
import Objetivos from './componentes/Objetivos';
import PacienteRejistrado from './componentes/PacienteRejistrado';
import Bienvenido from './componentes/Bienvenido';

function App({db}) {
  const contenedor = {
    backgroundColor:'white',
    width:'100%',
    height:'100vh',
    display: 'grid',
    gridTemplateRows: '7% 1fr',
  };

  return (
    <HashRouter>
      <>
        <div style={contenedor}>
          <Menu />
          <Routes>
          <Route path="/pacienteRejistrado" element={<PacienteRejistrado/>} />
          <Route path="/donaciones" element={<Donaciones/>} />
          <Route path="/objetivos" element={<Objetivos/>} />
          <Route path="/inicio" element={<Inicio db={db}/>} />
          <Route path="/" element={<Bienvenido/>} />
          </Routes>
        </div>
      </>
    </HashRouter>
  );
}

export default App;
