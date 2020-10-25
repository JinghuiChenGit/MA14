var change = {
    37: {
        left: "-=5"
    },

    38: {
        top: "0"
    },

    39: {
        left: "+=5"
    },

    40: {
        top: "0"
    },
}




$(document).ready(function () {




    $('#start').click(function () {
        $(document).on('mousemove', function (e) {
            glass.css('left', e.pageX);
        });

       

    the_game = function () {

        if (check_water_onGround(water1) || check_hits_glass(water1)) {
            setTimeout(set_water_to_initial_position(water1),100000);
        } else {
            setTimeout(water_down(water1), 100000); ;
        }

        if (check_water_onGround(water2) || check_hits_glass(water2)) {
            set_water_to_initial_position(water2);
        } else {
            water_down(water2);
        }

        if (check_water_onGround(water3) || check_hits_glass(water3)) {
            set_water_to_initial_position(water3);
        } else {
            water_down(water3);
        }

        if (life > 0) {

            anim_id = requestAnimationFrame(the_game);


        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);
});
});