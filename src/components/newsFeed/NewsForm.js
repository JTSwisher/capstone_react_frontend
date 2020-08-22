import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class NewsForm extends Component {

    state = {
        genre: ""
    }

    handleChange = event => {
        this.setState({
            genre: event.target.value
        })
        this.props.fetchNews(event.target.value)
    }

    render() {
        return(
            <div>        
                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="category">Category</Form.Label>
                    <Form.Control as="select" id="category" onChange={(event) => this.handleChange(event)}>
                        <option value="technology">Technology</option>
                        <option value="general">General</option>
                        <option value="business">Business</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="health">Health</option>
                    </Form.Control>
                </Form>
                
            </div>
        )
    }
}

export default NewsForm;