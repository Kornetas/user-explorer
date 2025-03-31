export function SearchBar(onSearch) {
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Szukaj użytkownika...'
    input.addEventListener('input', () => onSearch(input.value))
    return input
}