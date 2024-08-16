

const options = [
    { value: "default", label: "Default" },
    { value: "priceDsc", label: "Price high to low" },
    { value: "priceAsc", label: "Price low to high" },
    { value: "newest", label: "Newest" },
  ];

const Sort = ({selectedOption, handleSort}) => {
    return (
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
    );
};

export default Sort;