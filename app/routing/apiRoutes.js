//Loading data from the specifies location
var friends = require("../data/friends");

module.exports = function (app) {

    //API GET request handles when a user visits a link.
    //this link will return a JSON object of the information collected through the survey.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //this API POST request handles when a user submits data to the server through the html form.

    app.post("/api/friends", function (req, res) {
        var user_info = req.body;

        friends.push(req.body);
        res.json(true);
        res.json(friends);
    });
};
