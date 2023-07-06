//import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PaginaInicio from './paginas/Pagina';
import Acerca from './paginas/Acercademi';
import Portafolio from './paginas/Portafolio';
import Curriculum from './paginas/Curriculum';

function Enrutador() {
    return (
        
        <Routes>
            
            <Route path='/' element={<PaginaInicio/>}/>
            <Route path='/index' element={<PaginaInicio/>} />
            <Route path='/Acercademi' element={<Acerca/>} />
            <Route path='/Portafolio' element={<Portafolio/>} />
            <Route path='/Curriculum' element={<Curriculum/>} />
        </Routes>
     
    )
}

export default Enrutador;

 