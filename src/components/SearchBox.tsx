interface iSearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

export default function SearchBox({ searchChange }: iSearchBoxProps) {
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
