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


//showing the parameters Headers
if(parseInt(jsonData["headers"][0].header)>0){
    var headerName = []
    var headerType = []
    //it means header exists
    Array.from(jsonData["headers"]).forEach((item,index)=>{
    if(index!=0)
        {
            const obj = jsonData["headers"][index];
            if(index%2==0)
                {
                    headerType.push(Object.values(obj)[0])
                }else{
                    headerName.push(Object.values(obj)[0])
                }
        }
    })
var className;
  //showing total headers
  document.getElementsByClassName("totalHeaders")[0].innerText = "Total Headers " + jsonData["headers"][0].header;
  //now showing the header name with type
//   we can take the reference of array headertype or headeName coz both are having same length
headerName.forEach((item, index)=>{
    if(item=="")
        item= "Name Not Provided"
    if(headerType[index]=="string")
        className = "info"
    else if(headerType[index]== "int")
        className ="secondary"
    else if(headerType[index]== "bool")
        className = "success"
    else
        className = "danger"

 
    document.getElementsByClassName("insertHeaderinfo")[0].innerHTML += `
    <div class="row mt-2">
    <div class="col-sm-6">
        <p><b> Header-${index+1} -- ${item} </b></p>
    </div>
    <div class="col-sm-6">
        <button class="btn btn-${className}" style="height:40px; width:100px;">${headerType[index]}</button>
    </div>
 </div>
    `;
})
};

//showing the Queries
if(parseInt(jsonData["queries"][0].query)>0){
    var QueryName = []
    var QueryType = []
    //it means header exists
    Array.from(jsonData["queries"]).forEach((item,index)=>{
    if(index!=0)
        {
            const obj = jsonData["queries"][index];
            if(index%2==0)
                {
                    QueryType.push(Object.values(obj)[0])
                }else{
                    QueryName.push(Object.values(obj)[0])
                }
        }
    })
var className;
  //showing total headers
  document.getElementsByClassName("totalQuery")[0].innerText = "Total Queries " + jsonData["queries"][0].query;
  //now showing the header name with type
//   we can take the reference of array querytype or queryName coz both are having same length
QueryName.forEach((item, index)=>{
    if(item=="")
        item= "Name Not Provided"
    if(QueryType[index]=="string")
        className = "info"
    else if(QueryType[index]== "int")
        className ="secondary"
    else if(QueryType[index]== "bool")
        className = "success"
    else
        className = "danger"

 
    document.getElementsByClassName("insertQueryinfo")[0].innerHTML += `
    <div class="row mt-2">
    <div class="col-sm-6">
        <p><b> Query-${index+1} -- ${item} </b></p>
    </div>
    <div class="col-sm-6">
        <button class="btn btn-${className}" style="height:40px; width:100px;">${QueryType[index]}</p>
    </div>
 </div>
    `;
})
};

//showing Routes
if(parseInt(jsonData["routes"][0].route)>0){
    var RouteName = []
    var RouteType = []
    //it means header exists
    Array.from(jsonData["routes"]).forEach((item,index)=>{
    if(index!=0)
        {
            const obj = jsonData["routes"][index];
            if(index%2==0)
                {
                    RouteType.push(Object.values(obj)[0])
                }else{
                    RouteName.push(Object.values(obj)[0])
                }
        }
    })
var className;
  //showing total headers
  document.getElementsByClassName("totalRoute")[0].innerText = "Total Routes " + jsonData["routes"][0].route;
  //now showing the header name with type
//   we can take the reference of array querytype or queryName coz both are having same length
RouteName.forEach((item, index)=>{
    if(item=="")
        item= "Name Not Provided"
    if(RouteType[index]=="string")
        className = "info"
    else if(RouteType[index]== "int")
        className ="secondary"
    else if(RouteType[index]== "bool")
        className = "success"
    else
        className = "danger"

 
    document.getElementsByClassName("insertRouteinfo")[0].innerHTML += `
    <div class="row mt-2">
    <div class="col-sm-6">
        <p><b> Route-${index+1} -- ${item} </b></p>
    </div>
    <div class="col-sm-6">
        <button class="btn btn-${className}" style="height:40px; width:100px;">${RouteType[index]}</p>
    </div>
 </div>
    `;
})
};


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

