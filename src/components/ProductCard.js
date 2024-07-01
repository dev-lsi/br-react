import "./ProductCard.css";

const ProductCard = (props) => {
  const { product } = props;
  const {
    serieName,
    serieNameSecond,
    serieDevise,
    videoSrc,
    h2Part1,
    h2Part2,
    productDescription,
    href,
  } = product;

  return (
    <div className={"product-card"} key={serieName}>
      <div className="video-description">
        <div className="over-video-header">
          <h2>
            <span className="white">{serieName}</span>
            {serieNameSecond}
          </h2>
          <h5>
            <span className="white">{serieDevise}</span>
          </h5>
        </div>
        <div className="products-video-container">
          <video
            className={"products-video"}
            src={videoSrc}
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
      <div className="product-description">
        <h3>
          {h2Part1}
          <span className="yellow">{h2Part2}</span>
        </h3>
        <h1>
          <span className="yellow">.</span>..
        </h1>
        <div className="paragraph-and-link-div">
          <p>{productDescription}</p>
          <a
            className="link-to-product yellow"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            See more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
