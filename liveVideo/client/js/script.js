if (window.FC === undefined) {window.FC = {};}

(function() {
var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {
  render() {
    return <div className="container">

      // <h2> Youtube </h2>
      // <FC.YoutubeComponent/>
      //works

      <h2> Recording </h2>
      <FC.RecordingComponent/>

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
}());
