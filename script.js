var sound = new Howl({
	src: ["ticktock.mp3"],
	autoplay: true,
	loop: true,
	volume: 0.5,
});

sound.play();

const tick = () => {
	let now = new Date().getTime();
	let mementoMori = new Date("Nov 14, 2020 08:00:00 UTC");

	let distance = now - mementoMori.getTime();

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("timer").innerHTML = format(
		days,
		hours,
		minutes,
		seconds
	);

	document.title = format(days, hours, minutes, seconds) + " - Memento mori.";
};

const format = (days, hours, minutes, seconds) => {
	return (
		(days < 100 ? (days < 10 ? "00" + days : "0" + days) : days) +
		":" +
		(hours < 10 ? "0" + hours : hours) +
		":" +
		(minutes < 10 ? "0" + minutes : minutes) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds)
	);
};

tick();

setInterval(() => tick(), 1000);
