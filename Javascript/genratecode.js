
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//giving mw json code
var config = document.getElementsByClassName("Configuration")[0];
var data = JSON.parse(localStorage.getItem("ApiData"));
var cacheSeconds;
if (data.method == "GET")
  cacheSeconds = 60;
else
  cacheSeconds = 0;
config.innerHTML = `
{
  "DownstreamScheme": "https",
  "DownstreamPathTemplate": "${data.url}",
  "UpstreamPathTemplate": "${data.url}",
  "DownstreamHostAndPorts": [
    {
      "Host": "localhost",
      "Port": 0
    }
  ],
  "UpstreamHttpMethod": [
    "${data.method}"
  ],
  "FileCacheOptions": {
    "TtlSeconds": ${cacheSeconds},
    "Region": "${data.Region}"
  },
  "RateLimitOptions": {
    "EnableRateLimiting": false,
    "Period": "1s",
    "PeriodTimespan": 5,
    "Limit": 3
  },
  "AuthenticationOptions": {
    "AuthenticationProviderKey": "Bearer"
  }
},`

let rbody = document.getElementsByClassName("requestBody")[0]
let res = document.getElementsByClassName("responseBody")[0]
// to fetch request body for model creation
if (data["req-body"] == true) {
  rbody.style.display = "block";
  var requestBody = data.requestBody;
  let reqModel = document.getElementsByClassName("reqModel")[0]
  reqModel.innerHTML = requestBody;
}

console.log(data["res-body"])
if (data["res-body"] == true) {
  res.style.display = "block";
  var responseBody = data.responseBody;
  let resModel = document.getElementsByClassName("resModel")[0]
  resModel.innerHTML = responseBody;
  console.log(responseBody, "responseeeeeeeee");
}

//controller basic code structure
var controller = document.getElementsByClassName("controller")[0];
var m = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

var regionConfig = () => {
  if (data.Region == "ASE") {
    return "Service"
  }
  else if (data.Region == "FREE") {
    return "Basic"
  }
  else if (data.Region == "VHC") {
    return "VehicleChecklist"
  }
  else if (data.Region == "OAB") {
    return "OAB"
  }
  else {
    return "ASA"
  }
}

var valueRegion = () => {
  if (data.Region == "ASE") {
    return "ASE"
  }
  else if (data.Region == "FREE") {
    return "ABA"
  }
  else if (data.Region == "VHC") {
    return "AVC"
  }
  else if (data.Region == "OAB") {
    return "AOB"
  }
  else {
    return "ASA"
  }
}

controller.innerHTML = `
[Http${m(data.method)}] 
[Route("${data.url}")]
[ValidateModelState]
[SwaggerOperation("What does this api do?")]
[SwaggerResponse(statusCode: 201, description: "Status message")]
[SwaggerResponse(statusCode: 400, type: typeof(Error), description: "A client error")]
[SwaggerResponse(statusCode: 500, type: typeof(Error), description: "A server and business error")]
public ObjectResult MethodName([FromHeader][Required] string authorization,
 [FromRoute][Required] string companyName,
 [FromQuery][Required] string locationId,
 [FromBody] Model obj,
 [FromHeader(Name = BasicConfiguration.AcceptLanguage)] string acceptLanguage)
{
    var bodyParameters = new Dictionary<string, string> {
            {BasicConfiguration.AcceptLanguage, acceptLanguage},
            {BasicConfiguration.LocationId, locationId },
            {string.Empty, JsonConvert.SerializeObject(VehiclePurchaseDocument) }
        };
    var response = ProcessMessage<PurchaseOrderResponse>(bodyParameters, companyName,
      ${regionConfig(data.Region)}Configuration.PurchaseDocumentSoapAction, ${regionConfig(data.Region)}Configuration.ModuleCode);
    return new ObjectResult(response.modelName) { StatusCode = (int)HttpStatusCode.message };
}`

//soapAction
var soapAction = document.getElementsByClassName("soapAction")[0];
soapAction.innerText = `public const string SoapActionName = "SoapActionName";`

//application settings file
var applicationSetting = document.getElementsByClassName("appln")[0];
applicationSetting.innerText = `ValidateKey(${regionConfig(data.Region)}Configuration.SoapActionName);`

var appSetting = document.getElementsByClassName("appSetting")[0];
appSetting.innerHTML = `
{
  "Key": "SoapActionName",
  "Value": "urn:microsoft-dynamics-schemas/codeunit/${valueRegion(data.Region)}:MethodName"
}`