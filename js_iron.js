function fetchApi() {
  let fetchPromise = fetch("https://valorant-api.com/v1/agents");
  fetchPromise
  .then(function(res) {
      console.log(res)
      return res.json();
  })
}
fetchApi();
setTimeout(function() {
  console.log("timer")
},0)
for (let index = 0; index < 10; index++) {
  console.log("r")
}