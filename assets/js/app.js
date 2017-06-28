'use strict'
$.getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/', function (data) {
	$.each(data, function (index,elemento) {
		$('table').append('<tr><td>' + elemento.name + '</td><td><input type="checkbox"></td></tr>');
	})
});