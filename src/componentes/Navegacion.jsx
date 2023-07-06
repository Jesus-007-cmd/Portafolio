import "../css/navegacion.css"

import { Link } from "react-router-dom"
function Navegacion(){
 
    return(
      
        <nav className='orden'>
         
       
          <Link to="/Acercademi"> Acerca de Mi </Link> 
          {/*<Link path="/demo"></Link>Curriculm </Link> 
          <Link path="/demo"></Link>Proyectos</Link> */}
          <button className="btns" onClick={() => {
                        window.open('https://github.com/Jesus-007-cmd')
                        //</div>           navigate('../Registrarse')
                    }}> <div className='header-inicio' >Mi GitHub </div> </button>
        </nav>
        )
}
export default Navegacion