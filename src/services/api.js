// import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

export async function fetchUsers() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log("Odpowiedź z axios:", res); 
      return res.data; 
    } catch (err) {
      console.error('Błąd podczas pobierania:', err);
      return [];
    }
  }
  