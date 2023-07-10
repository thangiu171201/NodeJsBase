// Import thu vien
const express = require("express");

const app = express();
const port = 3030;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("Hello World! Kim Anh");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
