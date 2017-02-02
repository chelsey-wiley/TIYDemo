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

   getStream(stream){
     var videoStream = stream;
     video.src = createSrc(stream);
     video.play();
   };

    clickRec(){
      navigator.getUserMedia(constraints, (stream)=>{this.theRecording(stream)}, this.error);
      console.log ('clicked record');
    };

    theRecording(stream){
      console.log('startRecording function');
      this.getStream(stream);
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

    clickPlay(){
      console.log('clicked play');
      video.src = window.URL.createObjectURL(this.superBlob);
    };

    clickDownload(){
      console.log('clicked download');

      var url = window.URL.createObjectURL(this.superBlob);
      var a = document.createElement('a');
      // a.style.display = 'none';
      a.href = url;
      a.download = 'SignLanguageVideo.webm';
      document.body.appendChild(a);
      a.click();
    };



    render(){
      var videoStream = null;
      return ( <div className="page">
        <MR.HeaderComponent/>
        <div className="container">
        <h1>Sign Language Recording</h1>
        <p>This will have no audio</p>
          <div className="recorder-container">
            <video id="video" controls autoPlay></video>
            <div className="video-buttons">
              <button id="supported" onClick={() => {this.clickSupport();}}>Support</button>
              <button id="record" onClick={() => {this.clickRec();}}>Record</button>
              <button id="stop" onClick={() => {this.clickStop();}}>Stop</button>
              <button id="play" onClick={() => {this.clickPlay();}}>Play</button>
              <button id="download" onClick={()=> {this.clickDownload();}}>Download</button>
            </div>
          </div>
          <MR.YoutubeComponent/>
        </div>
      </div>
      )

    };
  }
  MR.SignLanguageRecordingComponent = SignLanguageRecordingComponent;
}());
