const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const resolvers = {
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user instance with hashed password
        const newUser = new User({ username, email, password: hashedPassword });
        
        // Save the user to the database
        const savedUser = await newUser.save();
        
        // Return the newly created user
        return savedUser;
      } catch (error) {
        // Log the specific error message
        console.error('Error adding new user:', error.message);
        
        // Throw a more descriptive error message to the client
        throw new Error('Failed to add new user');
      }
    },
    login: async (_, { email, password }) => {
      try {
        // Find the user by email in the database
        const user = await User.findOne({ email });
        
        if (!user) {
          throw new Error('User not found');
        }
        
        // Compare the provided password with the hashed password stored in the database
        const validPassword = await bcrypt.compare(password, user.password);
        
        // If passwords don't match, throw an error
        if (!validPassword) {
          throw new Error('Invalid password');
        }
        
        // Generate JWT token for authenticated user
        const token = jwt.sign({ userId: user._id }, 'your_secret_key_here', { expiresIn: '1h' });
        
        // Return the JWT token
        return token;
      } catch (error) {
        // Log the error for debugging purposes
        console.error('Error during login:', error);
        // Throw a more descriptive error message to the client
        throw new Error('Login failed');
      }
    }
  }
};

module.exports = resolvers;
