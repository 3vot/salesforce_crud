var _3vot_loader = require("3vot");
var fs = require("fs");

//1: Define the Controller to load ( Main Function ) when Device type is Desktop
var app = require("../code/index.js")

//2: Define the Template to load when Device type is Desktop
var layout = fs.readFileSync("./apps/salesforce_crud/templates/layout.html");

// [ READ ONLY: Loads the Template into the Page in different enviroments such as 3VOT, External Deployment, Salesforce, etc] 
if(_3vot.el){ _3vot.el.innerHTML = layout; }
else{ document.body.innerHTML = layout }

// [ ADVANCED: Read about other options in the docs. ( Login oAuth Providers, Api Tokens, etc ) ]
_3vot_loader.init( {
  package: window._3vot.package,
  app: app
});




