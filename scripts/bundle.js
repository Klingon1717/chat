(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	var mess = $('#message');
	var mb = $('#message-board');
	var enter = $('#enter');
	var chat = $('#chat-box');

	$.get('http://tiyfe.herokuapp.com/collections/textteleportation', function (response) {
		mb.html(' ');
		response.forEach(function (response, index) {
			chat.append('<p>' + response.mess + '</p>');
		});
	}, 'json');

	enter.click(function (e) {
		e.preventDefault();
		var newMess = mess.val();
		$.post('http://tiyfe.herokuapp.com/collections/textteleportation', {
			mess: newMess
		}, function (response) {
			chat.prepend('<p>' + response.mess + '</p>');
		}, 'json');
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map