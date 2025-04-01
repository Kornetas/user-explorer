# 🧭 User Explorer

## 📸 Podgląd aplikacji

![Podgląd aplikacji](screenshot.png)

---

### 📌 Opis projektu

User Explorer to aplikacja frontendowa, która umożliwia **przeglądanie, sortowanie, wyszukiwanie oraz oznaczanie ulubionych użytkowników**.  
Wspiera **tryb ciemny 🌙**, filtr **„Pokaż ulubionych” ❤️**, pamięta ustawienia w `localStorage`, a wszystko zbudowane jest w czystym JavaScript bez frameworków.

---

### ⚙️ Funkcje

✅ Pobieranie danych użytkowników z **JSONPlaceholder API**  
✅ **Wyszukiwanie użytkowników** w czasie rzeczywistym  
✅ **Sortowanie alfabetyczne A-Z ↕️**  
✅ **Tryb ciemny 🌙 / jasny ☀️**  
✅ **Ulubieni użytkownicy** – serduszko ❤️  
✅ **Filtrowanie ulubionych** – pokaż tylko ❤️  
✅ **Zapamiętywanie ustawień** w `localStorage` 
✅ **Spinner ładowania** i powiadomienie „Gotowe! ✅”

---

### 🚀 Uruchomienie projektu

1. **Sklonuj repozytorium** (jeśli używasz GitHub):
   ```sh
   git clone https://github.com/Kornetas/user-explorer.git

   2. Otwórz Visual Studio Code i załaduj folder projektu.

2. Zainstaluj serwer lokalny:

npm install

3. Uruchom aplikację:

npm start

Aplikacja będzie dostępna pod adresem: http://127.0.0.1:8080/

✅ Gotowe! 🎉

### 🛠️ Technologie

✅ HTML5 – struktura aplikacji
✅ CSS3 – stylizacja + tryb ciemny + animacje
✅ JavaScript (ES6 Modules) – logika, komponenty
✅ Axios – pobieranie danych z API
✅ http-server – prosty serwer lokalny do uruchamiania projektu
✅ LocalStorage – zapamiętywanie ustawień (sort, tryb, ulubieni)

🗂️ Struktura projektu

📦 src/
┣ 📂 components/
┃ ┣ FavoritesToggle.js      ← Przełącznik „Pokaż ulubionych”
┃ ┣ Header.js               ← Górny pasek z przyciskami i wyszukiwarką
┃ ┣ SearchBar.js            ← Komponent pola wyszukiwania
┃ ┣ Spinner.js              ← Komponent ładowania danych
┃ ┣ Toast.js                ← Komponent powiadomienia „Gotowe!”
┃ ┣ UserCard.js             ← Pojedyncza karta użytkownika
┃ ┗ UserList.js             ← Lista wszystkich użytkowników
┣ 📂 services/
┃ ┗ api.js                  ← Pobieranie danych z API
┣ app.js                    ← Logika główna aplikacji
┣ main.js                   ← Punkt wejściowy (initApp)
📄 index.html
📄 styles.css                ← Główne style (ciemny motyw, layout, animacje)
📄 package.json
📄 package-lock.json
📄 README.md

