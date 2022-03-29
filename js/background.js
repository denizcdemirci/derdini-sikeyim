const audio = new Audio(`chrome-extension://${chrome.runtime.id}/sound/derdini-sikeyim.mp3`);
audio.setAttribute('type', 'audio/mpeg');

document.body.insertAdjacentElement('beforeend', audio);

document.querySelectorAll('footer .feedback-container').forEach((el) => {
  const wrapperEl = document.createElement('a');
  wrapperEl.innerText = 'derdini sikeyim';
  wrapperEl.setAttribute('title', 'tıklarsan küfür eder');
  wrapperEl.style.margin = '0 10px';
  wrapperEl.style.verticalAlign = 'middle';

  wrapperEl.onclick = () => {
    audio.currentTime = 0;
    audio.play();
  };

  el.appendChild(wrapperEl);
});
