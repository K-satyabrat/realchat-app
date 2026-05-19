# Real-Time Chat Application

A full-stack, real-time messaging application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO.

## Live Demo
🌐 **Frontend URL:** [https://realchat-app-frontend.onrender.com/](https://realchat-app-frontend.onrender.com/)

## Features
- **Real-Time Messaging**: Send and receive messages instantly using Socket.IO.
- **User Authentication**: Secure signup, login, and logout flow using JWT stored in HTTP-only cookies.
- **Online Status**: See which of your contacts are currently online in real-time.
- **Image Sharing**: Upload and share images in your chats using Cloudinary integration.
- **Quick Messages**: Easily start new conversations with pre-set quick messages.
- **Hide Contacts**: Keep your contact list clean by hiding contacts you aren't currently talking to (persisted locally).
- **Sound Notifications**: Optional audio alerts for incoming messages.
- **Modern UI**: A fully responsive and highly polished user interface built with TailwindCSS.

## Tech Stack

### Frontend
- **React.js** 
- **TailwindCSS** for styling
- **Zustand** for global state management
- **Socket.IO-client** for WebSocket connections
- **Axios** for API requests
- **React Router DOM** for navigation
- **React Hot Toast** for user feedback notifications
- **Lucide React** for beautiful icons

### Backend
- **Node.js & Express.js**
- **MongoDB & Mongoose** for the database
- **Socket.IO** for WebSocket server handling
- **Cloudinary** for image storage
- **JWT** for secure authentication
- **Bcryptjs** for password hashing
- **Arcjet** for API protection and rate limiting

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB connection URI
- Cloudinary account credentials

### Installation

1. **Clone the repository** (if applicable) and navigate to the project root.

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory with the following variables:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ARCJET_KEY=your_arcjet_key
   ```
   Start the backend development server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **View the App**
   Open your browser and navigate to `http://localhost:5173`.

## Project Structure

- `/frontend` - Contains the React application.
  - `src/components` - Reusable UI components (Sidebar, ContactList, etc.)
  - `src/pages` - Main application views (Login, Signup, HomePage)
  - `src/store` - Zustand stores (`useAuthStore`, `useChatStore`)
  - `src/lib` - Axios instance and utilities
- `/backend` - Contains the Express server.
  - `src/controllers` - Business logic for routes
  - `src/models` - Mongoose database schemas (User, Message)
  - `src/routes` - API endpoints
  - `src/middlewares` - Authentication and security middleware
  - `src/lib` - Socket.IO setup and Cloudinary configuration
