//your JS code here. If required.
// ---------- Helper functions for cookies ----------
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// ---------- Apply saved preferences on page load ----------
function applyPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize + "px"
    );
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

// ---------- Save preferences ----------
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize + "px"
  );
  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});

// Run on load
applyPreferences();

