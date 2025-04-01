export function SearchBar(onSearch) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Szukaj użytkownika...';
    input.className = 'search-input'; 

    input.value = localStorage.getItem("searchQuery") || "";

    input.addEventListener('input', () => {
        const query = input.value;
        localStorage.setItem("searchQuery", query);
        onSearch(query);
    });

    setTimeout(() => onSearch(input.value), 0);

    return input;
}
