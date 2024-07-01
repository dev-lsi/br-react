import { Link } from "react-router-dom";
import "./SpecialLink.css";

const SpecialLink=(props)=>{

    const{image,text,url} = props;
    return(
        <div className="special-link">
            <img src={image} alt={text}></img>
            <Link className="link-itself" to={url}>{text}</Link>
        </div>
    )
}

export default SpecialLink;