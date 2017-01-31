if (window.MR === undefined) {window.MR = {};}
console.log ('home component');
(function() {

class HomeComponent extends React.Component {
  render() {

    return <div className="container">
      <h1 className="indexH1">Language Evaluator</h1>
      <h2 className="indexH2">Which Language would you like Evaluated</h2>
      
      <div><button className="Button-to-ASL"><ReactRouter.Link to={'/SignLanguageRecordingComponent'}>Sign Language</ReactRouter.Link></button></div>
      <div><button className="Button-to-English"><ReactRouter.Link to={'/EnglishRecordingComponent'}>English</ReactRouter.Link></button></div>
    </div>;
  }
}
  MR.HomeComponent = HomeComponent;
}());
