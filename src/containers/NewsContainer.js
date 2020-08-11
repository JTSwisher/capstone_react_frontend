import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsForm from '../components/newsFeed/NewsForm'
import DisplayArticles from '../components/newsFeed/DisplayArticles'
import { getNews } from '../actions/NewsActions'

class NewsContainer extends Component {

    componentDidMount() {
        this.props.get("technology")
    }

    render() {
        const containerStyle = {
            position: "fixed", 
            width: '48%', 
            border: "1px solid black", 
            height: "93%", 
            padding:"3%", 
            right: "1%",
            bottom: "1%", 
            textAlign: "center", 
            backgroundColor: "lightcyan",
            overflow: "scroll",
        };
        return (
            <div style={ containerStyle }>
                <h1>News Feed</h1>
                <NewsForm fetchNews={this.props.get} />
                <DisplayArticles articles={this.props.articles} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        get: (genre) => dispatch(getNews(genre))
    }
}

const mapStateToProps = state => {
    return { articles: state.articles.articles}
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);