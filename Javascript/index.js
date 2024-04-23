var header = document.getElementsByClassName("headers")[0]
var params = document.getElementsByClassName("params")[0]
var route = document.getElementsByClassName("route")[0]
var proceed = document.getElementsByClassName("proceed")[0]
var checkbox = document.getElementById("body");
var request = document.getElementById("requestBody");
var checkboxResp = document.getElementById("respbody");
var response = document.getElementById("responsebody");


function CheckBoxx(){
  if(checkbox.checked == true){
    request.style.display="block"
  }
  else {
    request.style.display='none'
  }
}

function CheckBoxResponse() {
  if(checkboxResp.checked == true){
    response.style.display="block"
  }
  else {
    response.style.display='none'
  }
}

proceed.addEventListener("click",()=>{
    console.log("check log");
    let headerValue = header.value;
    let paramsValue = params.value;
    let routeValue = route.value;
    document.getElementsByClassName("headerbox")[0].innerHTML=""
    document.getElementsByClassName("querybox")[0].innerHTML=""
    document.getElementsByClassName("routebox")[0].innerHTML=""
    console.log(headerValue,paramsValue,routeValue);
    for(let i =0;i<headerValue;i++){
        document.getElementsByClassName("headerbox")[0].innerHTML+=`
        <div class="row mt-2">
          <div class="col-sm-6">
            <input type="text" class="form-control" placeholder="Header value">

          </div>
          <div class="col-sm-6">
            <select name="VarType" id="" class="form-control">
              <option value="string">string</option>
              <option value="int">integer</option>
              <option value="dateTime">dateTime</option>
              <option value="bool">boolean</option>
            </select>
          </div>
        </div>`
    }



    for(let i =0;i<paramsValue;i++){
        document.getElementsByClassName("querybox")[0].innerHTML+=`
        <div class="row mt-2">
          <div class="col-sm-6">
            <input type="text" class="form-control" placeholder="Query value">

          </div>
          <div class="col-sm-6">
            <select name="VarType" id="" class="form-control">
              <option value="string">string</option>
              <option value="int">integer</option>
              <option value="dateTime">dateTime</option>
              <option value="bool">boolean</option>
            </select>
          </div>
        </div>`
    }


    for(let i =0;i<routeValue;i++){
        document.getElementsByClassName("routebox")[0].innerHTML+=`
        <div class="row mt-2">
          <div class="col-sm-6">
            <input type="text" class="form-control" placeholder="Route value">

          </div>
          <div class="col-sm-6">
            <select name="VarType" id="" class="form-control">
              <option value="string">string</option>
              <option value="int">integer</option>
              <option value="dateTime">dateTime</option>
              <option value="bool">boolean</option>
            </select>
          </div>
        </div>`
    }
})