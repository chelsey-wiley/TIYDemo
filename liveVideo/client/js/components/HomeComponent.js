if (window.MR === undefined) {window.MR = {};}
console.log ('home component');
(function() {

class HomeComponent extends React.Component {
  render() {

    return <div className="page">
      <header>
      <div className="button-to-ASL"><ReactRouter.Link to={'/SignLanguageRecordingComponent'}>Sign Language</ReactRouter.Link></div>
      <div className="button-to-English"><ReactRouter.Link to={'/EnglishRecordingComponent'}>English</ReactRouter.Link></div>
      </header>
      <div className="container">
      </div>
    </div>;
  }
}
  MR.HomeComponent = HomeComponent;
}());
