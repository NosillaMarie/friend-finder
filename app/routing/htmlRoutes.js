//Dependencies
//Path is used to get the correct file path for the html file 
var path = require("path");


module.exports = function (app) {
    
    //routes to survey page using the HTML GET request
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //wildcard catch all to the home page for unidentified routes.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
