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
      console.log(i.url)
    }
  })
//   const repo1Box = document.createElement("div");
//   repo1Box.classList.add("repo-box");
//   moreInfoBox.appendChild(repo1Box);

//   const repo1 = document.createElement("p");
//   repo1.innerHTML =
//     '<a href="' +
//     repos[2].html_url +
//     '">' +
//     "Customer Directory Project" +
//     "</a>";
//   repo1Box.appendChild(repo1);
