const title = 'Basarsan küfür eder';
const elementClass = 'derdini-sikeyim';
const buttonText = 'derdini sikeyim';

const audio = new Audio(
  `chrome-extension://${chrome.runtime.id}/sound/derdini-sikeyim.mp3`,
);
audio.setAttribute('type', 'audio/mpeg');

window.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentElement('afterbegin', audio);

  document.querySelectorAll('footer .feedback').forEach((el, index) => {
    const wrapperEl = document.createElement('span');
    wrapperEl.classList.add(elementClass);
    wrapperEl.innerText = buttonText;

    wrapperEl.onclick = () => {
      audio.currentTime = 0;
      audio.play();
    };
  });
});
