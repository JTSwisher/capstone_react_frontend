import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { AiOutlineFileImage } from 'react-icons/ai';
import { IconContext } from "react-icons";

class Article extends Component {

    render() {
        const { article } = this.props
        let image;
        if (article.urlToImage !== null) {
           image =  <Card.Img variant="top" src={article.urlToImage} />
         } else { 
            image = <IconContext.Provider value={{ size: "5em"  }}> <AiOutlineFileImage  /> </IconContext.Provider> 
         }

        return(
            <div>
                <Card style={{ display: "inline-block", width: '90%', margin: "10px"}}>
                    { image }
                    <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                        <Card.Subtitle className="text-muted">Source: {article.source.name}</Card.Subtitle>
                        <Card.Link href={article.url} target="blank" alt="Article Image">Read Article</Card.Link>
                    </Card.Body>
               </Card>
            </div>
        )
    }
}

export default Article;

