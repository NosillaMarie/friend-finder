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
            scores: []
        };
        $('container select').each(function () {
            userData.scores.push($(this).val());
        });
        // AJAX post the data to the friends API. 
        $.post('/api/friends', userData, function (data) {
            console.log(data);
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#matchName").text(data.name);
            $('#matchImg').attr("src", data.photo);

            //                        Show the modal with the best match
            $("#resultsModal").modal('toggle');
            $('#form1').each(function () {
                this.reset();
            });


        });
    } else {
        alert("Uh-Oh you missed something. Please fill out all fields before submitting!");
    }

    return false;
}



$("#submit").on("click", getMatches);
