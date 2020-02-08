let xmlhttp = new XMLHttpRequest();
let url = "../data/data.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        studentInfo(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

let students = [];
let studentsObj = [];

function studentInfo(info) {
    //create an object for each loop in array
    for(let i =0; i<info.students.length;i++) {
        //Fill object with student info
        let nFO = {
            "firstName":info.students[i].firstName,
            "lastName":info.students[i].lastName,
            "nickName": info.students[i].nickName,
            "email": info.students[i].email,
            "slackName":info.students[i].slackName,
            "contact": info.students[i].contact,
            "hobby": info.students[i].hobby
        };
        students.push(info.students[i].firstName);
        students.push(info.students[i].lastName);
        students.push(info.students[i].nickName);
        students.push(info.students[i].email);
        students.push(info.students[i].slackName);
        students.push(info.students[i].contact);
        students.push(info.students[i].hobby);

        studentsObj.push(nFO)

        //console.log("Student: " + (i+1));
        //console.log("First Name: " + studentsObj[i].firstName);
        //console.log("Last Name: " + studentsObj[i].lastName);
        //console.log("Nick Name: " + studentsObj[i].nickName);
        //console.log("Email: " + studentsObj[i].email);
        //console.log("Slack Name: " + studentsObj[i].slackName);
        //console.log("Best way to contact: " + studentsObj[i].contact);
        //console.log("Hobby: " + studentsObj[i].hobby);
        //console.log("");
         }
}


//create previous, first, last, random and next buttons
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let firstBtn = document.getElementById("first");
let lastBtn = document.getElementById("last");
let randomBtn = document.getElementById("random");


//create an index counter
let count =0;

//create event listeners
prevBtn.addEventListener('click',function(e) {
    count--;
    if (count < 0)
    {
        count = studentsObj.length - 1;
    
    }
    cStudents();
    
});
nextBtn.addEventListener('click',function(e) {
    if (count > studentsObj.length - 1)
    {
        count=0;
    }
    cStudents();
    count++;
});
firstBtn.addEventListener('click',function(e) {
    count=0;
    cStudents();
});
lastBtn.addEventListener('click',function(e) {
    count= 22;
    cStudents();
});
randomBtn.addEventListener('click',function(e) {
    let randStudent = Math.floor(Math.random()*studentsObj.length);
    count= randStudent;
    cStudents();
});
    
//function to display student information
function cStudents()
{
    //check to see if count is out of bounds
    if(count >=0 && count <= studentsObj.length)
    {
        let fName = studentsObj[count].firstName;
        let lName = studentsObj[count].lastName;
        let nName = studentsObj[count].nickName;
        let myEmail = studentsObj[count].email;
        let myName = studentsObj[count].slackName;
        let myContact = studentsObj[count].contact;
        let myHobby = studentsObj[count].hobby;
        document.getElementById('firstName').innerHTML="<div class='bgColor'><h3>"+fName+ "</h3></div>";
        document.getElementById('lastName').innerHTML="<div class='bgColor'><h3>"+lName+ "</h3></div>";
        document.getElementById('nickName').innerHTML="<div class='bgColor'><h3>"+nName+ "</h3></div>";
        document.getElementById('email').innerHTML="<div class='bgColor'><h3>"+myEmail+ "</h3></div>";
        document.getElementById('slackName').innerHTML="<div class='bgColor'><h3>"+myName+ "</h3></div>";
        document.getElementById('wayToContact').innerHTML="<div class='bgColor'><h3>"+myContact+ "</h3></div>";
        document.getElementById('hobby').innerHTML="<div class='bgColor'><h3>"+myHobby+ "</h3></div>";
    }
}