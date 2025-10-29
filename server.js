// server.js
const express = require("express");
const dotenv = require("dotenv");
const winston = require("winston");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Logging setup
const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 DevOps Simulator Server Running Successfully!");
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});
