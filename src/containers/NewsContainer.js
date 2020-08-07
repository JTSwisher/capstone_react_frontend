import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsForm from '../components/newsFeed/NewsForm'

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
                <NewsForm />
            </div>
        )
    }
}

export default NewsContainer;