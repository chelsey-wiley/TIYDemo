if (window.FC === undefined) {window.FC = {};}


(function() {
  'use strict';

  var constraints = {
    "video": true,
    "audio": true
  };


  navigator.getUserMedia =
  navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia ||
  null;


  var mediaSource = new MediaSource();
  var createSrc = window.URL ? window.URL.createObjectURL : function(stream) {return stream;};

  class RecordingComponent extends React.Component {


    startRecording(stream){
    //turn this into an if else statement with text content and toggle?
      console.log('startRecording function');
      var recordedBlobs = [];
      var videoStream = stream;
      var mediaRecorder = new MediaRecorder(stream);

      //if else based on state?
      if (mediaRecorder.state === 'recording'){
        console.log('beans');
        mediaRecorder.stop();
        console.log('MediaRecorder stopped', mediaRecorder.state);
      }
      else{
        console.log('Created MediaRecorder', mediaRecorder);
        mediaRecorder.start();
        console.log('MediaRecorder state:', mediaRecorder.state);
      }
    };



    error(){
      console.log('error');
    };

    clickSupport(){
      console.log('clicked support');
      if(navigator.getUserMedia === null){
        alert('Sorry! This will not work on your browser.');
        console.log('no support');
      }
      else{
        console.log('has support');
      }
    };


    clickRec(){
      navigator.getUserMedia(constraints, this.startRecording, this.error);
      console.log ('clicked record');
    };

    clickPause(){
      console.log ('clicked Pause');
      video.pause();
    };

    clickResume(){
      console.log ('clicked resume');
    };

    clickStop(){
      console.log ('clicked stop');
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
    };




    render(){
      var videoStream = null;
      return (
        <div className="recorder-container">
          <h1>Recorder</h1>

          <video id="recordingHere" autoPlay muted></video>

          <video id="video" controls autoPlay></video>

          <button id="supported" onClick={() => {this.clickSupport();}}>Support</button>

          <button id="record" onClick={() => {this.clickRec();}}>Record</button>

          <button id="pause" onClick={() => {this.clickPause();}}>Pause</button>

          <button id="resume" onClick={() => {this.clickResume();}}>Resume</button>

          <button id="stop" onClick={() => {this.clickStop();}}>Stop</button>

        </div>
      )

    };
  }
  FC.RecordingComponent = RecordingComponent;
}());
