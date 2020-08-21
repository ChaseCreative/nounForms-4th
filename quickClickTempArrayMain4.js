//Timer variables
//This sets the countdown at 15 sections
var timeleft = 15;
var countdown = setInterval(countDownTimer,1000);

function countDownTimer(){

document.getElementById("timer").style.color = "white";
		document.getElementById("timer").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("timer").innerHTML = "Time's Up!";
					document.getElementById("timer").style.color = "black";
  }

}

//This stops the timer and resets it to 15 seconds
function stopTimer() {

  clearInterval(countdown);
  document.getElementById("timer").innerHTML = "Timer";
timeleft = 15;

}

stopTimer()


/*
Checklist for changing the game:
1. Change the array in the function reset();
2. Change the array in movLength in the function reset();
3. Insert the latin array in the function startGame() at document.getElementById("latin").innerHTML = "____";
4. Insert the translation array in the function giveAnswerOne() at document.getElementById("trans").innerHTML = "______";
5. Change the count arry in the function giveAnswerOne() at if (count == (________.length *2))
*/



//This sets the width for the progress bar called "myBar"
var width = 0;

//This sets the length of each movement of the Progess Bar on a button click
var movLength = 0;

//This increases the Progress Bar on each button click
function move() {
//This displays the Progress Bar total length of 100%
document.getElementById("myProgress").style.display = "block" ;

//The displays the progress made on each button click
var bar = document.getElementById("myBar");

      if (width >= 100) {
        bar.style.width = 0;
      } else {
        width += movLength;
        bar.style.width = width + "%";

      }
    }




