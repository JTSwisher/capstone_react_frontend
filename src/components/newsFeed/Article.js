import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Article extends Component {

    render() {
        const { article } = this.props
        return(
            <div>
                <Card style={{ display: "inline-block", width: '90%', margin: "10px"}}>
                <Card.Header><Card.Title>{article.title}</Card.Title></Card.Header>
               </Card>
            </div>
        )
    }
}

export default Article;