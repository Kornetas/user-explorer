export async function fetchUsers() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  } catch (err) {
    console.error("Błąd podczas pobierania:", err);
    return [];
  }
}
