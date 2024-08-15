import { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import { Pagination } from "@mui/material";
// import Sort from "../../../components/sort/Sort";
// import Search from "../../../components/search/Search";
import axios from "axios";
import { FaSearch } from "react-icons/fa";


const options = [
    { value: "default", label: "Default" },
    { value: "priceDsc", label: "Price high to low" },
    { value: "priceAsc", label: "Price low to high" },
    { value: "newest", label: "Newest" },
  ];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [brandName, setBrandName] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemPerPage = 12;
  const [control, setControl] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].value);


  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`, {
        params: {
            search : search,
            sort: selectedOption,
        }
      })
      .then((res) => setProducts(res.data));
  }, [control]);

  const count = products?.length;
  const numberOfPages = Math.ceil(count / itemPerPage);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInfo = e.target.search.value;
    setSearch(searchInfo);
    setControl(!control);
  };
  const handleSort = (event) => {
    setSelectedOption(event.target.value);
    setControl(!control);
  };


  return (
    <div className="min-h-screen ">
      <div className="md:grid grid-cols-5">
        <div className="my-8 ">
          <div className="space-y-8">
            {/* <Search setSearch={setSearch} setControl={setControl}/> */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex justify-between gap-2 relative"
              >
                <input
                  type="text"
                  name="search"
                  placeholder="Enter product name"
                  id=""
                  className="bg-gray-200 w-full px-4 py-2 rounded-full"
                />
                <button className="absolute right-4 top-3 ">
                  <FaSearch />
                </button>
              </form>
            </div>
            <hr />
            {/* sort here.. */}
            {/* <Sort /> */}
            <div>
              <div className="flex gap-2 justify-between items-center">
                <h1>Sort:</h1>
                <select
                  className="bg-gray-200 w-full p-2 rounded-md"
                  value={selectedOption}
                  onChange={handleSort}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="mx-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 ">
            {products.map((p, idx) => (
              <div key={idx}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <Pagination
            page={page}
            numberOfPages={numberOfPages}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
