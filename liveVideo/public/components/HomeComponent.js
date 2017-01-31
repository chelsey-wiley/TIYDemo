'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('home component');
(function () {
  var HomeComponent = function (_React$Component) {
    _inherits(HomeComponent, _React$Component);

    function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).apply(this, arguments));
    }

    _createClass(HomeComponent, [{
      key: 'render',
      value: function render() {
        console.log('home component');

        return React.createElement(
          'div',
          { className: 'container' },
          React.createElement(
            'h2',
            null,
            ' Recording in script JS'
          ),
          React.createElement(MR.RecordingComponent, null),
          React.createElement(
            'h2',
            null,
            'Youtube in script JS'
          ),
          React.createElement(MR.YoutubeComponent, null),
          React.createElement(
            'div',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/RecordingComponent' },
              'Go to the RecordingComponent'
            )
          )
        );
      }
    }]);

    return HomeComponent;
  }(React.Component);

  MR.HomeComponent = HomeComponent;
})();
//# sourceMappingURL=HomeComponent.js.map
