let url_validate = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
let audioMp3 = new Audio();
let url = '';


$('#play').click(function () {
    url = $('#url').val();

    if (!url_validate.test(url)) {
        $('#alertMsg').modal('show')
    } else {
        $('#firstPage').hide();
        $('#player').show();
        url = $('#url').val();
        audioMp3.src = url;
    }
});

audioMp3.oncanplay = function () {
    console.log('can start')
};

TweenMax.set('#ripple-circle circle', {scale: 0.5, transformOrigin: '50% 50%'});
TweenMax.fromTo('#svg-line', 2, {x: -2.5}, {x: 2.5, repeat: -1, ease: Elastic.easeInOut, yoyo: true});
TweenMax.fromTo('.loading-image', 2, {scale: 1, autoAlpha: 1}, {
    scale: 0.75,
    autoAlpha: 0.5,
    transformOrigin: '50% 50%',
    ease: Bounce.easeIn,
    yoyo: true,
    repeat: -1
});
TweenMax.to('#inner-circ', 2, {rotation: 360, transformOrigin: '50% 50%', repeat: -1});
TweenMax.to('#outer-circ', 4, {rotation: -360, transformOrigin: '50% 50%', repeat: -1});


let spinDisc = $('#svg-audio');
let rippleCircle = $('#ripple-circle circle');


function playMusic() {
    $('#player').css('transform','scale(2)');

    audioMp3.play();
    hoverCircle = $(this).find('#hover-circle .st4')
    $(hoverCircle).css({'fill': '#7691BA'});
    TweenMax.to('.play-text', 0.35, {autoAlpha: 1, y: -70, transformOrigin: '50% 50%', ease: Back.easeOut});


    TweenMax.set(spinDisc, {rotation: 0, transformOrigin: '50% 50%'});
    TweenMax.to(spinDisc, 2, {rotation: 360, transformOrigin: '50% 50%', repeat: -1, ease: Linear.easeNone});
    TweenMax.staggerTo(rippleCircle, 2.1, {
        scale: 20,
        transformOrigin: '50% 50%',
        autoAlpha: 0,
        repeat: -1,
        ease: Linear.easeNone
    }, 0.7);
    TweenMax.set('.play-text', {autoAlpha: 0, y: 0, transformOrigin: '50% 50%'});

}

function stopMusic() {
    $('#player').css('transform','scale(1)');
    audioMp3.pause();
    $(hoverCircle).css({'fill': '#486CA3'});
    TweenMax.to('.play-text', 0.35, {autoAlpha: 0, y: 0, transformOrigin: '50% 50%', ease: Back.easeIn});

    TweenMax.killTweensOf(spinDisc);
    TweenMax.killTweensOf(rippleCircle);
}


$('#playMusic').on("touchstart", function (event) {
    playMusic();
});
$('#playMusic').on("touchend", function (event) {
    stopMusic();
});


$('#playMusic').mousedown(function () {
    playMusic();

}).mouseup(function () {
    stopMusic();
});


// =================================
///if you want to pull refresh then uncomment below code.

// let mouseY = 0;
// let startMouseY = 0;
// let body =$('body');
// body.on('mousedown', function (ev) {
//     mouseY = ev.pageY;
//     startMouseY = mouseY;
//     $(document).mousemove(function (e) {
//         if (e.pageY > mouseY) {
//             var d = e.pageY - startMouseY;
//             console.log("d: " + d);
//             if (d >= 200)
//                 location.reload();
//             $('body').css('margin-top', d / 4 + 'px');
//         } else
//             $(document).unbind("mousemove");
//
//
//     });
// });
// body.on('mouseup', function () {
//     $('body').css('margin-top', '0px');
//     $(document).unbind("mousemove");
// });
// body.on('mouseleave', function () {
//     $('body').css('margin-top', '0px');
//     $(document).unbind("mousemove");
// });

