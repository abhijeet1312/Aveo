import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
import userRoutes from "./routes/user_route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
