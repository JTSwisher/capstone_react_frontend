import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsForm from '../components/newsFeed/NewsForm'
import DisplayArticles from '../components/newsFeed/DisplayArticles'
import { getNews } from '../actions/NewsActions'

class NewsContainer extends Component {

    state = {
        query: "",
    }

    // on HomContainer render NewsContainer mounts, fetch news data with default category
    componentDidMount() {
        this.props.get("general")
    }

    onNewsSearchFormChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
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
            backgroundColor: "#a4b3b6",
            overflow: "scroll"
        };

        return (
            <div style={ containerStyle }>
                <h4>News Feed</h4>
                <NewsForm fetchNews={this.props.get} articles={this.props.articles} changeCallback={this.onNewsSearchFormChange} queryState={this.state.query}/>
                <DisplayArticles articles={this.props.articles} query={this.state.query} />
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