import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/e-commerce-banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-96px-68px)]"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold">Explore Endless Choices</h1>
         <Link to={'/products'}> <button className="btn ">Find Your Product</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
