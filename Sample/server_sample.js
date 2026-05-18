const express = require("express");
const app = express();

app.get("/data", (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.listen(5500, () => {
    console.log("Server is running on port 5500");
});