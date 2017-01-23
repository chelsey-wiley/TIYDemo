
var mountNode = document.querySelector('#react-root');


class AppComponent extends React.Component {

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
      console.log('getting the info');
    }

    clicky(){
      var page = 1;
      console.log('the input is', this.theInput, this.theInput.value, 'the page is', page);
      this.theData(this.theInput.value) + "&page" + page;

    }

    keyUp(evt) {
      console.log(evt.keyCode, evt.target);
      if (evt.keyCode === 13) {
        this.theData(evt.target.value);
      }
    }

    theData(){
      $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?q=" +
          this.theInput.value +
          "&q=YouTube+Data+API" +
          "&type=video" +
          "&videoCaption=closedCaption" +
          "&key=AIzaSyCoB7cJEg8MY9y8vgWby0nlhoJbImoEkF8&part=snippet"
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
      return <div className="youtube-component">

        <div className="search-bar">
            <input placeholder ="search" onKeyUp={(evt) => {this.keyUp(evt); }} ref={(theDomElement) => {this.theInput = theDomElement;}}/>
            <button onClick={() => {this.clicky(); }}>enter</button>
        </div>


        <ul className="results">
          {this.state.apiResult.items.map((info) => {
              return <li className="theList" key={info.id.videoId}><a href =  {embeddedUrl+info.id.videoId} target = "iframeName">name here</a></li>
            })}
        </ul>
      </div>
    }
  }

ReactDOM.render(<AppComponent />, mountNode);
