"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  'use strict';

  var RecordingComponent = function (_React$Component) {
    _inherits(RecordingComponent, _React$Component);

    function RecordingComponent() {
      _classCallCheck(this, RecordingComponent);

      return _possibleConstructorReturn(this, (RecordingComponent.__proto__ || Object.getPrototypeOf(RecordingComponent)).apply(this, arguments));
    }

    _createClass(RecordingComponent, [{
      key: "thing",
      value: function thing() {

        var constraints = { "audio": true, "video": { "mandatory": { "minWidth": 640, "maxWidth": 640, "minHeight": 480, "maxHeight": 480 }, "optional": [] } };

        var recBtn = document.querySelector('button#rec');
        var pauseResBtn = document.querySelector('button#pauseRes');
        var stopBtn = document.querySelector('button#stop');

        var videoElement = document.querySelector('video');
        var dataElement = document.querySelector('#data');
        var downloadLink = document.querySelector('a#downloadLink');

        videoElement.controls = false;

        function errorCallback(error) {
          console.log('navigator.getUserMedia error: ', error);
        }

        var mediaRecorder;
        var chunks = [];
        var count = 0;

        function startRecording(stream) {
          if (typeof MediaRecorder.isTypeSupported == 'function') {
            if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
              var options = { mimeType: 'video/webm;codecs=h264' };
            } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
              var options = { mimeType: 'video/webm;codecs=vp9' };
            } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
              var options = { mimeType: 'video/webm;codecs=vp8' };
            }

            mediaRecorder = new MediaRecorder(stream, options);
          } else {

            mediaRecorder = new MediaRecorder(stream);
          }

          pauseResBtn.textContent = "Pause";

          mediaRecorder.start(10);

          var url = window.URL || window.webkitURL;
          videoElement.src = url ? url.createObjectURL(stream) : stream;
          videoElement.play();

          mediaRecorder.ondataavailable = function (e) {

            chunks.push(e.data);
          };

          mediaRecorder.onstop = function () {

            var blob = new Blob(chunks, { type: "video/webm" });
            chunks = [];

            var videoURL = window.URL.createObjectURL(blob);

            downloadLink.href = videoURL;
            videoElement.src = videoURL;
            downloadLink.innerHTML = 'Download video file';

            var rand = Math.floor(Math.random() * 10000000);
            var name = "video_" + rand + ".webm";

            downloadLink.setAttribute("download", name);
            downloadLink.setAttribute("name", name);
          };
        }

        function onBtnRecordClicked() {
          if (typeof MediaRecorder === 'undefined' || !navigator.getUserMedia) {
            alert('MediaRecorder not supported on your browser, use Firefox 30 or Chrome 49 instead.');
          } else {
            navigator.getUserMedia(constraints, startRecording, errorCallback);
            recBtn.disabled = true;
            pauseResBtn.disabled = false;
            stopBtn.disabled = false;
          }
        }

        function onBtnStopClicked() {
          mediaRecorder.stop();
          videoElement.controls = true;

          recBtn.disabled = false;
          pauseResBtn.disabled = true;
          stopBtn.disabled = true;
        }

        function onPauseResumeClicked() {
          if (pauseResBtn.textContent === "Pause") {
            console.log("pause");
            pauseResBtn.textContent = "Resume";
            mediaRecorder.pause();
            stopBtn.disabled = true;
          } else {
            console.log("resume");
            pauseResBtn.textContent = "Pause";
            mediaRecorder.resume();
            stopBtn.disabled = false;
          }
          recBtn.disabled = true;
          pauseResBtn.disabled = false;
        }

        function log(message) {
          dataElement.innerHTML = dataElement.innerHTML + '<br>' + message;
        }

        // render (){
        //   return <div> Recording Component
        //   </div>
        // }
      }
    }]);

    return RecordingComponent;
  }(React.Component);

  FC.RecordingComponent = RecordingComponent;
})();
//# sourceMappingURL=RecordingComponent.js.map
