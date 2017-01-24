navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var recBtn = document.querySelector('button#rec');
var pauseResBtn = document.querySelector('button#pauseRes');
var stopBtn = document.querySelector('button#stop');

var videoElement = document.querySelector('video');
var dataElement = document.querySelector('#data');
var downloadLink = document.querySelector('a#downloadLink');

videoElement.controls = false;
//hides the video controls

var mediaRecorder;
var chunks = [];
var count = 0;


	pauseResBtn.textContent = "Pause";

	mediaRecorder.start(10);

	var url = window.URL || window.webkitURL;
	videoElement.src = url ? url.createObjectURL(stream) : stream;
	videoElement.play();

	mediaRecorder.ondataavailable = function (e) {
		//log('Data available...');
		//console.log(e.data);
		//console.log(e.data.type);
		//console.log(e);
		chunks.push(e.data);
	};

	mediaRecorder.onerror = function (e) {
		log('Error: ' + e);
		console.log('Error: ', e);
	};

	mediaRecorder.onstart = function () {
		log('Started & state = ' + mediaRecorder.state);
	};

	mediaRecorder.onstop = function () {
		log('Stopped  & state = ' + mediaRecorder.state);

		var blob = new Blob(chunks, { type: "video/webm" });
		chunks = [];

		var videoURL = window.URL.createObjectURL(blob);

		downloadLink.href = videoURL;
		videoElement.src = videoURL;
		downloadLink.innerHTML = 'Download video file';

		var rand = Math.floor(Math.random() * 10000000);
		var name = "video_" + rand + ".webm";

		downloadLink.setAttribute("download", name);
		downloadLink.setAttribute("name", name);
	};


function onBtnRecordClicked() {
	if (typeof MediaRecorder === 'undefined' || !navigator.getUserMedia) {
		alert('MediaRecorder not supported on your browser, use Firefox 30 or Chrome 49 instead.');
	} else {
		navigator.getUserMedia(constraints, startRecording);
		recBtn.disabled = true;
		pauseResBtn.disabled = false;
		stopBtn.disabled = false;
	}
}

var rec = document.querySelector('#rec');
var pauseRes = document.querySelector('#pauseRes');

rec.addEventListener('click', onBtnStopClicked(){
	mediaRecorder.stop();
	videoElement.controls = true;

	recBtn.disabled = false;
	pauseResBtn.disabled = true;
	stopBtn.disabled = true;
}

pauseRes.addEventListener('click', onPauseResumeClicked() {
	if (pauseResBtn.textContent === "Pause") {
		console.log("pause");
		pauseResBtn.textContent = "Resume";
		mediaRecorder.pause();
		stopBtn.disabled = true;
	} else {
		console.log("resume");
		pauseResBtn.textContent = "Pause";
		mediaRecorder.resume();
		stopBtn.disabled = false;
	}
	recBtn.disabled = true;
	pauseResBtn.disabled = false;
}
