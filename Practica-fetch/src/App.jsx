import {BrowserRouter as Router, Routes, Route} from 'react-router';

import Home from './Pages/Home';
import Nav from './Components/Nav'; 
import DragonBall from './Pages/DragonBall';  // Importar el Componente DragonBall desde la carpeta Pages

function App() {  // definir el Componente Principal de la Aplicación
  return (  //renderizar el Componente Principal de la Aplicación
  <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dragon' element={<DragonBall />} />
      </Routes>
    </Router>
  </>
);
}
export default App;
