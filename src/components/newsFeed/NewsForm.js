import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

class NewsForm extends Component {

    state = {
        genre: ""
    }


    handleChange = event => {
        console.log(event.target.value)
        this.setState({
            genre: event.target.value
        })
        this.props.fetchNews(event.target.value)
    }



    render() {
        return(
            <div>
                <Card style={{ display: "inline-block", width: '70%', margin: "10px"}}>
                    <Card.Header>Category</Card.Header>
                    <Form>
                        <Form.Control as="select" onChange={(event) => this.handleChange(event)}>
                            <option value="technology">Technology</option>
                            <option value="general">General</option>
                            <option value="business">Business</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="health">Health</option>
                        </Form.Control>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default NewsForm;