require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require('./routes/user');
const mongoose = require("mongoose");
const cors = require("cors");

//express App
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);


//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  //.connect('mongodb+srv://umernk42:dcba2051@cluster0.pnv87gf.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connecting to dB & Listening on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
