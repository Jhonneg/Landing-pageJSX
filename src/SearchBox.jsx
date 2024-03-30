function SearchBox({ searchChange }) {
  return (
    <div className="p-10">
      <input
        className="p-2 rounded-lg bg-slate-500 placeholder:text-black"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
