# 🛒 E-Commerce Application

## 🌟 Project Overview

This project aims to develop a comprehensive E-Commerce Application, focusing on building a user-friendly interface and a robust backend. The application will feature a structured folder hierarchy, a React-based frontend, a Node.js backend, and a functional login page.

## 🎯 Milestone 2: Project Setup and Login Page

In this milestone, the following objectives were achieved:

- **Project Structure:** Organized the project into separate directories for frontend and backend to maintain a clean and manageable codebase.
- **Frontend Setup:** Initialized a React application using `create-react-app` to build the user interface.
- **Backend Setup:** Established a Node.js server to handle API requests and manage data.
- **Tailwind CSS Integration:** Configured Tailwind CSS for streamlined and responsive styling.
- **Login Page Development:** Created a functional and styled login page, allowing users to authenticate and access the application.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `server.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 🛠️ Milestone 4: Creating User Model and Controller

In this milestone, the following objectives were achieved:

- **User Model:** Created a User Model to define the structure of user data in the database.
- **User Controller:** Set up a User Controller to handle user-related operations, including creating and fetching users.
- **File Uploads with Multer:** Enabled file uploads using Multer to allow users to upload profile images.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js file.
  - `models/`: Contains the userModel.js file.
  - `routes/`: Contains the userRoutes.js file.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 5: Creating Sign-Up Page

In this milestone, the following objectives were achieved:

- **Sign-Up Page:** Created a Sign-Up Page to allow users to register by filling out their details.
- **Form Validation:** Added basic form validation to ensure users input valid data before submitting the form.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js file.
  - `models/`: Contains the userModel.js file.
  - `routes/`: Contains the userRoutes.js file.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 🔒 Milestone 6: Encrypting Passwords and Storing User Data

In this milestone, the following objectives were achieved:

- **Password Encryption:** Used bcrypt to hash the user's password during signup.
- **Secure Data Storage:** Stored the hashed password and other user data securely in the database.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js file.
  - `models/`: Contains the userModel.js file.
  - `routes/`: Contains the userRoutes.js file.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 🔑 Milestone 7: User Login Functionality

In this milestone, the following objectives were achieved:

- **Login Endpoint:** Created a backend endpoint to handle user login.
- **User Authentication:** Validated user credentials by comparing the entered password with the stored hashed password using bcrypt.
- **Error Handling:** Implemented error handling for cases where the user does not exist or the credentials are invalid.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js file.
  - `models/`: Contains the userModel.js file.
  - `routes/`: Contains the userRoutes.js file.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📦 Milestone 8: Creating Product Card Component and Homepage

In this milestone, the following objectives were achieved:

- **Product Card Component:** Created a reusable card component to display product details such as name, image, and price.
- **Homepage Layout:** Designed a homepage layout to display multiple product cards using a grid layout.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js file.
  - `models/`: Contains the userModel.js file.
  - `routes/`: Contains the userRoutes.js file.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 9: Creating Product Form

In this milestone, the following objectives were achieved:

- **Product Form:** Created a form to input all the details of a product, including multiple images.
- **Form Validation:** Added basic form validation to ensure users input valid data before submitting the form.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js file.
  - `models/`: Contains the userModel.js file.
  - `routes/`: Contains the userRoutes.js file.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 10: Creating Product Schema and Endpoint

In this milestone, the following objectives were achieved:

- **Product Schema:** Created a Mongoose schema to define the structure of product data, including fields for name, description, price, and image URL.
- **Product Endpoint:** Built a POST endpoint to receive product data, validate it, and save it to MongoDB.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js and productController.js files.
  - `models/`: Contains the userModel.js and productModel.js files.
  - `routes/`: Contains the userRoutes.js and productRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 11: Displaying Products Dynamically

In this milestone, the following objectives were achieved:

- **Product Endpoint:** Verified the endpoint to fetch all products from MongoDB.
- **Frontend Fetch:** Implemented a function in the frontend to fetch all products.
- **Dynamic Display:** Displayed the fetched products dynamically using the ProductCard component.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js and productController.js files.
  - `models/`: Contains the userModel.js and productModel.js files.
  - `routes/`: Contains the userRoutes.js and productRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 12: Displaying User's Products

In this milestone, the following objectives were achieved:

- **Product Filtering:** Created an endpoint to fetch products filtered by the user's email.
- **Frontend Fetch:** Implemented a function in the frontend to fetch products by the user's email.
- **Dynamic Display:** Displayed the fetched products dynamically using the ProductCard component.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js and productController.js files.
  - `models/`: Contains the userModel.js and productModel.js files.
  - `routes/`: Contains the userRoutes.js and productRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.
