if (window.MR === undefined) {window.MR = {};}
console.log ('English component');
(function() {

class HeaderComponent extends React.Component {
  render() {

    return <div className="div-head">

      <header>
        <div><button className="button-to-ASL"><ReactRouter.Link to={'/SignLanguageRecordingComponent'}>Sign Language</ReactRouter.Link></button></div>
        <div><button className="button-to-English"><ReactRouter.Link to={'/EnglishRecordingComponent'}>English</ReactRouter.Link></button></div>
      </header>

    </div>;
  }
}
  MR.HeaderComponent = HeaderComponent;
}());
