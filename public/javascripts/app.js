// When the DOM is ready
$(document).ready(function () {

    // get our content UL
    var $results = $('#content');


    // On doc ready, do an ajax call to get all users
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/users'
    }).done(function (data) {
        // same as success

        // for each user, create a new p

        data.forEach(function (elem) {

        // create a new p node
            var $p = $('<p>');
            $p.text(elem.firstName + ': ' + elem.shoutOut);
            $p.append($p);
            $results.append($p);
        });

    }).fail(function (jqXHR, textStatus, errorThrown) {
        // same as error
        console.log('There was an error: ', errorThrown);
    }).always(function () {
        // same as complete
        console.log('Ajax Complete!');
    })
});