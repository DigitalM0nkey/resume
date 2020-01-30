const dayMode = () => {
  console.log("IMAGE", document.body.style.backgroundImage);
  document.getElementById("body").style.backgroundImage =
    "url(https://farm3.staticflickr.com/2841/33833704511_94d448186e_k.jpg)";
  document.getElementById("profileBackgroundDay").style = "display: flex";
  document.getElementById("profileBackgroundNight").style = "display: none";
  document.getElementById("dayMode").style =
    "border-style: inset; color: #424242";
  document.getElementById("nightMode").style =
    "border-style: outset; color: #2196f3";
  document.getElementById("switch").style =
    "background-color: #424242; border-color: #616161";
  $(".dayNight").css("color", "#b2e8ff");
};

const nightMode = () => {
  console.log("IMAGE", document.body.style.backgroundImage);
  document.getElementById("body").style.backgroundImage =
    "url(/images/night.jpg)";
  document.getElementById("profileBackgroundDay").style = "display: none";
  document.getElementById("profileBackgroundNight").style = "display: flex";
  document.getElementById("dayMode").style = "border-style: outset";
  document.getElementById("nightMode").style =
    "border-style: inset; color:#424242";
  document.getElementById("switch").style =
    "background-color: #424242; border-color: #616161";
  $(".dayNight").css("color", "gainsboro");
};
