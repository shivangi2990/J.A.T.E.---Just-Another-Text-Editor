const butInstall = document.getElementById('buttonInstall');
//installing PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

//implementing click event handler on butInstall

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);

});
//adding handler for appinstalled
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});