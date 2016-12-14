var start = null;
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setTime() {
	const date = new Date();
	const refDate = new Date(date.getFullYear(),
							 date.getMonth(),
							 date.getDate(),
							 0, 0, 0);
	const milliseconds = date.getTime() - refDate.getTime();

	const hours = milliseconds/(1000*60*60)%12;
	const minutes = (hours*60);
	const seconds = (minutes*60);

	setHours(hours, minutes, seconds);
	setMinutes(hours, minutes, seconds);
	setSeconds(hours, minutes, seconds);
}

function setHours(hours, minutes, seconds) {
	const hourDegrees = (hours/12)*360 + 90;

	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function setMinutes(hours, minutes, seconds) {
	const minuteDegrees = (minutes/60)*360 + 90;

	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}

function setSeconds(hours, minutes, seconds) {
	let secondDegrees = (seconds/60)*360 + 90;

	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setTime, 1000/60);

setTime();

