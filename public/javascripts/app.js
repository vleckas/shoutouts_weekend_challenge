// When the DOM is ready
$(document).ready(function () {

    // get our content UL
    var $results = $('#content');


    // On doc ready, do an ajax call to get all customers
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/users'
    }).done(function (data) {
        // same as success

        // for each customer, create an LI with their name in a P tag

        data.forEach(function (elem) {

            // create a new LI node with the id set to the customer id
            var $li = $('<li>', {id: elem.id});
            var $p = $('<p>');
            $p.text(elem.firstName + ' ' + elem.shoutOut);
            $li.append($p);
            $results.append($li);

        });
    }).fail(function (jqXHR, textStatus, errorThrown) {
        // same as error
        console.log('There was an error: ', errorThrown);
    }).always(function () {
        // same as complete
        console.log('Ajax Complete!');
    })
});