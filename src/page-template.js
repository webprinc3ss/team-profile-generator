const generateCards = data => {

    const manager = data.manager.map(function (job) {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.office}</p>
        </div>
        `
        return managerHtml
    });

    const engineer = data.engineer.map(function (job) {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
        </div>
        `
        return engineerHtml
    })

    const intern = data.intern.map(function (job) {
        let internHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> School: ${job.school}</p>
        </div>
        `
        return internHtml
    })
    return [manager, engineer, intern]
}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    
    <body>
        <header class="navbar text-light bg-dark">
            <div class=" mx-auto px-md-5 text-white">
                <h1>My Team</h1>
            </div>
        </header>
        <main class="container">
            <div class="row justify-center">
                <div class="card-deck">
            ${generateCards(templateData)}
            </div>
            </div>
        </main>
    </body>    
        `
}
