# Account Management System

A simple React application to manage user accounts. Users can register, log in, and edit their profile information.

## Features
- **User Registration**: Create a new account.
- **User Login**: Securely log in to the account.
- **Profile Management**: View and edit personal information.
- **Authentication State**: Persistent login using `localStorage`.
- **Responsive Design**: Built with Bootstrap 5 for a clean, mobile-friendly interface.

## Tech Stack
- **Frontend**: React (Vite)
- **Styling**: Bootstrap 5
- **Routing**: React Router DOM
- **Authentication**: Custom Context API with localStorage

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure
- `src/context`: AuthContext for global state management.
- `src/components`: Reusable components like Navbar.
- `src/pages`: Main pages (Login, Register, Profile).

## Implementation Details
- The application uses a mock backend approach with `localStorage` to store user data.
- Input validation is handled on the client side to ensure data integrity.
- Protected routes ensure users can only access the profile page after logging in.
