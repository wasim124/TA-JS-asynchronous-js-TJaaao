const input= document.querySelector('input');
const img = document.querySelector('img');
const name = document.querySelector('h2');
const workingAt = document.querySelector('p');
const following = document.querySelector('p');
const followers = document.querySelector('p');

let xhr =new XMLHttpRequest();
xhr.open('GET',`https://api.github.com/user/{username}`);
xhr.onload = function(){
    let userData = JSON.parse(xhr.response);
    img.src = userData.avatar_url;
    name.innerText =userData.name;
    workingAt.innerText = userData.company
    
}