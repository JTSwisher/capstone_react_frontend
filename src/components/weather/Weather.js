import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Icons } from './Icons'


class Weather extends Component {

  

    render() {
       const { weather } = this.props; 
       let icon = Icons[weather.Day.Icon];
       let date = weather.date;
       let desc = weather.Day.IconPhrase;
       let max = weather.Temperature.Maximum.Value;
       let min = weather.Temperature.Minimum.Value
       
        console.log(max)
        return (
            <Card border="secondary" style={{ display: "inline-block", width: '15%', boxShadow: "1px 1px 2px grey"}}>
                <Card.Img variant="top" src={icon} fluid/>
                <Card.Body>
                    <Card.Title>{desc}</Card.Title>
                    <Card.Text>Maximum: {max}</Card.Text>
                    <Card.Subtitle className="text-muted">Minimum: {min}</Card.Subtitle>
                </Card.Body>

            </Card>
        )
    }
}

export default Weather;