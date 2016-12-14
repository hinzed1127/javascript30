const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setTime() {
	const date = new Date();

	const hours = date.getHours()%12;
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	setHours(hours, minutes, seconds);
	setMinutes(hours, minutes, seconds);
	setSeconds(hours, minutes, seconds);
}

function setHours(hours, minutes, seconds) {
	const hourDegrees = (hours/12)*360 + (minutes/60)*(360/12) + 90;

	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function setMinutes(hours, minutes, seconds) {
	const minuteDegrees = (minutes/60)*360 + (seconds/60)*(360/60) + 90;

	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}

function setSeconds(hours, minutes, seconds) {
	const secondDegrees = (seconds/60)*360 + 90;

	if(seconds === 0) {
		secondHand.style.transform = 'rotate(360deg)';
		console.log('here');
	} else {
		secondHand.style.transform = `rotate(${secondDegrees}deg)`;
		console.log(seconds);
	}
}

setInterval(setTime, 1000);

setTime();