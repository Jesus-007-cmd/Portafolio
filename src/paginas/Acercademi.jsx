
import Superior from '../componentes/Superiorimg'
import Inferior from '../componentes/Inferior'
import Buttons from '../componentes/Buttons'

import yoimg from '../imgs/familia.jpg'
import "../css/acercademi.css"; // import css
function Acercademi() {

  return (
    <>
      <header>      <Superior /></header>
      <div className='todomi'>

        <center><div className="Textotitulo">Acerca de Mi</div></center>
        <div className="division">

          <div className="textonormal">
            Soy ingeniero en sistemas computacionales egresado del Instituto Tecnológico de Delicias y tengo una maestría en
            sistemas computacionales de la Universidad Autónoma de Chihuahua. Actualmente me sigo capacitando y especializándome
            en <b className="textonormal">desarrollador Web Full Stack</b>
            cuyo último aprendizaje lo obtuve gracias al UCAMP de la <b className="textonormal">Universidad UTEL</b>
            <p></p>
            Como se muestra en la imagen tengo una hermosa familia, mi esposa y mis hijas con las que Dios me ha bendecido
            y me han permitido por estar con ellas en este pequeño lapso de vida que nos brinda.

          </div>

          <div >
            <img className="format_imge" src={yoimg} alt="foto de Jesús Antonio" />
          </div>
        </div>
        <Buttons></Buttons>
      </div>
      <footer><Inferior /></footer>

    </>

  );
}
export default Acercademi