import "./Section1.css";

import clock from "../assets/clock.png";
import clock01 from "../assets/clock01.png";
import clock02 from "../assets/clock02.png";
import clock03 from "../assets/clock03.png";
import clock04 from "../assets/clock04.png";
import globe from "../assets/globe.png";
import LogoText from "../cropped-LOGO_blank.png";
import SpecialLink from "./SpecialLink";

const Section1=()=>{
    return (
        <div className="section-1-div">
        <SpecialLink image={clock} text={"SignUp"} url={""} />
        {/* <SpecialLink image={globe} text={"LogIn"} url={""} />
        <SpecialLink image={clock01} text={"Contact"} url={""} />
        <SpecialLink image={clock02} text={"......"} url={""} />
        <SpecialLink image={clock03} text={"......"} url={""} />
        <SpecialLink image={clock04} text={"......"} url={""} /> */}
        <i
          class="fi fi-rr-chevron-double-down "
          onClick={() => {
            window.scrollTo({
              top: 2*window.screen.availHeight,
              behavior: "smooth",
            });
          }}
        ></i>
      </div>

    )
}

export default Section1;