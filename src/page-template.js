// const Manager = require("../lib/manager");
// const Engineer = require("../lib/engineer");
// const Intern = require("../lib/intern");
// const Employee = require("../lib/employee");




/*teamMembers.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}*/

// We could write a function that loops through the passed in 'teamMembers' array and test what type of Object (Object Role)


const managerHTML = (employeeObj) => {
   // if(emp.getRole() === "Manager") {
        return `<div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${employeeObj.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employeeObj.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item"> id:${employeeObj.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeObj.getEmail()}"> ${employeeObj.getEmail()}</a></li>
                            <li class="list-group-item">office num:${employeeObj.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>`;
    //} else { return console.log('review')}
}



const engineerHTML = (employeeObj) =>{
   // if(employeeObj.getRole() === "engineer") {
      return  `<div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${employeeObj.getName()} </h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employeeObj.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID:${employeeObj.engineerId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeObj.engineerEmail()}> ${employeeObj.engineerEmail()}</a></li>
                            <li .class="list-group-item">GitHub: <a href=${employeeObj.engineerGithub()}">${employeeObj.engineerGithub()}</a></li>
                            
                        </ul>
                    </div>
                </div>`;

 //   } else {return console.log('review')}
} 



const internHTML = (employeeObj) =>{
   // if(employeeObj.getRole() === "intern"){
    return `<div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${employeeObj.internName()} </h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${employeeObj.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employeeObj.internId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeObj.internEmail()}">${teamMembers.answer.internEmail}</a></li>
                            <li class="list-group-item">school:${employeeObj.internSchool()}</li>
                            
                        </ul>
                    </div>
                </div>`
  //  } else {return console.log('review')}
}

    



const htmlGenerator = (answers) => {
   // console.log(htmlGenerator);   // --> teamMembers : [Manager, Engineer, Engineer, Intern]
        let myteam = [];
        console.log(myteam)
    
    answers.forEach(emp => {
        if(emp.getRole() === 'Manager') {
            myteam.push(managerHTML(emp));
        } else if (emp.getRole() === 'Engineer') {
            myteam.push(engineerHTML(emp));
        } else if (emp.getRole() === 'Intern') {
           myteam.push(internHTML(emp));
        }
    })
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>

    <header class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </header>

    <div class="container">
            
        <div class="row">

            <div class="team-area col-12 d-flex justify-content-center">

                ${myteam.join("")}

            </div>
        </div>
                        
    </div>
</body>
</html>`





};



module.exports = htmlGenerator;










/*
const htmlGenerator = function(answer){
    console.log(answer);   // --> teamMembers : [Manager, Engineer, Engineer, Intern]

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>

    <header class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </header>




    <div class="container">
            
        <div class="row">

            <div class="team-area col-12 d-flex justify-content-center">

                ${managerHTML(answer[0])}

                
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${answer[0].managerName}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">${answer.managerId}</li>
                            <li class="list-group-item">Email: <a href="mailto:${answer.managerEmail}">${teamMembers.anwer.managerEmail}</a></li>
                            <li class="list-group-item">${teamMembers.answer.managerOfficeNumber}</li>
                        </ul>
                    </div>
                </div>



                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${teamMembers.answer.engineerName} </h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${teamMembers.engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID:${teamMembers.answer.engineerId}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamMembers.anwer.engineerEmail}>${teamMembers.anwer.engineerEmail}</a></li>
                            <li .class="list-group-item">GitHub: <a href=${teamMembers.answers.engineerGithub}">${teamMembers.answers.engineerGithub}</a></li>
                            
                        </ul>
                    </div>
                </div>

                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${teamMembers.answers.internName} </h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${teamMembers.intern.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${teamMembers.answer.internId}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamMembers.answer.internEmail}">${teamMembers.answer.internEmail}</a></li>
                            <li class="list-group-item">school:${teamMembers.answer.internSchool}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                        
                        
                        

    </div>
</body>
</html>`





};
*/