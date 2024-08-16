
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

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

const Filter = ({
  selectedBrands,
  selectedCategories,
  handleBrandChange,
  handleCategoryChange,
  setMinPrice,
  setMaxPrice,
  control,
  setControl
}) => {
  return (
    <div className="space-y-4 hidden md:flex flex-col">
      {/* price range */}
      <div className="grid grid-cols-2 gap-2">
        <h1 className="font-semibold">Min Price</h1>
        <h1 className="font-semibold">Max Price</h1>
        <form>
          <input
            type="number"
            onChange={(e) => {
              setMinPrice(e.target.value)
              setControl(!control)
            }}
            className="w-full bg-gray-200 rounded-md text-center py-1"
            name="minPrice"
            id=""
          />
        </form>
        <form>
          <input
            onChange={(e) => {
              setMaxPrice(e.target.value)
              setControl(!control)
            }}
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
                      onChange={() => handleCategoryChange(c)}
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
  );
};

export default Filter;