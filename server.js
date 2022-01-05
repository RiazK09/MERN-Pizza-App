const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Connect to db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// Import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const pizzasRoute = require("./routes/pizzasRoute");
const ordersRoute = require("./routes/ordersRoute");

// App middlewares
// Morgan will generate logs immediately.
app.use(morgan("dev"));
// This line is required to parse the request body.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// CORS allows all origins
app.use(cors());
// Helmet is used for security purposes.
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api/pizzas/", pizzasRoute);
app.use("/api/orders/", ordersRoute);

// Deployment Code
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


// Port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
