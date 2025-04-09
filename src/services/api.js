export async function fetchUsers() {
  try {
    // Fetch user data from API
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (err) {
    console.error("Error while fetching users:", err);
    return [];
  }
}
