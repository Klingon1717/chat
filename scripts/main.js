'use strict';

$(document).ready(function() {

var mess = $('#message');
var enter = $('#enter');
var chat = $('#chat-box');


$.get (
	'http://tiyfe.herokuapp.com/collections/textteleportation',
	function(response){
		response.forEach(function(response, index){
			chat.append(response.newMess)
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
	chat.prepend(response.mess)
	},
	'json'
	)


});
});
