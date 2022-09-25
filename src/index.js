console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", doWork);
let breeds = [];

function doWork(){
    getDogImages();
    getDogBreeds();
    filterBreeds();
}

//Challenge 1
function getDogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    let container = document.querySelector("#dog-image-container");
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            data.message.forEach((dogUrl => {
                container.innerHTML += `<img src="${dogUrl}"/>`
            }))
        });
}

//Challenge 2
function getDogBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    let ul = document.querySelector("#dog-breeds");
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            //console.log(data.message);
            breeds = Object.keys(data.message);
            Object.keys(data.message).forEach(key => breeds.push(key));
            //console.log(breeds);
            breeds.forEach(breed => {
                let li = document.createElement('li');
                li.innerHTML = breed;
                ul.appendChild(li);
                li.addEventListener("click", changeFontColor);
            })
        });
}




//Challenge 3
function changeFontColor(e){
    //console.log(e.target);
    e.target.style.color = 'skyblue';
}

//Challenge 4
function filterBreeds(){
    const dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener("change", filterBreedsByStartingLetter);
}

function filterBreedsByStartingLetter(e){
    console.log(e.target.value);
    //remove all li elements
    let ul = document.querySelector("#dog-breeds");
    ul.innerHTML = '';
    console.log(breeds);
    let filteredBreeds = breeds.filter(breed => breed.startsWith(e.target.value));
    console.log(filteredBreeds);
    filteredBreeds.forEach(filteredBreed => {
        let li = document.createElement('li');
        li.innerHTML = filteredBreed;
        ul.appendChild(li);
        li.addEventListener("click", changeFontColor);
    })
}