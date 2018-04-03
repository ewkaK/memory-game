//Math.floor((Math.random() * 9) + 0);

var numberOfshowed = 0; //ilość aktualnie odkrytych kart
var arr = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}



function draw_board() {
    arr.shuffle();

    for (var i=0; i<arr.length; i++){

        $('#board').append("<div class='card'><img src='img/" + arr[i] + ".png' /></div>");

    }

}


function flip_card() {
        $('.card').on('click', function(event){
            $(this).find('img').addClass('showed_card');
            numberOfshowed ++;
            console.log(numberOfshowed);
            check_if_win();
            event.stopImmediatePropagation();
            console.log('jak zabić ten event??')
        });
}

function flip_card_back() {
    $('.showed_card').removeClass('showed_card');
    console.log('klasa usunieta');
    round();
}


function round() {
    if (numberOfshowed <= 1){
        flip_card();

    } else {
        console.log("Zabity!!! :D")
        numberOfshowed = 0;
        flip_card_back();
    }
}

function check_if_win() {
    console.log('Sprawdzam czy karty się zgadzają');
}
