if (window.FC === undefined) {window.FC = {};}

(function() {
  'use strict';

  class RecordingComponent extends React.Component {


    clickRec(){
      console.log ('clicked record');
    }

    clickPauseRes(){
      console.log ('clicked Pause/Res');
    }
    clickStop(){
      console.log ('clicked stop');
    }

    render(){
      var videoStream = null;



      return (
        <div className="recorder-container">
          <h1>Recorder</h1>
          <video id="video" controls autoPlay></video>
          <button id="record" onClick={() => {this.clickRec();}}>Record</button>
          <button id="pauseRes" onClick={() => {this.clickPauseRes();}}>Pause</button>
          <button id="stop" onClick={() => {this.clickStop();}}>Stop</button>

        </div>
      )

    }
  }
  FC.RecordingComponent = RecordingComponent;
}());
