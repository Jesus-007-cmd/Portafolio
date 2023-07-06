import "../css/navegacion.css"
import { useNavigate } from "react-router-dom";

function Buttons() {
    const navigate = useNavigate();
    return (

        <div className="group_btns">
            <button className="btns" onClick={() => {

                navigate('../')
            }}> <div  >Inicio </div> </button>


            <button className="btns" onClick={() => {

                navigate('../acercademi')
            }}> <div >Acerca de Mi</div> </button>
            <button className="btns" onClick={() => {

                navigate('../Portafolio')
            }}> <div  >Portafolio</div> </button>
            <button className="btns" onClick={() => {

                navigate('../Curriculum')
            }}> <div  >Curriculum</div> </button>
            <button className="btns" onClick={() => {
                window.open('https://github.com/Jesus-007-cmd')

            }}> <div  >Mi GitHub </div> </button>
        </div>
    )
}
export default Buttons