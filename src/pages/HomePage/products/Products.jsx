import { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import axios from "axios";
import Sort from "../../../components/sort/Sort";
import Search from "../../../components/search/Search";
import PaginationComponent from "../../../components/PaginationComponent/PaginationComponent";
import Filter from "../../../components/filterDrawer/Filter";
import FilterDrawer from "../../../components/filterDrawer/FilterDrawer";

const options = [
  { value: "default", label: "Default" },
  { value: "priceDsc", label: "Price high to low" },
  { value: "priceAsc", label: "Price low to high" },
  { value: "newest", label: "Newest" },
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
  const [loading, setLoading] = useState(false);

  const filter = {
    ...(selectedBrands && {
      brands: {
        $in: Object.keys(selectedBrands).filter(
          (brand) => selectedBrands[brand]
        ),
      },
    }),
    ...(selectedCategories && {
      categories: {
        $in: Object.keys(selectedCategories).filter(
          (category) => selectedCategories[category]
        ),
      },
    }),
    ...(minPrice > 0 && { price: { $gte: minPrice } }),
    ...(maxPrice > 0 && { price: { $lte: maxPrice } }),
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://findo-server.vercel.app/products`, {
        params: {
          search: search,
          sort: selectedOption,
          page: page,
          size: 12,
          filter: JSON.stringify(filter),
          brands: filter.brands.$in,
          categories: filter.categories.$in,
          minPrice: minPrice,
          maxPrice: maxPrice,
        },
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  }, [control]);

  useEffect(() => {
    axios
      .get("https://findo-server.vercel.app/count-products")
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

  const handlePageChange = (event, value) => {
    setPage(value);
    setControl(!control);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) => ({
      ...prevBrands,
      [brand]: event.target.checked,
    }));
    setControl(!control);
  };

  const handleCategoryChage = (category) => {
    setSelectedCategories((prevCategories) => ({
      ...prevCategories,
      [category]: event.target.checked,
    }));
    setControl(!control);
  };

  return (
    <div className="min-h-screen ">
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5">
        <div className="my-8 ">
          <div className="md:space-y-8 m-2 flex flex-wrap gap-4">
            <Search handleSearch={handleSearch} />
            <div className="flex justify-between gap-8 items-center w-full">
              <div className="flex-1">
                <Sort handleSort={handleSort} selectedOption={selectedOption} />
              </div>
              <div className="md:hidden">
                <FilterDrawer
                  selectedBrands={selectedBrands}
                  selectedCategories={selectedCategories}
                  handleBrandChange={handleBrandChange}
                  handleCategoryChange={handleCategoryChage}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                  setControl={setControl}
                  control={control}
                />
              </div>
            </div>
            <Filter
              selectedBrands={selectedBrands}
              selectedCategories={selectedCategories}
              handleBrandChange={handleBrandChange}
              handleCategoryChange={handleCategoryChage}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              setControl={setControl}
              control={control}
            />
          </div>
        </div>
        <div className=" md:col-span-3 lg:col-span-4">
          {loading ? (
            <div className="flex justify-center items-center min-h-screen">
                <h1>Loading...</h1>
            </div>
          ) : (
            <div className="mx-8 grid grid-cols-2 min-h-screen lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 ">
              {products.map((p, idx) => (
                <div key={idx}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}

          <PaginationComponent
            numberOfPages={numberOfPages}
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
