if (window.MR === undefined) {window.MR = {};}

(function() {
var mountNode = document.querySelector('#react-root');
console.log('scriptJS');
class AppComponent extends React.Component {
  render() {
    return <div className="container">

      <h2> Recording in script JS</h2>
      <MR.RecordingComponent/>

      <h2>Youtube in script JS</h2>
      <MR.YoutubeComponent/>

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
}());
