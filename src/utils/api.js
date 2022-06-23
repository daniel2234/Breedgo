import Dog from '../models/Dog';

export function fetchDogBreeds(type) {
  //type will be a fill for this api method
  return fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(response => response.json())
  .then(data => {
    dogs = Object.keys(data.message)
    subBreeds = Object.values(data.message)
    return makeDogObjects(dogs, subBreeds)

    //original object data.message
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
  console.log(arrayOfDogs);
  return arrayOfDogs
}