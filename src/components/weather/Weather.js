import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends Component {



    render() {
       const { weather } = this.props
        console.log(weather)
        return (
            <div>
                <h3>{weather.name}</h3>
                <Card border="secondary" style={{ display: "inline-block", width: '12%', boxShadow: "1px 1px 2px grey"}}>
                    <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${weather.weather['0'].icon}@2x.png`} fluid/>
                    <Card.Body>
                        <Card.Title>{weather.main.temp}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Weather;