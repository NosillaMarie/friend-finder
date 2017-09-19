//Loading data from the specifies location
var friends = require("../data/friends");

module.exports = function (app) {

    //API GET request handles when a user visits a link.
    //this link will return a JSON object of the information collected through the survey.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //this API POST request handles  when a user submits data to the server through the html form.

    app.post("/api/friends", function (req, res) {
        var user_info = req.body;
        var match; // will be the best match from friends or first one
        var score = 0; // the lowest difference between the user and current friend in loop
        // Sum of all the scores in the user_info.scores array
        var user_scores = user_info.scores.reduce(function (result, val) {
            return result += Number(val);
        }, 0);

        friends.forEach(function (friend) {
            // Sum of all the scores in the friends.scores array
            var friend_scores = friend.scores.reduce(function (result, val) {
                return result += Number(val);
            }, 0);
            var diff = Math.abs(friend_scores - user_scores);

            if (score <= diff) {
                match = friend;

                score = diff;
            }
        });

        res.json(match);
    });
};
