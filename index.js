var $ = function(id) {
  return document.getElementById(id);
};

// Variables

var game = [
  "Allyrion",
  "Ambrose",
  "Arryn",
  "Ashford",
  "Baratheon",
  "Beesbury",
  "Bolton",
  "Buckwell",
  "Bulwer",
  "Caron",
  "Cerwyn",
  "Codd",
  "Crakehall",
  "Egen",
  "Flint of Widow's Watch",
  "Follard",
  "Footly",
  "Forrester",
  "Fossoway of Cider Hall",
  "Fowler",
  "Graceford",
  "Grandison",
  "Greyjoy",
  "Hastwyck",
  "Hightower",
  "Hornwood",
  "Jordayne",
  "Karstark",
  "Lannister",
  "Lonmouth",
  "Marbrand",
  "Martell",
  "Mormont",
  "Mallister",
  "Merryweather",
  "Mooton",
  "Oakheart",
  "Peckledon",
  "Penrose",
  "Piper",
  "Plumm",
  "Redfort",
  "Royce",
  "Sarsfield",
  "Sarwyck",
  "Serrett",
  "Smallwood",
  "Stark",
  "Stokeworth",
  "Swygert",
  "Swyft",
  "Tallhart",
  "Targaryen",
  "Tarly",
  "Tollett",
  "Toyne",
  "Trant",
  "Tully",
  "Tyrell",
  "Velaryon",
  "Waxley",
  "Wendwater",
  "Wensington",
  "Westerling",
  "Westford",
  "Whitehill",
  "Wode",
  "Wydman",
  "Yronwood"
];

var hint = [
  "'No Foe May Pass'",
  "'Never Resting'",
  "'As High as Honor'",
  "'Our Sun Shines Bright'",
  "'Ours is the Fury'",
  "'Beware Our Sting'",
  "'Our Blades Are Sharp'",
  "'Pride and Purpose'",
  "'Death Before Disgrace'",
  "'No Song So Sweet'",
  "'Honed and Ready'",
  "'Though All Men Do Despise Us'",
  "'None so Fierce'",
  "'By Day or Night'",
  "'Ever Vigilant'",
  "'None so Wise'",
  "'Tread Lightly Here'",
  "'Iron From Ice'",
  "'A Taste of Glory'",
  "'Let Me Soar'",
  "'Work Her Will'",
  "'Rouse Me Not'",
  "'We Do Not Sow'",
  "'None So Dutiful'",
  "'We Light the Way'",
  "'Righteous in Wrath'",
  "'Let It Be Written'",
  "'The Sun of Winter'",
  "'Hear Me Roar'",
  "'The Choice Is Yours'",
  "'Burning Bright'",
  "'Unbowed, Unbent, Unbroken'",
  "'Here We Stand'",
  "'Above the Rest'",
  "'Behold Our Bounty'",
  "'Wisdom and Strength'",
  "'Our Roots Go Deep'",
  "'Unflinching'",
  "'Set Down Our Deeds'",
  "'Brave and Beautiful'",
  "'Come Try Me'",
  "'As Strong as Stone'",
  "'We Remember'",
  "'True to the Mark'",
  "'Family is Hope, Protect it Always'",
  "'I Have No Rival'",
  "'From These Beginnings'",
  "'Winter is Coming'",
  "'Proud to Be Faithful'",
  "'Truth Conquers'",
  "'Awake! Awake!'",
  "'Proud and Free'",
  "'Fire and Blood'",
  "'First in Battle'",
  "'When All is Darkest'",
  "'Fly High, Fly Far'",
  "'So End Our Foes'",
  "'Family, Duty, Honor'",
  "'Growing Strong'",
  "'The Old, the True, the Brave'",
  "'Light in Darkness'",
  "'For All Seasons'",
  "'Sound the Charge'",
  "'Honor, not Honors'",
  "'Death Over Dishonor'",
  "'Ever Higher'",
  "'Touch Me Not'",
  "'Right Conquers Might'",
  "'We Guard the Way'"
];

// Variables 

var choice = Math.floor(Math.random() * game.length);
var answer = game[choice];
var hints = hint[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split("");
var attemptsLeft = 7;
var output = "";
var userLetter = "";


// Game Setup

var setup = function() {

  document.getElementById("showhint").innerHTML = "";
  choice = Math.floor(Math.random() * game.length);
  answer = game[choice];
  hints = hint[choice];
  myLength = answer.length;
  display = [myLength];
  win = myLength;
  letters = answer.split("");
  attemptsLeft = 7;
  userLetter = "";
  
  for (var i = 0; i < answer.length; i++) {
    display[i] = " _ ";
    var output = display.join(" ");
  }
  document.getElementById("game").innerHTML = output
  document.getElementById("guesses").innerHTML =
      "You have " + attemptsLeft + " guesses left";
};


// Making Guesses

var submit = function(event) {
  event.preventDefault();
  
  userLetter = $("letter").value;
  var found = false;

  for (var c = 0; c < answer.length; c++) {
    if (userLetter.toUpperCase() === letters[c].toUpperCase()) {
      found = true
      display[c] = userLetter;
      win--;
    }
    console.log(output)
    console.log(display[c])
    output += display[c] + " ";
  }
  console.log(output)
  document.getElementById("game").innerHTML = output
  output = "";
  if(!found) attemptsLeft--;


  if (win < 1) {
    document.querySelector(".winModal").classList.remove("hidden");
    setup();
    
  } else if (attemptsLeft < 1) {
    document.querySelector(".loseModal").classList.remove("hidden");
    setup();

  } else {
    document.getElementById("guesses").innerHTML =
      "You have " + attemptsLeft + " guesses left";
  }
  
};

// Buttons

window.onload = function() {
  setup();

  var form = document.getElementById("form");
  form.onsubmit = submit;


  
  document.getElementById("restart").onclick = setup; 
   
  document.getElementById("hint").addEventListener("click", function(){
    document.getElementById("showhint").innerHTML = hints
  });
};


// Modals


var loseRestart = function() {
  document.querySelector('.loseModal').classList.add('hidden');
  setup();
}

var winRestart = function() {
  document.querySelector(".winModal").classList.add('hidden');
  setup();
}



