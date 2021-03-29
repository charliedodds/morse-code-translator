const alphanumbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const morsecode = [
	'.-',
	'-...',
	'-.-.',
	'-..',
	'.',
	'..-.',
	'--.',
	'....',
	'..',
	'.---',
	'-.-',
	'.-..',
	'--',
	'-.',
	'---',
	'.--.',
	'--.-',
	'.-.',
	'...',
	'-',
	'..-',
	'...-',
	'.--',
	'-..-',
	'-.--',
	'--..',
	'.----',
	'..---',
	'...--',
	'....-',
	'.....',
	'-....',
	'--...',
	'---..',
	'----.',
	'-----',
];

const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('.output');

const handleSubmit = (e) => {
	e.preventDefault();
	const arrayOfLetters = input.value.split('').map((letter) => letter.toUpperCase());
	const convertedToMorse = arrayOfLetters
		.map((letter) => {
			if (alphanumbers.includes(letter)) {
				return morsecode[alphanumbers.indexOf(letter)];
			} else if (letter === ' ') {
				return '/';
			} else return letter;
			return letter === ' ' ? '/' : morsecode[alphanumbers.indexOf(letter)];
		})
		.join(' ');
	output.innerText = convertedToMorse;
};

form.addEventListener('submit', handleSubmit);
