import "./Products.css";
import "../App.css";
import { productsSchiebel } from "../utils/data.js";
import ProductCard from "../components/ProductCard.js";

const Products = () => {
  const cards = productsSchiebel.map((p) => {
    return <ProductCard product={p} />;
  });

  //return products page.......................................//
  return (
    <div className="products-div">
      <div>
        <h1>High-end actuators from Austria</h1>
        {/* <iframe className="iframe-scheibel" title="sheibel" src="https://schiebel-actuators.com/en/" width="900" height="400"></iframe> */}
        <a
          className=".link-to-product"
          href={"https://schiebel-actuators.com/en/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          SCHIEBEL Antriebstechnik GmbH
        </a>
      </div>
      {cards}
    </div>
  );
};

export default Products;
