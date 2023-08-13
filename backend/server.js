const app = require("./app");
const connectDatabase = require("./database/database");

//Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server for handling uncaught exceptions`);
});

//config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "config/.env",
  });
}

//connect database
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});

//unHandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting  dolwn the server for unhandled  promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
