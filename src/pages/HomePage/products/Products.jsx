import { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  products.map(p => console.log(p.category));
  return (
    <div className="min-h-screen mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {products.map((p, idx) => (
        <div key={idx}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
};

export default Products;
