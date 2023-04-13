import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

const Slide = () => {
    return (
        <div className="ml-12">
            <div>
                <p className=" text-start " >Últimas entradas</p>
                <Carousel
                className=""
                    autoFocus
                    autoPlay
                    infiniteLoop
                    width={650}
                    >
                    <div className=" h-80 ">
                        <img src="images/1.jpg" className=" rounded-sm h-full " />
                        <p className="legend">Nada más, simplemnete no quiero saber si esto durará. Gracias simplemente por estar aquí</p>
                    </div>
                    <div className=" h-80 ">
                        <img src="images/2.jpg" className=" rounded-sm h-full " />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div className=" h-80 ">
                        <img src="images/3.jpg" className=" rounded-sm h-full " />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </div>
  )
}

export default Slide