import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsForm from '../components/newsFeed/NewsForm'
import { getNews } from '../actions/NewsActions'

class NewsContainer extends Component {

    render() {
        const containerStyle = {
            position: "fixed", 
            width: '48%', 
            border: "1px solid black", 
            height: "100%", 
            padding:"2%", 
            right: "0px", 
            textAlign: "center", 
            backgroundColor: "lightcyan"
        };
        return (
            <div style={ containerStyle }>
                <h1>News Feed</h1>
                <NewsForm fetchNews={this.props.get} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        get: (genre) => dispatch(getNews(genre))
    }
}

export default connect(null, mapDispatchToProps)(NewsContainer);