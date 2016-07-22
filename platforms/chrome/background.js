/**
 * Create a new Window for the app
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('www/ChromeAppLogin.html', {
    bounds: {
      width: 480,
      height: 640,
      left: 500,
      top: 200
    }
  });
});
