# Expense Tracker Frontend

A modern and responsive **Expense Tracker** frontend built with **React**. It provides an intuitive interface for managing income and expense transactions while communicating with a separate REST API backend.

## Live Demo

**Application URL:**  
https://expense-tracker-application-by-umar.vercel.app

## Backend Repository

**Backend Repository:**  
https://github.com/umarbashir-dotcom/expense-tracker-backend.git

## Features

- Add income and expense transactions
- Delete existing transactions
- View transaction history
- Automatic balance calculation
- Income and expense summaries
- Global state management using React Context API
- Built with React Hooks (`useState`, `useEffect`, `useContext`)
- Toast notifications for user feedback
- Responsive and user-friendly interface
- REST API integration with a separate backend

## Tech Stack

- React
- JavaScript (ES6+)
- Context API
- React Hooks
- React Toastify
- CSS
- Fetch API
- Vite

## Project Structure

```text
src/
├── components/
├── context/
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Clone the Repository

```bash
git clone <your-frontend-repository-url>
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_API_URL=<Your Backend API URL>
```

### Start the Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Author

**Umar Bashir**