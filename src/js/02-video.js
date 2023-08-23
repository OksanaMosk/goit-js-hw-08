import Vimeo from '@vimeo/player';
    const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
    

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


player.on('currentTime', function() {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
});
var callback = function () {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
};

player.off('currentTime', callback);


const videoplayer - current - time;
player.setCurrentTime(videoplayer - current - time value).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
