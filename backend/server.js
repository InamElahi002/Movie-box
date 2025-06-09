const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const movieRoutes = require('./routes/movieRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MovieBox API is running!");
});

// 👉 Use movie routes , Apis get it from movieRoutes.js
app.use('/api/movies', movieRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
console.log("Connecting to:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
  });



  
  //js files for backend
  //jsx files for frontend