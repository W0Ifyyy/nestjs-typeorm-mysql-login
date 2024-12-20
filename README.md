# Login Project with NestJS, TypeORM, and MySQL

This is a practice project where I implement a basic login functionality using **NestJS**, **TypeORM**, and **MySQL**. After some initial training with NestJS and TypeORM, this project serves as an opportunity to apply those skills and improve them over time.

In this project, I implemented a robust user authentication and authorization system with JWT-based token management and a modular structure for future scalability. It includes user login, registration, and profile management while following best practices for code organization and security.

## Technologies Used

- **NestJS**: A powerful, flexible framework for building scalable server-side applications with TypeScript.
- **TypeORM**: An ORM (Object-Relational Mapper) for TypeScript and JavaScript that supports MySQL, among other databases.
- **MySQL**: A relational database management system for storing user data.

## Features

- **User Authentication**:

  - Secure user registration with password hashing.
  - Login functionality with JWT token generation for authentication.
  - Protected routes using NestJS guards.

- **User Profile**:

  - Retrieve user profiles from protected routes.

- **Validation**:

  - Input validation using `class-validator` decorators.
  - Strong password requirements and email format validation.

- **Modular Design**:

  - Separation of concerns with dedicated modules for `auth` and `users`.

- **Custom Decorators**:

  - Public routes are annotated with a custom `@Public()` decorator to bypass authentication guards.

## Folder Structure

- **src/auth**:

  - `auth.controller.ts`: Handles authentication-related endpoints (login, register).
  - `auth.service.ts`: Contains business logic for authentication.
  - `auth.guard.ts`: Implements JWT-based route protection.
  - `auth.module.ts`: Defines the `AuthModule` and integrates dependencies like `JwtModule`.

- **src/users**:

  - `users.controller.ts`: Manages user-related endpoints.
  - `users.service.ts`: Handles user creation and password validation.
  - `users.module.ts`: Defines the `UsersModule` and integrates the TypeORM repository.

- **src/decorators**:

  - `public.decorator.ts`: Implements the `@Public()` decorator to make routes accessible without authentication.

- **src/typeorm**:

  - `entities/Users.ts`: Defines the database schema for the `Users` table.

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **MySQL** (v5.7 or later)
- **npm** or **yarn**

### Steps

1. **Clone the repository**
   Start by cloning the project to your local machine using the following command:

   ```bash
   git clone https://github.com/W0Ifyyy/nestjs-typeorm-mysql-login.git
   ```

2. **Navigate to the project directory**
   Once the repository is cloned, go to the project directory:

   ```bash
   cd nestjs-typeorm-mysql-login
   ```

3. **Install dependencies**
   Install all the necessary dependencies for the project. Run one of the following commands:

   - Using **npm**:

     ```bash
     npm install
     ```

   - Or, if you're using **yarn**:

     ```bash
     yarn install
     ```

4. **Create a \*\***\*\***\*\***`.env`\***\*\*\*\*\*\*\*** file\*\*
   In the root of the project, create a `.env` file to store your database configuration. It should look like this:

   ```env
   DB_HOST=<yourhost>
   DB_PORT=<yourPort>
   DB_USERNAME=<yourUsername>
   DB_PASSWORD=<yourPassword>
   DB_NAME=<yourDbName>

   JWTSECRET=<yourJwtSecret>
   ```

5. **Run the application**
   Start the development server with one of the following commands:

   - Using **npm**:

     ```bash
     npm run start:dev
     ```

   - Using **yarn**:

     ```bash
     yarn start:dev
     ```

## Future Improvements

As the project evolves, here are some potential enhancements:

- **Authentication**:

  - Implement refresh tokens for longer sessions.
  - Add OAuth2 support (e.g., Google, Facebook login).

- **Authorization**:

  - Implement role-based access control (RBAC).
  - Extend guards to check user roles and permissions.

- **Testing**:

  - Add unit and integration tests using Jest.

- **User Management**:

  - Add endpoints for updating user profiles and changing passwords.

- **Error Handling**:

  - Enhance error messages and implement centralized error handling.

Thanks for looking into my project!
