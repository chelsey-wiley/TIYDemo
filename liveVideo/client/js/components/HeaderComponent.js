if (window.MR === undefined) {window.MR = {};}
console.log ('English component');
(function() {

class HeaderComponent extends React.Component {
  render() {

    return <div className="div-head">

      <header>
        <div className="button-to-ASL"><ReactRouter.Link to={'/SignLanguageRecordingComponent'}>Sign Language</ReactRouter.Link></div>
        <div className="button-to-English"><ReactRouter.Link to={'/EnglishRecordingComponent'}>English</ReactRouter.Link></div>
        <div className="button-to-home"><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></div>
      </header>

    </div>;
  }
}
  MR.HeaderComponent = HeaderComponent;
}());
