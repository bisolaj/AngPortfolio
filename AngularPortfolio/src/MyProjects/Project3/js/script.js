
let diffLevel; 
let triviaQuest = [];
let totalQuestions = 20;
let count = 1;
let myCount = 1;
let cTime;
let sound = false;
let music = new Audio();
let score = 0;
let inject = document.getElementById('inject');
let musicBtn = document.getElementById('musicBtn') ;

music.src = "../Music/Song.mp3";

injectBtn.addEventListener('click', function (e) {
    count =1;
    score=0;
    clearInterval(cTime);
    diffLevel="";
    triviaQuest = [];
    //call loadPage to inject HTML
    loadPage("../menu.html");
});

musicBtn.addEventListener('click',function(e) 
{ 
    if (!sound)
    {
        music.play();
        sound = true;
    }
    else
    {
        music.pause();
        music.currentTime=0;    
        sound = false;
    }
});

function loadPage(url) {
    let xmlhttp = new XMLHttpRequest();
    //console.log(url);
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            console.log(myArr);
            //add conditional statements for page to be load
            if (url == "../menu.html") {
                menuLoad(myArr);
            }
            else if (url == "../option.html") {
                optionLoad(myArr);
            }
            else if (url == "../easy.html") {
                diffLevel="Easy";
                easyLoad(myArr);
            }
            else if (url == "../medium.html") {
                diffLevel="Medium";
                mediumLoad(myArr);
            }
            else if (url == "../hard.html") {
                diffLevel="Hard";
                hardLoad(myArr);
            }
            else if (url == "../end.html"){
                endLoad(myArr);
            }
        }
    };

    //open connection
    xmlhttp.open("GET", url, true);
    //pulls the request
    xmlhttp.send();
}

function endLoad(info)
{
    
    inject.innerHTML = info;
    let finalscore = document.getElementById('finalscore');
    finalscore.innerText = score;
    let replay = document.getElementById('replay');
    replay.addEventListener('click',function(e) {
        count = 1;
        score = 0;
        triviaQuest = [];
        clearInterval(cTime);
        if (diffLevel == "Easy") 
        {
            loadPage("../easy.html");
        } 
        else if (diffLevel == "Medium")
        {
            loadPage("../medium.html");
        }
        else if (diffLevel == "Hard")
        {
            loadPage("../hard.html");
        }
    });
}

function menuLoad(info) {
    inject.innerHTML = info;
    let injectOptionBtn = document.getElementById('injectOptionBtn');
    injectOptionBtn.addEventListener('click', function (e) {
        //call loadPage to inject HTML
        loadPage("../option.html");
    });
}

function optionLoad(info) {
    inject.innerHTML = info;
    let injectEasyGameBtn = document.getElementById('injectEasyGameBtn');
    diffLevel="";
    triviaQuest = [];
    injectEasyGameBtn.addEventListener('click', function (e) {
        diffLevel = "Easy";
        loadPage("../easy.html");

    });
    let injectMediumGameBtn = document.getElementById('injectMediumGameBtn');
    injectMediumGameBtn.addEventListener('click', function (e) {
        diffLevel = "Medium";
        loadPage("../medium.html");
    });
    let injectHardGameBtn = document.getElementById('injectHardGameBtn');
    injectHardGameBtn.addEventListener('click', function (e) {
        diffLevel = "Hard";
        loadPage("../hard.html");
    });  
}

