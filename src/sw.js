function registerServiceWorker() {
  return navigator.serviceWorker.register("/sw.js");
}

function sendNotification() {
  const text = "Take a look at this brand new t-shirt!";
  const title = "New Product Available";
  const options = {
    body: text,
    icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
    vibrate: [200, 100, 200],
    tag: "new-product",
    badge: "https://spyna.it/icons/android-icon-192x192.png",
  };
  navigator.serviceWorker.ready.then(function (serviceWorker) {
    serviceWorker.showNotification(title, options);
  });
}

export { registerServiceWorker, sendNotification };
