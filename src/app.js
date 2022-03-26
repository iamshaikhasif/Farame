const express = require("express");
const path = require("path");
const hbs = require("hbs");
const async = require("hbs/lib/async");


const app = express();
const port = process.env.PORT || 8000;

const template = path.join(__dirname, "../template/views");
const common = path.join(__dirname, "../template/common");

const staticPath = path.join(__dirname, "../helper");
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", template);
hbs.registerPartials(common);

app.get("/", (req, res) => {
    res.render("index");
})


app.listen(port, () => {
    console.log(`Server start ${port}`);
})