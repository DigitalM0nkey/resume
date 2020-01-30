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
  $(".dayNight").css("color", "#b2e8ff");
  $("#profile").css("border-color", "#f29b2f");
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
  $(".dayNight").css("color", "gainsboro");
  $("#profile").css("border-color", "#582ffc");
};
