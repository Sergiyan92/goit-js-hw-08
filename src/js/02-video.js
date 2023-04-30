import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// Отримуємо посилання на елемент iframe та ініціалізуємо плеєр
const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
