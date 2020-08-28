import React from 'react';
import Card from 'react-bootstrap/Card';
import { Icons } from './Icons'


class Weather extends React.Component {

    //Converts epoch time to (Sat Aug 22) format
    convertTime = (epoch) => {
        var utcSeconds = epoch;
        var d = new Date(0);
        d.setUTCSeconds(utcSeconds)
        let s = d.toString();
        let array = s.split(" ")
        let date = array.slice(0, 3).join( " ")
        return date
    }

    render() {
       const { weather } = this.props; 
       let icon = Icons[weather.Day.Icon];
       let date = this.convertTime(weather.EpochDate);
       let max = weather.Temperature.Maximum.Value;
       let min = weather.Temperature.Minimum.Value;

       const cardStyle = {
        display: "inline-block",
        padding: "0px",
        margin: "15px 5px 5px 5px",
        width: '18%',
        height: "60%",
        boxShadow: "1px 1px 2px black",
        borderRadius: "10px",
        color: "black",
        backgroundColor: "#D1E8E2"
       }

        return (
            <Card border="secondary" style={ cardStyle }>
                <Card.Img variant="top" src={icon} />
                <Card.Body style={{margin: "0px"}}>
                    <Card.Text style={{margin: "0px"}}>{date}</Card.Text>
                    <Card.Text style={{margin: "0px"}}>High: {max}</Card.Text>
                    <Card.Subtitle style={{margin: "0px"}}>Low: {min}</Card.Subtitle>
                </Card.Body>
            </Card>
        )
    }
}

export default Weather;