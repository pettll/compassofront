const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const emailContainer = document.querySelector(".main__profile-email");
const urlContainer = document.querySelector(".main__profile-url");
const starredContainer = document.querySelector(".main__profile-starred");



const client_id = "Iv1.f4dfca89d0cbcdfb"
const client_secret = "024192b7fe2c4d8cf7765dbc7529d32e7164aed5x"


const fetchUsers = async (user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id${client_id}&client_secret=${client_secret}`);

  const data = await api_call.json();
  return { data }
};


const showData = () => {
    fetchUsers(inputValue.value).then((res) => {


      nameContainer.innerHTML = `Nome: <span class="main__profile-value"> ${res.data.name} </span>`;

      unContainer.innerHTML = `Usuário: <span class="main__profile-value"> ${res.data.login} </span>`;

      reposContainer.innerHTML = `Repos: <span class="main__profile-value" ><a class="btn btn--shallow btn-sm" type="button" target="_blank" href="https://api.github.com/users/${res.data.login}/repos?client_id=${client_id}&client_secret=${client_secret}">${res.data.public_repos}</a></span>`;

      starredContainer.innerHTML = `Starred: <span class="main__profile-value" ><a class="btn btn--shallow btn-sm" type="button" target="_blank" href="https://api.github.com/users/${res.data.login}/starred?client_id=${client_id}&client_secret=${client_secret}">Link</a></span>`;

      urlContainer.innerHTML = `URL: <span class="main__profile-value"> <a href="${res.data.html_url}" target="_blank">${res.data.html_url}</a> </span>`;

      emailContainer.innerHTML = `E-mail: <span class="main__profile-value"> <a href="mailto:${res.data.html_email}" target="_blank">${res.data.html_email}</a> </span>`;


    })
};

 searchButton.addEventListener("click", () => {
   showData();
 })
