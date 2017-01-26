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
  
  var createSrc = window.URL ? window.URL.createObjectURL : function(stream) {return stream;};

  class RecordingComponent extends React.Component {

    startRecording(stream){
      console.log('startRecording');
      var videoStream = stream;
      video.src = createSrc(stream);
      video.play();
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

    clickPauseRes(){
      console.log ('clicked Pause/Res');
    };

    clickStop(){
      console.log ('clicked stop');
    };




    render(){
      var videoStream = null;
      return (
        <div className="recorder-container">
          <h1>Recorder</h1>

          <video id="video" controls autoPlay></video>

          <button id="supported" onClick={() => {this.clickSupport();}}>Support</button>

          <button id="record" onClick={() => {this.clickRec();}}>Record</button>

          <button id="pauseRes" onClick={() => {this.clickPauseRes();}}>Pause</button>

          <button id="stop" onClick={() => {this.clickStop();}}>Stop</button>

        </div>
      )

    };
  }
  FC.RecordingComponent = RecordingComponent;
}());