//This resets all of the verbs and personal endings
function reset (){


  //var nounsFourth = [["port", "harbor"], ["man", "hand"],["senat", "senate"], ["impet", "attack"]];
  //var nounsFourthPlural = [["port", "harbors"], ["man", "hands"],["senat", "senates"], ["impet", "attacks"]];

  //var perEndingsFourth = [["us", "the (Subject) "],["ūs", "of the "], ["uī ", "to/for the "], ["um", "the (Direct Object) "], ["ū", "by/with/in/from the "]];
  //var perEndingsFourthPlural = [["ūs (Subject)", "the "], ["uum", "of the "], ["ibus (Dative)", "to/for the "], ["ūs (Direct Object)", "the (Direct Object) "], ["ibus (Ablative)", "by/with/in/from the "]];



nounsFourthSing = [["port", "harbor"], ["man", "hand"],["senat", "senate"], ["impet", "attack"]];
nounsFourthSingIndx = Math.floor(Math.random() * nounsFourthSing.length);

nounsFourthPl = [["port", "harbors"], ["man", "hands"],["senat", "senates"], ["impet", "attacks"]];
nounsFourthPlIndx = Math.floor(Math.random() * nounsFourthPl.length);


  //var verbsFirstPer = [["Amav", "loved"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sang"], ["ded", "gave"]];


pEFourthSing = [["us", "the "],["ūs (Genitive)", "of the "], ["uī ", "to/for the "], ["um", "the "], ["ū", "by/with/in/from the "], ["us! (Vocative)", "Oh, "]];
pEFourthSingIndx = Math.floor(Math.random() * pEFourthSing.length);

pEFourthPl = [["ūs (Nominative)", "the "], ["uum", "of the "], ["ibus (Dative)", "to/for the "], ["ūs (Accusative)", "the "], ["ibus (Ablative)", "by/with/in/from the "], ["ūs! (Vocative)", "Oh, "]];
pEFourthPlIndx = Math.floor(Math.random() * pEFourthPl.length);

nounsSingLatinArray = nounsFourthSing[nounsFourthSingIndx][0] + pEFourthSing[pEFourthSingIndx][0];
nounsSingTransArray = pEFourthSing[pEFourthSingIndx][1] + nounsFourthSing[nounsFourthSingIndx][1];

nounsPlLatinArray = nounsFourthPl[nounsFourthPlIndx][0] + pEFourthPl[pEFourthPlIndx][0];
nounsPlTransArray = pEFourthPl[pEFourthPlIndx][1] + nounsFourthPl[nounsFourthPlIndx][1];

mixUp = [[nounsSingLatinArray,nounsSingTransArray],[nounsPlLatinArray,nounsPlTransArray]];
mixUpIndx = Math.floor(Math.random() * mixUp.length);

//random latin noun form = mixUp[mixUpIndx][0]
//ransome latin noun translaton = mixUp[mixUpIndx][1]

//verb = [["amo", "I love"],["amas", "you love"],["amat", "he loves"],["amamus", "we love"],["amatis", "ya'll love"],["amant", "they love"]];
//verbIndx = Math.floor(Math.random() * verb.length);
/*
  stem = [["am","ama","love", "loves", "loving"],["d","da","give", "gives","giving"],["labor","labora","work", "works","working"],["vide","vide","see", "sees", "seeing"]];
  ranStemIndx = Math.floor(Math.random() * stem.length);

  pro = ["he", "she", "it"];
  proIndx = Math.floor(Math.random() * pro.length);


  perEnd = [["o","I"],["s","you"],["t", pro[proIndx]],["mus","we"],["tis","ya'll"],["nt","they"]];


  perEndImp = [["bam","I was"],["bas","you were"],["bat", pro[proIndx] + " was "],["bamus","we were"],["batis","ya'll were"],["bant","they were"]];

  ranPerEndImpIndx = Math.floor(Math.random() * perEndImp.length);

  verbEng = {
    firstSing: perEnd[0][1] + " " + stem[ranStemIndx][2],
    secondSing: perEnd[1][1] + " " + stem[ranStemIndx][2],
    thirdSing: perEnd[2][1] + " " + stem[ranStemIndx][3],
    firstPl: perEnd[3][1] + " " + stem[ranStemIndx][2],
    secondPl: perEnd[4][1] + " " + stem[ranStemIndx][2],
    thirdPl: perEnd[5][1] + " " + stem[ranStemIndx][2]
  };

  ranVerbEng = [verbEng.firstSing, verbEng.secondSing, verbEng.thirdSing, verbEng.firstPl, verbEng.secondPl, verbEng.thirdPl];
  //ranIndx = Math.floor(Math.random() * ranVerbEng.length);

  // Create an object:

  verbLat = {
    firstSing: stem[ranStemIndx][0] + perEnd[0][0],
    secondSing: stem[ranStemIndx][1] + perEnd[1][0],
    thirdSing: stem[ranStemIndx][1] + perEnd[2][0],
    firstPl: stem[ranStemIndx][1] + perEnd[3][0],
    secondPl: stem[ranStemIndx][1] + perEnd[4][0],
    thirdPl: stem[ranStemIndx][1] + perEnd[5][0]
  };

  ranVerbLat = [verbLat.firstSing, verbLat.secondSing, verbLat.thirdSing, verbLat.firstPl, verbLat.secondPl, verbLat.thirdPl];



verbImpEng = {
  firstSing: perEndImp[0][1] + " " + stem[ranStemIndx][4],
  secondSing: perEndImp[1][1] + " " + stem[ranStemIndx][4],
  thirdSing: perEndImp[2][1] + " " + stem[ranStemIndx][4],
  firstPl: perEndImp[3][1] + " " + stem[ranStemIndx][4],
  secondPl: perEndImp[4][1] + " " + stem[ranStemIndx][4],
  thirdPl: perEndImp[5][1] + " " + stem[ranStemIndx][4]
};

ranVerbImpEng = [verbImpEng.firstSing, verbImpEng.secondSing, verbImpEng.thirdSing, verbImpEng.firstPl, verbImpEng.secondPl, verbImpEng.thirdPl];

// Create an object:

verbImpLat = {
  firstSing: stem[ranStemIndx][1] + perEndImp[0][0],
  secondSing: stem[ranStemIndx][1] + perEndImp[1][0],
  thirdSing: stem[ranStemIndx][1] + perEndImp[2][0],
  firstPl: stem[ranStemIndx][1] + perEndImp[3][0],
  secondPl: stem[ranStemIndx][1] + perEndImp[4][0],
  thirdPl: stem[ranStemIndx][1] + perEndImp[5][0]
};




ranVerbImpLat = [verbImpLat.firstSing, verbImpLat.secondSing, verbImpLat.thirdSing, verbImpLat.firstPl, verbImpLat.secondPl, verbImpLat.thirdPl];

ranVerbEng = [verbEng.firstSing, verbEng.secondSing, verbEng.thirdSing, verbEng.firstPl, verbEng.secondPl, verbEng.thirdPl,verbImpEng.firstSing, verbImpEng.secondSing, verbImpEng.thirdSing, verbImpEng.firstPl, verbImpEng.secondPl, verbImpEng.thirdPl];
ranVerbLat = [verbLat.firstSing, verbLat.secondSing, verbLat.thirdSing, verbLat.firstPl, verbLat.secondPl, verbLat.thirdPl,verbImpLat.firstSing, verbImpLat.secondSing, verbImpLat.thirdSing, verbImpLat.firstPl, verbImpLat.secondPl, verbImpLat.thirdPl];
ranIndx = Math.floor(Math.random() * ranVerbEng.length);

*/
//This sets the length of the progress bar movement at twice the length of the array
movLength = 100/20;

}


