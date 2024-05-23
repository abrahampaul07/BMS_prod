const express = require('express');
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/dbConfig");

const userRoute = require("./routes/userRoutes");
const movieRoute = require("./routes/movieRoutes");
const theatreRoute = require("./routes/theatreRoutes");
const bookingRoute = require("./routes/bookingRoutes");


app.use(cors());

app.use(express.json());
app.use(express.static("./public"));
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use('/api/theatre', theatreRoute);
app.use('/api/bookings', bookingRoute);

const PORT = process.env.PORT || 8081

app.listen(PORT, ()=> {
  console.log("Server is running");
})

// app.listen(8082, () => {
//   console.log('Server is running on http://localhost:8082');
// });