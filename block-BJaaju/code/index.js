let input= document.querySelector('input');
let info = document.querySelector('.image');

let userImage = document.querySelector('.image img');

function fetch(url , successHandler){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => successHandler(JSON.parse(xhr.response));

    xhr.onerror = function (){
        console.error('Something went wrong!');
    };
    xhr.send();
}

function handleDisplay(userInfo){
    userImage.src = userInfo.avatar_url;
    userImage.alt = userInfo.name;   
}

function handleInput(event){
    if(event.keyCode === 13 && input.value){
        const url = `https://api.unsplash.com/photos/random/?client_id= nv6BjyGTad-uvdkE6sSG5CHEz_nx1f52PPioyZF36r8`;
        let imageData = input.value;
        fetch(url + userImage , handleDisplay);
        input.value ='';
    }
}


input.addEventListener('keydown',handleInput);


// nv6BjyGTad-uvdkE6sSG5CHEz_nx1f52PPioyZF36r8
// https://api.unsplash.com/photos/random/?client_id=