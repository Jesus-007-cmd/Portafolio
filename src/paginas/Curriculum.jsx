
import Superior from '../componentes/Superiorimg'
import Buttons from '../componentes/Buttons'
import Inferior from '../componentes/Inferior'

import "../css/curriculum.css"; // import css

function Curriculum() {

  return (
    <>
      <header>      <Superior /></header>
      <div className='fondo'>

        <center> <div className="Textotit">CURRICULUM VITAE</div></center>
        <p></p>
        <center> <h3>Información personal: </h3></center>
        <hr />
        <div class="Contenedor">
          <div >

            <ul>
              <li><i class="bi bi-file-check" />   Nacionalidad: <span className='letra'>    Mexicano </span></li>
              <li><i class="bi bi-file-check" />   Estado civil: <span className='letra'>Casado</span></li>
              <li><i class="bi bi-file-check" />   Lugar de nacimiento:<span className='letra'> Cd. Delicias, Chihuahua.</span></li>
              <li><i class="bi bi-file-check" />   Dirección: <span className='letra'>Ave. Rosales # 411 C.P. 33120</span></li>
              <li><i class="bi bi-file-check" />   Ciudad: <span className='letra'>Rosales, Chihuahua.</span></li>
              <li><i class="bi bi-file-check" />   Estatura: <span className='letra'>1.69m.</span></li>
            </ul>
          </div>
          <div >

            <ul>
              <li><i class="bi bi-file-check" />   Fecha de nacimiento:  <span className='letra'>02/03/1982</span></li>
              <li><i class="bi bi-file-check" />   Teléfono:  <span className='letra'>(01-639) 128-8066</span></li>
              <li><i class="bi bi-file-check" />   Correo electrónico:  <span className='letra'>jesusgtz1@hotmail.com</span></li>
              <li><i class="bi bi-file-check" />   Cedula profesional licenciatura:  <span className='letra'>4912670</span></li>
              <li><i class="bi bi-file-check" />   Cedula profesional Maestría:  <span className='letra'>9841344</span></li>
              <li><i class="bi bi-file-check" />   <a href="https://www.linkedin.com/in/jesus-antonio-gutierrez-68a9b36b"> <span className='letra'>Linkedin</span></a> </li>
            </ul>
          </div>
        </div>
        <center> <h3>Educación: </h3></center>
        <hr />
        <div className='margen' >
          <ul>
            <li><i class="bi bi-airplane-engines" />   2022 -2023:  Universidad Utel <span className='letra'>UCAMP de Desarrollador Web Full Stack JavaScript - React- AWS - DynamoDB - CSS </span> </li>
            <li><i class="bi bi-airplane-engines" />   2007 -2010: Universidad Autónoma de Chihuahua <span className='letra'>Maestría en sistemas Computacionales. Especialidad:
              Automatización; Ciudad: Chihuahua, Chihuahua.</span></li>
            <li><i class="bi bi-airplane-engines" />   2000-2005: Instituto Tecnológico de Delicias <span className='letra'>Ingeniería en Sistemas Computacionales; Titulo: INGENIERO,
              Especialidad: Redes; Ciudad: Delicias, Chihuahua.</span></li>
            <li><i class="bi bi-airplane-engines" />   2008-2010: Instituto Tecnológico de Chihuahua <span className='letra'>Maestría en ciencias en ingeniería en electrónica. Especialidad:
              Automatización; Ciudad: Chihuahua, Chihuahua. Conocimientos lean manufactura, desarrollo de proyectos para el
              cálculo de métricos de manufactura como BTS, OEE, FTT. Pasante</span></li>
            <li><i class="bi bi-airplane-engines" />   1997-2000: <span className='letra'>Escuela Preparatoria Federal por Cooperación Activo 20-30 “Albert Einstein”; Bachillerato: Físico
              Matemático, Especialidad: Técnico en computadoras Ciudad: Delicias, Chihuahua</span></li>
          </ul>

        </div>
        <center> <h3>Experiencia laboral: </h3>

          <hr />
          <div className='margen'>
            <table >
              <tr bgcolor="gray">
                <th>Organización</th>
                <th>Periodo</th>
                <th>Descripción del empleo</th>
              </tr>
              <tr >
                <td>RadioMovil Dipsa (Telcel).</td>
                <td>Junio 6 2016 a la Fecha</td>
                <td>Analista de Equipo Terminal, Reparación de equipos, envió y recepción(DHL, UPS), actualización y portación de equipos, mantenimiento.</td>
              </tr>
              <tr className='simple-linear'>
                <td>Universidad Tecnológica de Camargo (Extensión Meoqui)</td>
                <td>Septiembre 2017 a Diciembre 2017</td>
                <td>Profesor. Materias: Dispositivos Digitales (Enfocado a programación de PLD
                  para cuarto cuatrimestre), Dispositivos Digitales Programables (Programación de
                  Pld's, FPGA a través de lenguaje de descripción de hardware VHDL),
                  Electrónica Digital y Programación de Sistemas Integrados embebidos (Con
                  microcontrolado pic16f889).</td>
              </tr>
              <tr>
                <td>Instituto Tecnológico de Delicias.</td> <td>Febrero 2017 a Junio 2017</td> <td> Profesor.Materias: Administración y seguridad de Redes y Sistemas Operativos II. </td>
              </tr>
              <tr className='simple-linear'> <td>RadioMovil Dipsa (Telcel)</td> <td>Noviembre 2011 a Junio 5 2016</td> <td>Asesor de Servicio a Clientes Personalizado, Ventas, administración, Atención al cliente</td>
              </tr>
              <tr > <td rowspan="12" >Instituto Tecnológico de Delicias	</td>   <td>Septiembre 2016 a Diciembre 2016</td> <td>Profesor: Matemáticas aplicadas a las telecomunicaciones y Física General.</td>
              </tr>
              <tr className='simple-linear'>			<td>Febrero 2016 a Junio 2016</td> 	 <td>Profesor: Métodos Numéricos</td></tr>
              <tr >	      <td>Septiembre 2015 a Diciembre 2015</td><td>Profesor: Matemáticas aplicadas a las comunicaciones y Dibujo.</td> </tr >
              <tr className='simple-linear'>	        <td>Febrero 2015 a Junio 2015</td> 	 <td>Profesor: Matemáticas aplicadas a las comunicaciones.</td></tr >
              <tr >	      <td>Septiembre 2014 a Diciembre 2014</td> <td>Profesor: Matemáticas aplicadas a las comunicaciones y programación lógica.</td></tr >
              <tr className='simple-linear'>	      <td>Febrero 2014 a Junio 2014</td> 	 <td>Profesor: Arquitectura de Computadoras.</td></tr >
              <tr >	      <td>Septiembre 2013 a Diciembre 2013</td> <td>Profesor: Sistemas programables</td></tr >
              <tr className='simple-linear'>	      <td>Octubre 2012 a Diciembre 2012</td>   <td>Profesor: Análisis de señales y sistemas de comunicaciones y Bases de Datos distribuidas.</td></tr >
              <tr >	      <td>Febrero 2012 a Junio 2012</td>  	 <td>Profesor: Análisis de señales y sistemas de comunicaciones.</td></tr >
              <tr className='simple-linear'>	      <td>Agosto 2011 a Diciembre 2011</td>     <td>Profesor: Introducción a la Programación para electromecánica</td></tr >
              <tr >	      <td>Febrero 2011 a Junio 2011</td>   	 <td>Profesor: Programación para electromecánica, Bases de Datos Distribuidas II, Software de Sistemas y Matemáticas Discretas. Desarrollo de Proyectos en C#</td> </tr >
              <tr className='simple-linear' >	      <td>Agosto 2010 a Diciembre 2010</td>   <td>Profesor: Programación</td></tr >


              <tr >	      <td> Presidencia municipal de Rosales 	</td>   <td>Octubre 2010 a Octubre 2013     </td>   <td> Administrador de portal del municipio de Rosales. Manejo de transparencia.</td></tr>
              <tr className='simple-linear'>	      <td> Universidad Autónoma de Chihuahua	</td>   <td> Marzo 2008 a Diciembre 2008      </td>   <td>Profesor: Análisis de Circuitos Eléctricos I, Análisis de Circuitos Eléctricos II y Circuitos Lógicos.</td></tr>
              <tr >	      <td>Instituto Tecnológico de Chihuahua II   </td>   <td>Febrero 2008 a Diciembre 2008    </td>   <td>Profesor: Programación Orientada a Objetos, Programación Web y Planificación y modelado (software). Desarrollo de proyectos en Java con NetBeans, Visual Basic.Net para servicios Web y desarrollo de Páginas Web.</td></tr>
              <tr className='simple-linear'>	      <td>Centro de Estudios Universitarios del Norte </td>   <td>Septiembre 2005 a Junio 2006  </td>   <td>Profesor: Física (sobre electricidad), Matemáticas Discretas, Sistemas operativos, Ingeniería del Software, Métodos de ordenación y búsqueda de datos, Diseño de algoritmos. Desarrollo de proyectos en Visual Basic.Net</td></tr>
              <tr >	      <td>A.C.U. Modulo 1 Est. Conchos. 		</td>   <td>Junio 2006 a Agosto 2007  	 </td>   <td>Programador de conservación, plan de riegos. Elaboración de reportes de conservación e informes de distribución del agua. Corrección y actualización del plano en autocad de las parcelas adjuntas al modulo de riego.</td></tr>
              <tr className='simple-linear'>	      <td>Condimentos del Rio Comerciante. </td>   <td>Tiempos libres </td>   <td>negocio familiar, Experiencia en ventas, abrir mercado, logística</td></tr>
            </table>
          </div>
        </center>
      </div>
     


      <Buttons></Buttons>


      <footer><Inferior /></footer>


    </>

  );
}
export default Curriculum