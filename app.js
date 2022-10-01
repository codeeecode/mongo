const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "hbs")
const mongoose = require("mongoose");
const MobileModel = require("./models/MobileSchema");

const url1 = "mongodb://localhost:27017/demo"

mongoose.connect(url1, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("DB connect error: " + err);
    } else {
        //console.log("DB connect succeed !");
        app.get("/", (req, res) => {
            MobileModel.find((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(data);
                    res.send(data); // send: de day code len len web
                    res.end;

                }
            });
        });
    }
});



app.listen(port)