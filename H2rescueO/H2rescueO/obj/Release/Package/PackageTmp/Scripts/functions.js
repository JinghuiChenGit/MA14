

var int = 0;






function water_down(water) {



    water_current_position = parseInt(water.css('top'));


    water.delay("slow").css('top', water_current_position + speed + Math.floor(Math.random() * 5) );
}

function check_water_onGround(water) {
    if (collision(water, floor)) {
        show_onGound(water);
        decrement_life();
        return true;
    }
    return false;
}

function set_water_to_initial_position(water) {
    water.css('top', water_initial_position);
}

function show_onGound(water) {
    onGournd_num = water.attr('data-onGound');
    $('#onGournd' + onGournd_num).show();
    hide_onGournd_num(onGournd_num);
}

function hide_onGournd_num(onGournd_num) {
    setTimeout(function () {
        $('#onGournd' + onGournd_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_hits_glass(water) {
    if (collision(water, glass)) {
       update_score();
        return true;
        
        
    }
    return false;
}

function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
    int = score
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
    score_span.text(int);
}

restart.click(function () {
    location.reload();

});

function hide() {

    var x = document.getElementById("start");
    x.style.display = "none"


}
