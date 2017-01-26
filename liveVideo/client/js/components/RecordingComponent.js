if (window.FC === undefined) {window.FC = {};}


(function() {
  'use strict';

  navigator.getUserMedia =
  navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia ||
  null;

  class RecordingComponent extends React.Component {

    clickSupport(){
      console.log('clicked support');
      if(navigator.getUserMedia === null){
        alert('Sorry! This will not work on your browser.');
        console.log('no support');
      }
      else{
        video: true;
        audio: true;
        console.log('has support');
      }
    };

    clickRec(){
      console.log ('clicked record');
      navigator.getUserMedia(clickSupport, startRecording, error);
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
