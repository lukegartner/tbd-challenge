const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("server"));
app.use(express.json());

// Get
app.get("/ping", (req, res) => {
  res.send("ping back");
});

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});