// This function restarts the game at the beginning on the click of the BackBox button.
function restartGame(){

  document.getElementById("timer").style.color = "white";
   stopTimer();

  //This sets the colors of box 1 for the first game
    document.getElementById("box1").innerHTML = "Start!"
    document.getElementById("box1").style.background = "yellow";
    document.getElementById("box1").style.color = "black";
    document.getElementById("myBar").style.width = "0";
    width = 0;


  hideDemo();
  hideDemo2();
  hideBox2();
  unHideBox1();
  hideBackBox();
  hideTimer();

 //This activitates box 1 to start the Latin to English game
  document.getElementById("box1").onclick = function(){startGame()};

}


var count = 0;


reset();
unHideProgressBar();


//document.getElementById("myBar").style.width = 0;

function startGame(){

  //timeleft = 15;
  countdown = setInterval(countDownTimer,1000);
   //timeleft = 15;
   //countdown = setInterval(countDownTimer,1000);

unHideBackBox();
unHideTimer();


unHideBackBox();
  hideBox1();
  unHideBox2();
  unHideDemo();
  hideDemo2();
  //changeBoxColorsOne();

  //This activates the Progress Bar
document.getElementById("myBar").onclick = function(){move()};
document.getElementById("box1").innerHTML = "Next!";
document.getElementById("box1").style.color = "black";

reset();
/*
function counter (){
  for(var i = 0; i < ranVerbEng.length; ++i){

      if(i == 2){
        document.getElementById("latin").innerHTML = "Done!";
      }

  }
}

counter();
console.log(counter());
*/
//random latin noun form = mixUp[mixUpIndx][0]
document.getElementById("latin").innerHTML = mixUp[mixUpIndx][0];
/*
var verbIndex = 0;
if (verbIndex == ranVerbLat.length) verbIndex = 0;
document.getElementById("latin").innerHTML = ranVerbLat[verbIndex];
*/


}

function giveAnswerOne(){

  document.getElementById("timer").style.color = "white";
  stopTimer();

move();

  unHideBox1();
  hideBox2();
  unHideDemo2();
  changeBoxColorsTwo();

//ransome latin noun translaton = mixUp[mixUpIndx][1]
document.getElementById("trans").innerHTML = mixUp[mixUpIndx][1];

/*
  if (verbIndex == ranVerbEng.length) verbIndex = 0;
  document.getElementById("trans").innerHTML = ranVerbEng[verbIndex];
verbIndex++;
*/

if (count == 20){
    document.getElementById("latin").innerHTML = "Finis!";
    document.getElementById("trans").innerHTML = "Let's go again!"
    document.getElementById("box1").innerHTML = "Start";
    document.getElementById("box1").style.background = "blue";
    document.getElementById("box1").style.color = "white";
    document.getElementById("myBar").style.width =0;
    count = 0;
    width = 0;
    reset();
}
count++;

//console.log(ranVerbEng.length *2);
}

function hideTimer(){
  document.getElementById("timer").style.display = "none" ;
}

function unHideTimer(){
  document.getElementById("timer").style.display = "block" ;
}



function hideBackBox(){
  document.getElementById("backBox").style.display = "none" ;
}

function unHideBackBox(){
  document.getElementById("backBox").style.display = "block" ;
}

function hideProgressBar(){
  document.getElementById("myProgress").style.display = "none" ;
}

function unHideProgressBar(){
  document.getElementById("myProgress").style.display = "block" ;
}

function hideLabel(){
  document.getElementById("label").style.display = "none" ;
}

function unHideLabel(){
  document.getElementById("label").style.display = "block" ;
}

function hideLabelBox(){
  document.getElementById("labelBox").style.display = "none" ;
}

function unHideLabelBox(){
  document.getElementById("labelBox").style.display = "block" ;
}

function hideBox1(){
  document.getElementById("box1").style.display = "none" ;
}

function unHideBox1(){
  document.getElementById("box1").style.display = "block" ;
}

function hideBox2(){
  document.getElementById("box2").style.display = "none" ;
}

function unHideBox2(){
  document.getElementById("box2").style.display = "block" ;
}

function hideDemo(){
  document.getElementById("latin").style.display = "none" ;
}

function unHideDemo(){
  document.getElementById("latin").style.display = "block" ;
}
function hideDemo2(){
  document.getElementById("trans").style.display = "none" ;
}

function unHideDemo2(){
  document.getElementById("trans").style.display = "block" ;
}

hideBox2();
hideDemo();
hideDemo2();
hideBackBox();
hideTimer();


function changeBoxColorsTwo(){

  document.getElementById("box1").style.background= "yellow" ;
  document.getElementById("box1").style.borderColor= "black" ;

  document.getElementById("latin").style.background= "black" ;
  document.getElementById("latin").style.borderColor= "white" ;

  document.getElementById("trans").style.background= "white" ;
  document.getElementById("trans").style.borderColor= "black" ;
  document.getElementById("trans").style.color= "black" ;
}
