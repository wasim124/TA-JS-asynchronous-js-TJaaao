(function (){
    let modalWindow = document.querySelector('.modal_window');
    let modalClose = document .querySelector('.modal_close');
    let openButton = document.querySelector('.btn');
    let booksUL = document.querySelector('.grid')
    let charactersUL= document.querySelector('.characters')
    const booksURL = 'https://www.anapioficeandfire.com/api/books';
    
    function handleSpinner(rootElm, status = false){
        if(status){
            rootElm.innerHTML =`<section class="page"><div class="donut"></div></section>`
        }
    }
    
    //<div class="donut"></div>
    
    function displayCharacters(characters){
        handleSpinner(charactersUL, true);
        Promise.all(
            characters.map((character) => fetch(character).then((res)=>res.json()))
            ).then((charactersData)=>{
                charactersUL.innerHTML = '';
                charactersData.forEach((ch) => {
                    let li = document.createElement('li');
                    li.innerText = `${ch.name} :(${ch.aliases.join(' ')})`
                    charactersUL.append(li);
                });
            });
    
    }
    
    
    
    function displayBooks(data){
        booksUL.innerHTML = '';
        data.forEach((book) => {
            let li = document.createElement('li');
            let h2 = document.createElement('h2');
            h2.innerText =book.name;
            let p = document.createElement('p');
            p.innerText = book.authors.join('');
            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = `Show Characters (${book.characters.length})`;
            
            button.addEventListener('click',() =>{
                modalWindow.style.display = 'block';
                displayCharacters(book.characters);
                modalWindow.querySelector('.modal_close').addEventListener('click',()=>{
                    modalWindow.style.display ='none';
                });
                  
            });
            
            
            li.append(h2,p,button);
            booksUL.append(li);
        });
    }
    
    function fecthBooks(){
        handleSpinner(booksUL, true);
        fetch(booksURL).then((res)=>res.json()).then((booksData) =>{
            displayBooks(booksData);
        }).finally(()=>{
            handleSpinner(booksUL);
        });
    }
    fecthBooks();
})();


