import Dog from '../models/Dog';

export function fetchDogBreeds(type = "breeds") {
  //type will be a fill for this api method
  return fetch(`https://dog.ceo/api/${type}/list/all`)
  .then(response => response.json())
  .then(data => {
    // dogs = Object.keys(data.message)
    // subBreeds = Object.values(data.message)
    // return makeDogObjects(dogs, subBreeds)

    //original object data.message
    console.log(data.message)
    return data.message
  });
}


export function fetchRandomDogImages(type='affenpinscher') {
  return fetch(`https://dog.ceo/api/breed/${type}/images`)
    .then(response => response.json())
    .then(data => {
      console.log(data.message, 'here it is called, data.')
      return data.message
  });
}




let dogs = []
let subBreeds = []

function breedNames(breeds) {
  for (let index = 0; index < breeds.length; index++) {
    const element = breeds[index];
    console.log(element)
  }
}

function breedLength(breeds) {
  console.log(breeds.length)
  return breeds.length;
}

function makeDogObjects(breeds, subBreeds) {
  let arrayOfDogs = []
  for (let i = 0; i < subBreeds.length; i++) {
    let dog = new Dog(i, breeds[i], subBreeds[i]);
    arrayOfDogs.push(dog);
  }
  return arrayOfDogs
}

function randomPhoto(min, max) {
  console.log( Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//there is a variable amount of random photos from this image api per breed
//for this fetch request we will have to generate a random number between 0-1000
//photos are in order, created a random Int function for grab random photos
//the max value in the randomInt function will adapt for each image api call.

// fetch(`https://dog.ceo/api/breed/affenpinscher/images`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.message, 'here it is called')
//       let randomImage = randomPhoto(0, data.message.length);
//       console.log(randomImage);
//  });