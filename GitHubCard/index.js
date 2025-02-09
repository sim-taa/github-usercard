import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/sim-taa`)
   .then(resp => {
      console.log(resp.data)
      })
    .catch(err => console.error(err));
//console.log(axiosPromise);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

//const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker({ imageURL, usersname, addressToUsersGithub}) {
//in regards to the above, see line 15 of guided pjt for components 2. 
//These keys refer pair to the info we will be displaying on the card.

const userCard = document.createElement("div"); // <div class="card">
const image = document.createElement("img"); // <img src={image url of user} />
const cardInfo = document.createElement("div"); // <div class="card-info">
const headingName = document.createElement("h3"); // <h3 class="name">{users name}</h3>
const location = document.createElement("p"); // <p>Location: {users location}</p>
const profile = document.createElement("a href") // <a href={address to users github page}>{address to users github page}</a>
const followers = document.createElement("p") // <p>Followers: {users followers count}</p>
const following = document.createElement("p") // <p>Followers: {users followers count}</p>
const bio = document.createElement("p") // <p>Followers: {users followers count}</p>

//creating the hierarchy 

userCard.appendChild(image); //<div><img /></div>
userCard.appendChild(cardInfo); //<div><img /><div></div></div>
userCard.appendChild(headingName); // from here I don't know if it's right because it's not nested?
userCard.appendChild(location);
userCard.appendChild(profile);
userCard.appendChild(followers);
userCard.appendChild(following);
userCard.appendChild(bio);
}

//setting text and image
headingName.textContent = `Breed: ${breed}`;
image.src = imageURL;



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
