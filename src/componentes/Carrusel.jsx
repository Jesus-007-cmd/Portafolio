
import Carousel from 'react-bootstrap/Carousel';

//IMAGENES
import img1 from '../imgs/fondotech.jpg'
import img2 from '../imgs/fondotech2.jpg'
import img3 from '../imgs/fondotech3.jpg'
import img4 from '../imgs/fondotech4.jpg'
import img5 from '../imgs/fondotech5.jpg'




//CSS
import '../css/carrusel.css';

function Carrusel() {
    return (
        <Carousel className="background-size-carousel">
            <Carousel.Item >
                <img
                    className="background-img"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p className='threeD'>Te brindamos un servicio de visitas quincenales o de menor tiempo dependiendo de tus ventas </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="background-img"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p className='threeD'>Te apoyamos validando tus ventas para darte compra </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="background-img"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p className='threeD'>Comunicate para adquirir nuestros servicios</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="background-img"
                    src={img4}
                    alt="Condimentos en tasones, cucaharas y unos sobre mesa de madera"
                />

                <Carousel.Caption>
                    <p className='threeD'>
                        Nuestros paquetes vienen con una etiqueta con coloridas imagenes y en bolsa de celofan
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="background-img"
                    src={img5}
                    alt="condimentos varios"
                />

                <Carousel.Caption>
                    <p className='threeD'>
                        Gran variedad de productos para su preferencia
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

   
        </Carousel>
    );
}
export default Carrusel;