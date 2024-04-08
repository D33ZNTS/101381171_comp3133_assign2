const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./src/schema/schema');
const userResolver = require('./src/resolvers/userResolver');
const employeeResolver = require('./src/resolvers/employeeResolver');
const { GraphQLString, GraphQLNonNull } = require('graphql');
const { EmployeeType } = require('./src/employeeTypes'); 
const Employee = require('./src/models/employeeModel'); 
const bcrypt = require('bcrypt');

const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/101381171_comp3133_assign2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000 
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));

// Define resolver function for addEmployee mutation
const addEmployeeResolver = async (parent, args) => {
  try {
    const newEmployee = new Employee(args);
    return await newEmployee.save();
  } catch (error) {
    // Handle error
    console.error("Error adding new employee:", error);
    throw error; 
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers: [userResolver, employeeResolver, addEmployeeResolver] // Add addEmployeeResolver to the list of resolvers
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
