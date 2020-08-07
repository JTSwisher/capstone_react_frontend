import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

class NewsForm extends Component {

    state = {
        genre: "technology"
    }



    render() {
        return(
            <div>
                <Card style={{ display: "inline-block", width: '90%', margin: "10px"}}>
                    <Card.Header>News</Card.Header>
                    <Form>
                        <Form.Control as="select">
                            <option value="technology">Technology</option>
                            <option value="general">General</option>
                            <option value="business">Business</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="health">Health</option>
                            <option value="general">General</option>
                        </Form.Control>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default NewsForm;