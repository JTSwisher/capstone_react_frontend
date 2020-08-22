import React, { Component } from 'react';

import NavContainer from './NavContainer';
import TodoContainer from './TodoContainer';
import NewsContainer from './NewsContainer';
import WeatherContainer from './WeatherContainer'

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <NavContainer />
                <TodoContainer />
                <NewsContainer />
                <WeatherContainer />
            </div>
        )
        
    }
}


export default HomeContainer;