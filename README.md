# React Context API Project

[![Live Demo](https://img.shields.io/badge/live-demo-brightgreen)](https://react-router-blog-posts.netlify.app/homepage)

## Project Overview
This project is a React-based Single Page Application (SPA) designed to demonstrate the following concepts: 

1. **Routing with `react-router-dom`**: The application allows navigation between multiple pages using dedicated routes defined in `App.jsx`.
2. **Fetching Data from an External API**: Data is fetched using Axios, by making HTTP requests to the D&D Monsters API.
3. **Dynamic Route Parameterization**: The application includes a page displaying a list of all items fetched from the API and a detail page for each item, linked dynamically via route parameters in `App.jsx`.
4. **Global State Management with Context API**: A global context (`PostContext.jsx`) is created to make API data available throughout the app without relying on props, avoiding prop drilling.
5. **Global Layout**: A global layout (`defaultLayout.jsx`) wraps all routes in `App.jsx`, ensuring the navbar is included by default on every page.
6. **Responsive Design**: The detail cards are made responsive for mobile devices.

## Features
- **Homepage**: Displays an introduction or overview.
- **List Page**: Shows a list of all items fetched from the API.
- **Detail Page**: Displays detailed information about a specific item, accessible via dynamic routing.
- **Global Navbar**: Included on all pages for seamless navigation.

## Tech Stack
- **React**: 19.0.0
- **React Router DOM**: For managing routes and navigation.
- **Axios**: For making HTTP requests to fetch data from the API.
- **Context API**: For global state management.
- **Vite**: 6.2.0 
- **CSS3**
- **Netlify** for online deployment

### External API
[**D&D Monsters API**](https://www.dnd5eapi.co/api/monsters)

### Live Demo
[react context API](https://react-router-blog-posts.netlify.app/homepage)

## How to Run Locally
1. Clone the repository.
2. Install dependencies using `npm install`
3. Start the development server using `npm run dev`
4. Open the application in your browser at the URL provided by Vite.

## Folder Structure
```
src/
├── App.jsx
├── index.css
├── main.jsx
├── assets/
├── components/
│   └── navbar.jsx
├── contexts/
│   └── PostContext.jsx
├── layouts/
│   └── defaultLayout.jsx
├── pages/
│   ├── about.jsx
│   ├── blogDetail.jsx
│   ├── homepage.jsx
│   └── lista-post.jsx
```


