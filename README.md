# Pokedex - A Pokémon Encyclopedia

## Description

![Pokedex](frontend/public/main.jpg)

The Pokedex is a full-stack web application containing detailed information about every creature from the Pokémon games. Visitors can filter, sort, search, like, and view detailed profiles of Pokémon.

🔗 Live Demo: [Pokedex](https://frontend-eosin-nine.vercel.app)

## Overview
- Full-stack app with frontend and backend deployed on Vercel
- Serverless backend functions connected to a Neon PostgreSQL database
- Written entirely in **TypeScript**

## Pages
1. Main page with pokemon list
2. Details page for each creature

## Features
- Infinite scroll
- Filter by type and habitat
- Sort by ID, name, height and weight
- Search by name
- Like/unlike Pokémon (persisted to DB)
- Detail page with Pokémon stats and attributes (click on card)
- Fully mobile-responsive design

## API Usage
- Frontend consumes the open RESTful API from [PokéAPI](https://pokeapi.co)
- Backend provides a custom RESTful API for handling and persisting likes

## Technologies

### 🌐 Frontend
- Vite
- React
- React Query
- Zustand (state management)
- Chakra UI

### 🖥 Backend
- Node.js
- Koa
- PostgreSQL
- Zapatos (ORM)

### 🧪 Testing
- Jest
- Vitest
- React Testing Library

## Local Installation Guide

⚠️ Prerequisites: Node.js and PostgreSQL
1. Clone the repository.
2. Run `yarn install` in both frontend and backend folders.
3. Create `.env` files based on `.env.example` in both frontend and backend folders.
4. Run `yarn dev` in both frontend and backend folders.
5. Afterwards the app can be opened in a browser under http://localhost:5173
6. The backend is available under http://localhost:7654/api

## What I Learned
This project helped me practice building a full-stack app from scratch using modern technologies. I deepened my understanding of:
- Managing state with Zustand and React Query
- Building and consuming RESTful APIs
- Working with PostgreSQL and an advanced TypeScript ORM
- Deploying both frontend and backend using Vercel
- Designing responsive and accessible UIs with Chakra UI
- Structuring a codebase for scalability and readability
- Writing and running tests with Vitest and React Testing Library

## Next Improvements
- Add user authentication (see below)
- Allow users to save their favorite Pokémon to their personal list
- Add pagination fallback for environments where infinite scroll isn't ideal
- Add accessibility improvements and keyboard navigation
- Polish mobile view with swipe gestures for detail navigation
- Add animations

## User Authentication
User authentication is not part of this Pokedex yet, but I’ve included it in another project to showcase my ability to manage login systems, tokens, and secure APIs.

🔐 See my auth-enabled project here: [FlashCards App](https://github.com/nagydan1/flashcards-app)

## Screenshots
![Filter](frontend/public/filter.jpg)

![Search](frontend/public/search.jpg)

![Details](frontend/public/details.jpg)
