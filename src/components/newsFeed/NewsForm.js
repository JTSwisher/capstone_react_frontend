import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


import DisplayArticles from '../newsFeed/DisplayArticles';

class NewsForm extends Component {

    state = {
        genre: "",
        query: this.props.queryState
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        this.props.fetchNews(event.target.value)
    }

    render() {
        return(
            <div>        
                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="category">Category</Form.Label>
                    <Form.Control as="select" id="category" name="genre" onChange={(event) => this.handleChange(event)}>
                        <option value="general">General</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="health">Health</option>
                    </Form.Control>
                    <Form.Control type="query" onChange={(event) => this.props.changeCallback(event)} name="query"></Form.Control>
                </Form>
            </div>
        )
    }
}



export default NewsForm;