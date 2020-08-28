import React, { Component } from 'react';
import Article from './Article'
import CardColumns from 'react-bootstrap/CardColumns';

class DisplayArticles extends Component {

    render() {
        let filteredArticles = this.props.query !== "" ? this.props.articles.filter(a => a.title.toLowerCase().includes(this.props.query.toLowerCase()) ) : this.props.articles

        const articles = filteredArticles.map((article, idx) => <Article key={idx} article={article} />)
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

//