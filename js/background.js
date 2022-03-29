const title = 'Basarsan küfür eder';
const elementClass = 'derdini-sikeyim';
const buttonText = 'derdini sikeyim';

const audio = new Audio(
  `chrome-extension://${chrome.runtime.id}/sound/derdini-sikeyim.mp3`,
);
audio.setAttribute('type', 'audio/mpeg');

window.addEventListener('load', () => {
  document.body.insertAdjacentElement('afterbegin', audio);

  document.querySelectorAll('footer .feedback').forEach((el, index) => {
    const wrapperEl = document.createElement('span');
    wrapperEl.classList.add(elementClass);
    wrapperEl.setAttribute('title', title);
    wrapperEl.innerText = buttonText;

    wrapperEl.onclick = () => {
      audio.currentTime = 0;
      audio.play();
    };

    el.appendChild(wrapperEl);
  });
});
