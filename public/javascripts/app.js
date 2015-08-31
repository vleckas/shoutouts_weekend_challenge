// When the DOM is ready
$(document).ready(function () {

    // get our content UL
    var $shoutouts = $('#shoutouts');


    // On doc ready, do an ajax call to get all users
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/users'
    }).done(function (data) {
        // same as success

        // for each user, create a new p

        //var $button = $('<button>').text('Next Shoutout!').attr('id', 'next');

        //$shoutouts.append($button);

        $shoutouts.on('click', '#next', function(){
            console.log("Hey");

            var $nextShoutout = $(this).parent().next('p');

            if ($nextShoutout.length == 0){
                console.log("0");

                var $nextShoutout = $('.shout').first();
            }

            $(this).parent().toggleClass('hidden');
            $nextShoutout.toggleClass('hidden');


            //else {
            //    var $nextShoutout = $(this).parent().next('p');
            //    $(this).parent().toggleClass('hidden');
            //    $nextShoutout.toggleClass('hidden');
            //}

            //$(this).parent().toggleClass('hidden');
            //$nextShoutout.toggleClass('hidden');
        });

        data.forEach(function (elem) {

            // create a new p node
            var $p = $('<p>');
            if (elem.id == 0) {
                $p.text(elem.firstName + ': ' + elem.shoutOut).data('data-id', elem.id).attr('class', 'shout');
            } else {
                $p.text(elem.firstName + ': ' + elem.shoutOut).attr('class', 'hidden shout').data('data-id', elem.id);
            }
            $p.append($p);

            var $button = $('<button>').text('Next Shoutout!').attr('id', 'next').attr('class', 'btn');

            $p.append($button);

            $shoutouts.append($p);



        });



    }).fail(function (jqXHR, textStatus, errorThrown) {
        // same as error
        console.log('There was an error: ', errorThrown);
    }).always(function () {
        // same as complete
        console.log('Ajax Complete!');
    })
});
