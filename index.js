const morsecodeObj = {
	A: '.-',
	B: '-...',
	C: '-.-.',
	D: '-..',
	E: '.',
	F: '..-.',
	G: '--.',
	H: '....',
	I: '..',
	J: '.---',
	K: '-.-',
	L: '.-..',
	M: '--',
	N: '-.',
	O: '---',
	P: '.--.',
	Q: '--.-',
	R: '.-.',
	S: '...',
	T: '-',
	U: '..-',
	V: '...-',
	W: '.--',
	X: '-..-',
	Y: '-.--',
	Z: '--..',
	1: '.----',
	2: '..---',
	3: '...--',
	4: '....-',
	5: '.....',
	6: '-....',
	7: '--...',
	8: '---..',
	9: '----.',
	0: '-----',
};

const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('.output');

const convertToMorse = () => {
	const arrayOfLetters = input.value.split('').map((char) => char.toUpperCase());
	const convertedToMorse = arrayOfLetters
		.map((char) => {
			if (morsecodeObj[char]) {
				return morsecodeObj[char];
			} else if (char === ' ') {
				return '/';
			} else return char;
		})
		.join(' ');
	return convertedToMorse;
};

const convertToWords = () => {
	const arrayOfMorse = input.value.split('/');
	return arrayOfMorse
		.map((string) => {
			return string
				.split(' ')
				.map((char) => {
					if (Object.values(morsecodeObj).includes(char)) {
						return Object.keys(morsecodeObj).find((key) => morsecodeObj[key] === char);
					} else return char;
				})
				.join('');
		})
		.join(' ');
};

const handleSubmit = (e) => {
	e.preventDefault();
	if (input.value.match(/[a-z0-9]/gi)) {
		output.innerText = convertToMorse();
	} else {
		output.innerText = convertToWords();
	}
};

form.addEventListener('submit', handleSubmit);
