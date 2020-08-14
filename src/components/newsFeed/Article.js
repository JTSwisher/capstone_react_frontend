import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { AiOutlineFileImage } from 'react-icons/ai';
import { IconContext } from "react-icons";

class Article extends Component {

    render() {
        const { article } = this.props
        let image;
        if (article.urlToImage !== null) {
           image =  <Card.Img variant="top" src={article.urlToImage} fluid/>
         } else { 
            image = <IconContext.Provider value={{ size: "5em"  }}> <AiOutlineFileImage  /> </IconContext.Provider> 
         }

        return(
            <Card border="secondary" style={{ width: '100%', padding: "5px", boxShadow: "1px 1px 2px grey", backgroundColor: "#9E5A63"}}>
                { image }
                <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="text-muted">Source: {article.source.name}</Card.Subtitle>
                    <Card.Link href={article.url} target="blank" alt="Article Image">Read Article</Card.Link>
                </Card.Body>
            </Card>
           
        )
    }
}

export default Article;

