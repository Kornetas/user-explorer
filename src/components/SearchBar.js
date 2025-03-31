export function SearchBar(onSearch) {
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Szukaj użytkownika...'

    //wczytaj poprzednią wartość
    input.value = localStorage.getItem("searchQuery") || ""
    
    input.addEventListener('input', () => {
        const query = input.value
        localStorage.setItem("searchQuery", query) //dodanie do localstorage
        onSearch(query)
    })

    //wywołaj od razu przy starcie
    setTimeout(() => onSearch(input.value), 0)
    
    return input
}