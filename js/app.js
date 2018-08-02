//Helper Functions:

//Create an author, show post age, num views
function authorInfo(articleNumber, username) {
  let articleNum = document.getElementById("article" + articleNumber);
  let authorElem = document.createElement("div");
  authorElem.className = "author";
  authorElem.innerHTML = "by " + username;
  articleNum.appendChild(authorElem);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//First reddit article
const url = "https://www.reddit.com/r/rarepuppers.json";


const request1 = (url, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

request1(url, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj.data.children[15].data.title);
  console.log("articleAuthor: ", myObj.data.children[15].data.author);

  //Put info into html file
  document.getElementById("article1").innerHTML = myObj.data.children[15].data.title;

  authorInfo(1, myObj.data.children[15].data.author);

})



//Second reddit article
const request2 = (url, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

request2(url, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj.data.children[16].data.title);
  console.log("articleAuthor: ", myObj.data.children[16].data.author);

  //Put info into html file
  document.getElementById("article2").innerHTML = myObj.data.children[16].data.title;

  authorInfo(2, myObj.data.children[16].data.author);

})



//Third reddit article
const request3 = (url, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

request3(url, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj.data.children[18].data.title);
  console.log("articleAuthor: ", myObj.data.children[18].data.author);

  //Put info into html file
  document.getElementById("article3").innerHTML = myObj.data.children[18].data.title;

  authorInfo(3, myObj.data.children[18].data.author);

})

//Fourth reddit article
const request4 = (url, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

request4(url, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj.data.children[20].data.title);
  console.log("articleAuthor: ", myObj.data.children[20].data.author);

  //Put info into html file
  document.getElementById("article4").innerHTML = myObj.data.children[20].data.title;

  authorInfo(4, myObj.data.children[20].data.author);

})