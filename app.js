var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    flash         = require("connect-flash");

// Configure app
// mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.listen(8888, function() {
    let ts = new Date();
    console.log("YelpCamp server has started at " + ts.getHours() + ":" + ts.getMinutes() + ":" + ts.getSeconds());
});