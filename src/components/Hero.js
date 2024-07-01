import "./Hero.css";
import ImageSlider from "./ImageSlider";
import kip from "../hero-images/KIP2.jpg";
import lcc from "../hero-images/LCC2.jpg";
import mcc from "../hero-images/MCC2.jpg";
import zadv from "../hero-images/Zadv2.jpg";
import communications from "../hero-images/Communications2.jpg";

const images = [
  {
    img: kip,
    hed: "Електро и КИПиА Проектиране",
    tex: "Специализирани програми и проектанти с над 10 годишен стаж",
  },
  {
    img: lcc,
    hed: "Автономни Системи",
    tex: "Локални табла за контрол и управление",
  },
  {
    img: mcc,
    hed: "Моторни Контролни Центрове (MCC)",
    tex: "Централизирани табла за управление на цели подобекти и възли.",
  },
  {
    img: zadv,
    hed: "Ел.Задвижки",
    tex: "Пълна гама електрически задвижвания за спирателна арматура",
  },
  {
    img: communications,
    hed: "Комуникация",
    tex: "Комуникационни решения за индустрията",
  },
];



      
const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-h1">Industrial and Civil Automation Solutions</h1>
      <ImageSlider images={images} transitionDuration={6000} />
      
      <i class="fi fi-rr-chevron-double-down" onClick={()=>window.scroll(0,900)}></i>
    </div>
  );
};

export default Hero;