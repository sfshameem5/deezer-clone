window.onload = function resize() {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("content");
  var body = document.getElementsByName("body");
  var searchbar = document.getElementById("search-box");
  // Set height of sidebar dynamically
  sidebar.clientHeight = window.innerHeight;
  // Set Left Margin of content dynamically
  content.style.marginLeft = sidebar.clientWidth + "px";
  //   Set search bar's height
  searchbar.style.height = window.innerHeight;
};

// Implementing deezer search function

function search() {
  // var name = document.getElementById("search").innerHTML;
  var name = document.getElementById("search").value;

  

  setTimeout(() => {}, 10000);
  var url = "https://api.deezer.com/search?q='" + name + "'&";
  console.log(url);
  var request = new XMLHttpRequest();
  request.responseType = "json";
  request.open("GET", url, true);
  request.send();
  request.onreadystatechange = function() {
    console.log(request.response);
    document.getElementById("search-box").querySelector("h3").innerHTML = request.response.data[0].title;
  };


  
}

// Implmenenting Results for search

function results() {
  var bar = document.createElement("div");

  // Hide Search Box by default
  var sidebar = document.getElementById("sidebar");
  var search_box = document.getElementById("search-box");
  var search_input = document.getElementById("search");

  // Set widht and height of search box to side bar

  search_box.style.minHeight = sidebar.clientHeight + "px";
  search_box.style.minWidth = sidebar.clientWidth + "px";

  // Update results with input value for input box.

  search_box.querySelector("h3").innerHTML =
    "Search Results for: " + search_input.value;

  if (search_input.value) {
    search_box.style.visibility = "visible";
  } else {
    search_box.style.visibility = "hidden";
  }
}
