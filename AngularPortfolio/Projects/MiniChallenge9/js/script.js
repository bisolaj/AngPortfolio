
function generateStudent() {
    let studentName = ["Trever Edwards",
                        "Lourn Selga",
                        "Jonathan Stewart",
                        "Dennis Dolin Jr",
                        "Carson Huber",
                        "Robert Burns",
                        "Carter Galvez",
                        "Kevin Caballero",
                        "David Abdallah",
                        "Francisco Chavez",
                        "Bisola Awujoola",
                        "Deon Simmions Jr",
                        "Jose Martinez",
                        "Abraham Lopez",
                        "Joseph Perez II",
                        "Zachary Davis",
                        "Johnny Uribe",
                        "Nimish Lal",
                        "Angel Pantoja",
                        "Stephaine Singh",
                        "Esteban Zaragoza",
                        "Alex Her",
                        "Nayo Ortiz"
                    ];
    
    let randStudent = Math.floor(Math.random()*studentName.length);
    
    document.getElementById('result').innerHTML="<div class='bgColor'><h2>"+studentName[randStudent] + "</h2></div>";
}