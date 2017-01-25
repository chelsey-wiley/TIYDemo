if (window.FC === undefined) {window.FC = {};}

(function() {
  'use strict';

  class RecordingComponent extends React.Component {

    render(){
      return (
        <div className="recorder-container">
          <h1>Recorder</h1>
          <video controls autoPlay></video>
          <button id="pauseRes">Pause</button>
          <button id="stop">Stop</button>
        </div>
      )

    }
  }
  FC.RecordingComponent = RecordingComponent;
}());
