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

## 📝 Milestone 13: Editing and Updating Products

In this milestone, the following objectives were achieved:

- **Edit Product Form:** Created a form to edit the details of an existing product.
- **Fetch Product by ID:** Implemented a function to fetch a product by its ID and populate the form with its current details.
- **Update Product:** Implemented functionality to update the product details and save the changes to the database.
- **Frontend and Backend Integration:** Ensured seamless integration between the frontend and backend for editing and updating products.

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
      - `EditProductForm.js`: Contains the EditProductForm component.
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

  ## 📝 Milestone 14: Deleting Products

In this milestone, the following objectives were achieved:

- **Delete Product Endpoint:** Created a backend endpoint to delete a product by its ID.
- **Delete Button:** Added a delete button to the product card in the frontend.
- **Delete Functionality:** Implemented functionality to delete a product and remove it from the list of products displayed.

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
      - `EditProductForm.js`: Contains the EditProductForm component.
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

# 📝 Milestone 15: Creating Navigation Component

In this milestone, the following objectives were achieved:

- **Navigation Component:** Created a reusable Navigation component that provides links to all main pages of the application.
- **Responsive Design:** Implemented a responsive design that adapts to different screen sizes, with a hamburger menu for mobile devices.
- **Consistent Navigation:** Added the Navigation component to all main pages to ensure a consistent user experience throughout the application.
- **Smooth Transitions:** Utilized React Router's Link component for smooth navigation between pages without full page reloads.

### 📂 Folder Structure

The project is organized as follows:

- frontend: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `Navigation/`: Contains the Navigation component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `EditProductForm.js`: Contains the EditProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
      - `Cart.js`: Contains the Cart component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- backend: Contains the Node.js server.
  - `controllers/`: Contains the userController.js and productController.js files.
  - `models/`: Contains the userModel.js and productModel.js files.
  - `routes/`: Contains the userRoutes.js and productRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.
``
# 📝 Milestone 16: Creating Product Info Page and Cart Functionality

In this milestone, the following objectives were achieved:

- **Product Info Page:** Created a dedicated page to display detailed product information including images, description, price, and seller details.
- **Quantity Selector:** Implemented a quantity selector that allows users to choose how many of a product they want to purchase.
- **Add to Cart Functionality:** Added the ability to add products to the shopping cart with the selected quantity.
- **Cart Management:** Enhanced the cart page to display added items, allow quantity adjustments, and calculate the total price.
- **Local Storage:** Implemented cart storage using the browser's local storage to persist cart items between sessions.

### 📂 Folder Structure

The project is organized as follows:

- frontend: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `Navigation/`: Contains the Navigation component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `EditProductForm.js`: Contains the EditProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
      - `ProductInfo.js`: Contains the ProductInfo component.
      - `Cart.js`: Contains the Cart component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- backend: Contains the Node.js server.
  - `controllers/`: Contains the userController.js and productController.js files.
  - `models/`: Contains the userModel.js and productModel.js files.
  - `routes/`: Contains the userRoutes.js and productRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 17: Implementing Authentication Middleware

In this milestone, the following objectives were achieved:

- **Authentication Middleware:** Created an authentication middleware to protect routes and ensure only authenticated users can access certain endpoints.
- **JWT Token Verification:** Implemented JWT token verification to authenticate users based on the token provided in the request headers.
- **Error Handling:** Added error handling for cases where the token is missing, invalid, or expired.

### 📂 Folder Structure

The project is organized as follows:
``
- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `Navigation/`: Contains the Navigation component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `EditProductForm.js`: Contains the EditProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
      - `ProductInfo.js`: Contains the ProductInfo component.
      - `Cart.js`: Contains the Cart component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js and productController.js files.
  - `models/`: Contains the userModel.js and productModel.js files.
  - `routes/`: Contains the userRoutes.js and productRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js and authMiddleware.js files.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 18: Creating Backend Endpoint for Cart Page

In this milestone, the following objectives were achieved:

- **Cart Endpoint:** Created an endpoint to fetch all products inside the user's cart using their email.
- **Backend Logic:** Implemented the backend logic to handle requests from the cart page and retrieve the cart items.

### 📂 Folder Structure

The project is organized as follows:
  
- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `Navigation/`: Contains the Navigation component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `EditProductForm.js`: Contains the EditProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
      - `ProductInfo.js`: Contains the ProductInfo component.
      - `Cart.js`: Contains the Cart component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js, productController.js, and cartController.js files.
  - `models/`: Contains the userModel.js and productModel.js files.
  - `routes/`: Contains the userRoutes.js, productRoutes.js, and cartRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js and authMiddleware.js files.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 19: Implementing Order Management

In this milestone, the following objectives were achieved:

