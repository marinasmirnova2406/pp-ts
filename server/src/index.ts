require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
import { connectDB } from "./config/db";

// Routes
import translationRoutes from "./routes/translationRoutes";
import regionRoutes from "./routes/regionRoutes";
import authRoutes from "./routes/authRoutes";
import testEmailsRoutes from "./routes/testEmailsRoutes";

const PORT = process.env.REACT_APP_PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api", translationRoutes);
app.use("/api", regionRoutes);
app.use("/auth", authRoutes);
app.use("/test-email", testEmailsRoutes);




connectDB();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req: any, res: any) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});