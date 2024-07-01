import "./Home.css";

import Hero from "../../src/components/Hero.js";
import Section1 from "../../src/components/Section1.js";


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Section1/>
      <div className="what-we-do-div">
        <h1> What we can Do For You</h1>
        <h4>Диспечерски (SCADA) системи </h4>
        <h4>Централни Диспечерски Пунктове (ЦДП)</h4>
        <h4>
          Всички гами Индустриални Програмируеми Контролери (PLC) на SIEMENS
        </h4>
        <h4>Предпроектни проучвания и анализи</h4>
        <h4>Проектиране</h4>
        <h4>Изработка</h4>
        <h4>Програмиране на PLC и HMI;</h4>
        <a href='https://schiebel-actuators.com/en/' target="_blank" rel="noopener noreferrer">SCHIEBEL</a>
      </div>
    </div>
  );
};

export default Home;
