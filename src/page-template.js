const generateCards = data => {

    const manager = data[0].map(function (job) {
        return `
        <div class="card border border-primary rounded shadow" style="width: 18rem; padding: 8px">
            <h3>Manager</h3>
            <h4>${job.name}</h4>
            <p><b>ID:</b> ${job.id}</p>
            <p><b>Email:</b> <a href="mailto:${job.email}">${job.email}</a></p>
            <p><b>Office Number</b> ${job.office}</p>
        </div>
        `
            ;
    });

    const engineer = data[1].map(function (job) {
        return `
        <div class="card border border-warning rounded shadow" style="width: 18rem;  padding: 8px">
            <h3>Engineer</h3>
            <h4>${job.name}</h4>
            <p><b>ID:</b> ${job.id}</p>
            <p><b>Email:</b> <a href="mailto:${job.email}">${job.email}</a></p>
            <p><b>Github:</b> <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
        </div>
        `
            ;
    })

    const intern = data[2].map(function (job) {
        return `
        <div class="card border border-success rounded shadow" style="width: 18rem;  padding: 8px">
        <h3>Intern</h3>
        <h4>${job.name}</h4>
            <p><b>ID:</b> ${job.id}</p>
            <p><b>Email:</b> <a href="mailto:${job.email}">${job.email}</a></p>
            <p><b>School:</b> ${job.school}</p>
        </div>
        `;

    })

    if (engineer.length == 0) {
        return manager + intern + ""
    } else if (intern.length == 0) {
        return manager + engineer + ""
    } else {
        return manager + engineer + intern + ""
    }
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
        <header class="navbar text-light bg-primary shadow">
            <div class=" mx-auto px-md-5 text-white">
                <h1>My Team</h1>
            </div>
        </header>
        <main class="container">
            <div class="row justify-center">
            <div class="card-deck mx-auto" style="margin-top: 20px !important;">
            ${generateCards(templateData)}
            </div>
            </div>
        </main>
        <footer class="container mx-auto">
        <div class="row justify-center">
            <div class=" mx-auto px-md-1"><BR><BR>
                <p>Designed with ❤️ by <a href="https://github.com/webprinc3ss">webprinc3ss</a></p>
            </div>
        </div>
    </footer>
    </body>    
        `
}
