  var getUrl = document.getElementById("url");
  var getMethod = document.getElementById("method");
 
 var data = localStorage.getItem("ApiData")
 if(data != null) {
    var jsonData = JSON.parse(data);
    getMethod.innerHTML = `<h4>${jsonData.method} </h4>`
    getUrl.innerHTML = `<h4>${jsonData.url}</h4>`;
 }