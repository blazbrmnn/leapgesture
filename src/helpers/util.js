function isArray (object) {
	if(Object.prototype.toString.call(object) === '[object Array]') {
    return true;
	} else {
		return false;
	}
}

function isObject (object) {
	if(Object.prototype.toString.call(object) === '[object Object]') {
    return true;
	} else {
		return false;
	}
}

function filterUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const camelCaseHashtag = function (value) {
	if (value[0] == '#' && value.indexOf(' ') == -1) {
		result = value;
	} else {
		var words = value.split(/[\, \ \-]/g),
		    word,
		    result = "";

		for (var i = 0; i < words.length; i++) {

			if (words[i].toUpperCase() === words[i] || 
			    (words.length === 1 
			     && value.charAt(0) === value.charAt(0).toUpperCase())) {

				word = words[i].replace(/[\-\']/g, "");
			} else {
				word = words[i].toLowerCase().replace(/[\-\']/g, "");
				word = word.charAt(0).toUpperCase() + word.substring(1, word.length);
			}

			result = result+word;
		}
	}

	return result
}

function sortTags(a, b) {
	if (a.tag[0] != '#' || b.tag[0] != '#') {
		if (a.tag[0] == '#' && b.tag[0] !== '#')
			return 1;
		if (b.tag[0] == '#' && a.tag[0] !== '#')
			return -1;
	}
	if (a.lowercase < b.lowercase)
		return -1
	if (b.lowercase < a.lowercase)
		return 1
	return 0;
}

function formatText (text) {
	let newText = text.split('\n').map(i => {
		if (i.length)
    	return <p>{i}</p>
    else
    	return <p>&nbsp;</p>
	});

	return newText;
}

export { isArray, isObject, filterUnique, camelCaseHashtag, sortTags, formatText }