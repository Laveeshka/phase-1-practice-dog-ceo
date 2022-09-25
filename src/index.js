console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", doWork);

function doWork(){
    getDogImages();
    getDogBreeds();
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
            const breeds = Object.keys(data.message);
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
    console.log(e.target);
    e.target.style.color = 'skyblue';
}