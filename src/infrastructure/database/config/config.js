import dotenv from "dotenv";

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "yourpassword",
    database: "points",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
};
