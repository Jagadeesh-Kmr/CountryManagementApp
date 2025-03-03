# Country Management App

## Overview
The **Country Management App** is a React-based web application that allows users to manage countries, states, and cities. Users can add, edit, and delete entities with confirmation alerts to ensure data integrity.

## Features
### 🏳️ Country Management
- Add a new country.
- Edit the name of an existing country (with confirmation prompt).
- Delete a country (also deletes associated states and cities, with confirmation alert).

### 🏙️ State Management
- Add states under a specific country.
- Edit an existing state (with confirmation prompt).
- Delete a state (removes all associated cities, with confirmation alert).

### 🏡 City Management
- Add cities under a specific state.
- Delete a city (with confirmation alert).

### 📌 UI Components
- **Home Screen:** Displays the list of countries and allows country management.
- **Country List:** Lists all countries with edit, delete, and state management options.

## Installation
### 📌 Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or later)
- **Git**
- **npm** or **yarn**

### 🚀 Steps to Run Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Jagadeesh-Kmr/CountryManagementApp.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd CountryManagementApp
   ```
3. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```
4. **Start the development server:**
   ```sh
   npm start  # or yarn start
   ```
5. Open **http://localhost:3000/** in your browser.

## Usage
1. Click the **"Add Country"** button to add a new country.
2. Use the **edit** button to rename a country.
3. Click the **delete** button to remove a country (states and cities are also deleted).
4. Click on a country to manage its states.
5. Add, edit, or delete states within a country.
6. Click on a state to manage its cities.
7. Add or delete cities within a state.

## Technologies Used
- **React.js** (Frontend UI)
- **useState Hook** (State Management)
- **UUID** (Unique ID Generation)
- **CSS** (Responsive Styling with `@media` for mobile support)

## Deployment
You can deploy the app using:
```sh
npm run build
```
Then, host it on **GitHub Pages**, **Vercel**, or **Netlify**.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Added feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a Pull Request.

## License
This project is open-source under the **MIT License**.

---
🎯 **Happy Coding!** 🎯

