const express = require("express");
const { startDatabase, stopDatabase, isConnected } = require("./ds");
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
const routes = require("./routes");
// define the ping route with the response in JSON
app.get("/ping", (req, res) => {
  res.send({ message: "pong" });
});

app.use("/api", routes);
app.get("/", (req, res) => {
  if (isConnected) {
    console.log("🚀 Connected to MongoDB");
    res.json({ connectionStatus: "connected" });
  } else {
    console.log(" Disconned to MongoDB");
    res.json({ connectionStatus: "Disconnected" });
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
    startDatabase();
  });
}

module.exports = app;