window.addEventListener("load", checkInternet);

function checkInternet() {
  const statusText = document.getElementById("statusText");
  const ipStatusText = document.getElementById("ipStatusText");
  const netStatusText = document.getElementById("netStatusText");

  statusText.textContent = "Checking..";

  if (navigator.onLine) {
  } else {
    statusText.textContent = "Disconnected..";
    ipStatusText.textContent = "-";
    netStatusText.textContent = "-";
  }
}

// curl 'https://api.ipify.org?format=json'{"ip":"1.39.77.60"}
