(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
	"INSTRUCTIONS": {
		"name": "READ ONLY: The name of the app, also url slug in 3vot.com/YOUR PROFILE/name",
		"description": "The ~140 chars description that appears on your 3VOT Web Page with Apps",
		"displayName": "The Name that appears on the 3VOT Platform Profile, it can have any character",
		"size": "Apps have 3 sizes (small, regular and large); They have different traffic allowances and prices",
		"platforms": "The file that will be dynamically loaded once we know the screen size. Located in the /start folder",
		"extensions": "Compile Option: require files with using it's extension",
		"transforms": "Compile Option: The NPM Browserify Transforms applied when compiling App",
		"external": "Performance Option: Allows to extract the common depedencies between apps ie: jquery, cache and speed all apps",
		"gitDependencies": "Bower and Github based Libraries that can be required within an app. ie: Angular",
		"depedencies": "NPM Browser Compatible Dependencies that can be required within an app. ie: 3vot-model"
	},
	"name": "salesforce_crud",
	"description": "Third in the Series of Salesforce Apps, this one creates and updates accounts!",
	"version": "0.0.7",
	"threevot": {
		"version": "7",
		"displayName": "Salesforce CRUD",
		"size": "small",
		"platforms": {
			"desktop": [
				"desktop",
				"laptop"
			],
			"phone": [
				"phone"
			],
			"tablet": [
				"tablet"
			]
		},
		"extensions": [
			".coffee",
			".eco",
			".html"
		],
		"transforms": [
			"browserify-eco",
			"coffeeify",
			"brfs",
			"uglifyify"
		],
		"external": {},
		"gitDependencies": {}
	},
	"dependencies": {
		"3vot": "0.0.6",
		"3vot-model": "0.1.0",
		"jqueryify": "~2.0.3"
	}
}
},{}],2:[function(require,module,exports){
var package=require("../package.json");window=window||{location:{hostname:"3vot.com",protocol:"https"}};var _3vot=window._3vot=window._3vot||{};_3vot.el=document.getElementById("_3vot_salesforce_crud"),_3vot.device="",_3vot.package=package,_3vot.user_name="clay",_3vot.unique_query_string="unique_domain="+window.location.protocol+window.location.hostname;var entries=package.threevot.entries||package.threevot.platforms,responsiveLayout='<div class="responsiveCheckWrapper"> <div data-device="phone" class="visible-xs responsiveCheck"></div> <div data-device="tablet" class="visible-sm responsiveCheck"></div> <div data-device="laptop" class="visible-md responsiveCheck"> </div> <div data-device="desktop" class="visible-lg responsiveCheck"></div></div>';_3vot.el?_3vot.el.innerHTML=responsiveLayout:document.body.innerHTML=responsiveLayout;for(var responsiveDivs=document.getElementsByClassName("responsiveCheck"),i=0;i<responsiveDivs.length;i++){var style=getComputedStyle(responsiveDivs[i]);"block"===style.display&&(_3vot.device=responsiveDivs[i].dataset.device)}var fileToCall="";_3vot.domain="//daulau2emlz5i.cloudfront.net",_3vot.path=_3vot.domain+"/clay/salesforce_crud_7";for(entryKey in entries){var entryValue=entries[entryKey];entryValue.indexOf(_3vot.device)>-1&&(fileToCall=entryKey)}var script=document.createElement("script");script.type="text/javascript",script.src=_3vot.path+"/"+fileToCall+".js?"+_3vot.unique_query_string,document.getElementsByTagName("head")[0].appendChild(script);
},{"../package.json":1}]},{},[2])