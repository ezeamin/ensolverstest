const sequelize = require("./db");

const connect = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .sync({ force: false })
      .then(() => resolve())
      .catch((err) => reject());
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
