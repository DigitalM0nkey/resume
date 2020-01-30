const dayMode = () => {
  $("body").css(
    "background-image",
    "url(https://farm3.staticflickr.com/2841/33833704511_94d448186e_k.jpg)"
  );
  $("#profileBackgroundDay").css("display", "flex");
  $("#profileBackgroundNight").css("display", "none");
  $("#dayMode").css({ borderStyle: "inset", color: "#424242" });
  $("#nightMode").css({ borderStyle: "outset", color: "#2196f3" });
  $(".dayNight").css("color", "#b2e8ff");
  $("#profile").css("border-color", "#f29b2f");
};

const nightMode = () => {
  $("body").css(
    "background-image",
    "url(https://images.pexels.com/photos/713664/pexels-photo-713664.jpeg)"
  );
  $("#profileBackgroundDay").css("display", "none");
  $("#profileBackgroundNight").css("display", "flex");
  $("#dayMode").css({ borderStyle: "outset", color: "yellow" });
  $("#nightMode").css({ borderStyle: "inset", color: "#424242" });
  $(".dayNight").css("color", "gainsboro");
  $("#profile").css("border-color", "#582ffc");
};
