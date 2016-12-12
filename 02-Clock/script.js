const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setTime() {
	const date = new Date();

	setHours(date);
	setMinutes(date);
	setSeconds(date);
}

function setHours(date) {
	const hours = date.getHours()%12;
	const hourDegrees = (hours/12)*360 + 90;

	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function setMinutes(date) {
	const minutes = date.getMinutes();
	const minuteDegrees = (minutes/60)*360 + 90;

	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}

function setSeconds(date) {
	const seconds = date.getSeconds();
	const secondDegrees = (seconds/60)*360 + 90;

	if(seconds === 60) {
		secondHand.style.transition =  'none';
	}
	
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	if(seconds === 60) {
		secondHand.style.transition =  'all 1s';
	}
}

setInterval(setTime, 1000);

setTime();