//This is the Main Controller, it's just the main entry function that gets called when the App Starts

function MainController(){
  var $ = require("jqueryify")
  _3vot.el = $(_3vot.el)
  
  // Define our models to make initial data requests
  var Account = require("./models/account")
  
  // Define the Controllers this app is going to use
  var AccountListController = require("./controllers/accounts-list")

  // Define the DOM Elements to attach the Controllers, here for example the <UL> item. 
  // One and only one Controller should take control of this DOM Element
  var account_list_el = _3vot.el.find('.accounts-list')

  // Initialize Controllers, here we are using the options pattern but you are free to define controllers as you wish.
  // Make sure to pass the element to the controller
  AccountListController.initialize( { el: account_list_el } )

  // Make initial data requests. 3vot-model will include improved queries soon
  Account.query('select id,name from Account order by CreatedDate desc');

}

module.exports = MainController