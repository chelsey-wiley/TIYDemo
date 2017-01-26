'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  'use strict';

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null;

  var RecordingComponent = function (_React$Component) {
    _inherits(RecordingComponent, _React$Component);

    function RecordingComponent() {
      _classCallCheck(this, RecordingComponent);

      return _possibleConstructorReturn(this, (RecordingComponent.__proto__ || Object.getPrototypeOf(RecordingComponent)).apply(this, arguments));
    }

    _createClass(RecordingComponent, [{
      key: 'clickSupport',
      value: function clickSupport() {
        console.log('clicked support');
        if (navigator.getUserMedia === null) {
          alert('Sorry! This will not work on your browser.');
          console.log('no support');
        } else {
          video: true;
          audio: true;
          console.log('has support');
        }
      }
    }, {
      key: 'clickRec',
      value: function clickRec() {
        console.log('clicked record');
        navigator.getUserMedia(clickSupport, startRecording, error);
      }
    }, {
      key: 'clickPauseRes',
      value: function clickPauseRes() {
        console.log('clicked Pause/Res');
      }
    }, {
      key: 'clickStop',
      value: function clickStop() {
        console.log('clicked stop');
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var videoStream = null;

        return React.createElement(
          'div',
          { className: 'recorder-container' },
          React.createElement(
            'h1',
            null,
            'Recorder'
          ),
          React.createElement('video', { id: 'video', controls: true, autoPlay: true }),
          React.createElement(
            'button',
            { id: 'supported', onClick: function onClick() {
                _this2.clickSupport();
              } },
            'Support'
          ),
          React.createElement(
            'button',
            { id: 'record', onClick: function onClick() {
                _this2.clickRec();
              } },
            'Record'
          ),
          React.createElement(
            'button',
            { id: 'pauseRes', onClick: function onClick() {
                _this2.clickPauseRes();
              } },
            'Pause'
          ),
          React.createElement(
            'button',
            { id: 'stop', onClick: function onClick() {
                _this2.clickStop();
              } },
            'Stop'
          )
        );
      }
    }]);

    return RecordingComponent;
  }(React.Component);

  FC.RecordingComponent = RecordingComponent;
})();
//# sourceMappingURL=RecordingComponent.js.map
