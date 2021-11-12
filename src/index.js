const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    breedFilter();

})

// Fetch Images, Fetch Dog Breeds

function fetchImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        const imageArray = data["message"];
        renderImages(imageArray);
    })
};

function fetchBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        const breedObj = data["message"];
        renderClickEventBreeds(breedObj);
    })
}

// Render Images, Render Dog Breeds

function renderImages(obj){
    const imageContainer = document.querySelector('#dog-image-container');
    obj.forEach(image => {
        const dogImage = document.createElement('img');
        dogImage.src = image;
        imageContainer.append(dogImage);
    })  
};

// Render and Click Event

function renderClickEventBreeds(obj){
    const breedList = document.querySelector('#dog-breeds');
    for(let breed in obj) {
        let dogBreed = document.createElement('li')
        dogBreed.textContent = breed;
        breedList.append(dogBreed);
        let subBreedArray = obj[breed];
        for (let subBreed of subBreedArray) {
            if (subBreed) {
                const subBreedElm = document.createElement('li')
                subBreedElm.textContent =  subBreed;
                dogBreed.append(subBreedElm);
                subBreedElm.style.textIndent = '20px'
            }
        }
    }
    const toChange = document.querySelectorAll('li');
    for(let breed of toChange) {
        breed.addEventListener('click', changeColor);
    }


}

function changeColor(e){
    const content = e.target;
    content.style.color = 'red';
}

function breedFilter(){
    const breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', createFilter)
}

//breedDropdown.addEventListener('chang', function(e) {
  //  console.log(e.target)
    // need this to take in the e and read the valuer returned
    // may need to add in one more option for list, a Select... option
    // then need an if statement comparing letting to first letter of lis
    // probably need something like the ball object lab where parse str into array?
    // then put it back??

function createFilter(e) {
    const select = e.target;
    const listItems = document.querySelectorAll('li');
    let value = select.options[select.selectedIndex].value;
    if (value === 'a') {
        for (let item of listItems) {
            if (item.textContent.charAt(0) !== 'a') {
                item.remove();
            };
        };
    } else if (value === 'b') {
        for (let item of listItems) {
            if (item.textContent.charAt(0) !== 'b') {
                item.remove();
            };
        };
    } else if (value === 'c') {
        for (let item of listItems) {
            if (item.textContent.charAt(0) !== 'c') {
                item.remove();
            };
        };
    } else if (value === 'd') {
        for (let item of listItems) {
            if (item.textContent.charAt(0) !== 'd') {
                item.remove();
            };
        };
    };
};