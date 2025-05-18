const express = require("express");
const expressHbs = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/html"));

app.engine(
    "hbs", 
    expressHbs.engine({
        extname: "hbs",
        defaultLayout : "layout",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
    })
);

app.set("view engine", "hbs");

// CONFIG to read post req.body
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/task1", require("./routes/task1Router"));
app.use("/task2", require("./routes/task2Router"));
app.use("/task3", require("./routes/task3Router"));
app.use("/task4", require("./routes/task4Router"));

app.listen(port, () => console.log(`Application listen on port: ${port}`));