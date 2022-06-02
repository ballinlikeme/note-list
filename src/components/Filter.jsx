export const Filter = ({ handleFilterChange }) => {
  const handleChange = (event) => {
    handleFilterChange(event.target.value);
  };

  return (
    <div className="page__filter filter">
      <h2 className="filter__title">Filter</h2>
      <div className="filter__input">
        <input
          placeholder="Try to search for something..."
          type="text"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
