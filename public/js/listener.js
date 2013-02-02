var $ = $ || require('jquery');

decompose = function() {
	var input = $("#number").val();
	var decomposition = primeFactorsOf( input );
	$("#decomposition").text( input + " = " + decomposition.join(" x ") );
}

var module = module || {};
module.exports = decompose;