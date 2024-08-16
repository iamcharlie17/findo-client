import { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
// import Sort from "../../../components/sort/Sort";
// import Search from "../../../components/search/Search";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Pagination, Stack, Typography } from "@mui/material";

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
  const [control, setControl] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`, {
        params: {
          search: search,
          sort: selectedOption,
          page: page,
          size: 12
        },
      })
      .then((res) => setProducts(res.data));
  }, [control]);

  useEffect(()=>{
    axios.get('http://localhost:3000/count-products')
    .then(res => setCount(res.data.length));
  },[])

  const numberOfPages = Math.ceil(count/ 12);
  

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInfo = e.target.search.value;
    setSearch(searchInfo);
    setControl(!control);
  };

  const handleSort = (event) => {
    setSelectedOption(event.target.value);
    setControl(!control);
  };

  const handleChange = (event, value) => {
    setPage(value);
    setControl(!control);
  };

//   products.map((p) => console.log(p.brand));

  return (
    <div className="min-h-screen ">
      <div className="md:grid grid-cols-5">
        <div className="my-8 ">
          <div className="md:space-y-8 flex md:block justify-around items-center">
            {/* <Search setSearch={setSearch} setControl={setControl}/> */}
            <div>
              <form
                onSubmit={handleSearch}
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
            <hr />
            <div>filter here..</div>
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
          {/* pagination here */}
          <div>
            <Stack spacing={2}>
              <Pagination count={numberOfPages} page={page} onChange={handleChange} />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
