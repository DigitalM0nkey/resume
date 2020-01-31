// $(document).ready(function() {
// $("#addtocart").on("click", function() {
// var button = $(this);
// var cart = $("#cart");
// var cartTotal = cart.attr("data-totalitems");
// var newCartTotal = parseInt(cartTotal) + 1;
// button.addClass("sendtocart");
// setTimeout(function() {
//   button.removeClass("sendtocart");
//   cart.addClass("shake").attr("data-totalitems", newCartTotal);
//   setTimeout(function() {
//     cart.removeClass("shake");
//   }, 500);
// }, 1000);
// });
// });
const a2c = name => {
  console.log("Let's talk about:", name);
  let button = $(this);
  let cart = $("#cart");
  let cartTotal = cart.attr("data-totalitems");
  let newCartTotal = parseInt(cartTotal) + 1;

  button.addClass("sendtocart");
  setTimeout(function() {
    button.removeClass("sendtocart");
    cart.addClass("shake").attr("data-totalitems", newCartTotal);
    setTimeout(function() {
      cart.removeClass("shake");
    }, 500);
  }, 1000);
};
