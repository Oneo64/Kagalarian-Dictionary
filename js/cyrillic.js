const cyrillic = {
	"ch": "ч",
	"sh": "ш",
	"zh": "ж",
	"ts": "ц",
	"iy": "й",

	"a": "а",
	"b": "б",
	"d": "д",
	"e": "е",
	"f": "ф",
	"g": "г",
	"h": "х",
	"i": "и",
	"k": "к",
	"l": "л",
	"m": "м",
	"n": "н",
	"o": "о",
	"p": "п",
	"r": "р",
	"s": "с",
	"t": "т",
	"u": "ә",
	"v": "в",
	"y": "я",
	"z": "з",
	"ū": "у",
};

function latin_to_cyrillic(text) {
	var new_text = "";

	for (var i = 0; i < text.length; i++) {
		if (i < text.length - 1 && text[i] + text[i + 1] in cyrillic) {
			new_text += cyrillic[text[i] + text[i + 1]];
			i++;
		} else if (text[i] in cyrillic) {
			new_text += cyrillic[text[i]];
		} else {
			new_text += " ";
		}
	}

	return new_text;
}
