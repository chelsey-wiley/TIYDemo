'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  'use strict';

  var YoutubeComponent = function (_React$Component) {
    _inherits(YoutubeComponent, _React$Component);

    _createClass(YoutubeComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.theInput.focus();
      }
    }]);

    function YoutubeComponent() {
      _classCallCheck(this, YoutubeComponent);

      var _this = _possibleConstructorReturn(this, (YoutubeComponent.__proto__ || Object.getPrototypeOf(YoutubeComponent)).call(this));

      _this.state = {
        apiResult: {
          items: []
        }
      };
      console.log('getting the info');
      return _this;
    }

    _createClass(YoutubeComponent, [{
      key: 'clicky',
      value: function clicky() {
        var page = 1;
        console.log('the input is', this.theInput, this.theInput.value, 'the page is', page);
        this.theData(this.theInput.value) + "&page" + page;
      }
    }, {
      key: 'keyUp',
      value: function keyUp(evt) {
        console.log(evt.keyCode, evt.target);
        if (evt.keyCode === 13) {
          this.theData(evt.target.value);
        }
      }
    }, {
      key: 'theData',
      value: function theData() {
        var _this2 = this;

        $.ajax({
          url: "https://www.googleapis.com/youtube/v3/search?q=" + this.theInput.value + "&q=YouTube+Data+API" + "&type=video" + "&videoCaption=closedCaption" + "&key=AIzaSyCoB7cJEg8MY9y8vgWby0nlhoJbImoEkF8" + "&part=snippet"
        }).done(function (data) {
          console.log('got the data', data);
          _this2.setState({
            apiResult: data
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var YoutubeUrl = 'http://www.youtube.com/watch?v=';
        var embeddedUrl = 'https://www.youtube.com/embed/';
        return React.createElement(
          'div',
          { className: 'youtube-component' },
          React.createElement(
            'div',
            { className: 'search-bar' },
            React.createElement('input', { placeholder: 'search', onKeyUp: function onKeyUp(evt) {
                _this3.keyUp(evt);
              }, ref: function ref(theDomElement) {
                _this3.theInput = theDomElement;
              } }),
            React.createElement(
              'button',
              { onClick: function onClick() {
                  _this3.clicky();
                } },
              'enter'
            )
          ),
          React.createElement(
            'ul',
            { className: 'results' },
            this.state.apiResult.items.map(function (info) {
              return React.createElement(
                'li',
                { className: 'theList',
                  key: info.id.videoId },
                React.createElement(
                  'a',
                  { className: 'video-link', href: embeddedUrl + info.id.videoId, target: 'iframeName' },
                  info.snippet.title
                ),
                React.createElement(
                  'p',
                  { className: 'video-description' },
                  info.snippet.description
                )
              );
            })
          )
        );
      }
    }]);

    return YoutubeComponent;
  }(React.Component);

  MR.YoutubeComponent = YoutubeComponent;
})();
//# sourceMappingURL=YoutubeComponent.js.map
