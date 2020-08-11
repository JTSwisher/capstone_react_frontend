import React, { Component } from 'react';
import Article from './Article'

class DisplayArticles extends Component {

    render() {
        
        const articles = this.props.articles.map((article, idx) => <Article key={idx} article={article} />)
        return (
            <div>
                { articles }
            </div>
        )
    }
}

export default DisplayArticles;