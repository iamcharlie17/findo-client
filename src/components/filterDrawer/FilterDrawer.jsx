
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

const FilterDrawer = ({
  selectedBrands,
  selectedCategories,
  handleBrandChange,
  handleCategoryChange,
  setMinPrice,
  setMaxPrice,
}) => {

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button ">
          Filter
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <div className="space-y-4 p-4">
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
            <div className="flex justify-around">
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
        </ul>
      </div>
    </div>
  );
};

export default FilterDrawer;
