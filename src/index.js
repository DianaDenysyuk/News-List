import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//API
import APIClient from './APIClient/api';

class App extends React.Component{
    
    state={
        newsList: []
    }

    updateNews = (country = "ua") =>{
        const news = new APIClient();
          const newsList = news.getAllNews(country)
          .then(({articles}) =>{
              this.setState({
                  newsList: articles
              })
          })
          .catch(err => console.log(err.message));
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.updateNews();
        //console.log("newState = ", this.state.newsList);
      }
    render(){
        console.log("newState = ", this.state.newsList);
        return(
            <h1>News APP</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
