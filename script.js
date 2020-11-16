window.onload = () => {
	setInterval(() => tick(), 10);

	// var url =
	// 	"https://cdn.sndup.net/7bn4/ticktock.mp3?token=tk2jt6a1yLoC5dvYV5FBLyo05byX4L_W1uMoxARRyoc&expires=1605560466";
	// window.AudioContext = window.AudioContext || window.webkitAudioContext;
	// var context = new AudioContext();
	// var source = context.createBufferSource();
	// source.connect(context.destination);
	// var request = new XMLHttpRequest();
	// request.open("GET", url, true);
	// request.responseType = "arraybuffer";
	// request.onload = function () {
	// 	context.decodeAudioData(
	// 		request.response,
	// 		function (response) {
	// 			source.buffer = response;
	// 			source.start(0);
	// 			source.loop = true;
	// 		},
	// 		function () {
	// 			console.error("The request failed.");
	// 		}
	// 	);
	// };
	// request.send();
};

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

	document.title = format(days, hours, minutes, seconds);
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
