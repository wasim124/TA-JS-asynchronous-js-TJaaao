let searchElm= document.querySelector('input');
let root = document.querySelector('.images');
const url = 
    'https://api.unsplash.com/photos/?client_id=nv6BjyGTad-uvdkE6sSG5CHEz_nx1f52PPioyZF36r8';

const getSearchURL = (query) => 
    `https://api.unsplash.com/search/photos?query=${query}&?client_id=nv6BjyGTad-uvdkE6sSG5CHEz_nx1f52PPioyZF36r8`;

function fetch(url ){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(JSON.parse(xhr.response));  
        xhr.onerror = () => reject('Something went wrong!');   
        xhr.send();
    });
   
}

function displayImages(images){
    root.innerHTML = '';
    images.forEach((image) => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = image.urls.thumb;
        li.append(img);
        root.append(li);
     });
}

fetch(url,).then(displayImages)
            .catch(console.error(error));


function handleSearch(event){
    if(event.keyCode === 13 && searchElm.value){
        fetch(getSearchURL(searchElm.value))
            .then((searchResult) =>{
                displayImages(searchResult.results);
        });
        searchElm.value ='';
    }
}


searchElm.addEventListener('keyup',handleSearch);


// nv6BjyGTad-uvdkE6sSG5CHEz_nx1f52PPioyZF36r8
// https://api.unsplash.com/photos/random/?client_id=