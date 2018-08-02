console.log("sanity check");
const url = "https://www.reddit.com/r/AnimalCollective/comments/41ilyd/funny_animals_compilation_funny_and_cute_animal.json";


const request = (url, callback) => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

request(url, res => {
  const myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);
})

// //Invoke request function
// request("http://www.reddit.com/r/javascript.json");