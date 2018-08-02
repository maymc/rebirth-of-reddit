console.log("sanity check");
const url = "https://www.reddit.com/r/aww/comments/90teub/a_bucket_full_of_love.json";


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