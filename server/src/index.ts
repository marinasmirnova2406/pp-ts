require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
import { connectDB } from "./config/db";

// Routes
import testRoutes from './routes/TestRoutes';
import translationRoutes from "./routes/translationRoutes";

const PORT = process.env.REACT_APP_PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/test', testRoutes);
app.use("/api/translations", translationRoutes);




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