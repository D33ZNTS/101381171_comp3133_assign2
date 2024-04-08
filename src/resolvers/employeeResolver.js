const jwt = require('jsonwebtoken');
const Employee = require('../models/employeeModel');

const resolvers = {
  Query: {
    getAllEmployees: async (_, __, context) => {
      try {
        // Check if user is authenticated
        if (!context.user) {
          throw new Error('Unauthorized');
        }

        const employees = await Employee.find();
        return employees;
      } catch (error) {
        throw new Error(error);
      }
    },
    getEmployeeById: async (_, { _id }, context) => {
      try {
        // Check if user is authenticated
        if (!context.user) {
          throw new Error('Unauthorized');
        }

        const employee = await Employee.findById(_id);
        return employee;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  Mutation: {
    addEmployee: async (_, args, context) => {
      try {
        // Check if user is authenticated
        if (!context.user) {
          throw new Error('Unauthorized');
        }

        // Create a new employee instance
        const employee = new Employee(args);

        // Save the employee to the database
        await employee.save();

        return employee;
      } catch (error) {
        throw new Error(error);
      }
    },
    updateEmployee: async (_, { _id, ...args }, context) => {
      try {
        // Check if user is authenticated
        if (!context.user) {
          throw new Error('Unauthorized');
        }

        const updatedEmployee = await Employee.findByIdAndUpdate(_id, args, { new: true });
        return updatedEmployee;
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteEmployeeById: async (_, { _id }, context) => {
      try {
        // Check if user is authenticated
        if (!context.user) {
          throw new Error('Unauthorized');
        }

        const deletedEmployee = await Employee.findByIdAndDelete(_id);
        return deletedEmployee;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};

module.exports = resolvers;
