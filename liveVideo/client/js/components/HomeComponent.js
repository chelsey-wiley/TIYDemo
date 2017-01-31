if (window.MR === undefined) {window.MR = {};}
console.log ('home component');
(function() {

class HomeComponent extends React.Component {
  render() {

    return <div className="container">
    <header>
      <div><ReactRouter.Link to={'/SignLanguageRecordingComponent'}>Sign Language</ReactRouter.Link></div>
      <div><button><ReactRouter.Link to={'/EnglishRecordingComponent'}>English</ReactRouter.Link></button></div>
    </header>
    </div>;
  }
}
  MR.HomeComponent = HomeComponent;
}());
