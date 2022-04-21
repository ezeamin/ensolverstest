# Welcome to my To-Do List App 👋

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/ezeamin/ensolverstest#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ezeamin/ensolverstest/graphs/commit-activity)

### A to-do list application for Ensolvers recruitment process.

Built with React, Node.js, Express and mySQL. 

It exposes a CRUD API for the front-end and a REST API for the back-end. It has a user authentication system with JWT. All back-end and front-end routes are protected. 

### 🏠 [Homepage](https://github.com/ezeamin/ensolverstest#readme)

### ✨ [Client Demo](https://ensolverstest.netlify.app)

### 💫 [Server Demo](https://ensolverstest.herokuapp.com) (use along with client)

## Dependencies

Package Manager: [npm](https://www.npmjs.com/) 

- Global dependencies:
  - [Concurrently](https://www.npmjs.com/package/concurrently) (v7.1.0)
- Client dependencies:
  - [React](https://reactjs.org) (v18.0.0)
  - [React-router-dom](https://reactrouter.com/web) (v6.3.0)
  - [React-Query](https://react-query.tanstack.com/) (v3.35.0)
  - [React-Bootstrap](https://react-bootstrap.github.io) (v2.2.3)
  - [Bootstrap](https://getbootstrap.com/) (v5.1.1)
  - [Axios](https://axios-http.com/) (v0.26.1)
  - [SweetAlert2](https://sweetalert2.github.io/) (v11.4.8)
- Server dependencies:
    
    JavaScript runtime: [Node.js](https://nodejs.org/en/) (v16.13.1)
  - [Express](https://expressjs.com/) (v4.17.3)
  - [Morgan](https://github.com/expressjs/morgan#readme) (v1.10.0)
  - [cors](https://github.com/expressjs/cors#readme) (v2.8.5)
  - [dotenv](https://github.com/motdotla/dotenv#readme) (v16.0.0)
  - [cross-env](https://github.com/kentcdodds/cross-env#readme) (v7.0.3)
  - [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) (v8.5.1)
  - [Sequelize](https://sequelize.org/) (v6.19.0)
  - [mysql2](https://github.com/sidorares/node-mysql2#readme) (v2.3.3)
  - [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) (v5.0.1)

## Installation

#### Important: You **must** have node.js (tested on v16.13.1) installed on your machine. [Download here](https://nodejs.org/en/download/)

### There are two ways of initializing this project after cloning it

- Method One (Recommended):

  - Windows: Run the `win-init.bat` script provided in the root directory of the project.
  - Linux/macOs: Run the `sh-init.sh` script provided in the root directory of the project.

- Method Two (Manual):

  - Step 1: Install dependencies

    Run the following commands at the root directory of the project.

    Install global dependencies (Concurrently)

    ```sh
    npm install
    ```

    Install server dependencies

    ```sh
    cd server
    npm install
    ```

    Go back to main folder

    ```sh
    cd ..
    ```

    Install client dependencies

    ```sh
    cd client
    npm install
    ```

  - Step 2: Create database

    This app works with a mySQL database. You shall create a new local database and a user with admin rights over it. Otherwise, you can initiate a new mySQL cloud database and properly connect to it.

    Tables will be created automatically.

  - Step 3: Create a .env file

    1- Navigate to /server

    2- Create a .env empty file

    3- Fill in the file with the guidelines provided at the `.env-sample` file in the same directory. During this step, you'll use your local/cloud DB information.

## Usage

#### Important: You will first need to make sure your mySQL database is up and running.

After installation, you can do the following:
- Windows: Run the `win-init.sh` script provided in the root directory of the project.
- Linux/macOs: Run the `sh-start.sh` script provided in the root directory of the project.

Otherwise, run the following command on the root directory to start both server and client concurrently.

```sh
npm start
```

Server will start and listen on port 5000. Client will start on port 3000.

Folder creation is not supported yet. 

On the hosted app, default user is admin/admin. However, you can create one by simply setting your username and password.

## Author

👤 **Ezequiel Amin** - Full Stack MERN Developer

- Website: https://ezequielamin.com
- Github: [ezeamin](https://github.com/ezeamin)
- LinkedIn: [Ezequiel Amin](https://linkedin.com/in/ezequielamin)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/ezeamin/ensolverstest/issues).

Important: This app has no tests done because there wasn't enough time to do so.

## Show your support

Give a ⭐️ if this project helped you!
