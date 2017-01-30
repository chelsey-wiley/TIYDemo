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


    theRecording(stream){
    //turn this into an if else statement with text content and toggle?
      console.log('startRecording function');
      this.getit(stream);
      var recordedBlobs = [];
      var videoStream = stream;
      var mediaRecorder = new MediaRecorder(stream);
      console.log('this:', this)
      this.mediaRecorder = mediaRecorder;

      if (this.mediaRecorder.state !== 'recording'){
        console.log('Created MediaRecorder', mediaRecorder);
        this.mediaRecorder.start();
        console.log('MediaRecorder state:', this.mediaRecorder.state);
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

   getit(stream){
     var videoStream = stream;
     video.src = createSrc(stream);
     video.play();
    }

    clickRec(){
      navigator.getUserMedia(constraints, (stream)=>{this.theRecording(stream)}, this.error);
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
      this.mediaRecorder.stop();
      console.log("recorder stopped");
      console.log('mediaRecorder state:', this.mediaRecorder.state);
    };




    render(){
      var videoStream = null;
      return (
        <div className="recorder-container">
          <h1>Recorder</h1>

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
