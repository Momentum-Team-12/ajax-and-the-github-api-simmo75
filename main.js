console.log('What the actual Java?!')

let profileDiv = document.querySelector('#profile')

fetch('https://api.github.com/users/simmo75', {
  method: 'GET',
  headers: {},
})
  .then(function (response) {
    return response.json()
  })

  .then(function (data) {
    let picDiv = document.createElement('img')
    profileDiv.appendChild(picDiv)
    picDiv.src = data.avatar_url
    picDiv.classList.add('pic')

    let namediv = document.createElement('p')
    profileDiv.appendChild(namediv)
    namediv.innerText = data.name

    let citydiv = document.createElement('div')
    //you can use any element in the parenthesis
    citydiv.innerText = 'location: ' + data.location
    profileDiv.appendChild(citydiv)
    console.log(data.avatar_url)
    console.log(data.repos_url)
  })
fetch('https://api.github.com/users/simmo75/repos', {
  method: 'GET',
})
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    for (let i of data) {
      // console.log(i.url)}
      let reposDiv = document.createElement('div')
      reposDiv.classList.add('repos')
      reposDiv.innerHTML = '<a href="' + i.html_url + '">' + i.name + '</a>'
      profileDiv.appendChild(reposDiv)
    }
  })
