

import Buttons from '../componentes/Buttons'
import Button from "../componentes/Button";
import Superior from '../componentes/Superiorimg'
import img1 from '../imgs/restaurant.jpg'
import img2 from '../imgs/crypto.jpg'
import img3 from '../imgs/usofech.jpg'
import img4 from '../imgs/CRUD.jpg'
import img5 from '../imgs/localstore.jpg'
import img6 from '../imgs/landingdeventa.jpg'
import Inferior from '../componentes/Inferior'
import "../css/portafolio.css"; // import css
function Portafolio() {

  return (
    <>
      <header>      <Superior /></header>
      <div className='todo'>
        <div className="orden">

          <div className="division">
            <div className="Textotit">Proyectos</div>
            <div className="textnormal">
              Dentro de mis proyectos muestro incluso básicos que tal vez se vean con poca creatividad sin embargo los agrego ya que han
              sido parte de mi aprendizaje durante mi ultimo curso <b className="textnormal"> desarrollador Web Full Stack</b>
              del UCAMP de la <b className="textnormal">Universidad UTEL</b>

            </div>
          </div>
        </div>
        <Buttons></Buttons>
        <section className="proyectos" >
          <jumbotron className="proyecto" >
            <div className='TituloProyecto'>Restaurant </div>
            <div>   <img className="img_proy" src={img1} alt="Aplicación para realizar reservaciones de mesas de un restaurant asi como realizar pedidos a domicilio o recoger en tienda " />
            </div>
            <div className="marco"> Esta aplicación nos permitio conocer acerca de la conexión a una base de datos no relacional con dynamoDB y permite realizar reservaciones de mesas de un restaurant asi como realizar pedidos a domicilio o recoger en tienda.
              <div ><Button text='Click para Ver' event={() => { window.open('https://64601b629873bb1a50da0367--jolly-croquembouche-d0e47f.netlify.app/?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=031ef28c-4bca-47a5-8f7d-c6e62ce6257e&submissionId=d0addc22-53ad-610e-a361-ec6a23ca70e9') }} />
              </div>
            </div>
          </jumbotron>
          <jumbotron className="proyecto" >
            <div className='TituloProyecto'>Dashboard App </div>
            <div>   <img className="img_proy" src={img2} alt="Aplicación en equipo previa a la de criptos donde se mostro de manera sencilla la conexión a una api para guardar información y obtenerla." />
            </div>
            <div className="marco"> Página en equipo de precios de criptomonedas en 3 divisas, se puede elegir varios tipos de criptomonedas. Tiene opción de temporalidad por días, horas y minuto además de un gráfico con dicha información.
              <div ><Button text='Click para Ver' event={() => { window.open('https://jesus-007-cmd.github.io/Dashboard-de-Cryptos/?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=3cab0876-571b-4dfd-8ee7-270c9f058bcd&submissionId=58809112-e885-0bce-ca08-431100bdf527') }} />
              </div>
            </div>

          </jumbotron>
          <jumbotron className="proyecto" >
            <div className='TituloProyecto'>Uso de Fetch</div>
            <div>   <img className="img_proy" src={img3} alt="Aplicación en equipo previa a la de criptos donde se mostro de manera sencilla la conexión a una api para guardar información y obtenerla." />
            </div>
            <div className="marco"> Aplicación en equipo donde se mostro de manera sencilla la conexión a una api con fetch. Se cuentan con 3 opciones las cuales son consultar para ver los datos, limpiear tabla para borrar la información visible y agregar un nuevo dato.
              <div ><Button text='Click para Ver' event={() => { window.open('https://github.com/RoRo2023/Uso-de-fetch-en-sus-equipos?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=4b9a6a3d-783d-47c1-bb8e-a1594a65c809&submissionId=45c85ab3-beda-f47f-f4f2-e4ec569dbb96') }} />
              </div>
            </div>

          </jumbotron>
          <jumbotron className="proyecto" >
            <div className='TituloProyecto'>CRUD </div>
            <div>   <img className="img_proy" src={img4} alt="Aplicación web en la que se ejemplifica el uso de un CRUD con LocalStore donde se agrega, modifica, actauliza y visualiza empleados con datos sencillos del localstore, al inicio estaba pensando para uso personal en cuestiones laborales sin embargo solo quedo el aspecto visual y no funcional" />
            </div>

            <div className="marco"> Aplicación web en la que se ejemplifica el uso de un CRUD con LocalStore donde se agrega, modifica, actauliza y visualiza empleados con datos sencillos del localstore, al inicio estaba pensando para uso personal en cuestiones laborales sin embargo solo quedo el aspecto visual y no funcional.
              <div className='ordenbutton'><div><Button text='Click para Ver' event={() => { window.open('https://jesus-007-cmd.github.io/8CRUD_BRIGADAS/?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=bd958b81-e652-4623-962d-a027fbee668a&submissionId=b2f0b4c2-8f4b-2efb-7753-5fee3141a3fb') }} /></div>
                <div><Button text='Ver GitHub' event={() => { window.open('https://github.com/Jesus-007-cmd/8CRUD_BRIGADAS?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=bd958b81-e652-4623-962d-a027fbee668a&submissionId=b2f0b4c2-8f4b-2efb-7753-5fee3141a3fb') }} /> </div>
              </div>
            </div>
          </jumbotron>
          <jumbotron className="proyecto" >
            <div className='TituloProyecto'>Localstore </div>
            <div>   <img className="img_proy" src={img5} alt="Aplicación donde se logro aprender y entender el uso del localstore, una pequeña tarea donde se eliminan elementos del localstore de manera indiviudla y todos, asi como la restauración de los eliminados " />
            </div>
            <div className="marco"> Sitio web donde se ejemplifica  uso del localstore, una pequeña tarea donde se eliminan elementos del localstore de manera indiviudla o eliminarlos todos de manera conjunta, asi como la recarga de los elementos ya eliminados o su restauración, con uso de un recuadro de lista de elementos.
              <div className='ordenbutton'><div><Button text='Click para Ver' event={() => { window.open('https://jesus-007-cmd.github.io/Eliminacion-de-LocalStorage/?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=895e61b2-46b7-4202-99c8-0bfca387d0b9&submissionId=9db2f97f-1fe2-c09d-6ddc-0145142eee3a') }} /></div>
                <div><Button text='Ver GitHub' event={() => { window.open('https://github.com/Jesus-007-cmd/Eliminacion-de-LocalStorage?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=895e61b2-46b7-4202-99c8-0bfca387d0b9&submissionId=9db2f97f-1fe2-c09d-6ddc-0145142eee3a') }} /> </div>
              </div>
            </div>
          </jumbotron>
          <jumbotron className="proyecto" >
            <div className='TituloProyecto'>Localstore </div>
            <div>   <img className="img_proy" src={img6} alt="Aplicación donde se logro aprender y entender el uso del localstore, una pequeña tarea donde se eliminan elementos del localstore de manera indiviudla y todos, asi como la restauración de los eliminados " />
            </div>
            <div className="marco"> Sitio web sencillo de los comienzos en aprendizaje de desarrollador web, tiene algunos elementos de css, así como una marquesina, se realiza uso de hover para resaltar elementos, de los primeros sitios. Se que falta diseño, por lo que dentro de mis proximos cursos me actualizare en frontend.
              <div className='ordenbutton'><div><Button text='Click para Ver' event={() => { window.open('https://jesus-007-cmd.github.io/tarea6/?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=a8c19429-da39-437d-ac55-650a42392369&submissionId=025c4e0a-05bb-bdfe-2b30-01afa7194cd6') }} /></div>
                <div><Button text='Ver GitHub' event={() => { window.open('https://github.com/Jesus-007-cmd/tarea6?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=a8c19429-da39-437d-ac55-650a42392369&submissionId=025c4e0a-05bb-bdfe-2b30-01afa7194cd6') }} /> </div>
              </div>
            </div>
          </jumbotron>

        </section>
        <section >
          <Buttons></Buttons>
        </section>
      </div>
      <footer><Inferior /></footer>

    </>

  );
}
export default Portafolio