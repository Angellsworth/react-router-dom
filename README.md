
# 🧪 Pokémon React Application

A fun, single-page React app that displays a list of Pokémon, lets users view individual details, and add new Pokémon using a form. Built with **React Router DOM** and custom CSS styling.

---

## ✨ Features

- View a list of Pokémon  
- Click a Pokémon to view its details (name, weight, height)  
- Add a new Pokémon using a controlled form  
- Navigate pages using React Router — no reloads

---

## 🛠️ How It Was Built

### 1. **Project Setup**
- Created project with Vite
- Set up folder structure: `/components/NavBar`, `/components/PokemonList`, etc.
- Added a global `App.css` for styling

### 2. **Data and State**
- Created a hard-coded `initialState` with 5 Pokémon
- Used `useState` to manage Pokémon data

### 3. **Display List**
- Built `PokemonList` component to map over state and render names
- Styled list items with hover effects and bright background colors

### 4. **Routing with React Router**
- Wrapped app in `<BrowserRouter>` inside `main.jsx`
- Used `<Routes>` and `<Route>` inside `App.jsx`
  - `/` → Home page
  - `/pokemon` → List page
  - `/pokemon/:pokemonId` → Details page
  - `*` → Catch-all 404 route

### 5. **Details Page**
- Created `PokemonDetails` component
- Used `useParams` to get the `pokemonId` from the URL
- Found the matching Pokémon from state and displayed its data

### 6. **Add New Pokémon**
- Created `PokemonForm` component
- Controlled inputs with `useState`
- On submit, added new Pokémon to state and redirected using `useNavigate`

### 7. **Styling**
- Styled everything in `App.css`
- Used color palette to create a bold, playful interface

---

## 🧰 Tech Stack

- React
- React Router DOM
- JavaScript (ES6+)
- Vite
- CSS (App.css)

---

## 📁 Folder Structure

src/
├── components/
│   ├── NavBar/
│   ├── PokemonDetails/
│   ├── PokemonForm/
│   └── PokemonList/
├── App.jsx
├── App.css
└── main.jsx

---

## 🚧 Future Ideas

- Add Pokémon images from an API  
- Make it fully CRUD
- Form validation and error messages  
- Filter or sort Pokémon list  
- Persist Pokémon data with local storage or a backend

---
