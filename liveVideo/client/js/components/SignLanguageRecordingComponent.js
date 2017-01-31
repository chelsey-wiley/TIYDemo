if (window.MR === undefined) {window.MR = {};}

(function() {
  'use strict';

  var constraints = {
    "video": true,
    "audio": false
  };


  navigator.getUserMedia =
  navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia ||
  null;


  var mediaSource = new MediaSource();
  var createSrc = window.URL ? window.URL.createObjectURL : function(stream) {return stream;};

  class SignLanguageRecordingComponent extends React.Component {


    theRecording(stream){
    //turn this into an if else statement with text content and toggle?
      console.log('startRecording function');
      this.getit(stream);
      var mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder = mediaRecorder;

      if (this.mediaRecorder.state !== 'recording'){
        console.log('Created MediaRecorder', mediaRecorder);
        this.mediaRecorder.start();
        console.log('MediaRecorder state:', this.mediaRecorder.state);
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
      }
    };

    handleDataAvailable(stream) {

      if(this.recordedBlobs === undefined){
        this.recordedBlobs = [];
      };
      if (stream.data && stream.data.size > 0) {
        this.recordedBlobs.push(stream.data);
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

    clickPlay(){
      console.log('clicked play');
      video.src = window.URL.createObjectURL(this.superBlob);
    };

    clickStop(){
      console.log ('clicked stop');
      this.mediaRecorder.stop();
      console.log("recorder stopped");
      console.log('mediaRecorder state:', this.mediaRecorder.state);
      console.log("the blobs", this.mediaRecorder.recordedBlobs)
      var superBlob = new Blob(this.mediaRecorder.recordedBlobs, {type: 'video/webm'});
      this.superBlob = superBlob;
      console.log('superBlob:', this.superBlob)
    };




    render(){
      var videoStream = null;
      return ( <div className="container">
      <header>
        <div><ReactRouter.Link to={'/RecordingComponent'}>Sign Language</ReactRouter.Link></div>
        <div><ReactRouter.Link to={'/EnglishRecordingComponent'}>English</ReactRouter.Link></div>
        <div><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></div>
      </header>
          <div className="recorder-container">
            <h1>Recorder</h1>

            <video id="video" controls autoPlay></video>

            <button id="supported" onClick={() => {this.clickSupport();}}>Support</button>

            <button id="record" onClick={() => {this.clickRec();}}>Record</button>

            <button id="pause" onClick={() => {this.clickPause();}}>Pause</button>

            <button id="resume" onClick={() => {this.clickResume();}}>Resume</button>

            <button id="stop" onClick={() => {this.clickStop();}}>Stop</button>

            <button id="play" onClick={() => {this.clickPlay();}}>Play</button>

            </div>
            <MR.YoutubeComponent/>
        </div>
      )

    };
  }
  MR.SignLanguageRecordingComponent = SignLanguageRecordingComponent;
}());
