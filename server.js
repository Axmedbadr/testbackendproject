const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

const authrouter = require("./routes/authRoutes");
const professionalrouter = require("./routes/professionalsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authrouter);
app.use("/api/professionals", professionalrouter);

// ✅ Root route (si 502 uga baxdo marka / la booqdo)
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const startServer = async () => {
  try {
    await connectDB(); // sug database
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
  }
};

startServer();
