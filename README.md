# Mobile Movie Database Info Website

## Overview

Welcome to the Mobile Movie Database Info Website! This application is designed to provide movie enthusiasts with a comprehensive and easy-to-use platform to explore films, watch trailers, and stay updated on the latest trends in cinema. Whether you're on the go or just prefer browsing on your phone, this app is fully optimized for mobile devices, ensuring a smooth and visually appealing experience.

[Visit the website](https://ourmoviedatabaseapp.netlify.app/)

## Features

### Mobile-Optimized Design

The app is meticulously crafted to deliver a seamless experience on mobile devices. Every element, from navigation to content display, is tailored for optimal performance and usability on smaller screens.

### Discover Trending Movies

Stay current with the latest trending movies. Our app fetches real-time data from The Movie Database (TMDb) API to showcase what's hot in the movie world.

### Detailed Movie Information

Dive deep into the specifics of each movie. The app provides a wealth of information, including:

- **Title and Release Date**: Know exactly when your favorite movies were released.
- **Ratings**: Check out how each movie is rated by audiences and critics alike.
- **Genres**: Understand the genre and style of the movie.
- **Runtime**: See how long the movie lasts.
- **Synopsis**: Get a brief overview of the movie's plot.

### Watch Trailers

No need to switch apps or platforms! Watch high-quality trailers for each movie directly within the app.

### Advanced Search Functionality

Easily search for movies by title or filter by genre. The search function is designed to be fast and intuitive, helping you find exactly what you're looking for with minimal effort.

## Technology Stack

This website is built using a modern technology stack to ensure reliability, scalability, and performance:

- **Frontend**: React, TypeScript, Tailwind CSS, DaisyUI
- **Backend**: The Movie Database (TMDb) API
- **Deployment**: [Netlify](https://ourmoviedatabaseapp.netlify.app/)

## Installation

To run the app locally on your development machine, please follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/moviedatabaseapp.git
   ```

This command downloads a copy of the project to your local machine.

2. **Navigate to the Project Directory**:

bash
Code kopieren
cd moviedatabaseapp
Move into the project's root directory.

3. **Install Dependencies**:

bash
Code kopieren
npm install
This command installs all the necessary packages and libraries required to run the app.

3. **Start the Development Server**:

bash
Code kopieren
npm start
Launch the app in development mode. It will open in your default web browser at http://localhost:3000.

## Usage

Once the development server is up and running, you can explore the app using your web browser. The primary features include:

- **Home Page**: Displays a curated list of trending movies and provides quick access to other features of the app.
- **Genre Page**: Allows you to filter movies by genre, helping you find movies that match your mood.
- **Detail Page**: When you select a movie, this page provides detailed information about it, including ratings, cast, plot summary, and more.
- **Trailer Page**: Here, you can watch trailers for the selected movie without leaving the app.
- **Intro Page**: The app starts with an introductory screen that welcomes users and offers a brief overview of its functionality.

## App Structure

The app is organized into several key components, each responsible for a different part of the user experience:

- **Components**: Reusable UI components built with React that form the building blocks of the app.
- **Pages**: Each major feature (like the Home, Genre, Detail, and Trailer pages) is a separate page within the app, making navigation straightforward.
- **Routing**: The app uses React Router to manage navigation between different pages.
- **State Management**: The app's state is managed with React's built-in hooks, ensuring that data flows smoothly between components.

## Contributions

This project was a collaborative effort involving three team members, each bringing their own expertise to the table:

- **[Christian Scholtysik](https://github.com/ChristianScholtysik)**: Git Master, Scrum Master, ensured functionality, and spearheaded the frontend development, ensuring efficient data handling, and integrated the TMDb API to fetch and display movie data.
- **[shakedown3000](https://github.com/shakedown3000)**: Led the UI/UX design implementation as well as functionality and state management, crafting the visual elements of the app and working closely on the CSS styling with Tailwind CSS and DaisyUI.
- **[Lisa](https://github.com/lisayl1688)**: Focused on CSS/HTML ensuring a seamless user experience.

![Mov Prentation](./public/MOV%20Presentation.svg)
