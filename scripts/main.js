'use strict';

$(document).ready(function() {

var mess = $('#message');
var mb = $('#message-board');
var enter = $('#enter');
var chat = $('#chat-box');


$.get (
	'http://tiyfe.herokuapp.com/collections/textteleportation',
	function(response){
		mb.html(' ');
		response.forEach(function(response, index){
			chat.append('<div id="message-board"><p>' + response.newMess + '</p></div>')
		})
	},
	'json'
);

enter.click(function(e){
	e.preventDefault();
		var newMess = mess.val();
$.post(
	'http://tiyfe.herokuapp.com/collections/textteleportation',
	{
		mess : newMess
	},
	function(response){
	chat.prepend('<div id="message-board"><p>' + response.mess + '</p></div>')
	},
	'json'
	)


});
});
