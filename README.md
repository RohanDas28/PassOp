# PassOP - Password Manager App

This is a simple password manager web application that allows users to store and manage their passwords securely. The application consists of a front-end built with React and a back-end using Express and MongoDB for data storage.

## Frontend (React)


The `DisplayPasswords` component is the main component responsible for displaying and managing passwords. It includes features such as:

- Add a new password with website name, username, and password.
- Display a list of stored passwords with options to reveal, hide, and delete passwords.
- Passwords are fetched from and stored in the backend.

#### Usage

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`

## Backend (Express, MongoDB)

### Server Configuration (backend/server.js)

The server is built using Express and connects to a MongoDB database to store password data. Key features include:

- Endpoints for retrieving, adding, and deleting passwords.
- Password data is stored in a MongoDB database using Mongoose.

#### Usage

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Run the server: `npm run backDev`

## How to Run

1. Start the backend server first: `npm run backDev` (Navigate to the `backend` directory).
2. Run the frontend application: `npm run dev` (Root directory).

Make sure to update the MongoDB connection URI in `backend/server.js` with your own database connection details if needed.

**Note:** The application is set up with [Vite](https://vitejs.dev/) for the frontend and uses [MongoDB](https://www.mongodb.com/) as the database. Ensure you have Node.js installed.

## Technologies Used

- React
- Express
- MongoDB
- Axios
- Tailwind CSS
- Vite

## Acknowledgments

This project was created as a simple example of a password manager application. Feel free to customize and enhance it based on your requirements.

**Happy coding!**