function myTeam(teamArr){
    const htmlTeam =[];
    const myManager = (manager) => {
        let htmlManager = `
        <div class="container">
        <div class="card">
            <div class="title">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class="details">
                <p><strong>ID: </strong><span>${manager.id}</span></p>
                <p><strong>Email: </strong><a href="mailto:${manager.email}"><span>${manager.email}</span></p></a>
                <p><strong>Office Number: </strong><span>${manager.officeNumber}</span></p>
                </div>
            </div><div class="card">
    `; 
    htmlTeam.push(htmlManager);
    };

    const myEngineer = (engineer) => {
        let htmlEngineer = `
        <div class="title">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
    </div>
    <div class="details">
        <p><strong>ID: </strong><span>${engineer.id}</span></p>
        <p><strong>Email: </strong><a href="mailto:${engineer.email}"><span>${engineer.email}</span></p></a>
        <p><strong>GitHub: </strong><a href="${engineer.userName}" target="_blank"><span>${engineer.userName}</span></a></p>
    </div>
    `;
    htmlTeam.push(htmlEngineer);
    };

    const myIntern = (intern) => {
        let htmlIntern = `
        <div class="card">
        <div class="title">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </div>
        <div class="details">
            <p><strong>ID: </strong><span>${intern.id}</span></p>
            <p><strong>Email: </strong><a href="mailto:${intern.email}"><span>${intern.email}</span></p></a>
            <p><strong>School: </strong><span>${intern.school}</span></p>
        </div>
    </div>
</div>
    `;
    htmlTeam.push(htmlIntern);
    };
    for (var i = 0; i < teamArr.length; i++) {
        if (teamArr[i].getRole() === "Manager") {
            myManager(teamArr[i]);
        }
        if (teamArr[i].getRole() === "Engineer") {
            myEngineer(teamArr[i]);
        }
        if (teamArr[i].getRole() === "Intern") {
            myIntern(teamArr[i]);
        }
    }
    return htmlTeam.join("");
}
    function generateHTML(teamArr){
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
    <h1>onTech Team</h1>
    <main> ${myTeam(teamArr)} </main>

    <footer></footer>
    </body>
    </html>
    `   
        
    }


module.exports = generateHTML;