import { FaSearch } from "react-icons/fa";

const Search = ({setSearch}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInfo = e.target.search.value;
    console.log(searchInfo)
    setSearch(searchInfo);
  };
  return (
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
  );
};

export default Search;
