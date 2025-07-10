# Instagram web application clone with Redux

A web application for simulated instagram built with React, JavaScript, and Tailwind CSS.

## Features

- **Authentication**: Login/Register system with basic profile management
- **Authorization**: Only authenticated users can perform post-related operations (Create, Read, Update, Delete)
- **Post**: Upload photo posts with captions
- **Feed**: Explore posts from all users in a scrollable feed
- **Like/Unlike**: Interact with posts through like/unlike functionality
- **Comment**: Leave comments under posts (stored locally)
- **Profile Page**: View user's posts and information
- **LocalStorage**: All data (users, posts, interactions) is saved in the browser's localStorage (mock backend)

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript, React Router v7
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Icons**: Lucide React
- **Storage**: Browser localStorage (mock backend)


## Project Structure

```
├── assets/ # Images and static assets
├── components/ # Reusable UI components (PostCard, Navbar, etc.)
├── pages/ # Main pages (Login, Register, Feed, Profile, ...)
├── redux/ # Redux Toolkit slices for users, posts
├── utils/ # Helper functions (e.g., localStorage access)
├── App.jsx # Main app with routes
└── main.jsx # App entry point
```

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/PhuGiap/Instagram-clone-fe.git
   cd Instagram-clone-fe

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file
   VITE_API_BASE_URL=http://localhost:8080/api/v1
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## API Integration

The app is designed to work with a RESTful API in the future. Example endpoints:

GET /api/v1/users - List users

POST /api/v1/users - Create user

PUT /api/v1/users/:id - Update user

DELETE /api/v1/users/:id - Delete user

GET /api/v1/posts - List posts

POST /api/v1/posts - Create post

PUT /api/v1/posts/:id - Update post

DELETE /api/v1/posts/:id - Delete post
## Key Components

### Authentication

- Login and Register forms

- Session handling using Redux and localStorage

- Protected routes for logged-in users

- User profile management
