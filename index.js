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
	output.innerText = arrayOfLetters
		.map((letter) => {
			return letter === ' ' ? '/' : morsecode[alphanumbers.indexOf(letter)];
		})
		.join(' ');
};

form.addEventListener('submit', handleSubmit);