- **Order Model:** Created a Mongoose schema to define the structure of order data, including fields for user, products, total price, and order status.
- **Order Endpoints:** Built endpoints to create, fetch, and update orders.
- **Order Placement:** Implemented functionality to place an order from the cart, including calculating the total price and saving the order to the database.
- **Order History:** Added a page to display the user's order history, showing details of past orders.
- **Order Status Updates:** Enabled updating the status of an order (e.g., pending, shipped, delivered) from the admin panel.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the `LoginPage` component.
      - `SignUp/`: Contains the `SignUpPage` component.
      - `UserList/`: Contains the `UserList` component.
      - `Navigation/`: Contains the `Navigation` component.
      - `ProductCard.js`: Contains the `ProductCard` component.
      - `HomePage.js`: Contains the `HomePage` component.
      - `ProductForm.js`: Contains the `ProductForm` component.
      - `EditProductForm.js`: Contains the `EditProductForm` component.
      - `MyProducts.js`: Contains the `MyProducts` component.
      - `ProductInfo.js`: Contains the `ProductInfo` component.
      - `Cart.js`: Contains the `Cart` component.
      - `OrderHistory.js`: Contains the `OrderHistory` component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the `userController.js`, `productController.js`, and `orderController.js` files.
  - `models/`: Contains the `userModel.js`, `productModel.js`, and `orderModel.js` files.
  - `routes/`: Contains the `userRoutes.js`, `productRoutes.js`, and `orderRoutes.js` files.
  - `middlewares/`: Contains the `errorHandler.js` and `authMiddleware.js` files.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

## 📝 Milestone 20: Profile Page

In this milestone, the following objectives were achieved:

- **Backend Endpoint:** Created an endpoint to fetch user data using their email.
- **Profile Page:** Developed a frontend profile page to display user data including profile photo, name, email, and addresses.
- **Address Management:** Displayed addresses and provided an option to add new addresses.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `ProfilePage.js`: Contains the ProfilePage component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js file.
  - `models/`: Contains the userModel.js file.
  - `routes/`: Contains the userRoutes.js file.
  - `middlewares/`: Contains the authMiddleware.js file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.

# 📝 Milestone 21: Cart System Enhancement

In this milestone, the following objectives were achieved:

- **Cart Component:** Enhanced the Cart component to manage shopping cart functionality with proper state management.
- **Quantity Management:** Implemented functions to increase, decrease, and remove items from the cart.
- **Total Price Calculation:** Added automatic calculation of the total price based on item quantities and prices.
- **Loading and Error States:** Integrated proper loading and error handling states in the cart interface.
- **Address Integration:** Connected the address system with the cart for delivery information.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `Navigation/`: Contains the Navigation component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `EditProductForm.js`: Contains the EditProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
      - `ProductInfo.js`: Contains the ProductInfo component.
      - `Cart.js`: Contains the enhanced Cart component.
      - `ProfilePage.js`: Contains the ProfilePage component.
      - `AddressForm.js`: Contains the AddressForm component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js, productController.js, and cartController.js files.
  - `models/`: Contains the userModel.js, productModel.js files.
  - `routes/`: Contains the userRoutes.js, productRoutes.js, and cartRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js and authMiddleware.js files.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies


# 📝 Milestone 22: Address Storage Endpoint

In this milestone, the following objectives were achieved:

- **Backend Endpoint:** Created an endpoint to receive the address from the address form in the frontend.
- **Address Storage:** Added the address to the address array inside the user collection in the database.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `AddressForm.js`: Contains the AddressForm component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the `userController.js` file.
  - `models/`: Contains the `userModel.js` file.
  - `routes/`: Contains the `userRoutes.js` file.
  - `middlewares/`: Contains the `authMiddleware.js` file.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.


# 📝 Milestone 23: Order Placement and Address Selection

In this milestone, the following objectives were achieved:

- **Place Order Button:** Added a "Place Order" button in the Cart component that navigates to the address selection page.
- **Address Selection Page:** Created a page to display all saved addresses and allow the user to select one for delivery.
- **Address Retrieval Endpoint:** Implemented a backend endpoint to fetch all addresses associated with a user.
- **Order Schema:** Developed a MongoDB schema to store order information including products, quantities, address, and status.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `Navigation/`: Contains the Navigation component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `EditProductForm.js`: Contains the EditProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
      - `ProductInfo.js`: Contains the ProductInfo component.
      - `Cart.js`: Contains the Cart component with "Place Order" button.
      - `ProfilePage.js`: Contains the ProfilePage component.
      - `AddressForm.js`: Contains the AddressForm component.
      - `SelectAddress.js`: Contains the new SelectAddress component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js, productController.js, cartController.js files.
  - `models/`: Contains the userModel.js, productModel.js, and orderModel.js files.
  - `routes/`: Contains the userRoutes.js, productRoutes.js, and cartRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js and authMiddleware.js files.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.



## 📝 Milestone 24: Order Confirmation & Order Summary Page

In this milestone, the following objectives were achieved:

