// Defer for : https://codepen.io/bzozoo/pen/LYNNQjN?editors=1010

  let wclass = document.querySelector(".weather-left-card__number");
  let data = parseInt(wclass.innerHTML);
  let output = document.querySelector("#output");
  output.innerHTML = data + " C fok van";

  let wclass2 = document.querySelector(".weather-left-card__means");
  let data2 = wclass2.innerHTML;
  let output2 = document.querySelector("#output2");
  output2.innerHTML = data2; 
