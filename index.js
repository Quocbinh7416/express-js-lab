const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/html"))

app.get("/", (req, res) => res.sendFile(__dirname + "/html/index.htm"))

app.listen(port, () => console.log(`Application listen on port: ${port}`));