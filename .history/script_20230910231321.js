window.addEventListener("load", checkInternet);

function checkInternet() {
  const statusText = document.getElementById("statusText");
  const ipStatusText = document.getElementById("ipStatusText");
  const netStatusText = document.getElementById("netStatusText");

  statusText.textContent = "Checking..";

  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        statusText.textContent = "Connected..";
        ipStatusText.textContent = data.ip;

        const connection = navigator.connection;
        const netStrength = connection
          ? conncetion.downlink + "Mbos"
          : "Unknown";
        netStatusText.textContent = netStrength;
      })
      .catch((err) => {
        statusText.textContent = "Disconnected..";
        ipStatusText.textContent = "-";
        netStatusText.textContent = "-";
      });
  } else {
    statusText.textContent = "Disconnected..";
    ipStatusText.textContent = "-";
    netStatusText.textContent = "-";
  }
}

// curl 'https://api.ipify.org?format=json'{"ip":"1.39.77.60"}
