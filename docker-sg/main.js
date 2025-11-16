const express = require("express");
const app = express();

// Read PORT from environment variables, default to 8000
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Hey, I am Phenomsg and i wanna fight with your chicken because it is no 1 easy fight in container" });
});

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
