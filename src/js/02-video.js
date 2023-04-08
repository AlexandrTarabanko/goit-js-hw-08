import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframeRef);
const TIME_STORAGE_KEY = 'videoplayer-current-time';

iframePlayer.on('timeupdate', throttle(timeSet, 1000));

function timeSet(data) {
  const timeValue = data.seconds;
  localStorage.setItem(TIME_STORAGE_KEY, timeValue);
}

iframePlayer
  .setCurrentTime(localStorage.getItem(TIME_STORAGE_KEY))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
