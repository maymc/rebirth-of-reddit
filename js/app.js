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
const url1 = "https://www.reddit.com/r/rarepuppers/comments/91ggsp/munch_chomp_nom.json";


const request1 = (url1, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url1);
  oReq.send();
};

request1(url1, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj[0].data.children[0].data.title);
  console.log("articleAuthor: ", myObj[0].data.children[0].data.author);

  //Put info into html file
  document.getElementById("article1").innerHTML = myObj[0].data.children[0].data.title;

  authorInfo(1, myObj[0].data.children[0].data.author);

})



//Second reddit article
const url2 = "https://www.reddit.com/r/rarepuppers/comments/90z3pu/nope_dis_mine.json";

const request2 = (url2, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url2);
  oReq.send();
};

request2(url2, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj[0].data.children[0].data.title);
  console.log("articleAuthor: ", myObj[0].data.children[0].data.author);

  //Put info into html file
  document.getElementById("article2").innerHTML = myObj[0].data.children[0].data.title;

  authorInfo(2, myObj[0].data.children[0].data.author);

})



//Third reddit article
const url3 = "https://www.reddit.com/user/AnimalsWorld410/comments/8fue9r/its_bath_time_for_dogs_try_not_to_laugh_animals_hd.json";

const request3 = (url3, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url3);
  oReq.send();
};

request3(url3, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj[0].data.children[0].data.title);
  console.log("articleAuthor: ", myObj[0].data.children[0].data.author);

  //Put info into html file
  document.getElementById("article3").innerHTML = myObj[0].data.children[0].data.title;

  authorInfo(3, myObj[0].data.children[0].data.author);

})

//Fourth reddit article
const url4 = "https://www.reddit.com/r/aww/comments/67vyjn/oh_good_morning_how_may_i_help_you.json";

const request4 = (url4, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url4);
  oReq.send();
};

request3(url4, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
  console.log("articleTitle: ", myObj[0].data.children[0].data.title);
  console.log("articleAuthor: ", myObj[0].data.children[0].data.author);

  //Put info into html file
  document.getElementById("article4").innerHTML = myObj[0].data.children[0].data.title;

  authorInfo(4, myObj[0].data.children[0].data.author);

})