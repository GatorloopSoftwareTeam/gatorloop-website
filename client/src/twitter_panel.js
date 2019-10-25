import React from "react";
import { render } from "react-dom";
import $ from 'jquery';

const style = {
  height: 400,
  width: 600,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class TwitterPanel extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      tweetsFetched: false,
      items: []
    };
    
  } //end contructor

  componentDidMount() {
      $.get("https://www.noahkurrack.com/testing/tweets.json", (json) => {
        console.log(json);
        var allTweetsLoaded = [];
        for (var i = 0; i < json.statuses.length; i++) {
          const url = "https://twitter.com/" + json.statuses[i].user.screen_name + "/status/" + json.statuses[i].id_str;
          console.log("id: " + json.statuses[i].id_str);
          var currentTweetLoaded = new Promise( (resolve, reject) => {
            $.ajax({
            url: "https://www.noahkurrack.com/testing/tweetHTML.php?url="+encodeURIComponent(url),
            dataType: "json",
            success: (data) => {
              json = eval(data);
              console.log(json);
              this.setState((state) => {
                return {
                  items: state.items.concat(json)
                }
              });
              resolve();
            },
            error: function(req, err){ console.log('error: ' + err); console.log(req); reject(); }
          });
          });
          allTweetsLoaded.push(currentTweetLoaded)
        }

        Promise.all(allTweetsLoaded).then(() => {
          window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };

            return t;
          }(document, "script", "twitter-wjs"));
        })

      });

  }

  

  render() {

  const tweets = this.state.items.map((item) => {return (
    <div dangerouslySetInnerHTML={{ __html: item.html }}></div>
          )});

    return (
      <div style={{width: 400}}>
        <h1>demo: react-scroll-component</h1>
        <hr />
          {tweets}
      </div>
    );
  }

 
}

export default TwitterPanel;
//render(<TwitterPanel />, document.getElementById("root"));




