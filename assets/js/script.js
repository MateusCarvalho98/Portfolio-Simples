const repositories = document.querySelector('.content-main')

function getApiGitHub () {
    fetch ('https://api.github.com/users/MateusCarvalho98/repos')
    .then(async res => {
        if ( !res.ok) {
            throw new Error(res.status)
        }

        let data = await res.json();
        data.map( item => {
            let project = document.createElement('div')

            project.innerHTML = `

            <div class="project">
                <div>
                <a href="${item.html_url}" target="_blank"><h4 class="title">${item.name}</h4>
                    <span class="description">${item.description}</span>
                </div>
                <div>
                    <a href="${item.html_url}" target="_blank">${item.html_url}"</a>
                    <span class="language"><span class="circle"></span>${item.language}</span>
                </div>
            </div>

            `

            repositories.appendChild(project)
        })
    })
}

getApiGitHub()