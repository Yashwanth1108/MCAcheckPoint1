let placeNames = ["DUBAI", "SINGAPORE", "INDIA", "MALAYSIA", "PARIS", "EGYPT"];
let index = 0;
setInterval(() => {
  document.getElementById("placeName").innerText = placeNames[index];
  index = (index + 1) % placeNames.length;
}, 2000);
