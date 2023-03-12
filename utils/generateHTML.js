function myTeam(teamArr){
    const htmlTeam =[];
    const myManager = (manager) => {
        let htmlManager = `
        <div class="manager-card container bg-light mb-2">
        <h2 class="manager-name container">${manager.name}</h2>
        <ul class="manger-info container">
            <li class="id col">ID: ${manager.id}</li>
            <li class="email col">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
            <li class="office-number col">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `; 
    htmlTeam.push(htmlManager);
    };

    const myEngineer = (engineer) => {
        let htmlEngineer = `
        <div class="engineer-card container bg-light mb-2">
        <h2 class="engineer-name container">${engineer.name}</h2>
        <ul class="engineer-info container">
            <li class="id col">ID: ${engineer.id}</li>
            <li class="engineer-email col">Email: <a href="mailto: ${engineer.email}>${engineer.email}</a></li>
            <li class="engineer-username col">GitHub: <a href="https://github.com/${engineer.userName}">${engineer.userName}</a></li>
         </ul>
    </div>
    `;
    htmlTeam.push(htmlEngineer);
    };

    const myIntern = (intern) => {
        let htmlIntern = `
        <div class="intern-card container bg-light mb-2">
        <h2 class="intern-name container">${intern.name}</h2>
        <ul class="intern-info container">
            <li class="intern-id col">ID: ${intern.id}</li>
            <li class="intern-email col">Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
            <li class="intern-school col">${intern.school}</li>
        </ul>
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

    function generateHTML(teamArr){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <title>Document</title>
        </head>
        <body>
            <header>
                <h1 class="team-card">onTech Team</h1>
            </header>

            <main> ${myTeam(teamArr)} </main>

            <footer></footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </body>
        </html>
        `;
    }
}

module.exports = generateHTML;