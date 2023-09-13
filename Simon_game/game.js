let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$("body").keypress(function () {
  if (!started) {
    // $("#level-title").html(`level ${level}`);

    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    // let sound = new Audio("./sounds/wrong.mp3")
    // sound.play()
    playSound("wrong")
    $("#level-title").html("Game Over, Press Any Key to Restart")
    $("body").addClass("game-over")
    setTimeout(() => {
      $("body").removeClass("game-over")
    }, 200);
   startOver();
  console.log("wrong");
}
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").html(`level ${level}`);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  let sound = new Audio(`./sounds/${name}.mp3`);
  sound.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");

  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}