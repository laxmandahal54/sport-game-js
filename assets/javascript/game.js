let teamonenumshots = document.querySelector("#teamone-numshots");
let teamoneshootbutton = document.querySelector("#teamone-shoot-button");

let countSHOTSTAKENteamone = 0;
let teamonegoal = document.querySelector("#teamone-numgoals");
let goalCount1 = 0;
teamoneshootbutton.addEventListener("click", function () {
  countSHOTSTAKENteamone += 1;
  teamonenumshots.innerHTML = countSHOTSTAKENteamone;

  if (Math.random() > 0.6) {
    goalCount1 += 1;
    teamonegoal.innerHTML = goalCount1;
  }
});

let teamtwonumshots = document.querySelector("#teamtwo-numshots");
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");

let countSHOTSTAKENteamtwo = 0;
let teamtwogoal = document.querySelector("#teamtwo-numgoals");
let goalcount2 = 0;
teamtwoshootbutton.addEventListener("click", function () {
  countSHOTSTAKENteamtwo += 1;
  teamtwonumshots.innerHTML = countSHOTSTAKENteamtwo;

  if (Math.random() > 0.6) {
    goalcount2 += 1;
    teamtwogoal.innerHTML = goalcount2;
  }
});

let numberofreset = document.querySelector("#number-resets");
let resetbutton = document.querySelector("#reset-button");

let number = 0;

resetbutton.addEventListener("click", function () {
  number += 1;

  numberofreset.innerHTML = number;
  countSHOTSTAKENteamone = 0;
  teamonenumshots.innerHTML = countSHOTSTAKENteamone;
  countSHOTSTAKENteamtwo = 0;
  teamtwonumshots.innerHTML = countSHOTSTAKENteamtwo;
  teamonegoal.innerHTML = 0;
  goalCount1 = 0;
  teamtwogoal.innerHTML = 0;
  goalCount1 = 0;
});
