var $ = $ || require('jquery');

decompose = function() {
	$("#decomposition").text( primeFactorsOf( $("#number").val() ).join(" x ") );
}

var module = module || {};
module.exports = decompose;