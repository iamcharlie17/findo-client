import { FaSearch } from "react-icons/fa";


const Search = ({handleSearch}) => {
  return (
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
  );
};

export default Search;