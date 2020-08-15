import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class WeatherForm extends Component {

    state ={
        zip: ''
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.getLocationKey(this.state.zip);
        this.setState({
            zip: '',
        })
    }

    render() {
        return(
            <div> 
                <Form style={{ width: '50%' }} onSubmit={ (event) => this.handleSubmit(event) } inline>
                    <Form.Row style={{ width: '60%' }}>
                        <Col>
                            <Form.Control style={{ width: '100%' }} type="" value={this.state.zip} name="zip" placeholder="Zipcode" onChange={(event) => this.handleChange(event)}/>
                        </Col>
                        <Col>
                            <Button type="submit" variant="info">Submit</Button>
                        </Col>
                    </Form.Row>
                </Form>
                
            </div>
        )
    }
}

export default WeatherForm;