require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require('path');

const connection = require("./config/database");

const categories = require("./routes/categories.route");
const animals = require("./routes/animals.route");

const app = express();
app.use(express.json());

// Define the path to your upload folder
const uploadFolderPath = path.join(__dirname, 'uploads');

// Serve static files from the upload folder
app.use(express.static(uploadFolderPath));



// enables cors----------------------------------------------------------->
// app.use(cors());
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type", "Authorization"],
    exposedHeaders: ["sessionId", "Authorization"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);


//Database connection------------------------------------------------------>
connection();


//application routes------------------------------------------------------->
app.use("/api/animal/categories", categories);
app.use("/api/animals", animals);


// <------------------deployment------------------------------------------->
// __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));
// }
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
// <------------------deployment------------------------------------------->


//Server------------------------------------------------------------------->
// const PORT = process.env.PORT || 3005;
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});