//Helper Functions:

//Create an author, show post age, num views
function authorInfo(articleNumber, username, upsCount, numComments) {
  let articleNum = document.getElementById("article" + articleNumber);
  let authorElem = document.createElement("div");
  authorElem.className = "author";
  authorElem.innerHTML = "by " + username + " | Ups: " + upsCount + " | Comments: " + numComments;
  articleNum.appendChild(authorElem);
}

const request = (url, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//First reddit article
const url = "https://www.reddit.com/r/rarepuppers.json";

request(url, res => {
  let myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj.data.children[6].data.title);
  console.log("articleAuthor: ", myObj.data.children[6].data.author);
  console.log("media link: ", myObj.data.children[6].data.url);
  let mediaLink = myObj.data.children[6].data.url;

  //Put info into html file
  if (myObj.data.children[6].data.post_hint === "image") {
    request(mediaLink, () => {
      let articleElem = document.getElementById("article1");
      let imageElem = document.createElement("img");
      imageElem.src = myObj.data.children[6].data.url;
      imageElem.alt = "dog swimming";
      articleElem.appendChild(imageElem);
    })
  }

  document.getElementById("article1").innerHTML = myObj.data.children[6].data.title;

  authorInfo(1, myObj.data.children[6].data.author, myObj.data.children[6].data.ups, myObj.data.children[6].data.num_comments);

})

//Second reddit article
request(url, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj.data.children[12].data.title);
  console.log("articleAuthor: ", myObj.data.children[12].data.author);
  console.log("media link: ", myObj.data.children[12].data.url);
  let mediaLink = myObj.data.children[12].data.url;
  // console.log("test: ", imgLink[imgLink.length - 1]);

  //Put info into html file
  if (myObj.data.children[12].data.post_hint === "link") {
    request(mediaLink, res => {
      let articleElem = document.getElementById("article2");
      let imageElem = document.createElement("img");

      //If this is a gif and it has a 'v' at the end of the link, remove the v for the gif to load properly on the page
      if (mediaLink[mediaLink.length - 1] === "v") {
        let gifLink = mediaLink.slice(0, length - 1);
        console.log("gifLink: ", gifLink);
        imageElem.src = gifLink;
        imageElem.alt = "teacup puppy";
        articleElem.appendChild(imageElem);
      }
    })
  }

  document.getElementById("article2").innerHTML = myObj.data.children[12].data.title;

  authorInfo(2, myObj.data.children[12].data.author, myObj.data.children[12].data.ups, myObj.data.children[12].data.num_comments);

})

//Third reddit article
request(url, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj.data.children[9].data.title);
  console.log("articleAuthor: ", myObj.data.children[9].data.author);
  console.log("media link: ", myObj.data.children[9].data.url);
  let mediaLink = myObj.data.children[9].data.url;

  //Put info into html file
  if (myObj.data.children[9].data.post_hint === "link") {
    request(mediaLink, () => {
      let articleElem = document.getElementById("article3");
      let imageElem = document.createElement("img");

      //If this is a gif and it has a 'v' at the end of the link, remove the v for the gif to load properly on the page
      if (mediaLink[mediaLink.length - 1] === "v") {
        let gifLink = mediaLink.slice(0, length - 1);
        console.log("gifLink: ", gifLink);
        imageElem.src = gifLink;
        imageElem.alt = "doggy kisses";
        articleElem.appendChild(imageElem);
      }
    })
  }

  document.getElementById("article3").innerHTML = myObj.data.children[9].data.title;

  authorInfo(3, myObj.data.children[9].data.author, myObj.data.children[9].data.ups, myObj.data.children[9].data.num_comments);

})

//Fourth reddit article
request(url, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj.data.children[21].data.title);
  console.log("articleAuthor: ", myObj.data.children[21].data.author);

  //Put info into html file
  document.getElementById("article4").innerHTML = myObj.data.children[21].data.title;

  authorInfo(4, myObj.data.children[21].data.author, myObj.data.children[21].data.ups, myObj.data.children[21].data.num_comments);

})