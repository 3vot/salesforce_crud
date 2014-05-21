var package = require("../package.json")

window = window || { location: { hostname: "3vot.com", protocol: "https" } };
var _3vot = window._3vot = window._3vot || {};
_3vot.el = document.getElementById('_3vot_salesforce_crud');
_3vot.device = "";
_3vot.package = package;
_3vot.user_name = "clay";
_3vot.unique_query_string = "unique_domain=" + window.location.protocol + window.location.hostname;


var entries = package.threevot.entries || package.threevot.platforms;
var responsiveLayout = '<div class="responsiveCheckWrapper"> <div data-device="phone" class="visible-xs responsiveCheck"></div> <div data-device="tablet" class="visible-sm responsiveCheck"></div> <div data-device="laptop" class="visible-md responsiveCheck"> </div> <div data-device="desktop" class="visible-lg responsiveCheck"></div></div>';

if(_3vot.el){ _3vot.el.innerHTML = responsiveLayout; }
else{ document.body.innerHTML = responsiveLayout }

var responsiveDivs = document.getElementsByClassName("responsiveCheck");

for(var i=0; i<responsiveDivs.length; i++){ 
  var style = getComputedStyle( responsiveDivs[i] ); 
  if(style.display==="block"){ 
    _3vot.device = responsiveDivs[i].dataset.device; 
  }   
}

var fileToCall = '';
_3vot.domain="//3vot.com";
_3vot.path=_3vot.domain+"/clay/salesforce_crud"

for(entryKey in entries){ 
  var entryValue = entries[entryKey]; 
  if(entryValue.indexOf( _3vot.device ) > -1){ 
    fileToCall = entryKey 
  }
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = _3vot.path + '/' + fileToCall + '.js?' + _3vot.unique_query_string;    

document.getElementsByTagName('head')[0].appendChild(script);
//console.log(fileToCall);