- **Order Creation Endpoint:** Developed a backend endpoint to create new orders with selected address, cart items, and pricing details.
- **Order Confirmation Page:** Created a page to display order confirmation with a summary of the purchased items.
- **Order Summary:** Implemented a detailed order summary showing product details, quantities, prices, and delivery address.
- **Order Status Tracking:** Added functionality to track and display the current status of each order.
- **Cart Clearing:** Implemented automatic cart clearing after successful order placement.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `Navigation/`: Contains the Navigation component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `EditProductForm.js`: Contains the EditProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
      - `ProductInfo.js`: Contains the ProductInfo component.
      - `Cart.js`: Contains the Cart component with "Place Order" button.
      - `ProfilePage.js`: Contains the ProfilePage component.
      - `AddressForm.js`: Contains the AddressForm component.
      - `SelectAddress.js`: Contains the SelectAddress component.
      - `OrderConfirmation.js`: Contains the OrderConfirmation component.
      - `OrderSummary.js`: Contains the OrderSummary component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js, productController.js, cartController.js, and orderController.js files.
  - `models/`: Contains the userModel.js, productModel.js, and orderModel.js files.
  - `routes/`: Contains the userRoutes.js, productRoutes.js, cartRoutes.js, and orderRoutes.js files.
  - `middlewares/`: Contains the errorHandler.js and authMiddleware.js files.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.


# 📝 Milestone 25: Order Placement Backend Endpoint

In this milestone, the following objectives were achieved:

- **Order Placement Endpoint:** Created a backend endpoint to process and store order information.
- **User ID Retrieval:** Implemented functionality to retrieve the user ID from the provided email.
- **Multi-Product Orders:** Set up the system to create individual order records for each product in the cart.
- **Address Integration:** Connected the selected address details with the order information.
- **Order Status Management:** Added initial order status tracking with "Pending" as the default state.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application with existing components.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains the userController.js, productController.js, cartController.js, and orderController.js files.
    - Updated `orderController.js` with the new placeOrder function.
  - `models/`: Contains the userModel.js, productModel.js, and orderModel.js files.
  - `routes/`: Contains the userRoutes.js, productRoutes.js, cartRoutes.js, and orderRoutes.js files.
    - Updated `orderRoutes.js` with the new place-order endpoint.
  - `middlewares/`: Contains the errorHandler.js and authMiddleware.js files.
  - `index.js`: Main server file with added order routes registration.



## 📝 Milestone 26: Order Information Page

In this milestone, the following objectives were achieved:

- **Order List Page:** Created a dedicated page to display all orders placed by the user.
- **Order Details View:** Implemented a detailed view for individual orders showing product information, quantities, and pricing.
- **Order Status Display:** Added visual indicators to show the current status of each order (Pending, Processing, Shipped, Delivered, or Cancelled).
- **Order History Retrieval:** Built functionality to fetch a user's order history from the database.
- **Order Sorting & Filtering:** Added the ability to sort orders by date or filter by status.
- **Order Tracking:** Implemented a simple tracking system for users to monitor order progress.

### 📂 Folder Structure

The project is organized as follows:

- `frontend/`: Contains the React application.
  - `public/`: Static assets like HTML files.
  - `src/`: React components and related files.
    - `Components/`: Contains the React components.
      - `Login/`: Contains the LoginPage component.
      - `SignUp/`: Contains the SignUpPage component.
      - `UserList/`: Contains the UserList component.
      - `Navigation/`: Contains the Navigation component.
      - `ProductCard.js`: Contains the ProductCard component.
      - `HomePage.js`: Contains the HomePage component.
      - `ProductForm.js`: Contains the ProductForm component.
      - `EditProductForm.js`: Contains the EditProductForm component.
      - `MyProducts.js`: Contains the MyProducts component.
      - `ProductInfo.js`: Contains the ProductInfo component.
      - `Cart.js`: Contains the Cart component.
      - `ProfilePage.js`: Contains the ProfilePage component.
      - `AddressForm.js`: Contains the AddressForm component.
      - `SelectAddress.js`: Contains the SelectAddress component.
      - `OrderConfirmation.js`: Contains the OrderConfirmation component.
      - `OrderSummary.js`: Contains the OrderSummary component.
      - `OrderList.js`: Contains the OrderList component.
      - `OrderDetail.js`: Contains the OrderDetail component.
  - `package.json`: Manages frontend dependencies.
  - `tailwind.config.js`: Configuration for Tailwind CSS.
- `backend/`: Contains the Node.js server.
  - `controllers/`: Contains controllers including the enhanced orderController.js.
  - `models/`: Contains the userModel.js, productModel.js, and orderModel.js files.
  - `routes/`: Contains routes including new endpoints for retrieving order history.
  - `middlewares/`: Contains the errorHandler.js and authMiddleware.js files.
  - `uploads/`: Directory for storing uploaded files.
  - `index.js`: Main server file handling API requests.
  - `package.json`: Manages backend dependencies.