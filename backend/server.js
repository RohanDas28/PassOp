// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
// Create an Express app
const app = express();
const PORT = 3001;
app.use(cors());

// Use bodyParser middleware to parse JSON in the request body
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/passwordManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for the Password model
const passwordSchema = new mongoose.Schema({
  website: String,
  username: String,
  password: String,
});

// Create the Password model based on the schema
const Password = mongoose.model('Password', passwordSchema);

// Routes

// GET endpoint to retrieve all passwords
app.get('/api/passwords', async (req, res) => {
  try {
    const passwords = await Password.find();
    res.json(passwords);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST endpoint to add a new password
app.post('/api/passwords', async (req, res) => {
  // Extract data from the request body
  const { website, username, password } = req.body;

  try {
    // Create a new password using the Password model
    const newPassword = new Password({
      website,
      username,
      password,
    });

    // Save the new password to the database
    await newPassword.save();
    res.json(newPassword);
  } catch (error) {
    // Handle errors and send a 500 Internal Server Error response
    res.status(500).send(error.message);
  }
});

// DELETE endpoint to remove a password by ID
app.delete('/api/passwords/:id', async (req, res) => {
  // Extract the ID from the request parameters
  const { id } = req.params;

  try {
    // Find and delete the password by ID
    await Password.findByIdAndDelete(id);
    res.json({ message: 'Password deleted successfully' });
  } catch (error) {
    // Handle errors and send a 500 Internal Server Error response
    res.status(500).send(error.message);
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
