const AuthController = require("../controllers/AuthController");
const sequelize = require("./db");

const connect = () => {
  return new Promise((resolve, reject) => {
    try{
      sequelize
        .sync({ force: false })
        .then(() => resolve())
        .catch((err) => reject());
    } catch (err) {
      reject(err);
    }
  });
};

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

const establishConnection = async (server) => {
  const total = 5;

  for (let i = 0; i < total; i++) {
    try {
      await connect();
      console.log("Connected to database");

      // Admin user creation
      AuthController.createAdmin();

      return;
    } catch (err) {
      console.log(
        `Error connecting to database. Retrying... (${i + 1}/${total})`
      );
    }

    await wait();
  }

  console.log("ERROR: TIMED_OUT. Exiting app");
  server.close();
};

module.exports = establishConnection;
