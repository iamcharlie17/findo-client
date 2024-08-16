import { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
// import Sort from "../../../components/sort/Sort";
// import Search from "../../../components/search/Search";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Pagination,
  Stack,
} from "@mui/material";
import FilterDrawer from "../../../components/filterDrawer/FilterDrawer";

const options = [
  { value: "default", label: "Default" },
  { value: "priceDsc", label: "Price high to low" },
  { value: "priceAsc", label: "Price low to high" },
  { value: "newest", label: "Newest" },
];

const brands = [
  "Nike",
  "Apple",
  "Coca-Cola",
  "Samsung",
  "L'Oréal",
  "Levi's",
  "Toyota",
  "Nespresso",
  "Sony",
  "Lego",
];

const categories = [
  "Electronics",
  "Sports",
  "Kitchen",
  "Appliances",
  "Home Appliances",
  "Kitchen Appliances",
  "Furniture",
  "Entertainment",
  "Books",
  "Fitness",
  "Health & Beauty",
  "Beauty",
  "Baby",
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState({});
  const [selectedCategories, setSelectedCategories] = useState({});
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
          size: 12,
        },
      })
      .then((res) => setProducts(res.data));
  }, [control]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/count-products")
      .then((res) => setCount(res.data.length));
  }, []);

  const numberOfPages = Math.ceil(count / 12);

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

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) => ({
      ...prevBrands,
      [brand]: event.target.checked,
    }));
  };

  const handleCategoryChage = (category) => {
    setSelectedCategories((prevCategories) => ({
      ...prevCategories,
      [category]: event.target.checked,
    }));
  };

  console.log(selectedCategories);

  return (
    <div className="min-h-screen ">
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5">
        <div className="my-8 ">
          <div className="md:space-y-8 m-2 flex flex-wrap gap-4">
            {/* <Search setSearch={setSearch} setControl={setControl}/> */}
            <div className="w-full">
              <form
                onSubmit={handleSearch}
                className="flex justify-between gap-2 relative "
              >
                <input
                  type="text"
                  name="search"
                  placeholder="Product Name"
                  id=""
                  className="bg-gray-200 w-full px-4 py-2 rounded-full"
                />
                <button className="absolute right-4 top-3 ">
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="flex justify-between gap-8 items-center w-full">
              {/* sort here.. */}
              {/* <Sort /> */}
              <div className="flex-1">
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
              <div className="md:hidden">
                <FilterDrawer />
              </div>
            </div>
            <div className="space-y-4 hidden md:flex flex-col">
              {/* price range */}
              <div className="grid grid-cols-2 gap-2">
                <h1 className="font-semibold">Min Price</h1>
                <h1 className="font-semibold">Max Price</h1>
                <form>
                  <input
                    type="number"
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full bg-gray-200 rounded-md text-center py-1"
                    name="minPrice"
                    id=""
                  />
                </form>
                <form>
                  <input
                    onChange={(e) => setMaxPrice(e.target.value)}
                    type="number"
                    className="w-full bg-gray-200 rounded-md text-center py-1"
                    name="maxPrice"
                    id=""
                  />
                </form>
              </div>
              <div className="lg:flex">
                {/* brand checkbox */}
                <div>
                  <h1 className="font-semibold">Brands</h1>
                  <hr />
                  <div>
                    <FormGroup>
                      {brands.map((brand, index) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              checked={selectedBrands[brand] || false}
                              onChange={() => handleBrandChange(brand)}
                            />
                          }
                          label={brand}
                        />
                      ))}
                    </FormGroup>
                  </div>
                </div>
                {/* category checkbox */}
                <div>
                  <h1 className="font-semibold">Categories</h1>
                  <hr />
                  <div>
                    <FormGroup>
                      {categories.map((c, index) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              checked={selectedCategories[c] || false}
                              onChange={() => handleCategoryChage(c)}
                            />
                          }
                          label={c}
                        />
                      ))}
                    </FormGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-3 lg:col-span-4">
          <div className="mx-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 ">
            {products.map((p, idx) => (
              <div key={idx}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          {/* pagination here */}
          <div>
            <Stack spacing={2}>
              <Pagination
                count={numberOfPages}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
