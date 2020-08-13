import React, { Component } from 'react';
import Article from './Article'
import CardColumns from 'react-bootstrap/CardColumns';

class DisplayArticles extends Component {

    render() {
        
        const articles = this.props.articles.map((article, idx) => <Article key={idx} article={article} />)
        return (
            <div style={{ marginTop: "10px"}}>
                <CardColumns >
                    { articles }
                </CardColumns>
            </div>
        )
    }
}

export default DisplayArticles;