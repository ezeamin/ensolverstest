const express = require('express');
const morgan = require('morgan');
const app = express();


// Settings
app.set("port", process.env.PORT || 3000);
app.set(express.json());
app.set(express.urlencoded({extended: false}));

// Middleware
app.use(morgan(dev));

// Server start
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});