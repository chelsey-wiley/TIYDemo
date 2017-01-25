if (window.FC === undefined) {window.FC = {};}

(function() {
  'use strict';

  class RecordingComponent extends React.Component {

    componentDidMount(){
      this.theInput.focus();
    }

    constructor(){
      super();
      this.state ={
        apiResult:{
          items:[]
        }
      }

    var constraints = {"audio": true, "video": {  "mandatory": {  "minWidth": 640,  "maxWidth": 640, "minHeight": 480, "maxHeight": 480 }, "optional": [] } };

    var recBtn = document.querySelector('button#rec');
    var pauseResBtn = document.querySelector('button#pauseRes');
    var stopBtn = document.querySelector('button#stop');

    var videoElement = document.querySelector('video');
    var dataElement = document.querySelector('#data');
    var downloadLink = document.querySelector('a#downloadLink');

    videoElement.controls = false;

    function errorCallback(error){
    	console.log('navigator.getUserMedia error: ', error);
    }



    var mediaRecorder;
    var chunks = [];
    var count = 0;

    function startRecording(stream) {
    	if (typeof MediaRecorder.isTypeSupported == 'function'){
    		if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
    		  var options = {mimeType: 'video/webm;codecs=h264'};
    		} else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
    		  var options = {mimeType: 'video/webm;codecs=vp9'};
    		} else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
    		  var options = {mimeType: 'video/webm;codecs=vp8'};
    		}

    		mediaRecorder = new MediaRecorder(stream, options);
    	}else{

    		mediaRecorder = new MediaRecorder(stream);
    	}

    	pauseResBtn.textContent = "Pause";

    	mediaRecorder.start(10);

    	var url = window.URL || window.webkitURL;
    	videoElement.src = url ? url.createObjectURL(stream) : stream;
    	videoElement.play();

    	mediaRecorder.ondataavailable = function(e) {

    		chunks.push(e.data);
    	};



    	mediaRecorder.onstop = function(){


    		var blob = new Blob(chunks, {type: "video/webm"});
    		chunks = [];

    		var videoURL = window.URL.createObjectURL(blob);

    		downloadLink.href = videoURL;
    		videoElement.src = videoURL;
    		downloadLink.innerHTML = 'Download video file';

    		var rand =  Math.floor((Math.random() * 10000000));
    		var name  = "video_"+rand+".webm" ;

    		downloadLink.setAttribute( "download", name);
    		downloadLink.setAttribute( "name", name);
    	};


    }


    function onBtnRecordClicked (){
    	 if (typeof MediaRecorder === 'undefined' || !navigator.getUserMedia) {
    		alert('MediaRecorder not supported on your browser, use Firefox 30 or Chrome 49 instead.');
    	}else {
    		navigator.getUserMedia(constraints, startRecording, errorCallback);
    		recBtn.disabled = true;
    		pauseResBtn.disabled = false;
    		stopBtn.disabled = false;
    	}
    }

    function onBtnStopClicked(){
    	mediaRecorder.stop();
    	videoElement.controls = true;

    	recBtn.disabled = false;
    	pauseResBtn.disabled = true;
    	stopBtn.disabled = true;
    }

    function onPauseResumeClicked(){
    	if(pauseResBtn.textContent === "Pause"){
    		console.log("pause");
    		pauseResBtn.textContent = "Resume";
    		mediaRecorder.pause();
    		stopBtn.disabled = true;
    	}else{
    		console.log("resume");
    		pauseResBtn.textContent = "Pause";
    		mediaRecorder.resume();
    		stopBtn.disabled = false;
    	}
    	recBtn.disabled = true;
    	pauseResBtn.disabled = false;
    }


    function log(message){
    	dataElement.innerHTML = dataElement.innerHTML+'<br>'+message ;
    }



    // render (){
    //   return <div> Recording Component
    //   </div>
    // }
  }
}
  FC.RecordingComponent = RecordingComponent;
}());
