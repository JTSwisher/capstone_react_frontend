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
            width: '49%', 
            borderRadius: "25px", 
            height: "92%", 
            padding:"1%", 
            right: "1%",
            bottom: "1%", 
            textAlign: "center", 
            backgroundColor: "#97AABD",
            color: "WHITE",
            overflow: "scroll",
        };
        return (
            <div style={ containerStyle }>
                <h4>News Feed</h4>
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