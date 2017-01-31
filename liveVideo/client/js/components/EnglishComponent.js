if (window.MR === undefined) {window.MR = {};}
console.log ('English component');
(function() {

class EnglishComponent extends React.Component {
  render() {

    return <div className="container">

      <MR.RecordingComponent/>

    </div>;
  }
}
  MR.EnglishComponent = EnglishComponent;
}());
