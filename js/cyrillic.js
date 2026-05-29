const cyrillic = {
	"ch": "ч",
	"sh": "ш",
	"zh": "ж",
	"ts": "ц",
	"iy": "й",

	"ay": "ай",
	"ey": "ей",
	"oy": "ой",
	"yu": "яу",
	"yi": "яи",

	"eya": "еяа",
	"ayi": "аяй",

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

	"-": "",
};

const cyrillic_ipa = {
	"ч": "t͡ʃ",
	"ш": "ʃ",
	"ж": "ʒ",
	"ц": "t͡s",
	"й": "i",

	"ай": "aiː",
	"ей": "eiː",
	"ой": "oiː",

	"ол": "ol",

	"рл": "ɾ",
	"кх": "χ",

	"а": "ɐ",
	"б": "b",
	"д": "d",
	"е": "e",
	"ф": "f",
	"г": "g",
	"х": "h",
	"и": "ɪ",
	"к": "k",
	"л": "l",
	"м": "m",
	"н": "n",
	"нн": "nː",
	"о": "ɔ",
	"п": "p",
	"р": "r",
	"с": "s",
	"т": "t",
	"ә": "ʌ",
	"в": "v",
	"я": "j",
	"з": "z",
	"у": "ɯ",

	"-": "",
};

function latin_to_cyrillic(text) {
	var new_text = "";

	for (var i = 0; i < text.length; i++) {
		if (i < text.length - 2 && text[i] + text[i + 1] + text[i + 2] in cyrillic) {
			new_text += cyrillic[text[i] + text[i + 1] + text[i + 2]];
			i += 2;
		} else if (i < text.length - 1 && text[i] + text[i + 1] in cyrillic) {
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

function cyrillic_to_ipa(text) {
	var new_text = "";

	for (var i = 0; i < text.length; i++) {
		if (i < text.length - 1 && text[i] + text[i + 1] in cyrillic_ipa) {
			new_text += cyrillic_ipa[text[i] + text[i + 1]];
			i++;
		} else if (text[i] in cyrillic_ipa) {
			new_text += cyrillic_ipa[text[i]];
		} else {
			new_text += " ";
		}
	}

	return new_text;
}

function latin_to_ipa(text) {
	return cyrillic_to_ipa(latin_to_cyrillic(text));
}
