export function SearchBar(onSearch) {
  //create the input element for search
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search user...";
  input.className = "search-input";

  //restore previous query from localStorage
  input.value = localStorage.getItem("searchQuery") || "";

  //handle input change
  input.addEventListener("input", () => {
    const query = input.value;
    localStorage.setItem("searchQuery", query);
    onSearch(query);
  });

  //trigger initial search after mount
  setTimeout(() => onSearch(input.value), 0);

  return input;
}
