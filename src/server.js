import express from "express";
import configViewEngine from "./configs/viewengine";

const app = express();
const port = 8081;

configViewEngine(app);

app.get("/", (req, res) => {
    res.render("test/index.ejs");
});
app.get("/about", (req, res) => {
    res.send(`I'm Eric!`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
