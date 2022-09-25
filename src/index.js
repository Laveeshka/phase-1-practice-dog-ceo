console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", doWork);

function doWork(){
    getDogImages();
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

