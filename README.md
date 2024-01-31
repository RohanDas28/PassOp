# 🌟 [PassOP - Password Manager App](https://pass-op.vercel.app/) 🌟

A secure and user-friendly password manager web application, built with React for the frontend and Express and MongoDB for the backend.

## Frontend (React)

The `DisplayPasswords` component is the heart of the application, offering convenient features:

- 🚀 Add new passwords with website name, username, and password.
- 📋 Display a list of stored passwords with options to reveal, hide, and delete.
- 🔗 Passwords are seamlessly fetched from and stored in the backend.

The frontend is hosted on Vercel. To explore all features, follow the setup steps below.

## Backend (Express, MongoDB)

### Server Configuration (backend/server.js)

The Express server connects to a MongoDB database to securely store password data. Key features include:

- 🔄 Endpoints for retrieving, adding, and deleting passwords.
- 📦 Password data is stored in a MongoDB database using Mongoose.

### Usage

#### 🚀 Start Frontend
1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with the following content:

   ```env
   VITE_API_URL=http://localhost:3001/api
   MONGO_URI=<your-mongo-uri>
   ```
   Replace `<your-mongo-uri>` with your actual MongoDB connection URI.

4. Start the backend server: `npm run backDev` (Navigate to the `backend` directory).
5. Run the frontend application: `npm run dev` (Root directory).

**Note:** The application is set up with [Vite](https://vitejs.dev/) for the frontend and uses [MongoDB](https://www.mongodb.com/) as the database. Ensure you have Node.js installed.

## Technologies Used

- React
- Express
- MongoDB
- Axios
- Tailwind CSS
- Vite
- dotenv

## Acknowledgments

This project was created as a simple example of a password manager application. Feel free to customize and enhance it based on your requirements.

🚀 **Happy coding!** 🚀
