function getFriends() {
    $.getJSON('/api/friends')
        .then(function (data) {
            console.log(data);
        });
}

function getMatches() {

    // Form validation
    function validateForm() {
        var isValid = true;
        $('.form-control').each(function () {
            if ($(this).val() === '') {
                isValid = false;
            }
        });

        $('.chosen-select').each(function () {

            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    // If all required fields are filled
    if (validateForm() === true) {
        // Create an object for the user's data
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [$("#q1").val(), $("#q2").val()
                     ]
            //            $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        };

        //        var bestMatch = {
        //            name: "",
        //            photo: "",
        //            friendDifference: 1000
        //        };
        //        var userScores = user_info.scores;
        //
        //        console.log(userScores);
        //
        //        var totalDifference = 0;
        //        for (var i = 0; i < friends.length; i++) {
        //            console.log(friends[i]);
        //            totalDifference = 0;
        //        }
        //        for (var j = 0; i < friends[i].scores[j]; j++) {
        //            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
        //
        //            if (totalDifference <= bestMatch.friendDifference) {
        //                bestMatch.name = friends[i].name;
        //                bestMatch.photo = friends[i].photo;
        //                bestMatch.friendDifference = totalDifference;
        //            }
        //        }

        // AJAX post the data to the friends API. 
        $.post('/api/friends', userData, function (data) {
            console.log(data);
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#matchName").text(data.name);
            $('#matchImg').attr("src", data.photo);

            //                        Show the modal with the best match
            $("#resultsModal").modal('toggle');

        });
    } else {
        alert("Uh-Oh you missed something. Please fill out all fields before submitting!");
    }

    return false;
}

$("#form1").on('submit', function (event) {
    event.preventDefault();
    let newFriend = {
        name: $("#name").val(),
        photo: $("#picURL").val(),
        scores: [$("#Q1").val(), $("#Q2").val(), $("#Q3").val(), $("#Q4").val(), $("#Q5").val(), $("#Q6").val(), $("#Q7").val(), $("#Q8").val(), $("#Q9").val(), $("#Q10").val()]
    };
    console.log(newFriend);

    $.post("/api/new", newFriend, function (data, status) {
        $("#matchImage").append("Your match is " + data.name + "<br><img width='320' height='240' src= '" + data.photo + "'/>");
        console.log(data);
        console.log(status);
    });
    $("#modal-content,#modal-background").fadeIn();
    $("#modal-content,#modal-background").toggleClass("active");

    return false;
});

$("#submit").on("click", getMatches);

getFriends();
