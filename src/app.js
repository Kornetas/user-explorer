import { fetchUsers } from './services/api.js'
import { UserCard } from './components/UserCard.js'
import { SearchBar } from './components/SearchBar.js'

export async function initApp(container) {
    const users = await fetchUsers();
console.log("Użytkownicy:", users);

    const app = document.createElement('div')
    const list = document.createElement('div')
    list.id = 'user-list'
    
    const search = SearchBar((query) => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
        )
        list.innerHTML = ''
        filtered.forEach(user => list.appendChild(UserCard(user)))
    })

    app.appendChild(search)
    users.forEach(user => list.appendChild(UserCard(user)));
    app.appendChild(list)

    container.appendChild(app)
}