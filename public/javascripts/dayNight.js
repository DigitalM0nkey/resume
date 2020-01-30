const dayMode = () => {
  console.log("IMAGE", document.body.style.backgroundImage);
  document.getElementById("body").style.backgroundImage =
    "url(/images/dayMode.jpg)";
  document.getElementById("profileBackgroundDay").style = "display: flex";
  document.getElementById("profileBackgroundNight").style = "display: none";
  document.getElementById("dayMode").style =
    "border-style: inset; color: #424242";
  document.getElementById("nightMode").style =
    "border-style: outset; color: #2196f3";
  document.getElementById("switch").style =
    "background-color: #424242; border-color: #616161";
  $(".dayNight").css("color", "#673ab7");
};

const nightMode = () => {
  console.log("IMAGE", document.body.style.backgroundImage);
  document.getElementById("body").style.backgroundImage =
    "url(/images/nightMode.jpg)";
  document.getElementById("profileBackgroundDay").style = "display: none";
  document.getElementById("profileBackgroundNight").style = "display: flex";
  document.getElementById("dayMode").style = "border-style: outset";
  document.getElementById("nightMode").style =
    "border-style: inset; color:#424242";
  document.getElementById("switch").style =
    "background-color: #424242; border-color: #616161";
  $(".dayNight").css("color", "gainsboro");
};
