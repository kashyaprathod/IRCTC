# IRCTC

The IRTC App is a comprehensive and sophisticated railway booking system meticulously built using advanced modern web technologies. It boasts a wide range of features, including robust user authentication, efficient booking management, and train schedules. By leveraging the latest in both frontend and backend technologies, the app provides users with a seamless and highly satisfying experience.

## Features

- User Authentication (Register & Login)
- Train Booking (Customer)
- Train Management (Admin)
- View Booking History
- Cancel Booking

## Installation

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd IRCTC/frontend/irctc
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd irtc-app/backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following:
   ```
   JWT_SECRET=your_jwt_secret_key
   MONGO_URI=your_mongoDB_connection_string
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

## Usage

1. Go to `http://localhost:3000` to access the frontend application.
2. Go to `http://localhost:4000` to access the backend application.
