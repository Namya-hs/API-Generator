  var getUrl = document.getElementById("url");
  //var getMethod = document.getElementById("method");
  var methodType = document.getElementsByClassName("methodType")[0];
 var MainBody = document.getElementsByClassName("mainbody")[0];
 var reqBody = document.getElementsByClassName('req-body')[0];
var resBody = document.getElementsByClassName('res-body')[0];
 var data = localStorage.getItem("ApiData")
 var region = document.getElementById("region");
 var reqBodyContent=document.getElementsByClassName("reqBodyContent")[0];
 var resBodyContent = document.getElementsByClassName("resBodyContent")[0];
 if(data != null) {
    var jsonData = JSON.parse(data);
    methodType.innerHTML = `${(jsonData.method)}`
    getUrl.innerHTML = `<h5 >${jsonData.url}</h5>`;
    region.innerText = "Region : "  + jsonData.Region
    if(jsonData.method == "GET"){
        methodType.classList.add("btn","btn-primary")
        MainBody.classList.add("alert","alert-primary")
    }
    else if(jsonData.method == "POST"){
        methodType.classList.add("btn","btn-success")
        MainBody.classList.add("alert","alert-success")
    }
    else if(jsonData.method == "PUT" || jsonData.method == "PATCH"){
        methodType.classList.add("btn","btn-warning")
        MainBody.classList.add("alert","alert-warning")
    }
    else {
        methodType.classList.add("btn","btn-danger")
        MainBody.classList.add("alert","alert-danger")
    }





    //requestbody
    if(jsonData['req-body']==true)
    {
        reqBody.style.display = "block";
        reqBodyContent.innerText = jsonData['requestBody']
    }

    //responsebody
    if(jsonData['res-body']==true)
    {
        resBody.style.display = "block";
        resBodyContent.innerText = jsonData['reposnseBody']
    }
 }

