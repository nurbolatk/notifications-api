import { useEffect, useState } from "react";

function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    console.log("No promise");
    return false;
  }
  console.log("Promise");

  return true;
}

function send() {
  new Notification("PIDR");
}

function App() {
  const [permission, setPermission] = useState("default");
  console.log("Notification" in window);

  useEffect(askNotificationPermission, []);

  function askNotificationPermission() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
    } else {
      if (checkNotificationPromise()) {
        Notification.requestPermission().then((permission) => {
          handlePermission(permission);
        });
      } else {
        Notification.requestPermission(function (permission) {
          handlePermission(permission);
        });
      }
    }
  }

  function handlePermission(perm) {
    setPermission(perm);
  }
  return (
    <div className="App">
      <button
        disabled={permission === "granted"}
        onClick={askNotificationPermission}
      >
        Request permisson
      </button>
      <button onClick={send}>Send notification</button>
    </div>
  );
}

export default App;
