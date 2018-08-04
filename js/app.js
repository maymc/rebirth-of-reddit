//Request Function:
const request = (url, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

let randomClicked = false;
let myBoardsClicked = false;
let getTheAppClicked = false;
let url = null;

document.getElementById("random").addEventListener("click", setRandomClicked);
function setRandomClicked() {
  console.log("random clicked");
  randomClicked = true;
  myBoardsClicked = false;
  getTheAppClicked = false;
  //return randomClicked;
  console.log("random flag: ", randomClicked);
  populate("https://www.reddit.com/r/flowers.json");
};

document.getElementById("myBoards").addEventListener("click", setMyBoardsClicked);
function setMyBoardsClicked() {
  console.log("myBoards clicked");
  randomClicked = false;
  myBoardsClicked = true;
  getTheAppClicked = false;
  //return myBoardsClicked;
  console.log("myBoardsClicked flag: ", myBoardsClicked);
  populate("https://www.reddit.com/r/shiba.json");
};

document.getElementById("getTheApp").addEventListener("click", setGetTheAppClicked);
function setGetTheAppClicked() {
  console.log("getTheApp clicked");
  randomClicked = false;
  myBoardsClicked = false;
  getTheAppClicked = true;
  //return getTheAppClicked;
  console.log("getTheApp flag: ", getTheAppClicked);
  populate("https://www.reddit.com/r/Hawaii.json");
};

// if (randomClicked === true) {
//   console.log("random flag: ", randomClicked);
//   populate("https://www.reddit.com/r/flowers.json");
// }
// else if (myBoardsClicked === true) {
//   console.log("myBoardsClicked flag: ", myBoardsClicked);
//   populate("https://www.reddit.com/r/shiba.json");
// }
// else if (getTheAppClicked === true) {
//   console.log("getTheApp flag: ", getTheAppClicked);
//   populate("https://www.reddit.com/r/Hawaii.json");
// }
// else {
//   randomClicked = false;
//   myBoardsClicked = false;
//   getTheAppClicked = false;
//   url = "https://www.reddit.com/r/rarepuppers.json";
// }

function populate(url) {
  request(url, res => {
    let myObj = JSON.parse(res.currentTarget.response);
    for (let i = 0; i < myObj.data.children.length; i++) {
      //Create divs
      let postsBodyElem = document.getElementById("postsBody");
      let postElem = document.createElement("div");
      postElem.className = "posts";
      let titleElem = document.createElement("div");
      titleElem.id = "title";
      let authorElem = document.createElement("div");
      authorElem.id = "author";

      //Get data from url
      console.log("response: ", myObj);

      console.log("post title: ", myObj.data.children[i].data.title);
      let postTitle = myObj.data.children[i].data.title;

      console.log("post author: ", myObj.data.children[i].data.author);
      let username = myObj.data.children[i].data.author;

      console.log("post ups: ", myObj.data.children[i].data.upsCount);
      let postUps = myObj.data.children[i].data.ups;

      console.log("post comment count: ", myObj.data.children[i].data.num_comments);
      let numComments = myObj.data.children[i].data.num_comments;

      console.log("media link: ", myObj.data.children[i].data.url);
      let mediaLink = myObj.data.children[i].data.url;
      console.log("domain: ", mediaLink.slice(10, 14))
      let domainStr = myObj.data.children[i].data.domain;
      console.log("thumbnail: ", myObj.data.children[i].data.thumbnail)
      let thumbnailLink = myObj.data.children[i].data.thumbnail;

      //Put info into html file
      if (myObj.data.children[i].data.post_hint === "image") {
        let imageElem = document.createElement("img");
        if (domainStr === "i.redd.it") {
          imageElem.src = thumbnailLink;
          postElem.appendChild(imageElem);
        }
        else {
          imageElem.src = mediaLink;
          postElem.appendChild(imageElem);
        }
      }
      else if (myObj.data.children[i].data.post_hint === "link") {
        let imageElem = document.createElement("img");

        //If this is a gif and it has a 'v' at the end of the link, remove the v for the gif to load properly on the page
        if (mediaLink[mediaLink.length - 1] === "v") {
          let gifLink = mediaLink.slice(0, length - 1);
          console.log("gifLink: ", gifLink);
          imageElem.src = gifLink;
          postElem.appendChild(imageElem);
        }
        else {
          imageElem.src = thumbnailLink;
          postElem.appendChild(imageElem);
        }

      }

      titleElem.innerHTML = postTitle;
      postElem.appendChild(titleElem);

      authorElem.innerHTML = "by " + username + " • Ups: " + postUps + " • Comments: " + numComments;
      postElem.appendChild(authorElem);

      postsBodyElem.appendChild(postElem);
    }
  })
}
