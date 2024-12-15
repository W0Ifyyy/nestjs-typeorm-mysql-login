# Login Project with NestJS, TypeORM, and MySQL

This is a practice project where I implement a basic login functionality using **NestJS**, **TypeORM**, and **MySQL**. After some initial training with NestJS and TypeORM, this project serves as an opportunity to apply those skills and improve them over time.

In this project, I will focus on implementing a simple user login and registration system, which will evolve over time. Future improvements may include adding features like **JWT tokens**, **Passport.js**, **sessions**, and more. My goal is for this project to grow into a practical application with more advanced features!

## Technologies Used

- **NestJS**: A powerful, flexible framework for building scalable server-side applications with TypeScript.
- **TypeORM**: An ORM (Object-Relational Mapper) for TypeScript and JavaScript that supports MySQL, among other databases.
- **MySQL**: A relational database management system for storing user data.

## Features

- User registration and login functionality.
- Integration with MySQL database via TypeORM.
- User profile management with fields like `username`, `password`, `email`, `profilePictureUrl`, and `dateOfBirth`.
- Ability to extend the app by adding authentication features like **JWT tokens** or **Passport.js**.
- Simple and extensible structure that can be easily enhanced over time.

## Future Improvements

As the project evolves, here are some potential enhancements:

- **Authentication:**
    - Integrate JWT for token-based authentication.
    - Use Passport.js to support different authentication strategies.
    - Implement sessions and cookies for secure authentication.

- **User Profile:**
    - Enable users to manage and update their profiles, including email, password, and profile picture.

- **Authorization:**
    - Implement role-based access control (RBAC).
    - Use NestJS guards to enforce role-based permissions on endpoints.

- **Testing:**
    - Add unit and integration tests using Jest.


## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **MySQL** (v5.7 or later)
- **npm** or **yarn**
- ### Steps

1. **Clone the repository**  
   Start by cloning the project to your local machine using the following command:

   ```bash
   git clone https://github.com/W0Ifyyy/nestjs-typeorm-mysql-login.git

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

4. **Create a `.env` file**  
   In the root of the project, create a `.env` file to store your database configuration. It should look like this:

   ```env
   DB_HOST=<yourhost>
   DB_PORT=<yourPort>
   DB_USERNAME=<yourUsername>
   DB_PASSWORD=<yourPassword>
   DB_NAME=<yourDbName>

Thanks to looking into my project everyone!
