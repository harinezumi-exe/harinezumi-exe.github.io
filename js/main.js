var clickEvent = new MouseEvent("click", {
  view: window,
  bubbles: true,
  cancelable: true,
}),
  ele = document.getElementById("warningModalTrigger");
  ele.dispatchEvent(clickEvent);

function noFront() {
  $("#frogFront").removeClass("yes-display");
  $("#frogFront").addClass("no-display");
}

function yesFront() {
  $("#frogFront").removeClass("no-display");
  $("#frogFront").addClass("yes-display");
}


$("#lickLeft").hover(
  function() {
    noFront();
    $("#frogLeft").removeClass("no-display");
    $("#frogLeft").addClass("yes-display");

  }, function() {
    $("#frogLeft").removeClass("yes-display");
    $("#frogLeft").addClass("no-display");
    yesFront();
  }
);

$("#lickRight").hover(
  function () {
    noFront();
    $("#frogRight").removeClass("no-display");
    $("#frogRight").addClass("yes-display");
    
  }, function () {
    $("#frogRight").removeClass("yes-display");
    $("#frogRight").addClass("no-display");
    yesFront();
  }
);