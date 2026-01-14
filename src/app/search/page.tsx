"use client";
import Search from "@/components/search/Search/Search";

const SearchPage = () => {
  return (
    <div>
      <Search
        debounce={3000}
        onSearch={() => alert("hello")}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchPage;
