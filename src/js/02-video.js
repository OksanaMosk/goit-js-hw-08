import Vimeo from '@vimeo/player';
    const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
    

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


player.on('timeupdate', function(data) {
     console.log("The currentTime attribute has been updated. Again.");
});

localStorage.setItem('CurrentTime', JSON.stringify(timeupdate))
player.setCurrentTime(CurrentTime).then(function(seconds) {
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
