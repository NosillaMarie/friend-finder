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

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userScores = user_info.scores;

        console.log(userScores);

        var totalDifference = 0;
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;
        }
        for (var j = 0; i < friends[i].scores[j]; j++) {
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    });


    friends.push(req.body);
    res.json(true);
    res.json(friends);
};
