const ProductCard = ({ product }) => {
  return (
    <div className="shadow-lg rounded-md px-4 py-8 my-4">
      <div className="flex justify-center">
        <img
          src={product.productImage}
          className="h-36 md:h-40 w-32 md:w-36 object-cover object-center"
          alt=""
        />
      </div>
      <div className="text-center space-y-1 mt-4">
        <h1 className="text-xs md:text-sm lg:text-xl">{product.productName}</h1>
        <h2><span className="font-bold">{product.price}</span> BDT</h2>
        <div className="flex justify-center">
          <div className="flex gap-1">
            <button className="text-[10px] md:text-[14px] bg-orange-600 text-white px-1 md:px-2 rounded-sm">
              <small>Buy Now</small>
            </button>
            <button className="text-[10px] md:text-[14px] px-1 md:px-2 border border-orange-500  rounded-sm">
              <small>Add to Cart</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
