"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  'use strict';

  var constraints = {
    "video": true,
    "audio": false
  };

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null;

  var mediaSource = new MediaSource();
  var createSrc = window.URL ? window.URL.createObjectURL : function (stream) {
    return stream;
  };

  var RecordingComponent = function (_React$Component) {
    _inherits(RecordingComponent, _React$Component);

    function RecordingComponent() {
      _classCallCheck(this, RecordingComponent);

      return _possibleConstructorReturn(this, (RecordingComponent.__proto__ || Object.getPrototypeOf(RecordingComponent)).apply(this, arguments));
    }

    _createClass(RecordingComponent, [{
      key: "theRecording",
      value: function theRecording(stream) {
        //turn this into an if else statement with text content and toggle?
        console.log('startRecording function');
        this.getit(stream);
        var mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder = mediaRecorder;

        if (this.mediaRecorder.state !== 'recording') {
          console.log('Created MediaRecorder', mediaRecorder);
          this.mediaRecorder.start();
          console.log('MediaRecorder state:', this.mediaRecorder.state);
          this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        }
      }
    }, {
      key: "handleDataAvailable",
      value: function handleDataAvailable(stream) {

        if (this.recordedBlobs === undefined) {
          this.recordedBlobs = [];
        };
        if (stream.data && stream.data.size > 0) {
          this.recordedBlobs.push(stream.data);
        }
      }
    }, {
      key: "error",
      value: function error() {
        console.log('error');
      }
    }, {
      key: "clickSupport",
      value: function clickSupport() {
        console.log('clicked support');
        if (navigator.getUserMedia === null) {
          alert('Sorry! This will not work on your browser.');
          console.log('no support');
        } else {
          console.log('has support');
        }
      }
    }, {
      key: "getit",
      value: function getit(stream) {
        var videoStream = stream;
        video.src = createSrc(stream);
        video.play();
      }
    }, {
      key: "clickRec",
      value: function clickRec() {
        var _this2 = this;

        navigator.getUserMedia(constraints, function (stream) {
          _this2.theRecording(stream);
        }, this.error);
        console.log('clicked record');
      }
    }, {
      key: "clickPause",
      value: function clickPause() {
        console.log('clicked Pause');
        video.pause();
      }
    }, {
      key: "clickResume",
      value: function clickResume() {
        console.log('clicked resume');
      }
    }, {
      key: "clickPlay",
      value: function clickPlay() {
        console.log('clicked play');
        video.src = window.URL.createObjectURL(this.superBlob);
      }
    }, {
      key: "clickStop",
      value: function clickStop() {
        console.log('clicked stop');
        this.mediaRecorder.stop();
        console.log("recorder stopped");
        console.log('mediaRecorder state:', this.mediaRecorder.state);
        console.log("the blobs", this.mediaRecorder.recordedBlobs);
        var superBlob = new Blob(this.mediaRecorder.recordedBlobs, { type: 'video/webm' });
        this.superBlob = superBlob;
        console.log('superBlob:', this.superBlob);
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var videoStream = null;
        return React.createElement(
          "div",
          { className: "recorder-container" },
          React.createElement(
            "h1",
            null,
            "Recorder"
          ),
          React.createElement("video", { id: "video", controls: true, autoPlay: true }),
          React.createElement(
            "button",
            { id: "supported", onClick: function onClick() {
                _this3.clickSupport();
              } },
            "Support"
          ),
          React.createElement(
            "button",
            { id: "record", onClick: function onClick() {
                _this3.clickRec();
              } },
            "Record"
          ),
          React.createElement(
            "button",
            { id: "pause", onClick: function onClick() {
                _this3.clickPause();
              } },
            "Pause"
          ),
          React.createElement(
            "button",
            { id: "resume", onClick: function onClick() {
                _this3.clickResume();
              } },
            "Resume"
          ),
          React.createElement(
            "button",
            { id: "stop", onClick: function onClick() {
                _this3.clickStop();
              } },
            "Stop"
          ),
          React.createElement(
            "button",
            { id: "play", onClick: function onClick() {
                _this3.clickPlay();
              } },
            "Play"
          )
        );
      }
    }]);

    return RecordingComponent;
  }(React.Component);

  MR.RecordingComponent = RecordingComponent;
})();
//# sourceMappingURL=RecordingComponent.js.map
