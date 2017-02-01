if (window.MR === undefined) {window.MR = {};}

(function() {
  'use strict';
  class YoutubeComponent extends React.Component {

    componentDidMount(){
      this.theInput.focus();
    }

    constructor(){
      super();
      this.state ={
        apiResult:{
          items:[]
        }
      }
      this.page ="&pageToken=CAoQAA";
      console.log('getting the info');
    }

    clicky(){
      console.log('the input is', this.theInput.value, 'the page is');
      this.callAPI(this.theInput.value);
    }

    pageUp(){
      console.log('paging');
      this.callAPI(this.theInput.value, this.page)
   };

    keyUp(evt) {
      console.log(evt.keyCode, evt.target);
      if (evt.keyCode === 13) {
        this.callAPI(evt.target.value);
      }
    }

    callAPI(page){

      if (page === undefined) {
        page = "&pageToken=CAoQAA"
      }


      $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?q=" +
          this.theInput.value +
          "&q=YouTube+Data+API" +
          "&maxResults=10" +
          "&type=video" +
          "&videoCaption=closedCaption" +
          "&key=AIzaSyCoB7cJEg8MY9y8vgWby0nlhoJbImoEkF8" +
          "&part=snippet"
      })

      .done((data)=> {
        console.log('got the data', data);
        this.setState({
          apiResult:data
        });
      });

    }

      render() {
        var YoutubeUrl = 'http://www.youtube.com/watch?v='
        var embeddedUrl ='https://www.youtube.com/embed/'
        return <div className="youtube-container">
          <iframe name= "iframeName" className="iframeName"></iframe>
          <div className="search-bar">
              <input placeholder ="search" onKeyUp={(evt) => {this.keyUp(evt); }} ref={(theDomElement) => {this.theInput = theDomElement;}}/>
              <button onClick={() => {this.clicky();}}>enter</button>
              <button onClick={() => {this.pageUp();}}>page up</button>
          </div>


          <ul className="results">
            {this.state.apiResult.items.map((info) => {
              return <li className="theList"
                key={info.id.videoId}><a className= "video-link" href =  {embeddedUrl+info.id.videoId} target = "iframeName">{info.snippet.title}</a>
                <p className="video-description">{info.snippet.description}</p>
              </li>
              })}
          </ul>
      </div>

    }
  }
  MR.YoutubeComponent = YoutubeComponent;
}());
