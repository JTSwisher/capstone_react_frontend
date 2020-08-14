import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavContainer from './NavContainer';
import TodoContainer from './TodoContainer';
import NewsContainer from './NewsContainer';
import WeatherContainer from './WeatherContainer'

class HomeContainer extends Component {



    render() {
        console.log(this.props.user)
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


const mapStateToProps = (state) => {
    return {user: state.user.current_user}
}

export default connect(mapStateToProps)(HomeContainer);