'use strict';

if (window.MR === undefined) {
  window.FC = {};
}

(function () {
  console.log('routerjs');

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(Route, { path: '/', component: MR.HomeComponent }),
    React.createElement(Route, { path: '/RecordingComponent', component: MR.RecordingComponent }),
    React.createElement(Route, { path: '/YoutubeComponent', component: MR.YoutubeComponent })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=router.js.map