function easyLoad(info) {
    inject.innerHTML = info;
    diffLevel = "Easy";
    let diffLevelTag = document.getElementById('diffLevel');
    let scoreTag = document.getElementById('score');
    scoreTag.innerText = score;
    let num = document.getElementById('questNum');
    num.innerText = "QUESTION " + (myCount);
    diffLevelTag.innerText = diffLevel;    
    let url = "../data/data.json";
    for (let i = 0; i < btns.length; i++) {
        //This will cycle through all the buttons
        //console.log ("My count is " + myCount);
        btns[i].addEventListener('click', function (e) {
            if (btns[i].innerText == correctAnswer) {
                //increase score
                score++;
           //     console.log("Score is: " + score);
                scoreTag.innerText = score;
               if (count > triviaQuest.length - 1) {
                    count = 0;
                }
                count++;
                myCount++;
                clearInterval(cTime);
                displayQuestion();
            }
            else {
                if (count > triviaQuest.length - 1) {
                    count = 0;
                }
                count++;
                myCount++;
                clearInterval(cTime);
                displayQuestion();
            }
            checkTime();
            //displayQuestion();
        });
    }
    loadJSON();
}
function mediumLoad(info) {
    inject.innerHTML = info;
    diffLevel = "Medium"; 
    let diffLevelTag = document.getElementById('diffLevel');
    let scoreTag = document.getElementById('score');
    scoreTag.innerText = score;
    let num = document.getElementById('questNum');
    num.innerText = "QUESTION " + (myCount);
    diffLevelTag.innerText = diffLevel;    
    let url = "../data/medium.json";
    for (let i = 0; i < btns.length; i++) {
        //This will cycle through all the buttons
        //console.log ("My count is " + myCount);
        btns[i].addEventListener('click', function (e) {
            if (btns[i].innerText == correctAnswer) {
                //increase score
                score++;
                //console.log("Score is: " + score);
                scoreTag.innerText = score;
                if (count > triviaQuest.length - 1) {
                    count = 0;
                }
                count++;
                myCount++;
                clearInterval(cTime);
                displayQuestion();
            }
            else {
                if (count > triviaQuest.length - 1) {
                    count = 0;
                }
                count++;
                myCount++;
                clearInterval(cTime);
                displayQuestion();
            }
            checkTime();
            //displayQuestion();
        });
    }
    loadJSON();
}
function hardLoad(info) {
    inject.innerHTML = info;  
    diffLevel = "Hard"; 
    let diffLevelTag = document.getElementById('diffLevel');
    let scoreTag = document.getElementById('score');
    scoreTag.innerText = score;
    let num = document.getElementById('questNum');
    num.innerText = "QUESTION " + (myCount);
    diffLevelTag.innerText = diffLevel;    
    let url = "../data/hard.json";
    for (let i = 0; i < btns.length; i++) {
        //This will cycle through all the buttons
        //console.log ("My count is " + myCount);
        btns[i].addEventListener('click', function (e) {
            if (btns[i].innerText == correctAnswer) {
                //increase score
                score++;
               // console.log("Score is: " + score);
                scoreTag.innerText = score;
                if (count > triviaQuest.length - 1) {
                    count = 0;
                }
                count++;
                myCount++;
                clearInterval(cTime);
                displayQuestion();
            }
            else {
                if (count > triviaQuest.length - 1) {
                    count = 0;
                }
                count++;
                myCount++;
                clearInterval(cTime);
                displayQuestion();
            }
            checkTime();
            //displayQuestion();
        });
    }
    loadJSON();
}
function loadJSON() {
    //load JSON Data
    //XML HTTP-REQUEST
    let xmlhttp = new XMLHttpRequest();
    let url = "";
    if (diffLevel == "Easy") {
        url = "../data/data.json";
    }
    if (diffLevel == "Medium") {
        url = "../data/medium.json";
    }
    if (diffLevel == "Hard") {
        url = "../data/hard.json";
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            loadAllQuestions(myArr);
        }
    };
    //Opening the connection
    xmlhttp.open("GET", url, true);
    //Sending the request
    xmlhttp.send();}
let questions = [];
let triviaQuestObj = [];
//Function is called inside HTTP Request
function loadAllQuestions(info) {
    console.log(info.questions);
    let qNum = 0;
    for (let i = 0; i < totalQuestions; i++) {
        //to shuffle
        qNum = Math.floor(Math.random() * info.questions.length);
        //add from questions json array to triviaQuests
        triviaQuest.push(info.questions[qNum]);
        //remove the item from questions
        info.questions.splice(qNum, 1);
    }
    console.log(triviaQuest);
    console.log(info.questions);
    displayQuestion();
}
let correctAnswer;
let triviaTimer = 10;
function displayQuestion() {
    let a1 = document.getElementById('a1');
    let a2 = document.getElementById('a2');
    let a3 = document.getElementById('a3');
    let a4 = document.getElementById('a4');
    let col2 = document.getElementById('col2');
    let num = document.getElementById('questNum');

    //check if end of 20 questions is reached
    if (count == 20) {
      
        loadPage("../end.html");
    }
    //clearInterval(checkTime);
    //Fill in the Buttons
    //Start Timer
    num.innerText = "QUESTION " + (count);
    col2.innerText = triviaQuest[count].q;
    a1.innerText = triviaQuest[count].a1;
    a2.innerText = triviaQuest[count].a2;
    a3.innerText = triviaQuest[count].a3;
    a4.innerText = triviaQuest[count].a4;
    correctAnswer = triviaQuest[count].c;
    triviaTimer = 10;
    cTime = setInterval(checkTime, 1000);
}

// Grab Class By Name
// Returns an Array of HTML Elements
let btns = document.getElementsByClassName('btn');
//let col2 = document.getElementById('col2');
//console.log("Score is: " + score);
// Run Counter / Timer
// Create Max Time
//setInterval(checkTime, 1000);

function checkTime() {
    let counter = document.getElementById('counter');
    //clearInterval(checkTime);
    if (triviaTimer > 0) {
        counter.innerText = triviaTimer--;
        console.log(triviaTimer);
    } else 
    {
        count++;
        clearInterval(cTime);
        displayQuestion();

    }
    //num.innerText = "QUESTION " + (count);
}

//runs & load JSON Data
loadJSON();