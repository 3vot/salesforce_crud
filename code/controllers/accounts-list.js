// Declare Project and NPM Modules
var account = require("../models/account")
var accountItemTemplate = require("../views/account-item")
var $ = require("jqueryify")

// Declare controllers Private Properties
var el = null;

// We'll call the Initialize Function when we want to use this controller
function initialize(options){
  el = options.el
  // Code that get's executed when Controller is instantiated
  // We'll bind _render function to the Account Refresh Event, this event is called when data is loaded into the Model
  Account.bind("refresh", _render )

  el.delegate(".btn_delete", "click", _onDelete)
  el.delegate(".btn_edit", "click", _onEdit)
  el.delegate(".txt_name", "change", _onChange)
}

// This function get's called when Accounts are ready to be used, so we'll iterate over each account and add it to the DOM
function _render(){
  var accounts = Account.all();
  var tempEl = ""
  for(index in accounts){
    var account = accounts[index];
    tempEl += accountItemTemplate(account);
  }
  el.html( tempEl );
}

// Delete Button Handler, here we show the UX Pattern where Actions are shown to user instantly; Any unexpected event, is handled. 
function _onDelete(e){
  var account = __getAccountEvent(e)
  account.item.toggle("fast", function(){ account.item.remove() })
  
  function fail(err){
    account = Account.create(account, {ajax: false});
    el.prepend( accountItemTemplate(account) )
    console.error(err)
    alert("Error deleting Account" + account.Name);
  }

  account.destroy( { fail: fail } )
}

function _onEdit(e){
  var account = __getAccountEvent(e)
  account.item.addClass("editing")
}

function _onChange(e){
  var account = __getAccountEvent(e)
  account.item.removeClass("editing")
  account.Name = account.currentItem.val()
  account.save()
  account.item.find(".btn_edit").html( account.Name )  
  
}

function __getAccountEvent(e){
  var target = $(e.target)
  var id = target.data("id")
  var account = Account.find(id)
  account.currentItem = target
  account.item = target.parents(".account-item")
  return account;
}


module.exports = {
  initialize: initialize
}

// PRO TIP: You can expose a private property or function by exporting it for example module.exports = { render: render,  el: el }