var fn = (function() {
	var string = '123',

	concatString = function(s) {
		return string + s;
	};

	return concatString;
})();

var string = fn('456');

alert(string);