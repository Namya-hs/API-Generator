
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
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
var data =JSON.parse( localStorage.getItem("ApiData"));
var cacheSeconds;
if(data.method=="GET")
  cacheSeconds = 60;
else
  cacheSeconds =0;
config.innerText = `{
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