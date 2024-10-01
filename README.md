# Book Donation Application

## Overview
The Book Donation Application is a web app that allows users to donate books by entering their personal details and book information. It is built using Node.js with Express for the backend, Mongoose for MongoDB interactions, and vanilla JavaScript for the frontend.

## Requirements
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You need to have MongoDB installed and running on your local machine or use a cloud MongoDB service.

## Step-by-Step Setup Instructions

1. **Set Up the Project Folder**: 
   Open your terminal (or command prompt) and run the following commands to create the project directory and navigate into it:
   ```bash
   mkdir book-donation-app
   cd book-donation-app
   ```
   Then, initialize a new Node.js project by running:
   ```bash
   npm init -y
   ```
   This command will create a `package.json` file, which is needed for managing dependencies.

2. **Install Necessary Packages**: 
   You will need to install several packages for the application to function properly. Run the following command:
   ```bash
   npm install express mongoose body-parser cors
   ```
   - **Express**: A web framework for Node.js.
   - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
   - **Body-Parser**: Middleware to handle incoming request bodies in middleware.
   - **CORS**: A package to enable Cross-Origin Resource Sharing.

3. **Install SweetAlert2**: 
   To improve user alerts and confirmations in your application, install SweetAlert2 by running:
   ```bash
   npm install sweetalert2
   ```

4. **Running the Application**: 
   Start your MongoDB server. If you're using MongoDB locally, run the following command:
   ```bash
   mongod
   ```
   Next, start your Node.js server by executing the following command in your project directory:
   ```bash
   node server.js
   ```
   Finally, open your browser and navigate to `http://localhost:5000` to access the application.
